// example maxValue(message)(max)(value)
export const maxValue = message => max => value =>value && parseInt(value) <= max ? undefined : `message:${message} ${max}`;