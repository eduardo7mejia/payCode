import React, { useState } from 'react'
import LoginContainer from '../components/LoginContainer'
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Alerta from '../helpers/Alerta';
import clienteAxios from '../config/axios';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const { setAuth, setTokens } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });

            return
        }
        try {
            const { data } = await clienteAxios.post('/challenge/login', { email, password })
            localStorage.setItem('token', data.token)
            localStorage.setItem('email', email)
            setTokens(data)
            navigate('/dashboard')
        } catch (error) {
            console.log(error);
            setAlerta({
                msg: 'Error',
                error: true
            })
        }
    }
    const { msg } = alerta

    return (
        <LoginContainer>
            <ContainerForm>
                <div className="login">
                    <div className="login-screen">
                        <div className="app-title">
                            <h1 className='login-title'>paycode</h1>
                        </div>
                        {msg && <Alerta
                            alerta={alerta}
                        />}
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="control-group">
                                <input
                                    type="email"
                                    className="login-field"
                                    placeholder="username"
                                    id="login-name"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                            </div>
                            <div className="control-group">
                                <input
                                    type="password"
                                    className="login-field"
                                    placeholder="password"
                                    id="login-pass"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                            </div>
                            <button type="submit" className="btn " href="#">Login</button>
                        </form>
                    </div>
                </div>
            </ContainerForm>
        </LoginContainer>
    )
}

export default Login


export const ContainerForm = styled.div`
    .login {
        margin: 20px auto;
        width: 300px;
    }
    .login-screen {
        background-color: #FFF;
        padding: 20px;
        border-radius: 5px
        display: grid;
        place-items: center;
        place-content: center;
    }

    .app-title {
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
        width: 65%;
        height: auto;
        text-align: center;
        color: #777;
        border: 1px solid transparent;
        background-image: linear-gradient(#777, #777),
        linear-gradient(#777, #777), linear-gradient(#777, #777),
        linear-gradient(#777, #777);
        background-repeat: no-repeat;
        background-size: 3px 45%, 25% 3px, 3px 45%, 25% 3px,
        calc(100% - 8px) calc(100% - 8px);
        background-position: right bottom, right bottom, left top, left top, 4px 4px;
        transition: linear .3s all;
        margin-bottom: 1rem
    }

    .login-form {
        text-align: center;
    }
    .control-group {
        margin-bottom: 10px;
    }
    input {
        background-color: #f4f4f4;
        border: 2px solid transparent;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 200;
        padding: 10px 0;
        width: 250px;
        transition: border .5s;
        outline: none;
        padding-left: 1rem;
    }

    input:focus {
        box-shadow: none;
    }

.btn {
    border: 2px solid transparent;
    background: rgb(35, 41, 53);
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 25px;
    padding: 5px 0px;
    text-decoration: none;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: none;
    display: block;
    width: 130px;
    margin: 0px auto;
    transition: all 0.3s ease 0s;
    cursor: pointer;
}

.btn:hover {
  background-color: #1c212b;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}
  
`;
