export default function quotesReducer(state= {loading: false, profile: {}, quote: {} }, action) {
  switch ( action.type ) {
    case 'FETCH_QUOTE':
      return Object.assign({}, state, {loading: false, quote: action.payload});
    case 'FETCH_PROFILE':
      return Object.assign({}, state, {loading: false, profile: action.payload});
    default:
      return state;
  }

}
