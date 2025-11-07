import LandingPage from "./pages/LandindPage";

const App = () => {
  return (
    <>
      <div
        className="d-flex w-100 vh-100 bg-light"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LandingPage />
      </div>
    </>
  );
};

export default App;
