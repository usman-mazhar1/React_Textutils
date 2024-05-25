import React from 'react'
import {useState} from 'react'


export default function TextForm(props) {
   
    const handleUpClick = () =>{
      //  console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase!","success")
    }

    const handleLowClick = () =>{
      //  console.log("Uppercase Was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase!","success")
    }

    const handeOnChange = (event) =>{
      //  console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy To Clipboard!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/ +/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!","success")
    }
    
    const [ text , setText ] = useState("");
  //  text = "Enter Text"   WRONG WAY TO CHANGE THE STATE
  //  setText("Enter Text")   CORRECT WAY TO CHANGE THE STATE
  return (
<>
    <div className="container"> 
        <h1 style={{color : props.mode == 'light'?'#042743':'white'} }>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor : props.mode == 'light'?'white':'grey', color : props.mode == 'light'?'#042743':'white'} } value={text} id="myBox" rows="8" onChange={handeOnChange}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>
    Convert To UpperCase
    </button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >
    Convert To LowerCase
    </button>
    <button className="btn btn-primary mx-2" onClick={handleCopy} >
    Copy Text
    </button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >
    Remove Extra Spaces
    </button>
    </div>

    <div className="container my-3">
        <h2 style={{color : props.mode == 'light'?'#042743':'white'} }>Your Text Summary</h2>
        <p style={{color : props.mode == 'light'?'#042743':'white'} }>{text.split(" ").length} Words And {text.length} Characters</p>
        <p style={{color : props.mode == 'light'?'#042743':'white'} }> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2 style={{color : props.mode == 'light'?'#042743':'white'} }>Preview</h2>
        <p style={{color : props.mode == 'light'?'#042743':'white'} }>{text.length>0?text:'Enter The Text In The Above Box To Preview Here'}</p>
    </div>

</>
)
}

 