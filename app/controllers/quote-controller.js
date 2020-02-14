import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

// @ts-ignore

function drawQuote() {
  let quote = store.State.quote.body;
  let author = store.State.quote.author;
  let template = `
  <h2><q>${quote}</q></h2>
    <h4>${author}</h4>
  `;

  document.getElementById('quote').innerHTML = template;
}

export default class QuoteController {

  constructor() {
    store.subscribe('quote', drawQuote)
    this.getQuote();
  }

  getQuote() {
    QuoteService.getQuote();
  }

}
