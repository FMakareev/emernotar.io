export const randomNumber = (max = 9999) => {
    return Math.floor(Math.random() * (max - 1));
};