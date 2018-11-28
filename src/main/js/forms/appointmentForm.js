import React from 'react';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import * as AppointmentAPI from 'js/api/appointmentAPI';
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
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import DatePicker from 'material-ui-datetimepicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DateTimePicker from 'material-ui-datetimepicker';
import {createMuiTheme} from '@material-ui/core/styles/index';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';

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

const theme = createMuiTheme({
    datePicker: {
        color: '#FFFFFF',
        textColor: '#FFFFFF',
        calendarTextColor: '#FFFFFF',
        selectColor: '#FFFFFF',
        selectTextColor: '#FFFFFF',
        calendarYearBackgroundColor: '#FFFFFF',
        headerColor: '#FFFFFF',
    }
});

Date.prototype.customFormat = function(formatString){
    var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
    YY = ((YYYY=this.getFullYear())+'').slice(-2);
    MM = (M=this.getMonth()+1)<10?('0'+M):M;
    MMM = (MMMM=['January','February','March','April','May','June','July','August','September','October','November','December'][M-1]).substring(0,3);
    DD = (D=this.getDate())<10?('0'+D):D;
    DDD = (DDDD=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][this.getDay()]).substring(0,3);
    th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
    formatString = formatString.replace('#YYYY#',YYYY).replace('#YY#',YY).replace('#MMMM#',MMMM).replace('#MMM#',MMM).replace('#MM#',MM).replace('#M#',M).replace('#DDDD#',DDDD).replace('#DDD#',DDD).replace('#DD#',DD).replace('#D#',D).replace('#th#',th);
    h=(hhh=this.getHours());
    if (h==0) h=24;
    if (h>12) h-=12;
    hh = h<10?('0'+h):h;
    hhhh = hhh<10?('0'+hhh):hhh;
    AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm=(m=this.getMinutes())<10?('0'+m):m;
    ss=(s=this.getSeconds())<10?('0'+s):s;
    return formatString.replace('#hhhh#',hhhh).replace('#hhh#',hhh).replace('#hh#',hh).replace('#h#',h).replace('#mm#',mm).replace('#m#',m).replace('#ss#',ss).replace('#s#',s).replace('#ampm#',ampm).replace('#AMPM#',AMPM);
};

class AppointmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            date: moment(),
            startTime: null,
            endTime: null,
            sitters: false,
            errorCode: 0,
            dateStartTime: new Date().getTime(),
            dateEndTime: new Date().getTime()
        };

        this.bookAppointment = this.bookAppointment.bind(this);
        this.addAppointment = this.addAppointment.bind(this);
    }


    setStartDate = (dateTime) => this.setState({
        dateStartTime: dateTime.getTime()
    });

    setEndDate = (dateTime) => this.setState({
        dateEndTime: dateTime.getTime()
    });

    bookAppointment = principal => {

        let appointmentRequest = {
            pets: [],
            owner: '',
            sitter: '',
            startDate: '',
            endDate: ''
        };
        appointmentRequest['petIds'] = this.state.pets;
        appointmentRequest['owner'] = this.props.user.principal;
        appointmentRequest['sitter'] = principal;
        appointmentRequest['startDate'] = this.state.dateStartTime;
        appointmentRequest['endDate'] = this.state.dateEndTime;

        return this.props.registerAppointment(appointmentRequest, this.addAppointment);
    };

    addAppointment = id => {
        let updatedUser = this.props.user;
        updatedUser['appointments'].push(id);
        this.props.addAppointment(updatedUser);
        this.props.callBack();
    };

    enqueuePet = (id) => {
        this.state.pets.push(id);
    };

    dequeuePet = (id) => {
        let temp = [];

        for( let i = 0; i < this.state.pets.length ; i++){
            if ( this.state.pets[i] !== id) {
                temp.push(this.state.pets[i]);
            }
        }
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

        if(this.state.dateEndTime <= this.state.dateStartTime){
            this.setState({
                errorCode: -2
            });
            return;
        }

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
        let errorContent = '';
        if(this.state.errorCode === -1){
            errorContent = 'Please add at least one pet and try again.';
        } else if(this.state.errorCode === -2) {
            errorContent = 'End date must be after the start date.';
        }

        let errorDialog = (
            <div>
                <Dialog
                    open={this.state.errorCode < 0}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                    fullWidth={true}
                    maxWidth='sm'
                >
                    <DialogTitle id='alert-dialog-title'>Error</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            {errorContent}
                        </DialogContentText>
                    </DialogContent>
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
            sitterContent = ( <SitterList zip={this.props.user.zip} callBack={this.bookAppointment}/> );
        }

        return (
            <div>
                {errorDialog}
                {content}
                <br/>

                <MuiThemeProvider theme={theme}>
                    Start Date
                    <DatePicker
                        value={(new Date(this.state.dateStartTime)).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' )} // picker value moment/string/number/js Date
                        format='MMM DD, YYYY HH:mm'
                        timePickerDelay={150}
                        returnMomentDate={false} // if true will return moment object
                        datePickerMode='landscape' // or landscape
                        openToYearSelection={false}
                        disableYearSelection={false}
                        hideCalendarDate={false}
                        firstDayOfWeek={1}
                        minutesStep={1}
                        showCurrentDateByDefault={true}
                        onChange={(date) => this.setStartDate(date)}
                        DatePicker={DatePickerDialog}
                        TimePicker={TimePickerDialog}
                        fullWidth={false}
                    />
                </MuiThemeProvider>

                <MuiThemeProvider theme={theme}>
                    End Date
                    <DatePicker
                        value={(new Date(this.state.dateEndTime)).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' )} // picker value moment/string/number/js Date
                        format='MMM DD, YYYY HH:mm'
                        timePickerDelay={150}
                        returnMomentDate={false} // if true will return moment object
                        datePickerMode='landscape' // or landscape
                        openToYearSelection={false}
                        disableYearSelection={false}
                        hideCalendarDate={false}
                        firstDayOfWeek={1}
                        minutesStep={1}
                        showCurrentDateByDefault={true}
                        onChange={(date) => this.setEndDate(date)}
                        DatePicker={DatePickerDialog}
                        TimePicker={TimePickerDialog}
                        fullWidth={false}
                    />
                </MuiThemeProvider>

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
        registerAppointment: (appointment, callback) => dispatch(AppointmentAPI.Actions.registerAppointment(appointment, callback)),
        addAppointment: user => dispatch(Users.Actions.update(user))
    })
)(AppointmentForm);

export default withStyles(styles)(AppointmentForm);