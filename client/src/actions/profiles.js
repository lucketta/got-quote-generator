import fetch from 'isomorphic-fetch';
export function fetchProfiles() {
    return function(dispatch){
      return fetch('http://localhost:3000/profiles',{mode: 'no-cors'})
        .then(res => {
          return res.json()
        }).then(json => {
          dispatch({type: 'FETCH_PROFILE', payload: json })
      })
  }
}
