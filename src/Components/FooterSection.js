import FooterLinkItem from "./FooterLinkItem";

export default function FooterSection (props){
  return (
    <div className = "footee-section font-light">
      <p className = "font-head">{props.headerName}</p>
      {
        props.arrayData.map((ele, idx) => {
          return <FooterLinkItem
                  name = {ele.name}
                  link = {ele.link}
                  linkIcon = {ele.icon}
                  key =  {idx} />
        })
      }
    </div>
  );
}