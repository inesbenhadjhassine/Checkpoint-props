import React from 'react';



function Title(props) {
    if(props.small){
  return (
    <div style={props.style}>
        {props.children}
    </div>



  );
}else{
    return (
        <div style={props.style}>
           <h1>{props.children}</h1>
        </div>
    
    
    
      );   
}
}

export default Title;
