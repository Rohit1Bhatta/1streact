 import React,{useState} from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const TextForm = (props) => {
    console.log(props)

    const handleUpperCase = ()=> {
        // console.log("Upper case was clicked " + text);
       let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted into Uppercase","success");
    }
    const handleLowerCase = ()=> {
        
       let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted into lowercase","success");
    }
    const handleClearCase = ()=> {
        
       let newText = "";
        setText(newText)
    }
    const handleCopy = ()=> {
        
        var newtext = document.getElementById("myBox");
        newtext.select();
        newtext.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newtext.value)
        props.showAlert  ("Text has been copied into Clipboard" ,"success");
    }
    
    const handleExtraSpace = ()=> {
        
        let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert  ("Removed extra spaces " ,"success");
         
    }
    function handleOnChange(event) {


        setText(event.target.value);

    }
    const [text, setText] = useState("Enter text here");
    
return (
    <><>
        <div className='container ' style={{color: props.mode === 'dark'? 'white':'black'}} >
           
        <h1>{props.heading}</h1>
            <div className="mb-3">

               
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode ==='dark'?'grey':'white', 
                color :props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearCase}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
    </><div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
            <h3> Your Summary </h3>
            <p> {text.split(" ").length} words and {text.length} characters  </p>
            <p>{0.008 * text.split(" ").length} MInutes to Read</p>
            <h3> Preview </h3>
            <p>{text}</p>
        </div></>
    
  );
    
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

 export default TextForm;