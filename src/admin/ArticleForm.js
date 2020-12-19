import React, { Component } from "react";

export default class ArticleForm extends Component {
  render() {
    return (
      <div>
        <input
          className="postCreate-input-field"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="postCreate-input-field"
          type="text"
          name="subtitle"
          placeholder="Sub Title"
        />
        <textarea
          className="postCreate-input-field postCreate-text-area"
          type="text"
          name="intro"
          placeholder="Introduction"
        ></textarea>
        <textarea
          className="postCreate-input-field postCreate-text-area"
          type="text"
          name="review"
          placeholder="Review"
        ></textarea>
        <input
          type="file"
          name="article-poster"
          id="article-poster"
          className="postCreate-article-poster"
        />
        <div id="newFieldsArea"></div>
        <button type="submit" className="postCreate-main-form-submit-button">
          <i className="fas fa-pen-nib"></i> <i>Create Article</i>
        </button>
      </div>
    );
  }
}
