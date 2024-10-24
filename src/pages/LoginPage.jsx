import { FiHome, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Logo, Card, FormGroup, FormText, FormPassword, Button } from '../components'
import { useState } from "react";
import { apiGet, apiPost } from "../api/clinet";
import { AUTH_ENDPOINT } from "../api/authEndpoint";
import { getStorage, setStorage } from "../utils/storageUtil";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

function LoginPage() {

    const { values, setField, handleSubmit, loading } = useForm({
        initialState: {
            email: '',
            password: ''
        },
        onSubmit: async values => {
            const login = await apiPost(AUTH_ENDPOINT.login, values)
            if (login.status === 200 && login.data) {
                const user = await apiGet(AUTH_ENDPOINT.user, {
                    headers: {
                        'Authorization': `Bearer ${login.data.token}`
                    }
                })

                if (user.status === 200) {
                    setStorage('token', login.data.token)
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
                title="Login"
                icon={<Logo />}
                headerBorder={true}
            >
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <FormGroup 
                            label="Email" 
                            prefix={<FiMail />}
                            error={'email'}
                        >
                            <FormText
                                value={values.email}
                                onChange={val => setField('email', val)}
                            />
                        </FormGroup>

                        <FormGroup error={'password'} password={true} label="Şifrə" prefix={<FiLock />}>
                            <FormPassword
                                value={values.password}
                                onChange={val => setField('password', val)}
                            />
                        </FormGroup>

                        <div>
                            <Button block={true} loading={loading}>
                            Daxil ol
                            </Button>
                        </div>

                        <div>
                            <Link to={'/register'} className="btn btn-block">Qeydiyyat</Link>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;