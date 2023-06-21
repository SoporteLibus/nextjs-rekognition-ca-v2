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
      maintainAspectRatio:false,
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
    };
    let labels: string[] = [];
    
    var dat=info.length
    var dato=info.jornada;
      for (let i=1; i<dat+1;i++){
          labels.push(`${i}`)        
      } 
    let valor:Array<number>=[]
    var datos=labels.map((obj:any)=>{ 
      dato.map((obj:any)=>{
        if(obj.entrada==null||obj.salida==null){
          valor.push(0)
        }else if (obj.entrada && obj.salida){
          valor.push(8)
        }
      })
    })

    const data: ChartData<'bar', number[], string> = {
      labels,
      datasets: [
        {
          data: Array.from({ length: length }, () => Math.floor(Math.random() * 9) + 1),
          backgroundColor: 'green',
          borderRadius:6,
          barThickness:6,
          borderWidth:0.09
        },
      ],
      
    };
    return (
          <>
            <div className="chart-container">
              <Bar options={options} data={data} width={"40px"} height={"60px"} />
            </div>
              
          </>
    );
  };
  
  export default ChartTsx;