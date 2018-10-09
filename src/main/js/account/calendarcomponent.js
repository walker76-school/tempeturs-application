import React, { Component } from 'react';
//import Calendar from 'react-calendar/dist/entry.nostyle';
import Calendar from 'js/account/calendar';
//import "./calendar.css";

export default class CalendarComponent extends React.Component {


    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            date: '',
        };
    }

    onChange = (date) => {
        console.log(date);
        this.setState({date: date.toString()});
    };

    render() {
        return (
            <div className="App">
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            react<b>calendar</b>
                        </span>
                    </div>
                </header>
                <main>
                    <Calendar/>
                </main>
            </div>
        );
    }
}

//export default CalendarComponent;