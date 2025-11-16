import React, { useState } from 'react'
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_GXEu9hZRZFPOQMud4Ut9uMKOE61fXap0a0WeQqXf";


function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exChange = async () => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='currency-div'>

            <div>
                <h2 style={{ marginTop: "0px", fontFamily: "arial", width: "100%", textAlign: "center", backgroundColor: "white", color: "black" }}>DÖVİZ KURU UYGULAMASI</h2>
            </div>

            <div style={{ marginTop: "30px" }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight style={{ color: "white", fontSize: "15px", marginRight: "15px" }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />


            </div>
            <div>
                <button onClick={exChange} className='exchange-button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency
