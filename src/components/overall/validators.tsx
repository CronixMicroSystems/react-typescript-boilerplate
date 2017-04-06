import * as validator from 'validator'

export function ValidatorError (name, status, err) {
  !status && err.indexOf(name) === -1 ? err.push(name) : ''
  status && err.indexOf(name) !== -1 ? err.splice(err.indexOf(name), 1) : ''
  console.log('this.state.Errors', err)
  return err
}

export function ValidatorFirstName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}

export function ValidatorLastName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}

export function ValidatorEmail (value) {
  return validator.isEmpty(value) || !validator.isEmail(value)
}

export function ValidatorPassword (value) {
  return !validator.isLength(value, { min: 6, max: 64 }) || validator.isEmpty(value)
}

export function ValidatorName (value) {
  return !validator.isLength(value, { min: 6, max: 64 })
}

export function ValidatorBillingData (value) {
  return !validator.isLength(value, { min: 6, max: 64 })
}

export function ValidatorNumberOfUsersAllowed (value) {
  return !validator.isNumeric(value)
}

export function ValidatorNumberOfPhysiciansAllowed (value) {
  return !validator.isNumeric(value)
}

export function ValidatorDurationOfContract (value) {
  return !validator.isNumeric(value)
}

export function ValidatorLicenseNumber (value) {
  return !validator.isNumeric(value)
}

export function ValidatorTemperatureUnitId (value) {
  return !validator.isNumeric(value)
}

export function ValidatorPhone (value) {
  return !validator.isLength(value, { min: 5, max: 12 })
}

export function ValidatorMessage (value) {
  return !validator.isLength(value, { min: 6, max: 256 })
}

export function ValidatorBillingName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}

export function ValidatorBillingAddress (value) {
  return !validator.isLength(value, { min: 6, max: 256 })
}

export function ValidatorPrimaryAddress (value) {
  return !validator.isLength(value, { min: 6, max: 256 })
}

export function ValidatorPrimaryName (value) {
  return validator.isEmpty(value) || !validator.isLength(value, { min: 0, max: 64 })
}
