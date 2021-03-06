import fetch from 'isomorphic-fetch';
export function fetchQuote(name) {
  if(name){
    return function(dispatch){
      return fetch(`https://got-quotes.herokuapp.com/quotes?char=${name}`)
        .then(res => {
          return res.json()
        }).then(json => {
          dispatch({type: 'FETCH_QUOTE', payload: json })
      })
    }
  }
  else {
    return function(dispatch){
      return fetch('https://got-quotes.herokuapp.com/quotes')
        .then(res => {
          return res.json()
        }).then(json => {
          dispatch({type: 'FETCH_QUOTE', payload: json })
      })
    }
  }
}
