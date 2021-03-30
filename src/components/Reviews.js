import React, { Component } from 'react'

export default class Reviews extends Component {
    render() {
        return (
            <div className="review">
                <img src={this.props.data[this.props.current].picture} alt={this.props.data[this.props.current].picture}></img>
                <div className="review-text">
                    <p className="name">{this.props.data[this.props.current].name}</p>
                    <p className="role">{this.props.data[this.props.current].role.toUpperCase()}</p>
                    <p className="desc">{this.props.data[this.props.current].reviewDesc}</p>
                </div>
            </div>
        )
    }
}
