import { REMOVE_REMINDER } from '../types';

const Remove_Reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id  
    }
    console.log("remove" , action)
    return action
}
export default Remove_Reminder;