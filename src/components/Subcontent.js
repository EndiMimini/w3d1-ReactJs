import React from "react";


const Subcontent = (props) => {
    const {text, color, message, setMessage} = props

    return (
        <div className="subcontent">
            <p className={color}>{text}</p>
            <p>Message from state: {message}</p>
            <button onClick={()=>setMessage('This is now updated')} >Change Message</button>
        </div>
    )
}

export default Subcontent;