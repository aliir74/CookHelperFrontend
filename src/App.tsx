import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import { AppProvider } from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <Layout>
        <LandingPage />
      </Layout>
    </AppProvider>
  );
}

export default App;
