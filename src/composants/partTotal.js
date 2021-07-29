import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import Left from './partLeft/leftPart'
import Right from './partRight/rightPart'

const TotalPart = (props) => {
      return (
 <div style={{width: '100%' }}>
       <Left data={props.data}/>
       <Right/>
 </div>
 );
}
export default TotalPart;
