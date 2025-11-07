import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "./NavigationBar";

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/participantes");
  }, []);

  return (
    <>
      <div className="min-vh-100 bg-light d-flex flex-column">
        <NavigationBar />
        <main className="container flex-grow-1 py-4">
          <Outlet />
        </main>
        <footer className="text-center py-3 bg-primary text-white mt-auto">
          Congreso TIC’s Universidad Tecnológica de León
        </footer>
      </div>
    </>
  );
}
