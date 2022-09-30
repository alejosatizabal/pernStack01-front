//import React from 'react';

// export default function TaskList() {
//     return (
//       <div>
//         TaskList
//       </div>
//     )
// }

import { useEffect } from 'react'

export default function TaskList() {

  const loadTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <> {/* Etiqueta Fragment de React para poder colocar multiples elementos dentro de React */}
      <h1>Task List</h1>
    </>
  )
}