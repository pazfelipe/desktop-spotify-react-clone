export const uiState = (state: {solid: boolean;}, payload: {solid: boolean;}) => ({
  type: 'TOP_BAR_SOLID',
  payload: {
    ...state,
    solid: payload.solid
  }
})