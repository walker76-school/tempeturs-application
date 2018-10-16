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
export const emailValidator = new Validator(isEmail, (details, value) => value + ' is not a valid email address.');

// this is where we need to have the logic of confirming the email
export const emailConfirmation = (val) => val.match(/^[a-zA-Z0-9](\.?\+?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}$/);
export const emailConfirmationValidator = new Validator(emailConfirmation, details => details.friendlyName + ' must match initial email');

/*export const isValidPhoneNumber = (val) => val.match(/^(\+\d{1,2,3,4,5,6}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);*/
export const isValidPhoneNumber = (val) => val.match(/^[0-9\\-]*$/);
export const phoneValidator = new Validator(isValidPhoneNumber, (details) => ' Not a valid phone number.');

export const correctLength = (val) => val.toString().length <= 12 && val.toString().length >= 10;
export const lengthValidator = new Validator(correctLength, (details) => ' Incorrect Length');

export const isValidPassword = (val) => val.toString().length >= 6 && val.match(/^[a-zA-Z0-9!@#$%^&*]{6,64}$/);
export const passwordValidator = new Validator(isValidPassword, (details) => details.friendlyName + ' must be a valid password.');

// this is where we need to have the logic of confirming the password
export const passwordConfirmation = (val) => val.toString().length >= 6 && val.match(/^[a-zA-Z0-9!@#$%^&*]{6,64}$/);
export const passwordConfirmationValidator = new Validator(passwordConfirmation, details => details.friendlyName + ' must match initial password');