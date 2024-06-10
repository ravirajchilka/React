import React, { useContext,useRef,useState } from 'react';
import Button from '@mui/material/Button';
import "../ItemList/ItemList.css";
import { MyContext } from "../../MyProvider"


function ItemList(props) {

  const { setData } = useContext(MyContext);

  const [selectedDateAndTime, setSelectedDateAndTime] = useState({date:"",time:""});

  const handleClick = () => {
    console.log(selectedDateAndTime);
    setData(selectedDateAndTime); // Pass the entire item object
  };

 const handleChange = (e) => {
    const {name,value} = e.target;
    setSelectedDateAndTime((prevState)=>({
      ...prevState,
      [name]: value
    }));
  };


  let item = props.itemValue.map((item, ind) => {
    return (
      
      <div className="mt10 gridCl" key={Math.random()}>
       
        <div className="m5" onClick={setData(JSON.stringify(selectedDateAndTime))}>
          <div className="mr10 width100cl mb10">
            <p>{ind+1}. {item.length>10?(item.slice(0,30)+"..."):item}</p>
          </div>
          <input className="mr10 width100cl" type="date" name="date" value={selectedDateAndTime.date} onChange={handleChange}></input>
          <input className="width100cl" type="time" name="time" value={selectedDateAndTime.time} onChange={handleChange}></input>
          <Button color="error" variant="contained" className="deleteBtnCl">Delete</Button>
        </div>
      </div>
    );
  });

  return <div className="scrollCl">{item}</div>;
}

export default ItemList;
