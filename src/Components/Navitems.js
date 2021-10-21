export default function Navitems(props) {
  return (
    <a href = {props.link} className = "font-dark-secondary font-bold hover-effect font-dark">{props.name}</a>
  )
}
