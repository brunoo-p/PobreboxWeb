
const validate = async (field, content) => {
    let regex;
    console.log(field);
    switch(field){
        case "email":

            //regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
            regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
            verify(regex, content);

        break;
        
        case "password":

            regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            verify(regex, content);

        break;
    }
 
    function verify(regex, content){
        let found = regex.test(content);

        if(found){
            return true;
        }
        else{ 
            return false;
        }

    }
}

export default validate;