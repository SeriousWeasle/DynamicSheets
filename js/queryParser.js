/**
 * 
 * @param {number} num if the passed number is not NaN, returns true; else returns false.
 * @returns {bool} A boolean
 */
function NaNtest(num)
{
    return num > 0 || num == 0 || num < 0;
}

/**
 * 
 * @param {string} query Query string to turn into JSON. Default format: "?var1=val1&var2=val2a"
 * @returns {object} A JSON object made from the query input
 */
function parseQuery(query)
{
    let obj = {};
    if (query != "")
    {
        query = decodeURI(query);
        let qstr = query.split("?")[1]; //get rid of question mark
        let vars = qstr.split("&");
    
        vars.forEach((v) => {
            let kv = v.split("=");
            if (kv.length >= 2)
            {
                if (NaNtest(parseFloat(kv[1]))) {
                    obj[kv[0]] = parseFloat(kv[1]);
                }
                else {
                    obj[kv[0]] = kv[1];
                }
            }
        });
    }

    return obj;
}