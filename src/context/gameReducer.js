export default (state, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        games: action.payload,
      }

    default:
      return state
  }
}
