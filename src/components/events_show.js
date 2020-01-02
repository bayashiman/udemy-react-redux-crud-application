import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { deleteEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    //await this.props.postEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          
          {/*タイトル部分 */}
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField} />
          
          {/*ボディー部分 */}
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField} />
         
          {/*送信ボタン（submit）部分 */}
          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
          
            {/*キャンセルボタン（submit）部分 */}
            <Link to="/" >Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
          </div>

        </div>
      </form>
    )
  }
}
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"

  return errors
}
const mapDispatchToProps = ({ deleteEvent })


export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)
