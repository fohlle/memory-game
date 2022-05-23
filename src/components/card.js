
import './card.css';

function Card(props){
  return(
    <div className='card-main' onClick={props.click} >
      <img src={props.randomPic} alt='pokemon' />
    </div>
  )
}

export default Card;