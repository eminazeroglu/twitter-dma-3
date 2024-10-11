import { FiHome, FiLock, FiMail, FiUser } from "react-icons/fi";
import Logo from "../components/common/components/Logo";
import Card from "../components/ui/card";
import FormGroup from "../components/ui/form/FormGroup";
import FormText from "../components/ui/form/FormText";
import Button from "../components/ui/button";
import { useState } from "react";
import FormPassword from "../components/ui/form/FormPassword";

function LoginPage() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const setField = (name, value) => {
        setValues(old => ({
            ...old,
            [name]: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values);
        
    }


    return (
        <div className="w-[300px] mx-auto mt-10">
            <Card
                title="Login"
                icon={<Logo />}
                headerBorder={true}
            >
                <form onSubmit={onSubmit}>
                    <div className="space-y-4">
                        <FormGroup label="Email" prefix={<FiMail />}>
                            <FormText
                                value={values.email}
                                onChange={val => setField('email', val)}
                            />
                        </FormGroup>

                        <FormGroup password={true} label="Şifrə" prefix={<FiLock />}>
                            <FormPassword
                                value={values.password}
                                onChange={val => setField('password', val)}
                            />
                        </FormGroup>

                        <div>
                            <Button block={true}>
                                Daxil ol
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;