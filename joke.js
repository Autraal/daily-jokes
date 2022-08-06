let movieDiv = document.querySelector(".requested_vid");

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

let data = async () => {
  try {
    let file = await fetch("https://icanhazdadjoke.com/", options);
    let jokes = await file.json();
    movieDiv.innerHTML = jokes.joke;
  } catch (err) {
    alert("");
    movieDiv.innerHTML = " jokes.id";
  }
};
data();

