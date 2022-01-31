const query = parseQuery(window.location.search);

//load char from localstorage
var char = getChar(query.id);

//validate character
if (Object.keys(char).length == 0) {
    char = newChar;
}

else {
    storeChar(query.id, char);
}

//fill in the sheet
fillInSheet(char);

function updateSheetTopParam(id, newValue) {
    topIdent = id.split("char-")[1];
    char.topBar[topIdent] = newValue;

    storeChar(query.id, char);
}