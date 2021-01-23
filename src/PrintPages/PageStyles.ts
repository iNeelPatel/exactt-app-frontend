import { CSSProperties } from "react";

const page: CSSProperties = {
   width: "297mm",
   display: "flex",
   flexDirection: "column",
   color: "black",
   fontSize: 18,
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
   fontSize: 16,
   fontWeight: "bold",
};

const normalText: CSSProperties = {
   fontSize: 14,
   lineHeight: 1.5,
};

const orgLogo: CSSProperties = {
   height: 80,
   padding: 10,
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

const detialsListTitle = (width: string): CSSProperties => {
   return {
      fontWeight: "bold",
      width: width,
   };
};

const tableRow: CSSProperties = {
   display: "flex",
   borderBottomWidth: 1,
   borderBottomStyle: "solid",
   borderBottomColor: "black",
};

const tableRowAllBorder: CSSProperties = {
   display: "flex",
   borderWidth: 1,
   borderStyle: "solid",
   borderColor: "black",
   borderTopWidth: 0,
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

const tableHeaderColNoBorder = (width: string): CSSProperties => {
   return {
      ...tableHeaderCol(width),
      borderWidth: 0,
   };
};

const tableHeaderLastCol = (width: string): CSSProperties => {
   return {
      ...tableHeaderCol(width),
      borderRightWidth: 1,
      borderRightColor: "black",
      borderRightStyle: "solid",
   };
};

const tableCol = (width: string): CSSProperties => {
   return {
      borderLeftWidth: 1,
      borderLeftColor: "black",
      borderLeftStyle: "solid",
      paddingLeft: "2mm",
      paddingRight: "2mm",
      width: width,
   };
};

const tableColNoBorder = (width: string): CSSProperties => {
   return {
      ...tableCol(width),
      borderWidth: 0,
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
      paddingLeft: "2mm",
      paddingRight: "2mm",
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
   tableRowAllBorder,
   tableHeaderColNoBorder,
   tableColNoBorder,
};
