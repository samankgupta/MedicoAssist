import React from "react";
import homeimage from "../images/homeimage.png"
import logo from "../images/logo.png"
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    return (
        <div>
            <div className="h-screen overflow-hidden">
                <div className="relative">
                    <img src={homeimage} alt="MedicoAssist" />
                    <div className="absolute top-16 left-24 ">
                        <div className="pt-20">
                            <div className="text-center">
                                <img src={logo} alt="MedicoAssist Logo" className="h-36 filter drop-shadow hover:drop-shadow-lg mx-auto" />
                                <h1 className="text-7xl font-extrabold pt-10"><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500 filter drop-shadow hover:drop-shadow-lg">MEDICOASSIST</span></h1><br />
                                <h1 className="mt-4 mb-12 text-xl">Your Medical Assistant.</h1>
                                <button onClick={() => history.push('/form/')} className="text-white rounded-md px-5 py-3 bg-gradient-to-r from-green-600 to-green-300 hover:from-green-800 hover:to-green-500">Disease Prediction</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;