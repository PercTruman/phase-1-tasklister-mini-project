


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    makeNewTask(e.target.new_task_description.value)
    })
});


 function makeNewTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  btn.addEventListener('click', deleteTask)
  p.textContent = `${task} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

// function selectPriority(task){
//   let prioritySelector = document.querySelector('select')
//   console.log(prioritySelector)
//   if (prioritySelector.target.red.value === 'red'){
//     console.log('red')
//   }
// }

