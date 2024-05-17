
// Using Promise 
const quote = document.querySelector(".quote");
const btn = document.querySelector(".quotebtn");
function getdata() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = " ";
      quote.innerHTML = `<h2 class="bg-secondary bg-gradient text-white text-center">Joke</h2>
        <p class="ms-2 fs-4">${data.attachments[0].fallback}</p>`;
    })
    .catch((error) => {        // for error
      console.log(error);
    });
}
btn.addEventListener("click", getdata);

