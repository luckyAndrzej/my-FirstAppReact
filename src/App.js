import React, {useState} from 'react'
import Cost from './Components/Cost/Costs.js';
import NewForm from './Components/FormSection/NewForm';

const INITIAL_COST = [
        {
            id: 'c1',
            date: new Date(2022, 3, 12),
            description: 'холодильник',
            price: 213.12,
        },
        {
            id: 'c2',
            date: new Date(2023, 5, 27),
            description: 'штаны',
            price: 23.12,
        },
        {
            id: 'c3',
            date: new Date(2020, 2, 1),
            description: 'майка',
            price: 21.2,
        },]

function App() {

    const [costs, setCosts] = useState(INITIAL_COST);

    function addCostHandler(cost) {
       setCosts(prevCosts => {
            return [cost, ...prevCosts]
       });
    };


    return (
        <div>
            <NewForm onAddCost={addCostHandler} />
            <Cost costs = {costs} />
        </div>
    );
};

export default App;
