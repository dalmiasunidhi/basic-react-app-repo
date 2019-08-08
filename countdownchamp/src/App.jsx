import React,{Component} from 'react';
import Clock from './Clock';
import './App.css';
import { Form,FormControl, Button, FormGroup} from 'react-bootstrap';

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            deadLine: 'November 25, 2019',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadLine: this.state.newDeadline})
    }
    render(){
    return(
<div className= "App">
<div className="App-title">Countdown to {this.state.deadLine}</div>
<Clock deadLine={this.state.deadLine} />
<Form>
    <FormControl className="Deadline-input" placeholder="new date" 
    onChange={event => this.setState({newDeadline: event.target.value})}/>
    <Button onClick={() => this.changeDeadline()}>Submit</Button>
</Form>

</div>
    )
        
    
    }
    
}

export default App;