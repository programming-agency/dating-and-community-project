import { Component, useState, useEffect } from "react";

const CountDown = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('11/09/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <ul id="countdown" className="countdown">
            <li className="clock-item">
                <div className="count-number days">{state.days || '0'}</div>
                <div className="days_text count-text">Days</div>
            </li>
            <li className="clock-item">
                <div className="count-number hours">{state.hours || '00'}</div>
                <div className="hours_text count-text">Hours</div>
            </li>
            <li className="clock-item">
                <div className="count-number minutes">{state.minutes || '00'}</div>
                <div className="minutes_text count-text">Minutes</div>
            </li>
            <li className="clock-item">
                <div className="count-number seconds">{state.seconds || '00'}</div>
                <div className="seconds_text count-text">Seconds</div>
            </li>
        </ul>
    );
};

export default CountDown;
