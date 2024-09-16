import PropTyope from "prop-types"
const ChildComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
ChildComponent.proptypes = {
    children : PropTyope.array,
}
export default ChildComponent
