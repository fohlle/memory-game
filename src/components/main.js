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
  ({
    one:     {name:"one",pic:one, clicked:false},
    two:     {name:"two",pic:two, clicked:false},
    three:   {name:"three",pic:three, clicked:false},
    four:    {name:"four",pic:four, clicked:false},
    five:    {name:"five",pic:five, clicked:false},
    six:     {name:"six",pic:six, clicked:false},
    seven:   {name:"seven",pic:seven, clicked:false},
    eight:   {name:"eight",pic:eight, clicked:false},
    nine:    {name:"nine",pic:nine, clicked:false},
    ten:     {name:"ten",pic:ten, clicked:false},
    eleven:  {name:"eleven",pic:eleven, clicked:false},
    thirteen:{name:"thirteen",pic:thirteen, clicked:false},
    fourteen:{name:"fourteen",pic:fourteen, clicked:false},
    fifteen: {name:"fifteen",pic:fifteen, clicked:false}
  }
  )
  const picsArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "thirteen",
    "fourteen",
    "fifteen"
  ];


  const [points, setPoints] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function changePic(){
    let random = picsArray[getRandom()];
    return random;
  }


  useEffect( () => {
    console.log("mounting");
  },[])

  function getRandom(){
    
      let random = Math.floor(Math.random() * 14);
      return random;
  }

  function greet(e){
    const img_path = pics[e.target.id].pic;
    const picName = e.target.id;
    let clickTrue = pics[picName].clicked;
    if(clickTrue){
      gameOver();
      return;
    }
    setPic(pics => ({...pics,[picName]:{name:picName,pic:img_path,clicked:true}}));
    add();
    
  }

  function add(){
    setPoints(points + 1);
  }

  function reset(){
    setPoints(0);
  }

  function gameOver(){
    console.log("Game Over");
    if(points > highscore){
      setHighscore(points);
    }
    resetAll();
    reset();
  }

  function resetAll(){
    picsArray.forEach( node => {
      setPic(pics => ({...pics,[node]:{...pics[node],clicked:false}}))
    })
  }

  return (

    <div className='main-wrapper'>
      <div className='score-wrapper'>
        <h3>Score:{points}</h3>
        <h4>HighScore{highscore}</h4>
      </div>
      <div className='card-wrapper'>
      <Card click={greet} randomPic={pics[changePic()]}/>
      <Card click={greet} randomPic={pics[changePic()]} />  
      <Card click={greet} randomPic={pics[changePic()]} />
      <Card click={greet} randomPic={pics[changePic()]} />  
      <Card click={greet} randomPic={pics[changePic()]} />
      
      </div>
    </div>
  )
}

export default Main;