import React from "react";
import { Button } from "@/Components/ui/button";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Name",
        avatar_url: "url",
      },
      buttonClicked: false,
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/hemanth-bavirisetty"
    );
    const json = await data.json();
    console.log(json);
    console.log("ComponentDidMount called");
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("CompnentWillUnmount");
  }

  render() {
    console.log("Render called");

    return (
      <div className=" text-center rounded-xl p-5 items-center">
        <img
          src={this.state.userInfo.avatar_url}
          style={{ margin: "auto", width: "150px" }}
        />
        <h1 className="text-xl p-3 font-semibold text-black">{`${this.state.userInfo.name}`}</h1>
        <div>
        <h2>{`${this.state.buttonClicked}`}</h2>
        <Button
          variant={"link"}
          onClick={() => {
            this.setState({
              buttonClicked: true,
            });
            console.log("buttonClicked value changed to true");
          }}
        >
          Clicked
        </Button>
        <Button
          variant={"link"}
          onClick={() => {
            this.setState({
              buttonClicked: false,
            });
            console.log("buttonClicked value changed to false");
          }}
        >
          Not-Clicked
        </Button></div>
      </div>
    );
  }
}

export default Profile;
