import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to uppercase", "success");
    }

    const handleDownClick = ()=> {
      //console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text Converted to lowercase", "success")
    }

    const handleReverseClick = () => {
      let newText = text.split('').reverse().join('');
      setText(newText);
      props.showAlert("Text Reversed", "success")
   }
   
   const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success")
  }

  const handleCopyClick = () => {
    // console.log("Copied");
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, 9999);
    // navigator.clipboard.writeText(text.value);

      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "success")
  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }

  const handleCapitalizeWordsClick = () => {
    let newText = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(newText);
    props.showAlert("Text Capitalized", "success");
  };

  const handleSortClick = () => {
    let newText = text.split(' ').sort().join(' ');
    setText(newText);
    props.showAlert("Text Sorted Alphabetically", "success");
  };
  
  const handleEncryptClick = () => {
    let newText = text.replace(/[a-z]/gi, char => 
      String.fromCharCode(
        char.charCodeAt(0) + (char.toLowerCase() >= 'x' ? -23 : 3)
      )
    );
    setText(newText);
    props.showAlert("Text Encrypted (Caesar Cipher)", "success");
  };
  
  const handleDecryptClick = () => {
    let newText = text.replace(/[a-z]/gi, char =>
      String.fromCharCode(
        char.charCodeAt(0) - (char.toLowerCase() <= 'c' ? -23 : 3)
      )
    );
    setText(newText);
    props.showAlert("Text Decrypted (Caesar Cipher)", "success");
  };
  

    const handleOnChange = (event)=> {
        //console.log("On change");
        setText(event.target.value)

    }

    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("set text here"); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#2C2C2C' , color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordsClick}>Title Case</button>
        <button className="btn btn-primary mx-2" onClick={handleSortClick}>Alphabet Order</button>
        <button className="btn btn-primary mx-2" onClick={handleEncryptClick}>Encrypt</button>
        <button className="btn btn-primary mx-2" onClick={handleDecryptClick}>Decrypt</button>

    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read these words</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter the text in the text above to see preview"}</p>
    </div>
    </>
  )
}