import React from "react";
export function ChartPanel({title,children}:{title?:string;children:React.ReactNode}){
  return(<div className="chart">{title&&<div className="title">{title}</div>}{children}</div>);
}
