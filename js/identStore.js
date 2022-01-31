//get small list of characters
function getIdentList()
{
    let ls = localStorage.getItem("DynamicSheets_idents");

    if (ls == null)
    {
        return [];
    }

    else
    {
        return JSON.parse(ls);
    }
}

/**
 * 
 * @param {object} obj New identifier list
 */
function overWriteIdentList(obj) {
    localStorage.setItem("DynamicSheets_idents", JSON.stringify(obj));
}

/**
 * 
 * @param {object} char Object storing character ID and setting type
 */
function addCharIdent(char)
{
    let il = getIdentList();

    il.push(char);

    localStorage.setItem("DynamicSheets_idents", JSON.stringify(il));
}

const campaign_modules = {
    dnd5e: "dnd5e",
    collateral: "collateral"
}