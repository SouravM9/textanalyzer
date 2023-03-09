import React, { useState } from 'react';


export default function TextForm() {

    const [text, setText] = useState('');

    const handleOnClickLower = () => {
        setText(text.toLowerCase());
    }

    const handleOnClickUpper = () => {
        setText(text.toUpperCase());
    }

    const handleOnClickClear = () => {
        setText('');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className='container'>
            <form>
                <h2>Enter your text</h2>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" onChange={handleOnChange} value={text}></textarea>
                </div>
            </form>
            <div className='container my-3'>
                <button type="button" className="btn btn-outline-dark" onClick={handleOnClickLower}>Convert to LowerCase</button>
                <button type="button" className="btn btn-outline-dark" onClick={handleOnClickUpper}>Convert to UpperCase</button>
                <button type="button" className="btn btn-outline-dark" onClick={handleOnClickClear}>Clear Text</button>
            </div>

            <div className="card" style={{width :"100%"}}>
                <div className="container card-body">
                    <h5 className="card-title">Analysis</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Character Count : {text.length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Word Count : {text.split(' ').length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Sentence Count : {text.split('.').length}</h6>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>

    )
}
