import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useReport from '../hooks/useReport';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

export function Chart() {
    const { reports } = useReport()
    const filteredValues = reports?.revenuePerHour?.filter(value => value !== 0) || [];
    const labels = filteredValues || []
    const data = {
        labels,
        datasets: [
            {
                data: filteredValues || [],
                borderColor: '#77D9A1',
                backgroundColor: '#77D9A1',
            },
        ],
    };
    return <Line data={data} />;
}
