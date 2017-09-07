import axios from 'axios';

import fetch from 'isomorphic-fetch';

export function fetchProfiles() {
    return function(dispatch){
      return fetch('/profiles')
        .then(res => {
          return res.json()
        }).then(json => {
          dispatch({type: 'FETCH_PROFILE', payload: json })
      })
  }
}

export function deleteProfile(id, history) {
  return function(dispatch) {
    return axios.get(`/character_quote/${id}/delete`)
    .then(function (response) {
      dispatch({type: 'REMOVE_PROFILE', payload: response.data.id })
    })
  }
}
