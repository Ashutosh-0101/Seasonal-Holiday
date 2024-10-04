import "./App.css";
import Seasonal from "./modules/seasonal";
import Contact from "./modules/contact";
import HolidayProvider from "./context/HolidayProvider";
import ContactProvider from "./context/ContactProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <HolidayProvider>
                  <Seasonal />
                </HolidayProvider>
              }
            />
            <Route
              path="/contact"
              element={
                <ContactProvider>
                  <Contact />
                </ContactProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
