import React from "react";
import { useBarcode } from "react-barcodes";

interface Props {
   value: string;
}

export default function Barcode(props: Props) {
   const { inputRef } = useBarcode({
      value: props.value,
      options: {
         background: "rgba(0,0,0,0)",
         height: 25,
         width: 1,
         displayValue: false,
         textMargin: 0,
         marginBottom: 0,
      },
   });
   return (
      <div style={{ textAlign: "center" }}>
         <svg ref={inputRef} />
         <div style={{ marginTop: -5, fontSize: 10, zIndex: 10 }}>{props.value}</div>
      </div>
   );
}
