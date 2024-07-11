import React from 'react'

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
  
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);  

export default function RadarChart({ scores }) {
  const data = {
    labels: ['Curiosity', 'Creativity', 'Analytical Skills', 'Empathy', 'Leadership', 'Adaptability'],
    datasets: [
        {
        label: 'Character Traits',
        data: [scores.curiosity, scores.creativity, scores.analytical, scores.empathy, scores.leadership, scores.adaptability],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        },
    ],
    };
    const options = {
        scales: {
            r: {
                beginAtZero: true,
            },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
    }
  return (
    <div className='w-[350px] h-[350px] bg-white p-4 rounded-2xl'>
      <p className='text-center text-xl'>Character Traits</p>
      <Radar data={data} options={options}/>
    </div>
  )
}
