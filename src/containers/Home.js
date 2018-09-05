import React , {Component} from "react";
import "./Home.css";

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
            <div className="lander">
              <h1> Claim <span aria-label="skier" role="img">🔮</span>️</h1>
              <p>Allows you to organize all your insurance claims in one central place!</p>
            </div>
            </div>
        )
    }
}