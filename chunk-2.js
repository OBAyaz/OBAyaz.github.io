console.log("Hello from chunk-2")

const resultDOM2 = document.getElementById('response2')

const getData2 = () => {
  resultDOM2.innerText = "Loading..."
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( response => {
      let data = response.json()
      resultDOM2.innerText = data
      return data
    })
    .then(data => {
      resultDOM2.innerText = filterData(data)
    })
    .catch((e) => {
      console.log(e)
      resultDOM2.innerText = "Crashed"
    })
    .finally(() => {
    })
}

const filterData = (data) => {

  return data[0].user["userId"]

}