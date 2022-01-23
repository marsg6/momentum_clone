const quotes = [
  { quote: "So so so so so so tierd", author: "HH" },
  { quote: "So so so so so so happy", author: "Hawng" },
  { quote: "So so so so so so angry", author: "Yeon" },
  { quote: "So so so so so so weird", author: "Kim" },
  { quote: "So so so so so so suprised", author: "Hyeon" },
  { quote: "So so so so so so bussy", author: "Hak" },
  { quote: "So so so so so so satisfied", author: "KHH" },
];

function selectQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[quoteIndex];
  const quoteText = document.querySelector(".post-login__quote-text");
  const quoteAuthor = document.querySelector(".post-login__quote-author");
  quoteText.innerText = selectedQuote.quote;
  quoteAuthor.innerText = selectedQuote.author;
}

selectQuote();
