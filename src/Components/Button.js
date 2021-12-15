import "./Button.css";

const Button = ({symbol , color, click}) =>{
    return (
        <div
        onClick={()=> click(symbol)}
      className="button-wrapper" style={{backgroundColor:color}}>

        {symbol}
    </div>
    );
};

export default Button;