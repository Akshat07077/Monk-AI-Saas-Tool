import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

function Output({ aiOutput }: PROPS) {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const editorContent = editorInstance.getMarkdown();
      navigator.clipboard.writeText(editorContent).then(() => {
        alert("Content copied to clipboard!");
      });
    }
  };
  return (
    <div className="md:w-[800px] mt-5 md:mt-0  btn-gradient rounded-xl">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-2xl font-semibold text-white">
          Your Generated Content
        </h2>
        <Button
          onClick={handleCopy}
          className=" text-white border-purple-700 border-2 hover:bg-violet-700"
        >
          <Copy /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        height="650px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default Output;
