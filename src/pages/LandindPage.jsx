import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center vh-100  bg-light container-md-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold display-5 mb-4 text-primary">
        Congreso de Tecnologías de la Información
      </h1>
      <img
        src="https://www.utleon.edu.mx/resource/img/por%20siempre.png"
        alt="Logo UTL"
        className="img-fluid mb-4"
        style={{ maxWidth: "300px" }}
      />
      <button
        className="btn btn-primary btn-lg"
        onClick={() => navigate("/participantes")}
      >
        Entrar Ahora
      </button>
    </div>
  );
}
