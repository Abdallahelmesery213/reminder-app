import { bake_cookie, read_cookie } from 'sfcookies'; // to save data after refresh the browser.
import { ADD_REMINDER,REMOVE_REMINDER,CLEAR_REMINDER } from './../types';
// [3] reducers
// [4] dispatch => connect action with reducer
const reminders = (state=[] , action) => {
    let reminders = [];  // instead of state
    state=read_cookie("remindersss");
    if (action.type === ADD_REMINDER){
        reminders = [...state , {text: action.text , date:action.date ,id:Math.random()} ];
        bake_cookie("remindersss" , reminders);
        console.log("from reducer" , reminders)
        return reminders
    }
    else if (action.type===REMOVE_REMINDER){
        reminders = state.filter(reminder => reminder.id !== action.id);
        bake_cookie("remindersss" , reminders);
        return reminders
    }
    else if (action.type=== CLEAR_REMINDER){
        reminders=[];
        bake_cookie("remindersss" , reminders);
        return reminders
    }
    else {
        return state
    }
    
}
export default reminders;