import React, { useState } from 'react';
import './Cost.css';
import Card from '../Card/Card';
import CostsFilter from './CostsFilter.js';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filterCost = props.costs.filter((cost) =>
    {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear}
                onChangeYear={yearChangeHandler} />
                <CostsDiagram costs={filterCost}/>
                <CostList costs={filterCost}/>
            </Card>
        </div>
    );
};

export default Costs;