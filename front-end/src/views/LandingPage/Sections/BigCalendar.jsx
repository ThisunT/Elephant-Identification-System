import React, {Component} from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);
// or globalizeLocalizer

// let responseEvents,myEventsList = [];
// const url = 'http://localhost:3001/event/ / /';
// axios.get(url).then(function (events) {
//     responseEvents = events.data;
//     for (let i=0; i<responseEvents.length; i++){
//         myEventsList.push({
//             'title': responseEvents[i].lab,
//             'subject':responseEvents[i].eventname,
//             'description':responseEvents[i].description,
//             'startDate': new Date(responseEvents[i].starttime),
//             'endDate': new Date(responseEvents[i].endtime)
//         })
//     }
// });

class MyCalendar extends Component{
    constructor(props){
        super(props);

        this.state = {
            myEventsList:null
        }
    }

    componentWillMount(){
        let responseEvents = this.props.events, myEventsList=[];
        console.log(responseEvents);
        for (let i=0; i<responseEvents.length; i++){
            myEventsList.push({
                'title': responseEvents[i].lab,
                'subject': responseEvents[i].eventname,
                'bookedby': responseEvents[i].bookedby,
                'description':responseEvents[i].description,
                'startDate': new Date(responseEvents[i].starttime),
                'endDate': new Date(responseEvents[i].endtime)
            })
        }
        this.setState({
            myEventsList: myEventsList
        })
    }

    render(){
        console.log(this.state.myEventsList, this.props.events);
        return(
            <div>
                <BigCalendar
                    events={this.state.myEventsList}
                    startAccessor='startDate'
                    endAccessor='endDate'
                    onSelectEvent={event => window.alert(event.subject + '\n' + event.description)}
                    defaultDate={new Date()}
                />
            </div>
        )
    }
}

export default MyCalendar;