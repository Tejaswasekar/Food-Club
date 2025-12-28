import User from "./User";

import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to Food Club! We are dedicated to bringing you the best
          culinary experiences from around the world. Our mission is to connect
          food lovers with amazing restaurants and delicious dishes.
        </p>
        <p>
          At Food Club, we believe that food is more than just sustenance; it's
          a way to explore cultures, share moments, and create memories. Join us
          on this gastronomic journey!
        </p>

        {/* <User name="Tejas Wasekar (function)" location="Pune (function)" /> */}

        {/* <UserClass name="First" location="Pune (class)" /> */}
        <User name="Tejas Wasekar (function)" location="Pune (function)" />
      </div>
    );
  }
}


export default About;
