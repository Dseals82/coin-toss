import React, {Component} from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {sides: 'heads', url:"https://tinyurl.com/react-coin-heads-jpg"},
      {sides: 'tails', url:"https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      nHeads: 0,
      nTails: 0,
      nFlips:0,
      currCoin: null
    };
  }
  render(){
    return(
      <div className="CoinContainer">
        <h2>Lets flips a coin!</h2>
          <p>
            Out of {this.state.nFlips} flips,
            there have been {this.state.nHeads} heads and {this.state.nTails} tails.
          </p>
      </div>
    );
  }
}




export default CoinContainer;
