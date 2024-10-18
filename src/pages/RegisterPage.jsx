import { useState } from "react"
import { Button, Card, FormGroup, FormPassword, FormText, Logo } from "../components"
import { useForm } from "../hooks/useForm"
import { AUTH_ENDPOINT } from "../api/authEndpoint"
import { apiGet, apiPost } from "../api/clinet"
import { FiLock } from "react-icons/fi"
import { getStorage, setStorage } from "../utils/storageUtil"
import { Navigate } from "react-router-dom"

function RegisterPage() {

    const { values, setField, handleSubmit, loading } = useForm({
        initialState: {
            name: '',
            surname: '',
            email: '',
            password: ''
        },
        onSubmit: async values => {
            const register = await apiPost(AUTH_ENDPOINT.register, values)

            if (register.status === 201 && register.data) {
            
                const user = await apiGet(AUTH_ENDPOINT.user, {
                    headers: {
                        'Authorization': `Bearer ${register.data}`
                    }
                })

                if (user.status === 200) {
                    setStorage('token', register.data)
                    setStorage('user', user.data)
                    window.location.reload()
                }
            }
        }
    })

    if (getStorage('token')) return <Navigate to={'/'} />

    return (
        <div className="w-[300px] mx-auto mt-10">
            <Card
                title="Qeydiyyat"
                icon={<Logo />}
                headerBorder={true}
            >
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <FormGroup label="Ad" error={'name'}>
                            <FormText
                                value={values.name}
                                onChange={val => setField('name', val)}
                            />
                        </FormGroup>
                        <FormGroup label="Soyad" error={'surname'}>
                            <FormText
                                value={values.surname}
                                onChange={val => setField('surname', val)}
                            />
                        </FormGroup>
                        <FormGroup label="Email" error={'email'}>
                            <FormText
                                value={values.email}
                                onChange={val => setField('email', val)}
                            />
                        </FormGroup>

                        <FormGroup error={'password'} password={true} label="Şifrə" prefix={<FiLock />}>
                            <FormPassword
                                autoComplete="new-password"
                                value={values.password}
                                onChange={val => setField('password', val)}
                            />
                        </FormGroup>

                        <div>
                            <Button block={true} loading={loading}>
                                Qeyd ol
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default RegisterPage;