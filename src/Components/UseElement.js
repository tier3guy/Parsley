export default function UseElement (props){
  return (
    <>
      <p className = "use-element-font-bold">{props.header}</p>
      <p className = "use-element-font-light">{props.sub}</p>
    </>
  );
}