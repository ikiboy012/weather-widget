'use client';
import { useEffect, useState } from "react";

async function getToDo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const jsonRespons = await response.json();
  return jsonRespons;
}


export default function Page() {
  const [title,setTitle]=useState("");
  useEffect(() => {
    getToDo().then((response) => {
      setTitle(response.title);
    });
  }, [])

  return (
    <div className="flex flex-col items-start space-y-2">
      <p className="bg-red-500">{title}</p>

      <button
        
        onClick={() => {

        }}
      >
        Call API
      </button>
    </div>
  )
}
