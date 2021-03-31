import React, { Component } from 'react';

export default class Reviews extends Component {
    render() {
        return (
            <div className="review-set">
                {this.props.data.map(element => (element))}
            </div>
        )
    }
}
