
const validate = async (field, content) => {

    console.log(field);
    switch(field){
        case "email":
            let regexEmail = new RegExp("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");
            let foundEmail = regexEmail.test(content);
            return foundEmail;

        break;
        
        case "password":

            let regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
            let foundPass = regexPass.test(content);
            return foundPass;

        break;
    }
}

export default validate;