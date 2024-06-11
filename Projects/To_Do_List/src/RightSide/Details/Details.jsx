import React, { useContext } from 'react';
import { MyContext } from '../../MyProvider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Details() {
    const { data } = useContext(MyContext);
    console.log(data);
    let time;
    let date;
    let title;
    for(let item in data) {
        if(item=="task") {
            title = data[item];
        }
        if(data[item]) {
        if(data[item].includes(":")) {
            time = data[item];
        } else {
            date = data[item];
        }
    }
    }

return (<>
           <div style={{marginTop:'100px'}}>
           <Card sx={{ minWidth: 450}}>
      <CardContent>
        <Typography variant="h5" component="div">
            <div style={{width:"50px"}}>{title}</div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          On {date}
        </Typography>
        <Typography variant="body2">
        At {time}
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </>
    );
}

export default Details;
