import React, { Component } from "react";
import ArticleForm from "./ArticleForm";

export default class PostCreate extends Component {
  render() {
    return (
      <div id="postCreate">
        <form id="mainForm" action="/composeForm" method="post">
          <ArticleForm />
        </form>
      </div>
    );
  }
}
