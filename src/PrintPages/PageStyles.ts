import { CSSProperties } from "react";

const page: CSSProperties = {
   width: "297mm",
   display: "flex",
   flexDirection: "column",
   color: "black",
   fontSize: 20,
};

const document: CSSProperties = {
   margin: "10mm",
};

const header: CSSProperties = {
   padding: "2mm",
   borderWidth: 1,
   borderStyle: "solid",
   borderColor: "black",
   display: "flex",
   justifyContent: "space-between",
};

const orgName: CSSProperties = {
   fontSize: "26px",
   fontWeight: "bold",
};

const normalText: CSSProperties = {
   fontSize: "22px",
};

const orgLogo: CSSProperties = {
   height: "45mm",
};

const documentBody: CSSProperties = {
   padding: "2mm",
   borderWidth: 1,
   borderStyle: "solid",
   borderColor: "black",
   display: "flex",
   flexDirection: "column",
   borderTop: 0,
};

const documentTitle: CSSProperties = {
   display: "flex",
   justifyContent: "center",
   textAlign: "center",
   fontWeight: "bolder",
};

const detialsListContainer: CSSProperties = {
   display: "flex",
};

const detialsListTitle: CSSProperties = {
   fontWeight: "bold",
   width: "120px",
};

const tableRow: CSSProperties = {
   display: "flex",
   borderBottomWidth: 1,
   borderBottomStyle: "solid",
   borderBottomColor: "black",
};

const tableHeaderCol = (width: string): CSSProperties => {
   return {
      fontWeight: "bold",
      borderLeftWidth: 1,
      borderLeftColor: "black",
      borderLeftStyle: "solid",
      padding: "2mm",
      textAlign: "center",
      width: width,
   };
};

const tableHeaderLastCol = (width: string): CSSProperties => {
   return {
      fontWeight: "bold",
      borderLeftWidth: 1,
      borderLeftColor: "black",
      borderLeftStyle: "solid",
      padding: "2mm",
      textAlign: "center",
      borderRightWidth: 1,
      borderRightColor: "black",
      borderRightStyle: "solid",
      width: width,
   };
};

const tableCol = (width: string): CSSProperties => {
   return {
      borderLeftWidth: 1,
      borderLeftColor: "black",
      borderLeftStyle: "solid",
      padding: "2mm",
      width: width,
   };
};

const tableColCenterText = (width: string): CSSProperties => {
   return {
      ...tableCol(width),
      textAlign: "center",
   };
};

const tableLastCol = (width: string): CSSProperties => {
   return {
      borderLeftWidth: 1,
      borderLeftColor: "black",
      borderLeftStyle: "solid",
      padding: "2mm",
      borderRightWidth: 1,
      borderRightColor: "black",
      borderRightStyle: "solid",
      width: width,
   };
};

export default {
   page,
   document,
   header,
   orgName,
   normalText,
   orgLogo,
   documentBody,
   documentTitle,
   detialsListContainer,
   detialsListTitle,
   tableRow,
   tableHeaderCol,
   tableHeaderLastCol,
   tableCol,
   tableLastCol,
   tableColCenterText,
};
