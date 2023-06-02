import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ChartOptions, ChartData, ScriptableContext} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import style from "./chart.module.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const ChartTsx = (info: any) => {
    const options: ChartOptions<'bar'> = {
      responsive: true,
      indexAxis: 'x',
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      elements: {
        bar: {
          borderWidth: 0.5, // Ajusta el ancho de las líneas
        },
      },


    };
  
    const labels: string[] = ['', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', '',];
    const data: ChartData<'bar', number[], string> = {
      labels,
      datasets: [
        {

          data: labels.map(() => Math.floor(Math.random() * (12 - 1) + 1)),
          backgroundColor: 'green',
          categoryPercentage: 0.8,
          barPercentage:0.4
          
 
        },
      ],
    };
    return (
          <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Bar options={options} data={data} height={3} width={17} style={{paddingBottom: "18px"}}/>
            </div>
              
          </>
    );
  };
  
  export default ChartTsx;