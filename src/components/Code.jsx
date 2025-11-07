import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { codeSnippets } from "./data/codeSnippets";

export default function CodeSection() {
  const [activeSnippet, setActiveSnippet] = useState(codeSnippets[0]);
  const [code, setCode] = useState(activeSnippet.code);

  return (
    <div className="p-6  text-white rounded-2xl container mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Code Example</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {codeSnippets.map((snippet) => (
          <button
            key={snippet.id}
            onClick={() => {
              setActiveSnippet(snippet);
              setCode(snippet.code);
            }}
            className={`px-3 py-1 rounded-md text-sm transition-all ${
              activeSnippet.id === snippet.id
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {snippet.title}
          </button>
        ))}
      </div>

      {/* Monaco Editor */}
      <Editor
        height="400px"
        language={activeSnippet.language}
        theme="vs-dark"
        value={code}
        onChange={(val) => setCode(val || "")}
      />
    </div>
  );
}
