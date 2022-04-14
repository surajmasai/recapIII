import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Register = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {

        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })

    }
    // console.log(form)

    const handleregister = () => {


        // console.log(form)
        const payload = {
            username: form.username,
            email: form.email,
            password: form.password,
            mobile: form.mobile
        }
        fetch("http://localhost:2222/register", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json()).then((res) => {
            console.log(res)
            alert(res.message)
            navigate("/login")
        }).catch(err => {
            console.log(err)
        })


    }

    return (
        <>
            <div>Register</div>


            <div>
                <input type="text" name="username" onChange={handleChange} placeholder="username" />
                <input type="text" name="email" onChange={handleChange} placeholder="email" />
                <input type="text" name="password" onChange={handleChange} placeholder="password" />
                <input type="number" name="mobile" onChange={handleChange} placeholder="mobile no." />

                <button onClick={handleregister}>REGISTER</button>
            </div>

        </>
    )
}
