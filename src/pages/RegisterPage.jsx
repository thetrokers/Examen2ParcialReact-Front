import Form from "./Form";

export default function RegisterPage() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center text-primary mb-4">
          Registro de Participantes
        </h2>
        <Form />
      </div>
    </div>
  );
}
