
const validate = async (field, content) => {

    console.log(field);
    switch(field){
        case "email":
            let regexEmail = new RegExp("^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\\.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$");
            let foundEmail = regexEmail.test(content);
            return foundEmail;

        break;
        
        case "password":

            let regexPass = new RegExp("^(?=\\S*[a-z])(?=\\S*[A-Z])(?=\\S*\\d)\\S{8,}$"); 
            let foundPass = regexPass.test(content);
            console.log(content);
            console.log(foundPass);
            return foundPass;

        break;

        default: return null;
    }
}

export default validate;