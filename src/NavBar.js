import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TotalPart from './composants/partTotal';
import logoBar from './logopng.png'; 
class NavTest extends Component {
  
  constructor(props)
  {
      super(props)
      this.state = { valTitle : 'about' }
  }

  changeHandler(event) {
     this.setState({ valTitle: event.target.value }, () => 
     console.log(this.state.valTitle),
     console.log(event.target.value));
     
}
  
    render() {
      return (
        <div>
<Navbar  style={{backgroundColor: 'white'}}>
    <Navbar.Brand style={{width: '50%'}} ><img src={logoBar} alt="Logo" style={{width: '30%' ,height:'10%'}}/></Navbar.Brand>
    <Nav style={{width: '35%',marginLeft:'9.5%'}} className="mr-auto">
    <Button  style={{borderStyle: 'solid',borderWidth: 0,width: '30%'}}variant="outline-success" value='about' onClick={e => this.changeHandler(e)}>About</Button>
    <form action="/test/" method="post">
    <Button  style={{borderStyle: 'solid',borderWidth: 0,width: '30%'}}variant="outline-success" value='testCancer' type="submit">Test</Button>
    </form>
    <Button  style={{borderStyle: 'solid',borderWidth: 0,width: '30%'}}variant="outline-success" value='visualisation' onClick={e => this.changeHandler(e)}>visualisation</Button>
    </Nav>
  </Navbar>
  <TotalPart data={this.state.valTitle} />   
  </div>
 );
}
}

export default NavTest;
