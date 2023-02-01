import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
