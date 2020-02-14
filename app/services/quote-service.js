import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {


  getQuote() {
    _quoteApi.get('')
      .then(res => {
        store.commit('quote', res.data.quote)
      })
      .catch(error => console.error(error))
  }
}

const quoteService = new QuoteService();
export default quoteService;
