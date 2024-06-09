import Button from '@mui/material/Button';
import "../ItemList/ItemList.css";

function ItemList(props) {
  let item = props.itemValue.map((item, ind) => {
    return (
      
      <div className="mt10 gridCl" key={Math.random()}>
       
        <div className="dispFlex m5">
          <div className="mr10 width100cl mb10">
            <p>{ind+1}. {item.length>10?(item.slice(0,30)+"..."):item}</p>
          </div>
          <input className="mr10 width100cl" type="date" id="birthday" name="birthday"></input>
          <input className="width100cl" type="time" id="appt" name="appt"></input>
          <Button color="error" variant="contained" className="deleteBtnCl">Delete</Button>
        </div>
     
      </div>
    );
  });

  return <div className="scrollCl">{item}</div>;
}

export default ItemList;
