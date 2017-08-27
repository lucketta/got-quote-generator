export default function quotesReducer(state= {loading: false, quote: {}}, action) {
  switch ( action.type ) {
    case 'LOADING_QUOTE':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_QUOTE':
    console.log(action.payload);

      return Object.assign({}, state, {loading: false, quote: action.payload});
    default:
      return state;
  }

}
