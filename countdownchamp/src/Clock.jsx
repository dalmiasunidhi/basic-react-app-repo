import React, {Component} from 'react';
import './App.css';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state= {
            days: 0,
            hours: 0,
            minutes:0,
            seconds:0

        }
        //console.log('this.props',this.props);
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadLine);
    }

    componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadLine,1000));
    }

    leading0(num) {
        return num <10 ? '0'+num : num ;
    }

   

    getTimeUntil(deadLine) {
       const time = Date.parse(deadLine) - Date.parse(new Date());
       console.log('time', time);
       const seconds = Math.floor((time/1000) % 60);
       const minutes = Math.floor((time/1000/60) %60);
       const hours = Math.floor(time/(1000*60*60) % 60);
       const days = Math.floor(time/(1000*60*60*24));

       console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days',days);
       this.setState({days:days, seconds:seconds, minutes:minutes, hours:hours});
    }

    render() {
        //this.getTimeUntil(this.props.deadLine);
        return (
            <div>
    <div className="Clock-days">{this.leading0(this.state.days)}days</div>
    <div className="Clock-hours">{this.leading0(this.state.hours)}hours</div>
    <div className="Clock-minutes">{this.leading0(this.state.minutes)}minutes</div>
    <div className="Clock-seconds">{this.leading0(this.state.seconds)}seconds</div>
    </div>


        )

    
    }
}

export default Clock;