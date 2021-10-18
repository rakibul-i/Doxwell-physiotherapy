import { Route, Switch } from "react-router-dom";
import Header from "./pages/shared/header/Header";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Footer from "./pages/shared/Footer";
import Services from "./pages/services/Services";
import About from "./pages/shared/About";
import ServiceDetails from "./pages/services/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Switch>
        <Route path="/service/:id" component={ServiceDetails} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
