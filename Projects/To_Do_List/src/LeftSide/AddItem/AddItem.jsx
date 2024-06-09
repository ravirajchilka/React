import { useState, useRef } from "react";
import "./AddItem.css";
import ItemList from "../ItemList/ItemList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddItem() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  const addItem = (newItem) => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    setItems((prevValue) => {
      return [...prevValue, inputValue];
    });
  };

  return (
    <>
   <h2 className="ml28">To Do List</h2> 
     
      <div className="parentCl">
        <div>
          {/* <TextField ref={inputRef}  className='textCl mr10'  label="Add Item" variant="outlined"
               /> */}
          <textarea
            ref={inputRef}
            placeholder="Add Item"
            className="textCl mr10"
            style={{ height: "40px" }}
          ></textarea>
          <Button className="m44" variant="contained" onClick={addItem}>
            Add Item
          </Button>
        </div>
        <div>
          <ItemList itemValue={items}></ItemList>
        </div>
      </div>
    </>
  );
}

export default AddItem;
