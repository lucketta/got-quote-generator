export default function quotesReducer(state= {loading: false, quote: {}}, action) {
  switch ( action.type ) {
    case 'FETCH_QUOTE':
      return Object.assign({}, state, {loading: false, quote: action.payload});
    default:
      return state;
  }

}
