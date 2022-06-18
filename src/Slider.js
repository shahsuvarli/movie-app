import { Component } from "react";

class Slider extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main-slider">
        <img src={this.state.data.img} />
      </div>
    );
  }
}
export default Slider;
