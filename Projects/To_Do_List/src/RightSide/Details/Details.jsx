import React, { useContext } from 'react';
import { MyContext } from '../../MyProvider';

function Details() {
    const { data } = useContext(MyContext);
    let time;
    let date;
    for(let item in data) {
        if(data[item].includes(":")) {
            time = data[item];
        } else {
            date = data[item];
        }
    }

return (<>
          <div> date : {date}</div>
           <div> time: {time}</div>
        </>
    );
}

export default Details;
