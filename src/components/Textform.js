import React ,{useState} from 'react'

export default function Textform(props) {
    const handleChange = (e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const [text, setText] = useState("");   // hook 
    const textupchange = ()=>{
        console.log("convert to uppercase" + text);
        const newText=text.toUpperCase();
        setText(newText);
        props.showalert("Text converted to uppercase ", "Success");
    }
    const textLOchange = ()=>{
        console.log("convert to uppercase" + text);
        const newText=text.toLowerCase();
        setText(newText)
        props.showalert("Text converted to lowercase ", "Success");
    }
    const clearText = ()=>{
        console.log("convert to uppercase" + text);
        const newText='';
        setText(newText)
        props.showalert("Text  cleared ", "Success");
    }
    const removeSpace=()=>{
        const newtext= text.replace(/[ \t]+/g,' ').replace(/\n{2,}/g, '\n').trim();
        setText(newtext);
        props.showalert("Extra spaces removed ", "Success");
    }
    const copytoclipboard = () =>{
        navigator.clipboard.writeText(text).then(function() {
            props.showalert('Text successfully copied to clipboard.', "success");
          }).catch(function(err) {
            console.error('Unable to copy text to clipboard: ', err);
          });
    }
    const darkMode= () =>{
        const textarea = document.getElementById("my-text");
        console.log(textarea)
        textarea.style.backgroundColor="grey";
        textarea.style.color="white";
    }
    const lightMode= () =>{
        const textarea = document.getElementById("my-text");
        console.log(textarea)
        textarea.style.backgroundColor="white";
        textarea.style.color="black";
    }
  return (
    <>
    <div className="container">
        <div className="mb-3">
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}`} >{props.heading}</h1>
        <label htmlFor="my-text"  className="form-label"></label>
        <textarea className="form-control " style={{backgroundColor : props.mode === 'dark'?'#344c84':'white' , color : props.mode === 'light'?'black':'white' }} onChange={handleChange} value={text}  id="my-text" rows="9"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onclick={props.showalert} onClick={textupchange}> to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onclick={props.showalert} onClick={textLOchange}> to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onclick={props.showalert} onClick={clearText}> clear text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onclick={props.showalert} onClick={removeSpace}> Remove extra space</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onclick={props.showalert} onClick={copytoclipboard}> Copy to clipboard</button>
        </div> 
    </div>
    <div className="container">
        <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Text Summary</h2>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text.split(/\s+/g).filter((element)=>{return element.length!==0}).length} words , {text.replace(/\s+/g,'').length} characters</p>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>Takes {0.008 *(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read</p>
        <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Preview</h2>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text.length>0 ?text:"Nothing to preview ..!" }</p>
    </div>
    </>
  )
}
