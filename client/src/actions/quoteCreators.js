import fetch from 'isomorphic-fetch';
export function fetchQuote() {
  return function(dispatch){
    dispatch({type: 'LOADING_QUOTE'})
    return fetch('https://got-quotes.herokuapp.com/quotes')
      .then(res => {
        return res.json()
      }).then(json => {
        dispatch({type: 'FETCH_QUOTE', payload: json })
    })
  }
}
