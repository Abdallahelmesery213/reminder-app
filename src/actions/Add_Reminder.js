// [2] action creator
import { ADD_REMINDER } from '../types';

const add_Reminder = (text , date) => {
    const action = {
        type: ADD_REMINDER,
        text ,  
        date   
    }
    console.log("add" , action)
    return action
}
export default add_Reminder;