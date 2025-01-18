import { ComponentType, lazy as rlazy, LazyExoticComponent } from "react";
import { Route, Routes } from "react-router";

import AuthenticatedPage from "./components/AuthenticatedPage.tsx";

function lazy<T extends ComponentType<unknown>>(
  load: () => Promise<{ default: T }>,
): LazyExoticComponent<T> {
  return rlazy(() =>
    Promise.all([
      load(),
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]).then(([moduleExports]) => moduleExports),
  );
}

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));

export default function App() {
  return (
    <Routes>
      <Route element={<AuthenticatedPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
