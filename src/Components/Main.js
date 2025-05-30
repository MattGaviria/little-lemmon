import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import React, { useReducer } from "react";
import Hero from "./Hero";
import Booking from "./Booking";

function Main() {

    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = (s * a) % m) / m;
        }
    }


    const fetchAPI = function(date)  {
        let result = [];
        let random = seedRandom(date.getTime());
        let i;
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) result.push(i+":00");
        }
        if (random()< 0.5) {
            result.push(i +":30");
        }
        return result;
    }

    const submitAPI = function(formData) {
        return true; 
    }

    const initialState = {availableTimes: fetchAPI(new Date())};

    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, action) {
        return {
            availableTimes: fetchAPI(new Date())
        }
    }

    const navigate = useNavigate();
    function submitForm(formData) { if(submitAPI(formData)) navigate('/confirmed'); }
    
    return (
        <main>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/reservations" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />

            </Routes>
        </main>
    );
}

export default Main;