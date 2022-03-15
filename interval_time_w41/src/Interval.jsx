import React, { useState } from 'react';

const Interval = () => {

    const [time, setTime] = useState();

    function timeHandler() {
        setTime(getTime());
    }

    function addZero(i) {
        if(i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function addZeroForMillisecond(i) {
        if(i< 10) {
            i = "00" + i
        } else if(i<100) {
            i = "0" + i
        }
        return i;
    }

    function getTime() {
        const newTime = new Date(Date.now());
        const hour = addZero(newTime.getHours());
        const minute = addZero(newTime.getMinutes());
        const second = addZero(newTime.getSeconds());
        const millisecond = addZeroForMillisecond(newTime.getMilliseconds());

        let el = document.createElement("p");
        el.innerHTML = hour.toString() + ":" + minute.toString() + ":" + second.toString() + "-" + millisecond.toString();
        el.setAttribute("style", "text-align:center")

        document.body.appendChild(el);
    }

    return (
        <div>
            <h3>w41</h3>
            <button onClick={timeHandler}>Interval time</button>
            {time}
        </div>
    );
}

export default Interval;