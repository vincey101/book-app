import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import './signup.css';


function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { addToast } = useToasts();


    const register = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/register", {
            username: username,
            email: email,
            password: password
        })
            .then((response) => {
                addToast(response.data.message, { appearance: "success" })
                navigate("../signin", { replace: true });
            })
            .catch((error) => {
                if (error.response) {
                    addToast(error.response.data.message, {
                        appearance: "error",
                        id: 'customId'
                    });
                }
            })
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form onSubmit={register}>
                        <h1>Sign Up</h1>
                        <input type="text"
                            name=""
                            placeholder="Username"
                            value={username}
                            onChange={(event) => { setUsername(event.target.value) }}
                        />
                        <input type="email"
                            name=""
                            placeholder="Email"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        <input type="password"
                            name=""
                            placeholder="Password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <button className='btn' >Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                        <h2>Login</h2>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default SignUp