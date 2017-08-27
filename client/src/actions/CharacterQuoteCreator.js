import fetch from 'isomorphic-fetch';
export function fetchCharQuote(name) {
  return function(dispatch){
    return fetch(`https://got-quotes.herokuapp.com/quotes?char=${name}`)
      .then(res => {
        return res.json()
      }).then(json => {
        dispatch({type: 'FETCH_CHAR_QUOTE', payload: json })
    })
  }
}
