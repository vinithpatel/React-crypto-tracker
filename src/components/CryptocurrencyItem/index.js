import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="crypto-item">
      <div className="crypto-type-container">
        <img className="currency-image" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-card">
        <p className="currency-usd">{usdValue}</p>
        <p className="currency-euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
