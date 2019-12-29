import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>counter: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
