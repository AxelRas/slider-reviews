import React from 'react';
import Reviews from './components/Reviews';
import data from './reviews.json';
import $ from 'jquery';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentReview: 0
    }

    this.nextReview = this.nextReview.bind(this);
    this.previousReview = this.previousReview.bind(this);
  }



  nextReview() {
    
    if(this.state.currentReview === data.reviews.length -1) {
    this.setState({
      currentReview: 0
    });
    } else {
    this.setState({
      currentReview: this.state.currentReview + 1
    });
    }
  }

  previousReview() {    
    if(this.state.currentReview === 0) {
      this.setState({
        currentReview: data.reviews.length -1
      });
    } else {
      this.setState({
        currentReview: this.state.currentReview - 1
      });
    }
  }


  render() {
    return (
      <div className="App">
        <div className="page-title">
          <h1>Our Reviews</h1>
        </div>
        <div className="all-three">
          <div className="arrows">
            <button id="left" onClick={this.previousReview}>&#60;</button>
          </div>

          <div className="review-parent">
            <Reviews data={data.reviews} current={this.state.currentReview} prev={this.state.prevReview} next={this.state.nextReview} />
          </div>

          <div className="arrows">
            <button id="right" onClick={this.nextReview}>&#62;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;