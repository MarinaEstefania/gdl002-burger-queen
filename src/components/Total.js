import React, { Component } from "react";

class Total extends Component {
  total(totalLikeArray) {
    let suma = 0;
    //console.log(totalLikeArray)
    totalLikeArray.map(item => {
      suma = suma + item.price * (item.amount + 1);
      return suma;
    });
    return suma;
  }
  render() {
    return (
      <div>
        <h3 className="total">Total: {this.total(this.props.order)} </h3>
      </div>
    );
  }
}

export default Total;
