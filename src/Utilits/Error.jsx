import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="text[#BDFF38]">
      404 sorry page not found
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
