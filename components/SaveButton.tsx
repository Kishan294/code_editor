"use client";

import { InboxArrowDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { saveAs } from "file-saver";

import { useState } from "react";

const SaveButton = () => {
  const [isModal, setIsModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const save = () => {
    const blob = new Blob(["Hello, world!"], {
      type: "text/plain;charset=utf-8",
    });

    if (fileName === "") {
      alert("Please enter your file name");
      return;
    }
    saveAs(blob, fileName);
    setIsModal(false);
  };

  return (
    <>
      <button className={"button"} onClick={() => setIsModal(true)}>
        <InboxArrowDownIcon width={18} color="white" />
        Save
      </button>
      <div
        className="modal"
        style={{
          display: isModal ? "flex" : "none",
        }}
      >
        <div className="modal__content">
          <div className="modal__content-items">
            <p>Enter your filename</p>
            <input
              type="text"
              placeholder="e.g. index.js"
              className="input"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <button onClick={save} className="button button--primary">
              Save
            </button>
          </div>
          <XMarkIcon width={20} color="red" onClick={() => setIsModal(false)} />
        </div>
      </div>
    </>
  );
};

export default SaveButton;
