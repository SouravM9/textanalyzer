import React, { useState } from 'react';


export default function TextForm(props) {

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

    const handleOnClickCopyClipboard = () => {
        navigator.clipboard.writeText(text);
    }

    const handleOnClickRemoveSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    let darkStyle = {
        backgroundColor: '#212529',
        color: 'white'
    };

    let lightStyle = {
        backgroundColor: 'white',
        color: '#212529'
    };

    return (
        <div className='container'>
            <form>
                <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Enter your text</h2>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"
                        onChange={handleOnChange} value={text} style={props.mode === 'dark' ? darkStyle : lightStyle}></textarea>
                </div>
            </form>
            <div className='container my-3'>
                <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleOnClickLower}>Convert to LowerCase</button>
                <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleOnClickUpper}>Convert to UpperCase</button>
                <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleOnClickClear}>Clear Text</button>
                <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleOnClickCopyClipboard}>Copy Text</button>
                <button type="button" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-2`} onClick={handleOnClickRemoveSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="card" style={{ width: "100%", height: '300px' }}>
                <div className={`container card-body bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h5 className={`card-title text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Analysis</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Character Count : {text.length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Word Count : {text.split(/\s+/).filter((data) => { return data !== '' }).length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Sentence Count : {text.split('.').filter((data) => { return data !== '' }).length}</h6>
                    <p className={`card-text text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text}</p>
                </div>
            </div>
        </div>

    )
}
