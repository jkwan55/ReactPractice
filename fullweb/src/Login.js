import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password };
        const response = await axios.post(
            'http://localhost:9000/login', user
        );
        setUser(response.data)
        localStorage.setItem('user', response.data)
        console.log(response.data)
    };

    if(user) {
        return <div>{user.name} is logged in</div>;
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input 
                type='text'
                value={username}
                placeholder='enter a username'
                onChange={({ target }) => setUsername(target.value)}
            />
            <div>
                <label htmlFor='password'>password: </label>
                <input 
                    type='password'
                    value={password}
                    placeholder='enter a password'
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;