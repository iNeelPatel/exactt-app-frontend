// ====================================== Module imports ======================================
import React from "react";
import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";

// ======================================== Interface =======================================
interface Items {
   path: string;
   name: string;
}

interface Props {
   items: Array<Items>;
   screen: string;
   right?: any;
}

const Breadcrumb = (props: Props) => {
   return (
      <div style={{ display: "flex", flex: 0, justifyContent: "space-between", marginBottom: 30 }}>
         <div>
            <Breadcrumbs>
               {props.items.map((item: Items, idx: number) => (
                  <BreadcrumbsItem href={`#${item.path}`} text={`${item.name}`} key={idx} />
               ))}
            </Breadcrumbs>
            <div style={{ fontSize: 24 }}>{props.screen}</div>
         </div>
         <div>{props.right}</div>
      </div>
   );
};

export default Breadcrumb;
