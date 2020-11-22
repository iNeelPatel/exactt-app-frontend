import React from "react";
import { useBarcode } from "react-barcodes";

interface Props {
   value: string;
}

export default function Barcode(props: Props) {
   const { inputRef } = useBarcode({
      value: props.value,
      options: {
         background: "#ffffff",
         height: 40,
         width: 1.5,
      },
   });
   return <svg ref={inputRef} />;
}
