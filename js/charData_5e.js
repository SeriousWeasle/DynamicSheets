/**
 * 
 * @param {number} id Character ID to request
 * @returns {object} JSON object of the requested character
 */
function getChar(id)
{
    let ls = localStorage.getItem(`DynamicSheets_character_${id}`);

    if (ls == null)
    {
        //TODO - add making of new character / warning if no character of ID is found
        return {};
    }

    else
    {
        return JSON.parse(ls);
    }
}

/**
 * 
 * @param {number} id the character ID that will be used
 * @param {object} obj the object that will be stored at the ID
 */
function storeChar(id, obj)
{
    localStorage.setItem(`DynamicSheets_character_${id}`, JSON.stringify(obj));
}

/**
 * 
 * @param {string} name Change the name of the identifier of the current character
 */
function changeIdentName(name) {
    let il = getIdentList();

    il[query.id].name = name;

    overWriteIdentList(il);
}

/**
 * 
 * @param {object} obj JSON object of specific character
 */
function fillInSheet(obj) {
    topEnums.forEach((entry) => {
        document.getElementById(`char-${entry}`).value = obj.topBar[entry];
    });
}

const topEnums = ["name", "class", "level", "race", "subrace", "current-xp", "xp-levelup", "background", "alignment", "religion", "languages", "size", "gender", "age", "height", "weight", "eyes", "hair", "skin"];
const newChar = {
    "topBar": {
        "name": "",
        "class": "",
        "level": "",
        "race": "",
        "subrace": "",
        "current-xp": "",
        "xp-levelup": "",

        "background": "",
        "alignment": "",
        "religion": "",
        "languages": "",

        "size": "",
        "gender": "",
        "age": "",
        "height": "",
        "weight": "",
        "eyes": "",
        "hair": "",
        "skin": ""
    }
}