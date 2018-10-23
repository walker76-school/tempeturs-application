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
export const requiredValidator = new Validator(required, (details) => details.friendlyName + ' is required.');

export const isEmail = (val) => val.match(/^[a-zA-Z0-9](\.?\+?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$/);
export const emailValidator = new Validator(isEmail, (details, value) => 'Invalid Email Address');

/*export const isValidPhoneNumber = (val) => val.match(/^(\+\d{1,2,3,4,5,6}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);*/
export const isValidPhoneNumber = (val) => val.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
export const phoneValidator = new Validator(isValidPhoneNumber, (details) => 'Invalid Phone Number.');

export const phoneCorrectLength = (val) => val.toString().length === 10 ;
export const phoneLengthValidator = new Validator(phoneCorrectLength, (details) => details.friendlyName +' requires 10 digits');

export const isValidPassword = (val) => val.match(/^[a-zA-Z0-9!@#$%^&*]/);
export const passwordValidator = new Validator(isValidPassword, (details) => 'Invalid Password');

export const passShortLength = (val) => val.toString().length >= 6;
export const passShortLengthValidator = new Validator(passShortLength, (details) => 'Increase Password Length');

export const passLongLength = (val) => val.toString().length <= 20;
export const passLongLengthValidator = new Validator(passLongLength, (details) => 'Decrease Password Length');

export const zipCorrectLength = (val) => val.toString().length === 5;
export const zipLengthValidator = new Validator(zipCorrectLength, (details) => details.friendlyName +' requires 5 digits');

export const isValidZip = (val) => val.match(/^[0-9]*$/);
export const zipValidator = new Validator(isValidZip, (details) => 'Invalid Zip Code.');
