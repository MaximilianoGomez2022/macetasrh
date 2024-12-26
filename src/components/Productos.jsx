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
            <div className="row row-macetas align-items-center">
            {pots.map((pot) => (
            <div className="pot-card col-md-4 text-center mb-5" key={pot.id}
            onClick={() => openModal(pot)}>
                <img src={pot.image} alt={pot.name} className="pot-image" />
                <h2 className="pot-name">{pot.name}</h2>
                <p className="pot-description">{pot.description}</p>
            </div>
            ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedPot && (
                <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>
                    &times;
                    </button>
                    <img
                    src={selectedPot.image}
                    alt={selectedPot.name}
                    className="modal-image"
                    />
                    <h2>{selectedPot.name}</h2>
                    <p>{selectedPot.description}</p>
                    <p className="modal-price">Precio: $ {selectedPot.price}</p>
                </div>
                </div>
            )}

        </section>
    );
  }
  
  export default Productos;