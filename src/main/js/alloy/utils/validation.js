import _ from 'lodash';

export class Validator {
	constructor(spec, error) {
		this.spec = spec;
		this.error = error;
	}
}

let Spec = {};

Spec.makeOptional = spec => val => _.isEmpty(val) ? true : spec(val);

export { Spec };

export const required = value => !!value;
export const requiredValidator = new Validator(required, (details) => details.friendlyName + ' is required. ' + details.format1 );

export const isEmail = (val) => val.match(/^[a-zA-Z0-9](\.?\+?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$/);
export const emailValidator = new Validator(isEmail, (details, value) => 'Invalid Email Address');

/*export const isValidPhoneNumber = (val) => val.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);*/
export const isValidPhoneNumber = (val) => val.match(/^(\+\d{1,6}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
export const phoneValidator = new Validator(isValidPhoneNumber, (details) => 'Invalid Phone Number.');

export const phoneCorrectLength = (val) => (val.toString().length >= 10 );//&& val.match(/\d{10}/));
export const phoneLengthValidator = new Validator(phoneCorrectLength, (details) => details.friendlyName +' requires 10 digits');

/*password must have at least one of each of the following and only the following: lowercase letter, uppercase letter,
number, special character.*/
export const isValidPassword = (val) => (val.match(/^[a-zA-Z0-9!@#$%^&*()?<>;:]+$/) &&
	/*check for lowercase*/
	(val.match(/[a-z]+/)) &&
    /*check for uppercase*/
    (val.match(/[A-Z]+/)) &&
    /*check for numbers*/
	(val.match(/[0-9]+/)) &&
    /*check for special characters*/
	(val.match(/[!@#$%^&*()?<>;:]+/)));
export const passwordValidator = new Validator(isValidPassword, (details) => 'Invalid Password. At least one ' +
	'of each of the following: lowercase letter, uppercase letter, number, and special character.');

export const passShortLength = (val) => val.toString().length >= 6;
export const passShortLengthValidator = new Validator(passShortLength, (details) => 'Increase Password Length');

export const passLongLength = (val) => val.toString().length <= 20;
export const passLongLengthValidator = new Validator(passLongLength, (details) => 'Decrease Password Length');

export const isValidState = (val) => val.match(/^[A-Z]{2}$/);
export const stateValidator = new Validator(isValidState, (details) => 'Decrease Password Length');

export const zipCorrectLength = (val) => val.toString().length === 5;
export const zipLengthValidator = new Validator(zipCorrectLength, (details) => details.friendlyName +' requires 5 digits');

export const isValidZip = (val) => val.match(/^[0-9]*$/);
export const zipValidator = new Validator(isValidZip, (details) => 'Invalid Zip Code.');
