import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name: "Dummy Name",
            location: "Dummy Location",
            contact: "Dummy Contact",
        }
    };

    console.log(this.props.name+"Child Constructor");
  }

  

  async componentDidMount() {
    console.log(this.props.name+"Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/TejasWasekar");
    const json = await data.json();

    console.log(json);
    
    this.setState({
        userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Timer");
    }, 1000);
    
  }

  componentDidUpdate(){
    console.log("component Did Update");
    
  }

  componentWillUnmount(){
    
    clearInterval(this.timer);
    console.log("component Will Unmount");
  }

  render() {
    console.log(this.props.name+"Child Render");
    const {name,location,contact,avatar_url} = this.state.userInfo;

    return (
      <div className="user-class">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
