import {React} from "react";

import "./style.css";



function Home() {

return ( <>
        <div className="hero_container">
           <div className="hero_text">
              <h1>Your Home Page </h1>
              <div className="hero_button">
                 <a href="/signin">
                 <input type="button" name="signin" value="Sign in" className="hero_button1" />
                 </a>
              </div>
           </div>
        </div>
    </>);
}

export default Home;
