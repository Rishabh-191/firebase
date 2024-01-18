import React, { useState, useEffect } from "react";
import Head from "./Head";
import { getDatabase, ref, onValue } from "firebase/database";

function Home(props) {

    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        const fetchData = async () => { 
            const db = getDatabase();

            onValue(ref(db, 'users/'), (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const qdata = Object.values(data);
                    setQuizData(qdata);
                }
            });
        };
        fetchData();
    }, []);

    return(
    <div className="bg-gray-800 min-h-screen text-white">
        <Head/>
        <div className="container mx-auto p-8 flex">
            <div className="bg-gray-50 max-w-md w-full mx-auto">
                <h1 className="text-4xl text-center mb-12 font-thin">Your Quizzes</h1>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="p-8">
                        <div className="text-xl mb-5 text-gray-800">
                            {quizData.map((qdata, index) => (
                                <div key={index}>
                                    <h2 className="font-semibold mb-4">{qdata.question}</h2>
                                    <ul>
                                        <li>{qdata.optionA}</li>
                                        <li>{qdata.optionB}</li>
                                        <li>{qdata.optionC}</li>
                                        <li>{qdata.optionD}</li>
                                        <li>{qdata.correctAns}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home