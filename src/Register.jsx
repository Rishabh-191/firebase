import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Head from './Head';
function Register(props) {
    const [isChecked, setIsChecked] = useState(false);
    const setCheck = () => {
        setIsChecked(!isChecked);
    }
    const auth = getAuth();
    let signup = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: event.target.name.value,
            });
            console.log(user);
        })
    };
    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <Head/>
            <div className="container mx-auto p-8 flex">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-12 font-thin">Register</h1>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form onSubmit={signup}>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">Name</label>

                                    <input type="text" id="name" name="name" className="block w-full p-3 rounded bg-gray-300 border text-gray-800 border-transparent focus:outline-none"/>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email</label>

                                    <input type="text" id="email" name="email" className="block w-full p-3 rounded bg-gray-300 border text-gray-800 border-transparent focus:outline-none"/>
                                </div>
                        
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">Password</label>
                                    <input type={isChecked ? 'text' : 'password'} id="password" name="password" className="block w-full p-3 rounded bg-gray-300 text-gray-800 border border-transparent focus:outline-none"/>
                                    <div className='text-black flex'>
                                        <input checked={isChecked} onChange={setCheck} type="checkbox" name="hide" id="hide" />
                                        <p className='ml-2'>Show Password</p>
                                    </div>
                                </div>

                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Register</button>
                            </form>
                        </div>
                        
                        <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                            <Link to={'/login'} className="font-medium text-indigo-500">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;