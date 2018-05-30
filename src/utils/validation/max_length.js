export const maxLength = (max, message) => value =>
    value && value.length > max ? message : undefined;