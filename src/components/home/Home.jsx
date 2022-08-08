import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from '../atom/UserAtom'
import './home.css'
import image from "../../images/elliot.jpg"

function Home() {
    const user = useRecoilValue(userState)
    const [currentUser, setcurrentUser] = useRecoilState(userState)
    const logout = () => {
        setcurrentUser("")
    }

    return (
        // <>
        <div className="home">
            <button className='home-btn' onClick={logout}>Logout</button>
            <div className="user-content">
                {user.email ?
                    <h3> welcome {user.username}</h3> : ""}
            </div>

            <div className='card-container'>

                <div className="card">
                    <img src={image} alt="" />
                    <div className="title">
                        Things Fall Apart
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique adipisci rem? Officia, alias enim.
                    </div>
                    <div className="bottom-content">
                        <div className="price">
                            $130
                        </div>
                        <div className="author">
                            Chinua Achebe
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={image} alt="" />
                    <div className="title">
                        The Overstory
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique adipisci rem? Officia, alias enim.
                    </div>
                    <div className="bottom-content">
                        <div className="price">
                            $100
                        </div>
                        <div className="author">
                            Richard Powers
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={image} alt="" />
                    <div className="title">
                        The Sellout
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique adipisci rem? Officia, alias enim.
                    </div>
                    <div className="bottom-content">
                        <div className="price">
                            $170
                        </div>
                        <div className="author">
                            Paul Beatty
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={image} alt="" />
                    <div className="title">
                        Salvage The Bones
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique adipisci rem? Officia, alias enim.
                    </div>
                    <div className="bottom-content">
                        <div className="price">
                            $150
                        </div>
                        <div className="author">
                            Jesmyn Ward
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src={image} alt="" />
                    <div className="title">
                        A Play of Giants
                    </div>
                    <div className="description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique adipisci rem? Officia, alias enim.
                    </div>
                    <div className="bottom-content">
                        <div className="price">
                            $100
                        </div>
                        <div className="author">
                            Wole Soyinka
                        </div>
                    </div>
                </div>

            </div>
        </div>
        // </>

    )
}

export default Home