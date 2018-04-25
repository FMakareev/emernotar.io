export const getModuleNameFromUrl = (str) => {
    let target = "/"; // цель поиска
    let allFoundPos = [];
    let pos = 0;
    str = str.replace(/\?lang=\w+/g, '');
    while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos === -1) break;
        allFoundPos.push(foundPos);
        pos = foundPos + 1; // продолжить поиск со следующей
    }

    if (allFoundPos.length > 1) {
        return str.slice(allFoundPos[0] + 1, allFoundPos[1])
    } else {
        return str.replace(/\//g, '');
    }
}