let data = [
  {
    todo:'sarapan',
    type:'todo'
  },
  {
    todo:'sarapan',
    type:'done'
  },
  {
    todo:'belajar',
    type:'todo'
  },
  {
    todo:'mandi',
    type:'todo'
  },
  {
    todo:'sarapan',
    type:'doing'
  },
]



function Input(){
  let input = document.getElementById("input").value
  if (input === "") {
    alert("masukan aktivitas")
  }else{

    let obj = {
      todo: input,
      type: 'todo'
    }
    data.push(obj)
  
    render()
    
  }
}

let todo = document.getElementById("todo")
todo.addEventListener("click", handleClick)
let doing = document.getElementById("doing")
doing.addEventListener("click", handleClick)
let done = document.getElementById("done")
done.addEventListener("click", handleClick)

function handleClick(event){
  let item = event.target;
  let doing = item.parentElement.parentElement.id
  if(item.classList[0] === "closeBtn"){
    data.splice(item.id, 1)
  }else if(item.innerHTML === "move"){
    data[item.id].type = "doing"
  }else if (item.innerHTML === "edit") {
    let editkata = prompt("silahkan edit","berenang")
    data[item.id].todo = editkata
  }
  if(doing === "doing"){
    if (item.innerHTML === "move") {
      data[item.id].type = "done"
    }
  }
  render()
}

function render() {
  document.getElementById("todo").innerHTML =""
  document.getElementById("doing").innerHTML =""
  document.getElementById("done").innerHTML =""
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card")
    let paragraf = document.createElement("p")
    paragraf.id = i
    let close = document.createElement("button")
    close.classList.add("closeBtn")
    close.id = i
    let move = document.createElement("button")
    move.classList.add("moveBtn")
    move.id = i
    let edit = document.createElement("button")
    edit.classList.add("editBtn")
    edit.id = i
    paragraf.innerHTML = data[i].todo
    close.innerHTML = "close"
    move.innerHTML = "move"
    edit.innerHTML = "edit"
    card.appendChild(paragraf)
    card.appendChild(close)
    if (data[i].type !== "done") {
      card.appendChild(edit)
      card.appendChild(move)
    }
    if(data[i].type === "todo"){
      document.getElementById("todo").appendChild(card)
    }else if(data[i].type === "doing"){
      document.getElementById("doing").appendChild(card)
    }else{
      document.getElementById("done").appendChild(card)
    }
  }


}

render()
