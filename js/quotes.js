const quotes = [
  {
    quote: "배고프다",
    author: "박기현",
  },
  {
    quote: "배아프다",
    author: "박기현",
  },
  {
    quote: "밥먹고싶다",
    author: "박기현",
  },
  {
    quote: "취업하고싶다",
    author: "박기현",
  },
  {
    quote: "놀고싶다",
    author: "박기현",
  },
  {
    quote: "자고싶다",
    author: "박기현",
  },
  {
    quote: "이게뭐지",
    author: "박기현",
  },
  {
    quote: "저게뭐지",
    author: "박기현",
  },
  {
    quote: "먹고싶다",
    author: "박기현",
  },
  {
    quote: "보고싶다",
    author: "박기현",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
