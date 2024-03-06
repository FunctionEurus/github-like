import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import New from "./pages/New";
import Issues from "./pages/Issues";
import Pulls from "./pages/Pulls";
import Notifications from "./pages/Notifications";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="dashboard" element={<Index />} />
        <Route path="new" element={<New />} />
        <Route path="issues" element={<Issues />} />
        <Route path="pulls" element={<Pulls />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
