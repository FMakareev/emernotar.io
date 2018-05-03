import {randomWords} from "./random_words";

export const randomEmail = () => (randomWords()+randomWords() + '@' + randomWords()+randomWords() + '.'+randomWords());
