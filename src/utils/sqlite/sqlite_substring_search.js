export const sqlite_substring_search = (db, table, col, substr, and = '') => {
    const schema_search = `SELECT *, instr(${col},'${substr}') FROM ${table} WHERE instr(${col},'${substr}')>0 ${and};`;
    return new Promise((resolve, reject) => {
        db.all(schema_search, {}, (err, result) => {
            // process each row here
            if (err) {
                reject(err);
            }
            // console.log('Search result: ', result);
            resolve(result);
        });
    })
};