export default function FooterLinkItem(props) {
  return (
    <p>
      <a className = "anchor font-light font-li hover-light" href = {props.link}>{props.name}</a>
      {
        (props.linkIcon) ? (<i className="fas rot-45 fa-arrow-right"></i>) : ""
      }
    </p>
  );
}

