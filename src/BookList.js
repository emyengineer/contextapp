import React, { Component } from "react";

class BookList extends Component {
  state = {};
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The Way of Kings</li>
          <li>Gone with the wind</li>
          <li>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
