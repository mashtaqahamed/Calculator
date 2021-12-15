import { useState } from "react";
import * as math from "mathjs";

import Button from "./Components/Button";
import "./App.css";
import Input from "./Components/Input";

const App = () =>{
const [text , setText] = useState("");
const [result , setResult] = useState("");



const addToText = (val) =>{
  setText((text)=>[...text, val +""]);

};

const calculateResult = () =>{
  const input = text.join("")

  setResult(math.evaluate(input));
}

const resetInput = () =>{
  setText ("");
  setResult("");
}

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text ={text} result={result}/>
        <div className="row">
          <Button symbol="7" click={addToText} />
          <Button symbol="8"click={addToText} />
          <Button symbol="9"click={addToText}/>
          <Button symbol="/"click={addToText} color="#2d5a7d"/>
        </div>
        <div className="row">
          <Button symbol="4" click={addToText}/>
          <Button symbol="5" click={addToText}/>
          <Button symbol="6" click={addToText}/>
          <Button symbol="*" click={addToText}color="#2d5a7d" />
        </div>
        <div className="row">
          <Button symbol="1" click={addToText}/>
          <Button symbol="2" click={addToText}/>
          <Button symbol="3" click={addToText}/>
          <Button symbol="-" click={addToText}color="#2d5a7d" />
        </div>
        <div className="row">
          <Button symbol="0"click={addToText}/>
          <Button symbol="."click={addToText}/>
          <Button symbol="=" click={calculateResult}/>
          <Button symbol="+"click={addToText}color="#2d5a7d" />
          
        </div>
        {/* <div className="row">
        <Button symbol="C"/>
        <Button symbol="AC"/>
        </div> */}
        <Button symbol="Clear" click={resetInput}color="#c91818"/>
      </div>
    </div>
  );
}

export default App;
