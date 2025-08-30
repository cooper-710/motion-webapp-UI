import {useEffect} from "react";
export function useHotkeys(map:Record<string,()=>void>){useEffect(()=>{const h=(e:KeyboardEvent)=>{const k=(e.ctrlKey?'Ctrl+':'')+(e.shiftKey?'Shift+':'')+e.key.toLowerCase();if(map[k]){e.preventDefault();map[k]();}};window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h);},[map]);}
