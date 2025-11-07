import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function TicketScreen() {
  const [selectedUser, setSelectedUser] = useState(null);
  const { id } = useParams();

  const getUser = () => {
    axios
      .get(`https://examen2parcialback.onrender.com/users/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setSelectedUser(response.data);
        } else {
          alert("Error al mostrar la información del usuario");
        }
      })
      .catch(() => console.error("Error de servidor"));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-5">
      {selectedUser ? (
        <>
          <h2 className="text-center text-primary mb-4">
            Gafete del Participante
          </h2>
          <Card data={selectedUser} />
        </>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Cargando información...</p>
        </div>
      )}
    </div>
  );
}
