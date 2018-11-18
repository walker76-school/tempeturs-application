import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getPet} from 'js/api/petAPI';
import {UpdatePetForm} from 'js/forms/updatePetForm';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

export default class AppointmentPetComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Constructing AppointmentPetComponent: ' + this.props.petKey);
        this.state = {id: '', name: '', type: '', expanded: false};
    }

    componentDidMount() {
        getPet(this.props.petKey)
            .then(
                (response) => {
                    this.setState({
                        id: response['id'],
                        name: response['name'],
                        type: response['type']
                    });
                }).catch((error) => {
            alert(error);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}