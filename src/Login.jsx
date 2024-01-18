import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import Head from './Head';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login(props) {
    const [isChecked, setIsChecked] = useState(false);
    const setCheck = () => {
        setIsChecked(!isChecked);
    }
    const auth = getAuth();
    const [username, setUsername] = useState('');
    let signin = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUsername(user.displayName);
        }
        );
        redirect("/question")
    };
    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <Head username={username}/>
            <div className="container mx-auto p-8 flex">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-12 font-thin">Login</h1>
                    
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form onSubmit={signin}>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email</label>

                                    <input type="text" name="email" className="block w-full p-3 text-gray-800 rounded bg-gray-300 border border-transparent focus:outline-none"/>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">Password</label>
                                    <input type={isChecked ? 'text' : 'password'} id="password" name="password" className="block w-full p-3 rounded bg-gray-300 text-gray-800 border border-transparent focus:outline-none"/>
                                    <input checked={isChecked} onChange={setCheck} type="checkbox" name="hide" id="hide" />
                                    <span className='ml-2 text-black'>Show Password</span>
                                </div>
                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                            </form>
                        </div>
                        
                        <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                            <Link to={'/register'} className="font-medium text-indigo-500">Register</Link>

                            <a href="/forget" className="text-gray-600">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;