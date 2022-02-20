    //Using javaScrip PROMISES
    let joke = document.getElementById("joke");
    let jokeBtn = document.getElementById("joke_btn");

    let makeAJoke = () => {
        let setHeader = {
            headers: {
                Accept: "application/json"
            }
        };

        fetch('https://icanhazdadjoke.com', setHeader).then((response) =>
            response.json().then((jokeData) =>
                joke.innerHTML = jokeData.joke
            )
        ).catch((error) =>
            document.write(error))
    };

    jokeBtn.addEventListener('click', makeAJoke);
    makeAJoke(); //This is for first joke that show by default without clicking on the button.