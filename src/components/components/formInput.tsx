import * as React from 'react'

import {TemplateInput} from './templateInput'

import {
  ValidatorFirstName,
  ValidatorLastName,
  ValidatorEmail,
  ValidatorPassword,
  ValidatorName,
  ValidatorNumberOfPhysiciansAllowed,
  ValidatorNumberOfUsersAllowed,
  ValidatorBillingData,
  ValidatorDurationOfContract,
  ValidatorLicenseNumber,
  ValidatorTemperatureUnitId
} from '../overall/validators'

export const FirstNameInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="FirstName"
      errorText={['Errors.Length', {min: 0, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorFirstName}
      fullWidth
      required={required}/>
  )
}

export const LastNameInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="LastName"
      errorText={['Errors.Length', {min: 0, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorLastName}
      fullWidth
      required={required}/>
  )
}

export const EmailInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Email"
      errorText={['Errors.Email']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorEmail}
      fullWidth
      required={required}/>
  )
}

export const PasswordInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Password"
      errorText={['Errors.Password', {min: 6, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorPassword}
      fullWidth
      required={required}/>
  )
}

export const NameInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="Name"
      errorText={['Errors.Password', {min: 6, max: 64}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorName}
      fullWidth
      required={required}/>
  )
}

export const NumberOfPhysiciansAllowedInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      type="number"
      name="NumberOfPhysiciansAllowed"
      errorText={['Errors.Numeric']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorNumberOfPhysiciansAllowed}
      fullWidth
      required={required}/>
  )
}

export const NumberOfUsersAllowedInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      type="number"
      name="NumberOfUsersAllowed"
      errorText={['Errors.Numeric']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorNumberOfUsersAllowed}
      fullWidth
      required={required}/>
  )
}

export const BillingDataInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="BillingData"
      errorText={['Errors.Length', {min: 6, max: 128}]}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorBillingData}
      fullWidth
      required={required}/>
  )
}

export const DurationOfContractInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      type="number"
      name="DurationOfContract"
      errorText={['Errors.Numeric']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorDurationOfContract}
      fullWidth
      required={required}/>
  )
}

export const LicenseNumberInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="LicenseNumber"
      errorText={['Errors.Invalid']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorLicenseNumber}
      fullWidth
      required={required}/>
  )
}

export const TemperatureUnitIdInput = ({ value, onChange, onError, required = true }) => {
  return (
    <TemplateInput
      name="TemperatureUnitId"
      errorText={['Errors.Invalid']}
      value={value}
      onChange={onChange}
      onError={onError}
      fnValidator={ValidatorTemperatureUnitId}
      fullWidth
      required={required}/>
  )
}

