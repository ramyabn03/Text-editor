import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TextEditor } from "./Components/TextEditor/TextEditor";

export const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextEditor />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};
