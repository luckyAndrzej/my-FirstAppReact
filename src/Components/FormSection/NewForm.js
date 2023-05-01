import React, {useState} from 'react';
import Form from './Form';
import './NewForm.css';

function NewForm(props) {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDate = (inputCostDate) => {
        const costData = {
            ...inputCostDate,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);
        setIsFormVisible(false)
    };

    const inputCostDateHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible && (<button onClick={inputCostDateHandler} >Add New Expense</button>)}
            {isFormVisible && <Form onSaveData={saveCostDate} onCancel={cancelCostHandler} />}
        </div>
    );
}

export default NewForm;