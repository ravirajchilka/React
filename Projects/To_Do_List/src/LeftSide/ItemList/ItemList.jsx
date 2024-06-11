import React, { useContext,useRef,useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import "../ItemList/ItemList.css";
import { MyContext } from "../../MyProvider"


function ItemList(props) {

  const { setData } = useContext(MyContext);

  const [selectedDateAndTime, setSelectedDateAndTime] = useState(
    props.itemValue.map(() => ({task: "", date: "", time: "" }))
  );


 const handleChange = (ind,e) => {
    const {name,value} = e.target;
    setSelectedDateAndTime((prevState)=>{
        const newState = [...prevState];
        newState[ind] = {...newState[ind],[name]:value};  
        return newState;
    });
  };

const onClickCard = ((item,ind)=>{
    const task = item;    setSelectedDateAndTime((prevState) => {
      const newState = [...prevState];
      newState[ind] = { ...newState[ind], task };
      return newState;
    });
    setData(selectedDateAndTime[ind]);
});

const deleteItem = (ind) => {
  setSelectedDateAndTime((prevState) => prevState.filter((_, index) => index !== ind));
  props.setItemValue((prevItems) => prevItems.filter((_, index) => index !== ind));
};

  let item = props.itemValue.map((item, ind) => {
    return (
      
      <div className="mt10 gridCl" key={ind}>
       
        <div className="m5" onClick={()=>onClickCard(item,ind)}>
          <div className="mr10 width100cl mb10">
          <p>{ind+1}.  {item.length>10?(item.slice(0,30)+"..."):item}</p>
          </div>
          <input className="mr10 width100cl" type="date" name="date" value={selectedDateAndTime[ind]?.date || ""} onChange={(e)=>handleChange(ind,e)}></input>
          <input className="width100cl" type="time" name="time" value={selectedDateAndTime[ind]?.time || ""} onChange={(e)=>handleChange(ind,e)}></input>
          <Button color="error" variant="contained" className="deleteBtnCl" onClick={()=>deleteItem(ind)}>Delete</Button>
        </div>
      </div>
    );
  });

  return <div className="scrollCl">{item}</div>;
}

export default ItemList;
