export const CHANGE_USER = 'CHANGE_USER';

export const actionUsername = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({type: 'CHANGE_USER', value: 'juriah'})
  }, 2000)
}

export const actionSidebarOpen = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({type: 'CHANGE_USER', value: 'juriah'})
  }, 2000)
}
