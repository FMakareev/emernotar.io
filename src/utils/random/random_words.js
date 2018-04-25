import {randomNumber} from './random_number';

export const randomWords = (word_db, count = 2) => {
    const array = word_db.split(' ');
    let STRING = '';
    for(let i = 0; i < count; i++) {
        STRING += array[randomNumber(array.length)]
    }

    return STRING
};