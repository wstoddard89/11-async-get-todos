fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((objects) => {
    document.getElementById("items").innerHTML = objects
      .map((item) => `<li id='li'>${item.title}</li>`)
      
      .join("")
    console.log(items)
    return items
  })

function removeItem() {
  let list = document.getElementById("items")
  list.removeChild(list.childNodes[0])
  
}

