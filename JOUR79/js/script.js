const input = document.querySelector('textarea')
const btn = document.querySelector('.tweetBtn')


const tweet = () => {
    let tweetInput = "https://twitter.com/intent/tweet?text=";
    window.open(`${tweetInput}${input.value}`);
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    tweet();
});