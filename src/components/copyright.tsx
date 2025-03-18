import React from "react";

function Copyright() {
  return (
    <div className="mt-8">
      <p className="text-xs text-highlight pb-20 font-semibold">
        <span>Copyright</span> © {new Date().getFullYear()} Dave Ejezie. All
        rights reserved.
      </p>
    </div>
  );
}

export default Copyright;
