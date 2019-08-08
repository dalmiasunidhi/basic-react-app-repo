import {ADD_REMINDER} from '../constant';

const reminders= (state= [] ,action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
        reminders = [...state, reminders(action)];
        console.log(reminders);
        return reminders;
    default:
        return state;
    }
}

export default reminders;