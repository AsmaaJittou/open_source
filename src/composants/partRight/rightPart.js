import React, { Component, useEffect,useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imageChatbot.jpg'; 
import Button from 'react-bootstrap/Button';

function Right() {

  const [initialData, setInitialData] = useState( ([{}]),
  useEffect(()=> {
   fetch('/button').then(
      response => response.json()
      ) 
    }));

      return (
        <div style={{float: 'right',width: '50%' ,height:'100%'}}>
          <img style={{width: '70%' ,height:'50%'}}src={logo} alt="Logo" />
          <form action="/button/" method="post">
            <Button style={{backgroundColor:'#008976', color:'white',borderColor:'white', width: '30%',height:'100%',marginLeft:'38%'}} variant="outline-success" type="submit" >do you need a help</Button>
                              </form>
        
        </div>
 );
}
export default Right;
//color:'#17C26E' 
 //<Button  style={{float: 'center'}} variant="outline-success" >Do you want a Help?</Button>
/*  */