import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Authcontext";
import Settings from "./components/setting/Settings";
// import Navbar from "./components/navbar/Navbar";
import MainApp from "./MainApp";
import MainSetting from "./MainSetting";
import Treatments from "./components/treatments/Treatments";
import SkinImprovements from "./components/treatments/SkinImprovements";
import MainTreatments from "./MainTreatments";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainApp />}>
              {/* <Route path="/" element={<Navbar />} /> */}
              <Route path="/Settings" element={<Settings />} />
              <Route path="/app" element={<MainSetting />}>
                <Route path="/app/Treatments" element={<Treatments />} />
                <Route path="/app/Treatments" element={<MainTreatments />}>
                  <Route
                    path="/app/Treatments/SkinImprovements"
                    element={<SkinImprovements />}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
