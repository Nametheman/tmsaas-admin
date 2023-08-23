import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Clients from "./Clients/Clients";
import Transaction from "./Transaction/Transaction";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
// import Playground from "./Playground";
import Playground from "./Playground";
import Revenue from "./RevenuePage/Revenue";
import Settings from "./Settings/Settings";
import Support from "./Support/Support";
import ClientPage from "./Clients/ClientPage";
import Login from "./Login";
import { ProtectedRoute } from "./hooks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="services" element={<Services />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="play" element={<Playground />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
            <Route path="clientpage" element={<ClientPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
