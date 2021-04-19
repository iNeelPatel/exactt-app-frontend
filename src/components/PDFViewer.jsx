import React from "react";
import Button from "@atlaskit/button";

// interface Props {
//    url: string | undefined;
//    isOpen: boolean;
//    onClose: () => void;
// }

export default function PDFViewer(props) {
   const { isOpen, url, onClose } = props;
   const handlePrint = () => {
      var requestOptions = {
         method: "GET",
         redirect: "follow",
      };

      fetch(url, requestOptions)
         .then((response) => response.text())
         .then((result) => {
            let pri = document.getElementById("localiframe").contentWindow;
            pri.document.open();
            pri.document.write(result);
            pri.document.close();
            pri.focus();
            setTimeout(() => pri.print(), 1000);
         })
         .catch((error) => console.log("error", error));
   };
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
            justifyContent: "center",
            alignItems: "center",
            background: "rgb(49, 54, 57)",
            zIndex: 1000,
            flex: 1,
         }}
      >
         <iframe id="localiframe" title="PDFViewer" style={{ display: "none", width: "210mm" }} />
         <div style={{ flex: 1, background: "rgb(49, 54, 57)", justifyContent: "center", alignItems: "center" }}>
            <iframe
               id="ifmcontentstoprint"
               title="PDFViewer"
               src={url}
               style={{ height: "100%", width: "210mm", background: "#ffffff" }}
               frameBorder={0}
            ></iframe>
         </div>
         <div style={{ background: "rgb(49, 54, 57)", padding: 5, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={onClose} appearance="danger">
               Close
            </Button>
            <Button onClick={handlePrint} appearance="primary">
               Print
            </Button>
         </div>
      </div>
   ) : null;
}
