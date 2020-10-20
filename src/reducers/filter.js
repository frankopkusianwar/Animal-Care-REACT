const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'FILTER_SPECIES':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
