import { CLEAR_REMINDER } from '../types';

const Clear_Reminder = () => {
    const action = {
        type: CLEAR_REMINDER,
    }
    console.log("clear" , action)
    return action
}
export default Clear_Reminder;