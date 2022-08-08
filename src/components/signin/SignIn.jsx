import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from "../atom/UserAtom"

import './signin.css'

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [user, setuser] = useRecoilState(userState)
    const login = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", { email: email, password: password })
            .then((response) => {
                setuser(response.data.message)
                navigate("../", { replace: true })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div className="container">
            <div className="main">
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}

                <Link to="/signup" style={{ textDecoration: "none" }} >

                    <label htmlFor="chk">Sign Up
                    </label>
                    <h4>Sign Up</h4>
                </Link>

                <div className="login">
                    <form onSubmit={login}>
                        {/* <label htmlFor="chk" aria-hidden="true">Login</label> */}
                        <h1>Login</h1>
                        <input type="email" name="" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" name="" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='btn-login'>Login</button>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Signin