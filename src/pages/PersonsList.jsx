import { useNavigate } from "react-router-dom";

export default function List({ pearsonList = [] }) {
  return (
    <div className="container mt-3">
      <h5 className="text-muted mb-3">Participantes registrados</h5>
      <div className="row">
        {pearsonList.length > 0 ? (
          pearsonList.map((item, index) => <ListItem key={index} data={item} />)
        ) : (
          <p>No hay participantes aún.</p>
        )}
      </div>
    </div>
  );
}

function ListItem({ data }) {
  const navigation = useNavigate();
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm border-0">
        <img
          src={data.avatar}
          className="card-img-top rounded-circle mx-auto mt-3"
          alt={data.name}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{`${data.name} ${data.lastName}`}</h5>
          <p className="text-muted">{data.job}</p>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => navigation(`/index/gafete/${data.id}`)}
          >
            Ver Gafete
          </button>
        </div>
      </div>
    </div>
  );
}
