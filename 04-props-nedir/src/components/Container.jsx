import React from "react";

function Container({children}) {
  return (
    <div>
      <div>Container component'i çalıştı</div>
      {children}

    </div>
  );
}

export default Container;
