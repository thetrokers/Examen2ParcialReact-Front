import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../class/User";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [job, setJob] = useState("");
  const [avatar, setAvatar] = useState(0);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const avatarItems = [
    "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
    "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    "https://img.daisyui.com/images/profile/demo/distracted1@192.webp",
  ];

  const createNew = () => {
    const user = new User(
      name,
      lastName,
      email,
      twitter,
      job,
      avatarItems[avatar]
    );
    axios
      .post("https://congresoticsserver.onrender.com/users", user)
      .then((res) => {
        if (res.status === 201) {
          alert("Participante registrado exitosamente");
          navigate("/participantes");
        }
      })
      .catch(() => alert("Error al registrar participante"));
  };

  return (
    <form className="p-3 border rounded shadow bg-white">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Apellidos"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Twitter"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Ocupación"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-around mb-3">
        {avatarItems.map((img, idx) => (
          <div key={idx} className="text-center">
            <img
              src={img}
              alt={`Avatar ${idx + 1}`}
              className={`rounded-circle border ${
                avatar === idx ? "border-primary border-3" : ""
              }`}
              style={{ width: "80px", height: "80px", cursor: "pointer" }}
              onClick={() => setAvatar(idx)}
            />
            <p>Avatar {idx + 1}</p>
          </div>
        ))}
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={() => setTerms(!terms)}
          checked={terms}
          id="termsCheck"
        />
        <label className="form-check-label" htmlFor="termsCheck">
          Acepto los términos y condiciones
        </label>
      </div>

      <button
        type="button"
        className="btn btn-success w-100"
        disabled={!terms}
        onClick={createNew}
      >
        Guardar
      </button>
    </form>
  );
}
