import './CostList.css'
import Expenses from './Expenses'

const CostList = (props) => {
    if(props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>No expenses this year</h2>;
    }

    return (
        <ul className='cost-list'>
            {props.costs.map((cost) => (
                <Expenses
                    key = {cost.id}
                    date = {cost.date}
                    description = {cost.description}
                    price = {cost.price}
                />
            ))}
        </ul>
   )
}

export default CostList;