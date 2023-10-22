"use client";

import { ClipboardIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const CopyButton = ({ content }: { content: string }) => {
  const copy = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Text copied to clipboard");
        toast.success("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <button className={"button"} onClick={copy}>
      <ClipboardIcon width={18} color="white" />
      Copy
    </button>
  );
};

export default CopyButton;
