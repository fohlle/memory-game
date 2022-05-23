import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.png';
import eight from '../images/eight.png';
import nine from '../images/nine.png';
import ten from '../images/ten.png';
import eleven from '../images/eleven.png';
import thirteen from '../images/thirteen.png';
import fourteen from '../images/fourteen.png';
import fifteen from '../images/fifteen.png';

import Card from './card';
import { useState, useEffect } from 'react';
import './main.css';

function Main(){

  const [pics, setPic] = useState
  ([
    {pic:one, clicked:false},
    {pic:two, clicked:false},
    {pic:three, clicked:false},
    {pic:four, clicked:false},
    {pic:five, clicked:false},
    {pic:six, clicked:false},
    {pic:seven, clicked:false},
    {pic:eight, clicked:false},
    {pic:nine, clicked:false},
    {pic:ten, clicked:false},
    {pic:eleven, clicked:false},
    {pic:thirteen, clicked:false},
    {pic:fourteen, clicked:false},
    {pic:fifteen, clicked:false},
  ])

  /*
  const pics = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    thirteen,
    fourteen,
    fifteen
  ];
  */

  function changePic(){
  }

  useEffect( () => {
    console.log("mounting");
  })

  function getRandom(){
    
      let random = Math.floor(Math.random() * 14);
      return random;
  }

  function greet(e){
    console.log("hi");
    console.log(e.target);
  }


  return (

    <div className='main-wrapper'>
      <div className='score-wrapper'>
        <h3>Score</h3>
        <h4>HighScore</h4>
      </div>
      <div className='card-wrapper'>
      <Card click={greet} randomPic={pics[getRandom()].pic}/>
      <Card click={greet} randomPic={pics[getRandom()].pic} />  
      <Card click={greet} randomPic={pics[getRandom()].pic} />
      <Card click={greet} randomPic={pics[getRandom()].pic} />  
      <Card click={greet} randomPic={pics[getRandom()].pic} />
      </div>
    </div>
  )
}

export default Main;