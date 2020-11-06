import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  increaseCounter,
  decreaseCounter
} from './redux/Counter/counter.actions'

import './App.css'

function App (props) {
  return (
    <div className='App'>
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())
  }
}

App.propTypes = {
  count: PropTypes.number,
  increaseCounter: PropTypes.func,
  decreaseCounter: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
