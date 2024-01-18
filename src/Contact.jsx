import React from "react";
import Head from "./Head";
import { getDatabase, set, ref } from "firebase/database";
import { app } from './firebaseConfig';
import generateUniqueId from "generate-unique-id";

function Contact() {
    const db = getDatabase(app);
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let message = e.target.message.value;
        let data = { name, email, message };
        const idl = generateUniqueId();
        set(ref(db, 'messages/' + idl), data);
    };

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <Head />
            <div className="container mx-auto p-8 flex">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-12 font-thin">Contact</h1>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8 text-black">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">Name</label>
                                    <input type="text" id="name" name="name" className="block w-full p-3 text-gray-800 rounded bg-gray-300 border border-transparent focus:outline-none" />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email</label>
                                    <input type="email" id="email" name="email" className="block w-full p-3 text-gray-800 rounded bg-gray-300 border border-transparent focus:outline-none" />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">Message</label>
                                    <textarea id="message" name="message" className="block w-full p-3 text-gray-800 rounded bg-gray-300 border border-transparent focus:outline-none" rows="4"></textarea>
                                </div>

                                <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;