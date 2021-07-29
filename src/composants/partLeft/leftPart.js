import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import About from './about'
import TestNN from './test'

const Left = (props) => {
    const title = props.data;
    if (title==='about') {
        return (
            <div style={{width: '100%' }}>
            <div style={{backgroundColor: '#eee8aa',float: 'left', width: '50%', height:'100%' }}>
            <About key={{title}}/>
            </div>
         </div>
     ); 
    } else if (title==='testCancer'){
        return (
            <div style={{width: '100%' }}>
            <div style={{backgroundColor: '#eee8aa',float: 'left', width: '50%', height:'100%' }}>
            <TestNN key={{title}}/>
            </div>
         </div>
     ); 
      
    }else {
        return (
            <div style={{width: '100%' }}>
            <div style={{backgroundColor: '#eee8aa',float: 'left', width: '50%', height:'100%' }}>
            <h2>visualisation</h2>
            </div>
         </div>
     ); 
    }
      

}
export default Left;
