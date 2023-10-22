"use client";

import { useState } from "react";

const LanguageOptions = () => {
  const [language, setLanguage] = useState("c");
  return (
    <>
      <select className="options" onChange={(e) => setLanguage(e.target.value)}>
        <option value="c"> C</option>
        <option value="node">Node</option>
      </select>
    </>
  );
};

export default LanguageOptions;
