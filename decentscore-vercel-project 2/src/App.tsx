import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Showcase from "./Showcase";

function getRoute() {
  return window.location.hash === "#/dashboard" ? "dashboard" : "showcase";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route === "dashboard" ? <Dashboard /> : <Showcase />;
}
