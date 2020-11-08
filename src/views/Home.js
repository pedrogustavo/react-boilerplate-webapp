import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { increaseCounter, decreaseCounter } from '../redux/Counter/counter.actions'

function Home (props) {
  const [language, setLanguage] = useState('pt-BR')

  const { t, i18n } = useTranslation()
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const handleChange = event => {
    setLanguage(event.target.value)
    changeLanguage(event.target.value)
  }

  return (
    <div>
      <p>{t('welcome')}</p>
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

      <select value={language} onChange={handleChange}>
        <option value='pt-BR'>pt-BR</option>
        <option value='en-US'>en-US</option>
      </select>
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

Home.propTypes = {
  count: PropTypes.number,
  increaseCounter: PropTypes.func,
  decreaseCounter: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
