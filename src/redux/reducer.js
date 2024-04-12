// Store has two things state and a reducer
//reducer
const initialState = {
  age: 1,
  loading: false
};

const myReducer = (state = initialState, action) => {
  console.log('🚀 ~ myReducer ~ state:', state);
  const newState = {...state};
  switch (action.type) {
    case 'AGE_UP':
      return {...state, age: state.age + action.value, loading: state.loading=false};

    case 'AGE_DOWN':
      return {...state, age: state.age-action.value};
      case 'LOADING' : 
      return {...state, loading: state.loading=true } ;
    default:
      return newState;
  }
};

export default myReducer;

//store
// const store = createStore(myReducer);

// //action
// store.dispatch({type: 'ADD'});
// export default store;
