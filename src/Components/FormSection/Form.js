import React, {useState} from 'react';
import './Form.css';

function Form(props) {

    const [inputDescription, setName] = useState('');
    const [inputPrice, setSum] = useState('');
    const [inputDate, setDate] = useState('');





    function nameChange(event) {
        setName(event.target.value);
    }
     function sumChange(event) {
        setSum(event.target.value)
    }
     function dateChange(event) {
        setDate(event.target.value);
     }


    function submitForm(event) {
        event.preventDefault();

        const costDate = {
            description: inputDescription,
            price: inputPrice,
            date: new Date(inputDate)
        };
        props.onSaveData(costDate);
        setName('');
        setSum('');
        setDate('');
    };


 return (
    <form onSubmit={submitForm}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input type='text' value={inputDescription} onChange={nameChange}></input>
                </div>
                 <div className='new-cost__control'>
                    <label>Sum</label>
                    <input type='number' min='0.01' step='0.01' value={inputPrice} onChange={sumChange}></input>
                </div>
                 <div className='new-cost__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2023-12-31' value={inputDate} onChange={dateChange}></input>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>New cost</button>
                    <button type='button' onClick={props.onCancel}>Cancel</ button>
                </div>
            </div>
        </form>
        );
}

export default Form;