import { GlobalStyles } from "./globalstyling";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Routes></Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
}

export default App;
