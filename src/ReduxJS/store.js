import {createStore} from 'redux';

//create intialState 


const initialState={
    count:0,
    list:[]
}

// action 
/*
{
    type:"INC"
}
*/
/*
INC 
DEC


*/
//action generator 

export const INC =()=>{
    return {
        type:"INC"
    }
}


const reducer =( state = initialState, action)=>{

    switch(action.type){
      case "INC" : return {count: state.count+1};
      case "DEC" : return {count:state.count-1};
       case "Add": return {...state, list:[].concat(action.value)}
      default : return state ;
    }

}

const store =  createStore(reducer) ;

/*
Redux 
Action
Reducer
Store 

*/

export default store;