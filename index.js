const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweet");
let realData = "";

const tweetNow = () => {
    let tweetApi = `https://twitter.com/intent/tweet?text=${newQuote.text}`;
    window.open(tweetApi);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1642);
    let newQuote = realData[rnum];

    quotes.innerText = `${newQuote.text}`
    newQuote.author === null ?
        (authors.innerText = "Unknown") :
        (authors.innerText = `${newQuote.author}`)

}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes()
    } catch (error) { }
}

tweet.addEventListener('click', tweetNow);
newQ.addEventListener('click', getNewQuotes);
getQuotes();