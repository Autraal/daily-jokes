let joker = () => {
  let joke = new Promise((resolve, reject) => {
    let movieDiv = document.querySelector(".requested_vid");

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    fetch("https://icanhazdadjoke.com/", options)
      .then((mov) => mov.json())
      .then((mov) => {
        resolve((movieDiv.innerHTML = mov.joke));
      })
      .catch((err) => {
        reject(console.log("hey"));
      });
  });
};

joker();
