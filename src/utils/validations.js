const validateName = (name) =>{
    return new RegExp(/[a-zA-z][a-zA-A]+[a-zA-Z]$/).test(name);
}

// not yet complete.
const validateEmail=(email) => {
    return new RegExp(/$/).test(email);
}
//similary can be written for password and other fields.




//Export this
module.export = {
    validateEmail,
    validateName
}