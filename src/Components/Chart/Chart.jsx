import React {useState, useEffect} from 'react';
import { fetchDailyData, fetchData} from '../../api';
import {line, Bar} from 'react-chartjs2';
import styles from './Chart.module.css';


export const Chart = () => {
const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData = (await fetchDailyData());

        }
        fetchAPI();
    });

    const lineChart = (
        dailyData[0]
        ?(
            <Line
            data={{
                labels: dailyData(({ date })) => Date),
                datasets:[{}, {}],
                data:dailyData(({confirmed})) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill:true;
            },  }
            {],
            }}
          />) : null  
        );
        
    return(
            <h1>Chart</h1>
    
    )
}

export default Chart;