export default function quotesReducer(state= {profiles: {}, quote: {} }, action) {
  switch ( action.type ) {
    case 'FETCH_QUOTE':
      return Object.assign({}, state, {quote: action.payload});
    case 'FETCH_PROFILE':
      return Object.assign({}, state, {profiles: action.payload});
    case 'REMOVE_PROFILE':
      var id = parseInt(action.payload,10);
      var newProfile = state.profiles.filter(profile => profile.id !== id)
      return Object.assign({}, state, { profiles: newProfile});
    default:
      return state;
  }
}
