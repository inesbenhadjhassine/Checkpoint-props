import React from 'react';
import './App.css';
import img from "./mario.png";
import Photo from "./Photo";
import Title from "./Title";


function App() {
  return (
    <div>

	<Photo src={img} />

	<Title style={{color:'red'}}>My Name here</Title>

	<Title small>My job here</Title>


</div>
  );
}

export default App;
