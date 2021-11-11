import React from "react";
import logo from "../images/logo.png"
// import axios from "axios";

export default function Example() {

    // const [returnData, setReturnData] = React.useState('')
    const [symptoms, setSymptoms] = React.useState([{ 'number': 1, 'name': '' }])
    const [loading, setLoading] = React.useState(false)

    // async function getToken() {
    //     try {
    //         const { data } = await axios.post('https://eba8b471.eu-gb.apigw.appdomain.cloud/token/?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=pPpcfgq3UjLQ7uTNlBeJxAwAVcLeHbsiQlNReLTPLqeQ', null, null);
    //             setToken(data.access_token) ;
    //     } catch (error) {
    //         console.log(error.response.data)
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let isError = false;

    //     for (const [key, value] of Object.entries(val)) {
    //         if(value === null || value === ''){
    //             isError = true
    //             setErrorMessage((errorMessage) => ({...errorMessage,[key]: true}))
    //             if(key === "N" && document.getElementById("Nitrogen") !== null)
    //                 document.getElementById("Nitrogen").classList.add('border-red-500')
    //             else if(key === "P" && document.getElementById("Phosphorus") !== null)
    //                 document.getElementById("Phosphorus").classList.add('border-red-500')
    //             else if(key === "K" && document.getElementById("Potassium") !== null)
    //                 document.getElementById("Potassium").classList.add('border-red-500')
    //             else if(key === "temperature" && document.getElementById("Temperature") !== null)
    //                 document.getElementById("Temperature").classList.add('border-red-500')
    //             else if(key === "humidity" && document.getElementById("Humidity") !== null)
    //                 document.getElementById("Humidity").classList.add('border-red-500')
    //             else if(key === "ph" && document.getElementById("PH") !== null)
    //                 document.getElementById("PH").classList.add('border-red-500')
    //             else if(key === "rainfall" && document.getElementById("Rainfall") !== null)
    //                 document.getElementById("Rainfall").classList.add('border-red-500')
    //         }
    //     }
    //     if(!isError){
    //         setLoading(true)
    //         let pd = {
    //             "input_data": [{
    //                 "fields": ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"],
    //                 "values": [[]]
    //             }]
    //         }
    //         Object.values(val).map(v => pd.input_data[0].values[0].push(parseFloat(v)))
    //         setPostData(pd)
    //     }
    // }

    // function openModal(key) {
    //     document.getElementById(key).showModal(); 
    //     document.body.setAttribute('style', 'overflow: hidden;'); 
    //     document.getElementById(key).children[0].scrollTop = 0; 
    //     document.getElementById(key).children[0].classList.remove('opacity-0'); 
    //     document.getElementById(key).children[0].classList.add('opacity-100');
    //     document.addEventListener('click', function (e) {
    //         if(e.target.className && e.target.className.includes("fixed"))
    //             modalClose('modal')
    //     }, false);
    // }

    // function modalClose(key) {
    //     document.getElementById(key).children[0].classList.remove('opacity-100');
    //     document.getElementById(key).children[0].classList.add('opacity-0');
    //     setTimeout(function () {
    //         document.getElementById(key).close();
    //         document.body.removeAttribute('style');
    //     }, 100);
    // }

    // const changeHandler = (name,value) => {
    //     setVal({...val,[name]:value})
    //     if(value !== null && value !== ''){
    //         setErrorMessage((errorMessage) => ({...errorMessage,[name]: false}))
    //         if(name === "N" && document.getElementById("Nitrogen") !== null)
    //             document.getElementById("Nitrogen").classList.remove('border-red-500')
    //         else if(name === "P" && document.getElementById("Phosphorus") !== null)
    //             document.getElementById("Phosphorus").classList.remove('border-red-500')
    //         else if(name === "K" && document.getElementById("Potassium") !== null)
    //             document.getElementById("Potassium").classList.remove('border-red-500')
    //         else if(name === "temperature" && document.getElementById("Temperature") !== null)
    //             document.getElementById("Temperature").classList.remove('border-red-500')
    //         else if(name === "humidity" && document.getElementById("Humidity") !== null)
    //             document.getElementById("Humidity").classList.remove('border-red-500')
    //         else if(name === "ph" && document.getElementById("PH") !== null)
    //             document.getElementById("PH").classList.remove('border-red-500')
    //         else if(name === "rainfall" && document.getElementById("Rainfall") !== null)
    //             document.getElementById("Rainfall").classList.remove('border-red-500')
    //     }
    // }

    const increaseInput = (e) => {
        e.preventDefault();
        setSymptoms([...symptoms, { 'number': symptoms.length + 1, 'name': '' }])
    }

    return (
        <div className="flex">
            <dialog id="modal" className="bg-transparent z-0 relative w-screen h-screen">
                <div className="p-6 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0">
                    <div className="bg-white rounded-lg md:w-2/3 lg:w-1/3 relative">
                        <div>
                            <div className="px-7 pt-6 pb-2 grid grid-cols-2">
                                <h1 className="font-semibold text-base">Recommended Crop</h1>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/1024px-Multiplication_Sign.svg.png" alt="Close" className="w-5 ml-auto cursor-pointer"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

            <div className="min-w-full w-full h-screen bg-gradient-to-b from-green-100 via-green-100">
                <div className='relative h-4/5 w-full flex justify-center'>
                    <div className="w-4/5 lg:w-1/3 my-auto">
                        <div className="mx-auto">
                            <div className="md:grid md:gap-6">
                                <a href="/" ><img src={logo} alt="MedicoAssist Logo" className="h-24 filter drop-shadow hover:drop-shadow-lg mx-auto mt-8" /></a>
                                <h1 className="text-3xl sm:text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-800 to-green-500 text-center">DISEASE PREDICTION</h1>
                                <div className="my-5 mb-16 shadow-xl">
                                    <form id="recommendationForm">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid gap-y-7">
                                                    {symptoms.map(symp =>
                                                        <div className="col-span-8 md:col-span-12">
                                                            <label htmlFor={"Symptom " + symp.number} className="block text-sm font-medium text-gray-700">
                                                                Symptom {symp.number}
                                                            </label>
                                                            <select
                                                                id={"Symptom " + symp.number}
                                                                name={"Symptom " + symp.number}
                                                                autoComplete={"Symptom " + symp.number}
                                                                className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                            >
                                                                <option disabled selected> Select A Symptom </option>

                                                            </select>
                                                        </div>
                                                    )}
                                                    <div className="col-span-8 md:col-span-12">
                                                        <button onClick={increaseInput} className="border-2 py-2 mb-6 w-full border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100">+ Add Symptom</button>
                                                        <label htmlFor="Location" className="block text-sm font-medium text-gray-700">
                                                            Location
                                                        </label>
                                                        <input
                                                            type="number"
                                                            step="any"
                                                            name="Location"
                                                            id="Location"
                                                            autoComplete="Location"
                                                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center w-full mb-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                >
                                                    Submit
                                                    {loading ? <svg class="animate-spin ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg> : ''}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
