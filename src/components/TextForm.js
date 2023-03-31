import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Upercase Clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text converted to CAPITAL CASE!", "success");
  }
  
  const handleLowClick=()=>{
    // console.log("Upercase Clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text converted to lower case!", "success");
  }
  
  const handleClear=()=>{
    // console.log("Upercase Clicked" + text)
    let newText = ""
    setText(newText)
    props.showAlert("Text cleared!", "success");
  }

  const handleOnChange=(event)=>{
    // console.log("Upercase Clicked");
    setText(event.target.value)
  }

      // Credits: A
      const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

  const [text, setText] = useState("");
  return (
    < >
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div className='my-3'>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick} >UPERCASE</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick} >lowercase</button>
        <button className='btn btn-secondary mx-2' onClick={handleClear} >Clear</button>
        <button className='btn btn-success mx-2' onClick={handleCopy} >Copy</button>
        <button disabled={text.length===0} className="btn btn-danger my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery</h1>
        <p><strong>{text.split(" ").length-1}</strong> Words, and <strong>{text.length}</strong> Characters</p>
        <p><strong>{0.008*(text.split(" ").length-1)}</strong> Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}

export default TextForm;

TextForm.propTypes = {
  heading: PropTypes.string,
}

TextForm.defaultProps={
  heading: "No Title",
}