import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props

  return (
    <div className="crypto-currency-list-bg-container">
      <h1 className="main-heaing">Cryptocurrency Tracker</h1>
      <img
        className="crypto-currency-tracker-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="crypto-list-card">
        <li className="crypto-item-heading">
          <div className="crypto-type-container">
            <p className="currency-name-heading">Coin Type</p>
          </div>
          <div className="value-card">
            <p className="currency-usd-heading">USD</p>
            <p className="currency-euro-heading">EURO</p>
          </div>
        </li>
        {currencyList.map(eachObject => (
          <CryptocurrencyItem
            key={eachObject.id}
            currencyDetails={eachObject}
          />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
