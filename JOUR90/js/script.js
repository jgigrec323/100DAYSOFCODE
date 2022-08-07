const getQuotes = async() => {
    const API_URL = `https://programming-quotes-api.herokuapp.com/quotes/random`;
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`An error occured:${response.status}`);
    }

    return await response.json();
}

const loadQuotes = async() => {


    setTimeout(async() => {
        try {
            const response = await getQuotes();
            document.querySelector('.quote').innerText = response.en;
            document.querySelector('.author').innerText = response.author;

        } catch (error) {
            console.log(error.message)
        }
    }, 10)
}

loadQuotes();