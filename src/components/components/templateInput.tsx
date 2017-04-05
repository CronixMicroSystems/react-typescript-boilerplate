import * as React from 'react'
import * as Dispatch from 'redux'
import {connect} from 'react-redux'
import {Validate} from 'react-validate'
import TextField from 'material-ui/TextField'
import {blue500} from 'material-ui/styles/colors'
import {I18n} from 'react-redux-i18n'
import RootState from '../../store/index'

const STYLES = {
  floatingLabelFocusStyle: {
    color: blue500
  },
  underlineFocusStyle: {
    borderColor: blue500
  }
}

interface Props {
  dispatch: Dispatch<RootState>
}

class TemplateInput extends React.Component<Props, {}> {

  constructor (props) {
    super(props)

    this.state = {
      Name: this.props.name,
      Label: this.props.label,
      HintText: this.props.hintText,
      ErrorText: this.props.errorText,
      fnValidator: this.props.fnValidator,
      onError: this.props.onError,
      onChange: this.props.onChange,
      FieldValue: this.props.value,
      StatusChanged: false,
      FieldValueError: '',
      type: this.props.type || 'text',
      required: this.props.required || false,
      fullWidth: this.props.fullWidth,
      multiLine: this.props.multiLine || false,
      rows: this.props.rows || 1,
      rowsMax: this.props.rows || 1
    }
  }

  fnChangeValue (event) {
    const value = event.target.value

    this.setState({FieldValue: value, StatusChanged: true})

    this.validateLocal()
  }

  validateLocal () {
    const value = this.state.FieldValue

    let checked = true

    if (this.state.required || (!this.state.required && value.length)) {
      if (this.state.fnValidator(value)) {
        checked = false

        this.setState({FieldValueError: this.state.StatusChanged ? this.state.ErrorText : ''}, () => this.props.onError && this.props.onError(this.state.Name))
      }
    }

    if (checked) {
      this.setState({FieldValueError: ''})
    }

    this.props.onChange && this.props.onChange(value, this.state.Name, checked)

    return checked
  }

  render () {
    return (
      <div className="wrap-template-input">
        <Validate validators={[::this.validateLocal]}>
          <TextField
            type={this.state.type}
            floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
            underlineFocusStyle={STYLES.underlineFocusStyle}
            hintText={this.state.HintText || I18n.t('Labels.hintText', {label: I18n.t(`Labels.${this.state.Name}`)})}
            floatingLabelText={this.state.Label || I18n.t(`Labels.${this.state.Name}`)}
            errorText={Array.isArray(this.state.FieldValueError) ? I18n.t(this.state.FieldValueError[0], {label: I18n.t(`Labels.${this.state.Name}`), ...this.state.FieldValueError[1] || {}}) : this.state.FieldValueError}
            value={this.state.FieldValue}
            onChange={::this.fnChangeValue}
            fullWidth={this.state.fullWidth}
            multiLine={this.state.multiLine}
            rows={this.state.rows}
            rowsMax={this.state.rowsMax}
                />
        </Validate>
      </div>
    )
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(TemplateInput)
