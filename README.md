npm install react-router-dom react-cookie axios

npm install <package-name> --save-dev

```js
index.js
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>


SignIn.js
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

TodoList.js
    useEffect(() => {
        const getTodos = async () => {
            const result = await axios.get(`http://127.0.0.1:8000/todo/`, { headers: { "Authorization": `Bearer ${cookies.access}` } })
            setTodos(result.data)
        }
        getTodos()
    }, [])


```