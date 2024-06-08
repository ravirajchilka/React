import "../ItemList/ItemList.css";

function ItemList(props) {
  let item = props.itemValue.map((item, _) => {
    return (
      
      <div className="mt10 gridCl" key={Math.random()}>
       
        <div className="dispFlex">
          <div className="mr10 width100cl">{item}</div>
          <input className="mr10 width100cl" type="date" id="birthday" name="birthday"></input>
          <input className="width100cl" type="time" id="appt" name="appt"></input>
         <button className="borderCl">Delete</button>
        </div>
     
      </div>
    );
  });

  return <>{item}</>;
}

export default ItemList;
