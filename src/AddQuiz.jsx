import React from 'react';
import Head from './Head';
import { getDatabase, ref, set } from "firebase/database";
import generateUniqueId from 'generate-unique-id';
import { app } from './firebaseConfig';

function Addquiz(props) {
    let db = getDatabase(app);
    let addQuizData = (event) => {
        event.preventDefault();
        let data = {
            question:event.target.question.value,
            optionA:event.target.optionA.value,
            optionB:event.target.optionB.value,
            optionC:event.target.optionC.value,
            optionD:event.target.optionD.value,
            correctAns:event.target.correctAns.value,
        };
        const idl = generateUniqueId();
        set(ref(db, 'users/' + idl), data);
    }
    return (
    <div className="bg-gray-800 min-h-screen text-white">
        <Head/>
        <div className="container mx-auto p-8 flex">
            <div className="bg-gray-50 max-w-md w-full mx-auto">
                <h1 className="text-4xl text-center mb-12 font-thin">Add Quiz</h1>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="p-8">
                        <form onSubmit={addQuizData}>
                            <div className="mb-5">
                                <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-800">
                                    Question
                                </label>
                                <textarea
                                    type="text"
                                    name='question'
                                    className="block w-full p-3 rounded bg-gray-300 text-gray-800 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="optionA" className="block mb-2 text-sm font-medium text-gray-800">Option 1</label>
                                <input
                                    type="text"
                                    name='optionA'
                                    className="block w-full p-3 rounded text-gray-800 bg-gray-300 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="optionB" className="block mb-2 text-sm font-medium text-gray-800">Option 2</label>
                                <input
                                    type="text"
                                    name='optionB'
                                    className="block w-full p-3 rounded text-gray-800 bg-gray-300 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="optionC" className="block mb-2 text-sm font-medium text-gray-800">Option 3</label>
                                <input
                                    type="text"
                                    name='optionC'
                                    className="block w-full p-3 rounded text-gray-800 bg-gray-300 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="optionD" className="block mb-2 text-sm font-medium text-gray-800">Option 4</label>
                                <input
                                    type="text"
                                    name='optionD'
                                    className="block w-full p-3 rounded text-gray-800 bg-gray-300 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="correctAns" className="block mb-2 text-sm font-medium text-gray-800">Correct Answer</label>
                                <input
                                    type="text"
                                    name='correctAns'
                                    className="block w-full p-3 rounded text-gray-800 bg-gray-300 border border-transparent focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
                                    Submit Question
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Addquiz;