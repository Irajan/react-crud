import { Route, Switch } from "react-router-dom";
import "../../../assets/css/home.css";
import Navigation from "./Navigation";
import PostContainer from "./PostContainer";
import UserContainer from "./UserContainer";

function Home() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/users" component={UserContainer} />
        <Route path="/" component={PostContainer} />
      </Switch>
    </div>
  );
}

export default Home;
