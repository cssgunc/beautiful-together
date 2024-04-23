import React from 'react';
import {useNavigate} from 'react-router-dom';

export const PreLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-between m-5 gap-5 min-h-screen">
            <div classname="">
                <h1 className="text-black text-4xl font-inika">Welcome to</h1>
                <img className="max-h-24" src="logo.png" alt="logo"/>
            </div>
            <div className="flex flex-col shadow-lg w-full">
                <div className="flex flex-col items-center bg-orange-200 p-10 gap-2">
                    <div className="bg-orange-400 rounded-full p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                    </div>
                </div>
                <div className="p-7 w-full">
                    <img className="max-h-60 h-full w-full object-contain" src="dog.png" alt="dog"/>
                </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-col text-lg gap-3 w-full items-center">
                <div className="text-xl, font-bold">Are you a...</div>
                <button onClick={() => navigate('/')} className="flex flex-row align-center justify-center gap-2 bg-green-300 text-white rounded p-3 font-bold shadow-md w-full">
                    Existing User
                    <svg width="30" height="27" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 19V16.8889H16.8889V2.11111H9.5V0H16.8889C17.4694 0 17.9666 0.206889 18.3804 0.620667C18.7942 1.03444 19.0007 1.53126 19 2.11111V16.8889C19 17.4694 18.7935 17.9666 18.3804 18.3804C17.9673 18.7942 17.4701 19.0007 16.8889 19H9.5ZM7.38889 14.7778L5.9375 13.2472L8.62917 10.5556H0V8.44444H8.62917L5.9375 5.75278L7.38889 4.22222L12.6667 9.5L7.38889 14.7778Z" fill="white"/>
                    </svg>
                </button>
                <button onClick={() => navigate('/signup')} className="flex flex-row align-center justify-center gap-2 bg-orange-400 text-white rounded p-3 font-bold shadow-md w-full">
                    New User
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83334 14H22.1667M14 5.83333V22.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
=======
            <div className="flex flex-col text-center text-lg gap-3 w-full mb-10">
                <div className="text-xl font-bold">Are you a...</div>
                <button onClick={() => navigate('/login')} className="flex items-center justify-center gap-5 bg-green-300 text-white rounded px-6 py-3 font-bold shadow-md w-full">
                    Existing User
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                </button>
                <button onClick={() => navigate('/signup')} className="flex flex-row items-center justify-center gap-2 bg-orange-400 text-white rounded px-6 py-3 font-bold shadow-md w-full">
                    New User
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
>>>>>>> 5e2215a (added images, fixed button width)
                </button>
            </div>
        </div>
    )
}