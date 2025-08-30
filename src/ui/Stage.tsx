import React from "react";
export function Stage({children}:{children:React.ReactNode}){
  return(<div className="stage card"><div className="stage-inner">{children}</div></div>);
}
