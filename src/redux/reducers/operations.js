import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO } from "../actions";

const initialState=[
    {id: 1, todo: 'item 1'},
    {id: 2, todo: 'item 2'},
    {id: 3, todo: 'item 3'},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodo=state.filter((todo)=>todo.id !== action.payload);
            return filteredTodo
        case UPDATE_TODO:
            let data=action.payload
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        default: return state;
    }
}