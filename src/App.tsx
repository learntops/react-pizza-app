import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import AppLayout from "./components/AppLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/homepage" element={<Homepage />} />
        </Route>

        <Route index element={<Navigate to="/homepage" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
