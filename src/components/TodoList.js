import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [cookies, setCookies] = useCookies([])

    useEffect(() => {
        const getTodos = async () => {
            const result = await axios.get(`http://127.0.0.1:8000/todo/`, { headers: { "Authorization": `Bearer ${cookies.access}` } })
            setTodos(result.data)
        }
        getTodos()
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {todos && todos.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.is_complete ? "True" : "False"}</td>
                    </tr>
                ))
                }

            </tbody>
        </table>
    )
}

export default TodoList