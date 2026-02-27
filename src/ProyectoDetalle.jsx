import { useParams } from "react-router-dom";

function ProyectoDetalle() {
  const { codigo } = useParams();

  return (
    <div>
      <h1>Detalles del Proyecto</h1>
      <p>Códigos del proyecto: {codigo}</p>
    </div>
  );
}

export default ProyectoDetalle;