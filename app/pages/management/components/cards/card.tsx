import "./styles/card.css"

interface HorizontalBarProps {
    nombre: string;
    apellido: string;
    legajo: number;
  }
  
  const HorizontalBar: React.FC<HorizontalBarProps> = ({
    nombre,
    apellido,
    legajo,
  }) => {
    // Genera datos aleatorios para las barras del gráfico
    const data = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 100)
    );
  
    return (
      <div className="horizontal-bar">
        <div className="profile">
          <div className="profile-image">
            {/* Aquí puedes reemplazar la imagen con tu propia imagen circular */}
            <img />
          </div>
          <div className="profile-details">
            <p>{nombre} {apellido}</p>
            <p>Número de legajo: {legajo}</p>
          </div>
        </div>
        <div className="chart">
          {data.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HorizontalBar;