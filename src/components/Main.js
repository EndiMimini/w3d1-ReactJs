import React, {useState} from "react";
import Subcontent from "./Subcontent";

const Main = () => {

    // getted, setter


    const [message, setMessage] = useState('Message is from state')

    return (
        <div className="main">
            <Subcontent 
            text='This is my first subcontent'
            color='red'
            message = {message}
            setMessage= {setMessage}
            />
            <Subcontent 
            text='This is my second subcontent'
            color='blue'
            />
            <Subcontent 
            text='This is my third subcontent'
            color='yellow'
            />

            </div>
    )
}

export default Main;