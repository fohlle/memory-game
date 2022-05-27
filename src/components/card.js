
import './card.css';

function Card(props){
  return(
    <div className='card-main' onClick={props.click} >
      <img id={props.randomPic.name} src={props.randomPic.pic} alt='pokemon' />
    </div>
  )
}

export default Card;