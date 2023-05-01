import './ExpensesDate.css'

function ExpensesDate(props) {
    const month = props.date.toLocaleString('en-EN', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-EN', {day: '2-digit'});

    return (
            <div className='expens-date'>
                <div className='expens-date__month'>{month}</div>
                <div className='expens-date__year'>{year}</div>
                <div className='expens-date__day'>{day}</div>
            </div>
    );
}

export default ExpensesDate;