import React, { Fragment } from "react";
import "./TextEditor.css";

export const TextEditor = () => {
  const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };

  const createAlert = (buttonId) => {
    if (buttonId === "insertImage" || buttonId === "createLink") {
      let userLink = prompt("Enter a URL", "");
      //if link has http then pass directly else add https
      // if (/http/i.test(userLink)) {
      modifyText(buttonId, false, userLink);
      // } else {
      // userLink = "http://" + userLink;
      // modifyText(buttonId, false, userLink);
      // }
    }
  };

  function handleEditedText() {
    const edited = document.getElementById("text-input");
    console.log(edited.innerHTML);
  }

  return (
    <Fragment>
      <div className="editor-container">
        <h1>Text Editor</h1>
        <div className="options">
          {/* Text Format  */}
          <button
            id="bold"
            className="option-button format"
            onClick={() => modifyText("bold", false, "bold")}
          >
            <i className="fa-solid fa-bold"></i>
          </button>
          <button
            id="italic"
            className="option-button format"
            onClick={() => modifyText("italic", false, "italic")}
          >
            <i className="fa-solid fa-italic"></i>
          </button>
          <button
            id="underline"
            className="option-button format"
            onClick={() => modifyText("underline", false, "underline")}
          >
            <i className="fa-solid fa-underline"></i>
          </button>
          <button
            id="strikethrough"
            className="option-button format"
            onClick={() => modifyText("strikethrough", false, "strikethrough")}
          >
            <i className="fa-solid fa-strikethrough"></i>
          </button>
          <button
            id="superscript"
            className="option-button script"
            onClick={() => modifyText("superscript", false, "superscript")}
          >
            <i className="fa-solid fa-superscript"></i>
          </button>
          <button
            id="subscript"
            className="option-button script"
            onClick={() => modifyText("subscript", false, "subscript")}
          >
            <i className="fa-solid fa-subscript"></i>
          </button>
          class
          {/* List  */}
          <button
            id="insertOrderedList"
            onClick={() =>
              modifyText("insertOrderedList", false, "insertOrderedList")
            }
          >
            <div className="fa-solid fa-list-ol"></div>
          </button>
          <button
            id="insertUnorderedList"
            onClick={() =>
              modifyText("insertUnorderedList", false, "insertUnorderedList")
            }
          >
            <i className="fa-solid fa-list"></i>
          </button>
          {/* Undo/Redo  */}
          <button id="undo" onClick={() => modifyText("undo", false, "undo")}>
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <button id="redo" onClick={() => modifyText("redo", false, "redo")}>
            <i className="fa-solid fa-rotate-right"></i>
          </button>
          {/* Link  */}
          <button id="createLink" onClick={() => createAlert("createLink")}>
            <i className="fa fa-link"></i>
          </button>
          <button
            id="unlink"
            onClick={() => modifyText("unlink", false, "unlink")}
          >
            <i className="fa fa-unlink"></i>
          </button>
          {/* image */}
          <button id="insertImage" onClick={() => createAlert("insertImage")}>
            <i className="fa-regular fa-image"></i>
          </button>
          {/* Alignment  */}
          <button
            id="justifyLeft"
            className="option-button align"
            onClick={() => modifyText("justifyLeft", false, "justifyLeft")}
          >
            <i className="fa-solid fa-align-left"></i>
          </button>
          <button
            id="justifyCenter"
            className="option-button align"
            onClick={() => modifyText("justifyCenter", false, "justifyCenter")}
          >
            <i className="fa-solid fa-align-center"></i>
          </button>
          <button
            id="justifyRight"
            className="option-button align"
            onClick={() => modifyText("justifyRight", false, "justifyRight")}
          >
            <i className="fa-solid fa-align-right"></i>
          </button>
          <button
            id="justifyFull"
            className="option-button align"
            onClick={() => modifyText("justifyFull", false, "justifyFull")}
          >
            <i className="fa-solid fa-align-justify"></i>
          </button>
          <button
            id="indent"
            onClick={() => modifyText("indent", false, "indent")}
          >
            <i className="fa-solid fa-indent"></i>
          </button>
          <button
            id="outdent"
            onClick={() => modifyText("outdent", false, "outdent")}
          >
            <i className="fa-solid fa-outdent"></i>
          </button>
          {/* Headings  */}
          <select
            id="formatBlock"
            onChange={(e) => modifyText("formatBlock", false, e.target.value)}
          >
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
          </select>
          {/* Font  */}
          <select
            id="fontSize"
            onChange={(e) => modifyText("fontSize", false, e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select
            id="fontName"
            onChange={(e) => modifyText("fontName", false, e.target.value)}
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Garamond">Garamond</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="cursive">cursive</option>
          </select>
          {/* Color  */}
          <div className="input-wrapper">
            <input
              type="color"
              id="foreColor"
              onChange={(e) => modifyText("foreColor", false, e.target.value)}
            />
            <label htmlFor="foreColor">Font Color</label>
          </div>
          <div className="input-wrapper">
            <input
              type="color"
              id="backColor"
              onChange={(e) => modifyText("backColor", false, e.target.value)}
            />
            <label htmlFor="backColor">Highlight Color</label>
          </div>
        </div>
        <div id="text-input" contentEditable="true" spellCheck="false"></div>
        <button className="edited-btn" onClick={handleEditedText}>
          Get Edited Text
        </button>
      </div>
    </Fragment>
  );
};
