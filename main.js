const passwordBox = document.getElementById("password");
const length = 20;

const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".replace(/\s/g,"");
const lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z".replace(/\s/g,"");
const numbers = "0 1 2 3 4 5 6 7 8 9".replace(/\s/g,"");
const symbols = "!  # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~".replace(/\s/g,"");
//console.log(upperCase);


const allChars = upperCase + lowerCase+ numbers+symbols ;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }

    passwordBox.value = password;

}


const generateButton = document.querySelector("button");
generateButton.addEventListener('click',createPassword);


function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

const copyButton = document.querySelector(".input i");
copyButton.addEventListener('click',copyPassword);