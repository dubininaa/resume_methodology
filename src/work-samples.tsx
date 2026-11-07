import { createRoot } from "react-dom/client";
import App from "./App";
import WorkSamplesPage from "./pages/WorkSamplesPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App><WorkSamplesPage /></App>);
