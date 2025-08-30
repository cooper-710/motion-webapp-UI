import React from "react";
export default function ThemeToggle(){return(<button className="btn ghost" data-theme-toggle onClick={()=>{const r=document.documentElement;const next=r.dataset.theme==='light'?'':'light';r.dataset.theme=next;localStorage.setItem('theme',next||'dark');}}>☀︎/☾</button>);}
