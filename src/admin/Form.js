import React from "react";

function Form(props) {
  return (
    <div>
      <div>
        <i
          id="plusIcon"
          onmouseover="mouseoverDockIcon()"
          onmouseout="mouseoutDockIcon()"
          onclick="openDock()"
          class="fas fa-plus-circle fa-3x floating-dock-icon"
        ></i>
      </div>
      <div id="floatingDock" class="floating-dock">
        <i onclick="closeDock()" class="far fa-times-circle"></i>
        <form id="create-new-fields" action="">
          <p>Type of input field:</p>
          <input
            type="radio"
            name="textFieldType"
            id="singleLine"
            value="input"
            onchange="handleOnChangeRadio()"
          />
          <label for="textFieldType">Single Line</label>
          <br />
          <input
            type="radio"
            name="textFieldType"
            id="multiLine"
            value="textarea"
            onchange="handleOnChangeRadio()"
            style="margin-top: 1rem; margin-bottom: 1rem"
          />
          <label for="textFieldType">Multiple Line</label>
          <input
            type="text"
            name="fieldName"
            id="fieldName"
            placeholder="New field name"
            onchange="handleOnChangeRadio()"
          />

          <label for="articleFeaturedPicture">
            Upload a featured picture here
          </label>
          <input
            type="file"
            name="articleFeaturedPicture"
            id="articleFeaturedPicture"
            class="article-feature-pic"
          />
          <button type="button" class="add-new-field" onclick="addNewField()">
            <i class="fas fa-plus-square"></i> Add a new field
          </button>
        </form>
      </div>

      <form id="mainForm" action="/composeForm" method="post">
        <input
          class="input-field"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          class="input-field"
          type="text"
          name="subtitle"
          placeholder="Sub Title"
        />
        <textarea
          class="input-field text-area"
          type="text"
          name="Synopsis"
          placeholder="Synopsis"
        ></textarea>
        <textarea
          class="input-field text-area"
          type="text"
          name="Recommended Because"
          placeholder="Recommended Because"
        ></textarea>
        <div id="newFieldsArea"></div>
        <button type="submit" class="main-form-submit-button">
          <i class="fas fa-pen-nib"></i> <i>Create Article</i>
        </button>
        <button
          type="button"
          id="fullScreenButton"
          onclick="toggleFullscreen()"
          class="fullscreen"
        >
          <i class="fas fa-expand-alt fa-2x"></i>
        </button>
        <button type="button" class="repeat-article" onclick="repeatArticle()">
          <i class="fas fa-retweet"></i>
          Repeat Article
        </button>
      </form>
    </div>
  );
}

export default Form;
