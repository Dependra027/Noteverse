import React from "react";
import { useState } from "react";
function NotePage(){
    const [note,setNote]=useState('');
    const [input,setInput]=useState('');
    return(
        
        <>
        
        <div className="note-Page">
        <h1>This is the page for notes</h1>
        
        </div>
        </>
    )
}