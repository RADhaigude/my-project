function fetchMessage() {
  fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("response").textContent = data.message;
    })
    .catch((err) => console.error("Error:", err));
}
