import React, { useContext } from 'react';
import { MyContext } from '../../MyProvider';

function Details() {
    const { data } = useContext(MyContext);
   
return (<>
           <div> date : {JSON.parse(data).date}</div>
           <div> time: {JSON.parse(data).time}</div>
        </>
    );
}

export default Details;
