import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white" href="#">
          Congreso TIC’s
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/")}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => navigate("/participantes")}
              >
                Participantes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/registro")}>
                Registro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
