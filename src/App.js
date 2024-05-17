import "./App.css";
import { SearchProvider } from "./components/provider/SearchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import DetailPages from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<DetailPages />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
