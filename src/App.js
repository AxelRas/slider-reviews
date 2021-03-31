import React from 'react';
import Reviews from './components/Reviews';
import data from './reviews.json';
import $ from 'jquery';

let reviewsArr=[
  <div key="review-0" id="review-0" className="review">
      <img src={data.reviews[0].picture} alt={data.reviews[0].picture}></img>
      <div className="review-text">
          <p className="name">{data.reviews[0].name}</p>
          <p className="role">{data.reviews[0].role.toUpperCase()}</p>
          <p className="desc">{data.reviews[0].reviewDesc}</p>
      </div>
  </div>
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentReview: 0,
      reviews: reviewsArr,
      nextCalled: false,
      prevCalled: false
    }

    this.nextReview = this.nextReview.bind(this);
    this.previousReview = this.previousReview.bind(this);
  }

  componentDidUpdate() {
    if(this.state.nextCalled) {
      $(".review").animate({right: "720px"}, 605, function () { $(this).removeAttr('style'); });
      
      setTimeout(() => {
        this.setState({
          nextCalled: false,
          reviews: [this.state.reviews[1]]
        });
      }, 600)
    } else if(this.state.prevCalled) {
      $(".review").css({"position": "relative", "right": "720px"});
      $(".review").animate({left: "0px"}, 605, function () { $(this).removeAttr('style'); });

      // , function () { $(this).removeAttr('style'); }
      
      setTimeout(() => {
        this.setState({
          prevCalled: false,
          reviews: [this.state.reviews[0]]
        });
      }, 600)
    }
  }

  nextReview() {

    this.setState({
      nextCalled: true
    });

    let nextReviewId = 0;

    if(this.state.currentReview !== data.reviews.length -1){
      nextReviewId = this.state.currentReview +1;
    }

    let nextReviewElem = (
      <div key={"review-" + nextReviewId} id={"review-" + nextReviewId} className="review">
          <img src={data.reviews[nextReviewId].picture} alt={data.reviews[nextReviewId].picture}></img>
          <div className="review-text">
              <p className="name">{data.reviews[nextReviewId].name}</p>
              <p className="role">{data.reviews[nextReviewId].role.toUpperCase()}</p>
              <p className="desc">{data.reviews[nextReviewId].reviewDesc}</p>
          </div>
      </div>
    );
    
    this.setState({
      reviews: [this.state.reviews[0], nextReviewElem]
    })

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
    this.setState({
      prevCalled: true
    });

    let prevReviewId = data.reviews.length-1;

    if(this.state.currentReview !== 0){
      prevReviewId = this.state.currentReview -1;
    }

    let prevReviewElem = (
      <div key={"review-" + prevReviewId} id={"review-" + prevReviewId} className="review">
          <img src={data.reviews[prevReviewId].picture} alt={data.reviews[prevReviewId].picture}></img>
          <div className="review-text">
              <p className="name">{data.reviews[prevReviewId].name}</p>
              <p className="role">{data.reviews[prevReviewId].role.toUpperCase()}</p>
              <p className="desc">{data.reviews[prevReviewId].reviewDesc}</p>
          </div>
      </div>
    );
    
    this.setState({
      reviews: [prevReviewElem, this.state.reviews[0]]
    })

    if(this.state.currentReview === 0) {
    this.setState({
      currentReview: data.reviews.length-1
    });
    } else {
    this.setState({
      currentReview: this.state.currentReview -1
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
            <Reviews data={this.state.reviews} current={this.state.currentReview} />
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