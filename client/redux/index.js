import reducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

function loadState(){
  try{
    const serializedState = localStorage.getItem("state");
    if(serializedState === null){
      return undefined
    }
    return JSON.parse(serializedState)
  }catch(err){
    return undefined;
  }
}

function saveState(state){
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  }catch(err){
    console.log(err)
  }
}

export function configureStore() {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState, applyMiddleware(thunk));
  store.subscribe(()=>{
    saveState(store.getState());
  })
  return store;
};



export const store = configureStore();  
