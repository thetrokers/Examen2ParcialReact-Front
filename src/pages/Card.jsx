export default function Card({ data }) {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <img
                src={data.avatar}
                alt={data.name}
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <h3>
                {data.name} {data.lastName}
              </h3>
              <p className="text-muted">{data.job}</p>
            </div>
            <div className="card-footer bg-primary text-white">
              Universidad Tecnológica de León
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>
                Twitter: <span className="text-primary">{data.twitter}</span>
              </h5>
              <h5>
                Email: <span className="text-primary">{data.email}</span>
              </h5>
            </div>
            <div className="card-footer bg-dark text-white">
              <img
                src="/frame.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
