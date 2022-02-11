import axios from "axios"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router"

const SignIn = () => {

    const [credential, setCredentail] = useState({'username': '', 'password': ''})

    const [cookies, setCookies] = useCookies([])

    let navigate = useNavigate()

    const inputChangeHandler = (e) => {
        setCredentail({...credential, [e.target.name]: e.target.value})
    }

    const signInSubmit = (e) => {
        e.preventDefault()

        const signIn = async () => {
            const result = await axios.post('http://127.0.0.1:8000/auth/login/', {...credential})
            setCookies('access', result.data.access, {path: '/'})
            setCookies('refresh', result.data.refresh, {path: '/'})
            navigate('todo')
        }
        signIn()
    }

    return(
        <form onSubmit={signInSubmit}>
            <label>username: <input type="text" value={credential.username} name="username" onChange={inputChangeHandler}/></label>
            <br/>
            <label>password: <input type="password" value={credential.password} name="password" onChange={inputChangeHandler}/></label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default SignIn