import { useEffect, useState } from "react";

function Productos() {

    const [pots, setPots] = useState([]);

    useEffect(() => {
        // Cargar datos desde el archivo JSON
        fetch("../../data/productos.json")
        .then((response) => response.json())
        .then((data) => setPots(data))
        .catch((error) => console.error("Error al cargar las macetas:", error));
    }, []);

    return (
        <section className="container section-macetas">
            <div className="row">
            <h2>LO MAS VENDIDO</h2>
            </div>
            <div className="row justify-content-between align-items-center">
            {pots.map((pot) => (
            <div className="pot-card col-md-4 text-center mb-5" key={pot.id}>
                <img src={pot.image} alt={pot.name} className="pot-image" />
                <h2 className="pot-name">{pot.name}</h2>
                <p className="pot-description">{pot.description}</p>
            </div>
            ))}
            </div>
        </section>
    );
  }
  
  export default Productos;