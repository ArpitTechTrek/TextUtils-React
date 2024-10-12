import React, { useState } from 'react'

export default function TextForm(props) {
    console.log("Current mode:", props.mode);

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper case!", "success");
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower case!", "success");

    }

    const handleClearText = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Text has been cleared!", "success");

    }

    const handleReverse = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text converted to Reverse!", "success");

    }

    const handleCapitaliseFirstLetter = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("First Letter of your text has been capitalized!", "success");

    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : '#C4DFDF',
                        color: props.mode === 'dark' ? '#C4DFDF' : 'rgb(59 82 138)'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCapitaliseFirstLetter}>Capitalize First Letter</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleReverse}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleClearText}>Clear</button>


            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>


            </div>
        </>
    )
}
