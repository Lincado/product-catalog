import { Header } from "./components/Header";
import RoutePage from "./routes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutePage />
      </BrowserRouter>
    </>
  );
}
