import LandingPage from "./pages/LandindPage";

const App = () => {
  return (
    <>
      <div
        className=""
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
