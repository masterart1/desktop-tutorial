import React, { useState } from 'react';
import App from '../App';
export default function TextForm( props) {
    const handleClearClick=()=>{
       
  setText("");
props.showalert("text cleared","success");
    }
    const handleCopy = () => {
console. log("I am copy");
let text = document.getElementById ("my-box");
text.select();
navigator.clipboard. writeText(text.value); 
props.showalert ("Copied to Clipboard!", "success");}
    const handleExtraSpaces = () => {
let newText = text. split(/[ ]+/);
setText (newText. join(" "))
props. showalert ("Extra spaces removed|", "success")}
    const handlelowClick=()=>{
        console.log("convert to lower case was clicked");
    let newtext=text.toLowerCase();
    setText(newtext);
        props.showalert("converted to lower case","success")

    }
  const handleUpClick = () => {
    console.log("convert to upper case was clicked");
    let newtext=text.toLocaleUpperCase();
    setText(newtext);
    props.showalert("converted to upper case","success")
  };

  const handleOnChange = (event) => {
    console.log("you clicked ONchange");
    setText(event.target.value);
  };
  const handlereversed=()=>{
    const reversed = text.split("").reverse().join("");
setText(reversed);
props.showalert("reveresed","success")

  }

  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="my-box" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          rows="8"
          style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handlelowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btn btn-primary mx-2" onClick={handlereversed}>
    Reverse Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
    Remove Extra space
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
    Copy Text
      </button>
    </div>
    <div className="container my-3">
    <h1>Your Text summary</h1>
<p>
  {text.length} characters and {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
</p>
<p>{0.008*text.split(" ").length}minutes to read</p>
    </div>
<h3>Preview</h3>
<p>
{text.length>0?text:'Enter some text in the text box to preview here'}
    </p>
    </>
  );
}
