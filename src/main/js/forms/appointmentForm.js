import React from 'react';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import * as Users from 'js/api/usersAPI';
import {PetListComponent} from 'js/account/components/petListComponent';
import {withStyles} from '@material-ui/core/styles';
import SitterList from 'js/account/components/sitterList';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


class AppointmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.addAppointment = this.addAppointment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            pets: [],
            date: moment(),
            startTime: null,
            endTime: null,
            sitters: false,
            errorCode: 0
        };

        this.addAppointment = this.addAppointment.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
    }

    handleDate(e){
        let date = moment(e.target.value);
        this.setState({date: date});
        console.log(date);
    }

    handleStartTime(e){
        console.log(e.target.value);
        let time = moment(e.target.value);
        this.setState({startTime: time});
        console.log(time);
    }

    handleEndTime(e){
        console.log(e.target.value);
        let time = moment(e.target.value);
        this.setState({endTime: time});
        console.log(time);
    }

    onSubmit = appointment => {
        return this.props.registerAppointment(appointment, this.addAppointment);
    };

    addAppointment = principal => {

        let appointmentRequest = {
            pets: [],
            owner: '',
            sitter: '',
            date: '',
            startTime: '',
            endTime: '',
        };
        appointmentRequest['pets'] = this.state.pets;
        appointmentRequest['owner'] = this.props.user.principal;
        appointmentRequest['sitter'] = principal;
        appointmentRequest['date'] = this.state.date;
        appointmentRequest['startTime'] = this.state.startTime;
        appointmentRequest['endTime'] = this.state.endTime;

        console.log(appointmentRequest);

        let momentTime = moment(this.state.time);
        let momentDate = moment(this.state.date);
        let renderedDateTime = moment({
            year: momentDate.year(),
            month: momentDate.month(),
            day: momentDate.date(),
            hour: momentTime.hours(),
            minute: momentTime.minutes()
        });

        /*let updatedUser = this.props.user;
        updatedUser['appointments'].push(id);
        this.props.addAppointment(updatedUser);
        this.props.callBack();*/
    };

    enqueuePet = (id) => {
        this.state.pets.push(id);
        console.log('Enqueue: ' + id);
        console.log(this.state.pets);
    };

    dequeuePet = (id) => {
        console.log('Dequeue: ' + id);
        let temp = [];

        for( let i = 0; i < this.state.pets.length ; i++){
            if ( this.state.pets[i] !== id) {
                temp.push(this.state.pets[i]);
            }
        }
        console.log(temp);
        this.setState({
            pets: temp
        });
    };

    showSitters = () => {
        if(this.state.pets.length <= 0){
            this.setState({
                errorCode: -1
            });
            return;
        }
        console.log('Set showing sitters...');
        this.setState({
            sitters: true
        });
    };

    errorClose = () => {
        this.setState({
            errorCode: 0
        });
    };

    render() {
        let errorDialog = (
            <div>
                <Dialog
                    open={this.state.errorCode < 0}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                >
                    <DialogTitle id='alert-dialog-title'>Please select at least one pet</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.errorClose} color='primary'>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

        let content;
        if(this.props.user.petIds.length <= 0){
            return(
              <div>
                  Please register some pets to make an appointment
                  <Bessemer.Button className='link petlink' onClick={this.props.callBack}>Go Back</Bessemer.Button>
              </div>
            );
        } else {
            if(this.props.user && this.props.user.petIds.length > 0){
                {/* Map each possible sitter to a new sitter component */}
                content = this.props.user.petIds.map((i, index) =>
                    <PetListComponent key={i} enqueue={this.enqueuePet} dequeue={this.dequeuePet} id={i}/>
                );
            }
        }
        let sitterContent;
        if(this.state.sitters && this.props.user){
            console.log('Showing sitters...');
            sitterContent = ( <SitterList zip={this.props.user.zip} callBack={this.addAppointment}/> );
        }

        return (
            <div>
                {errorDialog}
                {content}
                <br/>

                <TextField
                    id="date"
                    label="Appointment Start Date"
                    type="date"
                    defaultValue={this.state.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleDate}
                />

                <TextField
                    id="time"
                    label="Start Time"
                    type="time"
                    defaultValue={this.state.startTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    onChange={this.handleStartTime}
                />

                <TextField
                    id="date"
                    label="Appointment End Date"
                    type="date"
                    defaultValue={this.state.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleDate}
                />


                <TextField
                    id="time"
                    label="End Time"
                    type="time"
                    defaultValue={this.state.endTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    onChange={this.handleEndTime}
                />

                <Bessemer.Button className='link' onClick={this.showSitters}>Find Sitters</Bessemer.Button>
                <br/>
                {sitterContent}

                <Bessemer.Button className='link petlink' onClick={this.props.callBack}>Go Back</Bessemer.Button>
            </div>
        );
    }
}

AppointmentForm = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state)
    }),
    dispatch => ({
        registerAppointment: (appointment, callback) => dispatch(PetAPI.Actions.registerPet(appointment, callback)),
        addAppointment: user => dispatch(Users.Actions.update(user))
    })
)(AppointmentForm);

export default withStyles(styles)(AppointmentForm);