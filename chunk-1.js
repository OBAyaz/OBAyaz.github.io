console.log("Hello from chunk-1")

const resultDOM = document.getElementById('response')

const getData = () => {
  resultDOM.innerText = "Loading..."
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( response => {
      console.log(response.json())
      resultDOM.innerText = response.json()
    })
    .then(data => {
      resultDOM.innerText = "Success"
    })
    .catch((e) => {
      console.log(e)
    })
    .finally(() => {
      resultDOM.innerText = "Crashed"
    })
}
