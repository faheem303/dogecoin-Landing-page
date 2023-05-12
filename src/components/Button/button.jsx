import React from 'react';



const Button = ({ ButtnClass, text}) => {
    return (
        
          <button className={`${ButtnClass}`}>{text}</button>
       
    );
};

export default Button;