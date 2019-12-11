import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage.component";
import MapPage from "./pages/MapPage/mappage.component";
import ForumPage from "./pages/ForumPage/forumpage.component";
import OpinionPage from "./pages/OpinionPage/opinionpage.component";
import ScorePage from "./pages/ScorePage/scorepage.component";
import ComplaintPage from "./pages/ComplaintPage/complaintpage.component";
import LoginPage from "./pages/LoginPage/loginpage.component.jsx";
// import Nav from "./components/Nav/nav.component";
import Footer from "./components/Footer/footer.component";
// import NavigationSchema from "./components/NavigationSchema/navigationschema.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*<Nav />
      <NavigationSchema />*/}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/mapasinterativos" component={MapPage} />
        <Route exact path="/forum" component={ForumPage} />
        <Route exact path="/opine" component={OpinionPage} />
        <Route exact path="/pontos" component={ScorePage} />
        <Route exact path="/denuncie" component={ComplaintPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
