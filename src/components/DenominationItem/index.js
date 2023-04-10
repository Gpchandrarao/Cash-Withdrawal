// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const onTotalUpdate = () => {
    balanceDeduction(value)
  }

  return (
    <li className="li-list">
      <div>
        <button type="button" className="btn" onClick={onTotalUpdate}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
