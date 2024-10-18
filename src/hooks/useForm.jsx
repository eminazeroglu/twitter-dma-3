import { useState } from "react"
import { useContextGlobal } from "../context/GlobalContext"

export const useForm = ({
    initialState,
    onSubmit
}) => {
    const {handleState} = useContextGlobal();
    const [values, setValues] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const setField = (name, value) => {
        setValues(old => ({
            ...old,
            [name]: value
        }))
    }

    const resetTweet = () => {
        setValues(initialState)
    }

    const handleSubmit = async (e) => {
        e?.preventDefault()
        setLoading(true);
        try {
            await onSubmit(values)
        }
        catch(e) {
            const errors = e?.response?.data;

            if (errors) {
                handleState('errors', errors)
            }
            
            setLoading(false);
        }
        setLoading(false);
    }

    return {
        values,
        loading,
        setField,
        handleSubmit,
        resetTweet
    }
}