
import React, { useEffect } from 'react';
import { useContext, useState } from "react"
// import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const Login = () => {


    const { setAuth, isAuth } = useContext(AuthContext)

    // console.log(setAuth);

    // console.log(isAuth, "dsa");

    const [form, setForm] = useState(null);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:2222/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((d) => {
            // console.log(d.token)

            localStorage.setItem("Userdata", JSON.stringify(d));
            window.location.reload()

        });


    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Userdata"));
        if (data?.token) {
            setAuth("login")
        } else {
            setAuth("logout");
        }
        // console.log(data, "data")
    }, [isAuth])



    // console.log(data)

    const handleLogout = () => {
        // console.log("clikck logout")
        localStorage.removeItem("Userdata");
        window.location.reload()
    }


    // console.log(isAuth)

    return (


        <>

            <div>Login page</div>

            {isAuth === "login" ? (<button onClick={handleLogout}>logout</button>) : (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="email" onChange={handleChange} placeholder="email" />
                        <input type="text" name="password" onChange={handleChange} placeholder="password" />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            )}






            <div> status : {isAuth} </div>

        </>
    )
}
