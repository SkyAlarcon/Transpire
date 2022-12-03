const jwt = require("jsonwebtoken");

const TokenVerifier = (header = "", SECRET) => {
    const token = header.split(" ")[1];
    if(!token) {
        return true;
    };
    const blocked = jwt.verify(token, SECRET, function(error) {return error});
    if (blocked) {
        return true;
    };
    return false;
};

const RemoveIdByIndex = (idToRemove, idList) => {
    for (let index = 0; index < idList.length; index++){
        if (idList[index] == idToRemove){
            idList.splice(index, 1);
            return idList;
        };
    };
    return idList;
};

module.exports = {
    TokenVerifier,
    RemoveIdByIndex
}