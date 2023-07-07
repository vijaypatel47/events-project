// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventDetails, setActiveEventId} = props
  const {id, name, location, imageUrl} = eachEventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <div className="details-container">
        <p className="name"> {name} </p>
        <p className="location"> {location} </p>
      </div>
    </li>
  )
}
export default EventItem
