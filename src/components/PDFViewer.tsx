import React from "react";
import Button from "@atlaskit/button";

interface Props {
   url: string | undefined;
   isOpen: boolean;
   onClose: () => void;
}

export default function PDFViewer(props: Props) {
   const { isOpen, url, onClose } = props;
   return isOpen ? (
      <div
         style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            background: "rgb(49, 54, 57)",
            zIndex: 1000,
            flex: 1,
         }}
      >
         <div style={{ flex: 1 }}>
            <iframe title="PDFViewer" src={url} style={{ height: "100%", width: "100%" }} frameBorder={0}></iframe>
         </div>
         <div style={{ background: "rgb(49, 54, 57)", padding: 5, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={onClose} appearance="danger">
               Close
            </Button>
         </div>
      </div>
   ) : null;
}
