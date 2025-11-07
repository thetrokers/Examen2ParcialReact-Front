import { useNavigate } from "react-router-dom";
import List from "./PersonsList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PearsonsPage() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const getUsers = () => {
    axios
      .get("https://examen2parcialback.onrender.com/users")
      .then((response) => {
        if (response.status === 200) setList(response.data);
      })
      .catch(() => console.error("Error al obtener usuarios"));
  };

  useEffect(() => {
    const filtered = list.filter((user) =>
      user.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredList(filtered);
  }, [filterName, list]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold text-primary">Asistentes Registrados</h2>
          <button
            className="btn btn-success"
            onClick={() => navigate("/registro")}
          >
            + Nuevo Registro
          </button>
        </div>

        <div className="input-group mb-4">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar participante por nombre..."
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
        </div>

        <List pearsonList={filteredList} />
      </div>
    </div>
  );
}
