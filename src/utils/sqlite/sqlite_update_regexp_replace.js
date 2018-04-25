export const sqlite_update_regexp_replace = (db,schema_each,regexp, table, col) => {
    db.each(schema_each,{}, async (err, result) => {
        // process each row here
        if (err) {
            throw err;
        }
        if(result[col].search(regexp) !== -1){
            let VResult = result[col].replace(regexp, '');
            let schema_ypdate = `UPDATE ${table} SET ${col} = '${VResult}' WHERE ${col} = '${result[col]}'`;
            await db.run(schema_ypdate);
        }
    });
    db.close();
};