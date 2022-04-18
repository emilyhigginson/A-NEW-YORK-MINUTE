import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Select from 'react-select'

// {setUser, setIsAuthenticated}
function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [avatar, setAvatar] = useState([])
    let history = useHistory();

    const avatarOptions = [
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/taxi_1f695.png", label: "🚕" },
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/81/hot-dog_1f32d.png", label: "🌭" },
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/81/rat_1f400.png", label: "🐀" },
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/237/statue-of-liberty_1f5fd.png", label: "🗽" },
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/118/cocktail-glass_1f378.png", label: "🍸" },
        { value: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/emojione/178/night-with-stars_1f303.png", label: "🏙" }
    ];

    function handleSubmit(e) {
        e.preventDefault()
        const newUser = {
            username,
            email,
            password,
            avatar
        }

        console.log(newUser);

        fetch(`/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.errors) setErrors(Object.entries(json.errors))

            })
        // history.push("/");
        setUsername("")
        setEmail("")
        setPassword("")
        setAvatar("")
    }
    return (
        <>
            <div className='signUp'>
                <h3 >Signup!</h3>
                <form
                    onSubmit={handleSubmit}
                >
                    <label>Username
                        <br></br>

                        <input
                            type="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>Email
                        <br></br>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br></br>

                    <label>Password
                        <br></br>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br></br>
                    {/* <label> Choose an avatar </label> */}
                    <br></br>
                    {/* <Select
                        options={avatarOptions}
                        placeholder="Choose an avatar"
                        onChange={(e) => setAvatar(e.value)}
                    /> */}
                    <button
                        type="submit"
                        value="Join!"
                        className="submit">
                        <strong>Let's go!</strong>
                    </button>
                </form>
            </div>
            {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}

        </>
    )
}

export default Signup