// ====================================== Module imports ======================================
import React from "react";

// ====================================== File imports ======================================
import page_not_found from "../../assets/images/page_not_found.png";

const PageNotFound = () => {
   return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, alignItems: "center" }}>
         <img src={page_not_found} alt="Page Not Found" className="error404" />
      </div>
   );
};

export default PageNotFound;
