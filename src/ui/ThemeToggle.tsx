import React from "react";
export default function ThemeToggle(){
  return (
    <button
      style={{
        padding:"8px 12px",
        borderRadius:"8px",
        background:"var(--bg-elev)",
        color:"var(--text)",
        border:"1px solid var(--line)",
        fontWeight:600,
        cursor:"pointer"
      }}
      onClick={()=>{
        const root=document.documentElement;
        const next=root.dataset.theme==="light"?"":"light";
        root.dataset.theme=next;
        localStorage.setItem("theme",next||"dark");
      }}
    >
      ☀︎/☾
    </button>
  );
}
