// ====================================== Module imports ======================================
import React from "react";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import { colors } from "@atlaskit/theme";

// ====================================== Interface ======================================

interface Props {
   onClick: Function;
   isDisabled?: boolean;
}

const DeleteButton = (props: Props) => {
   return (
      <div
         className="exactt-btn"
         style={{ color: props.isDisabled ? "#A5ADBA" : colors.R400 }}
         onClick={() => (props.isDisabled ? null : props.onClick())}
      >
         <span style={{ marginLeft: 5, marginRight: 5, marginTop: 1 }}>
            <TrashIcon label="Edit icon" size="small" />
         </span>
         Delete
      </div>
   );
};

export default DeleteButton;
