import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const currencyList = data.map(eachCurrencyObj => ({
      currencyName: eachCurrencyObj.currency_name,
      usdValue: eachCurrencyObj.usd_value,
      euroValue: eachCurrencyObj.euro_value,
      id: eachCurrencyObj.id,
      currencyLogo: eachCurrencyObj.currency_logo,
    }))

    this.setState({
      currencyList,
      isLoading: false,
    })
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
