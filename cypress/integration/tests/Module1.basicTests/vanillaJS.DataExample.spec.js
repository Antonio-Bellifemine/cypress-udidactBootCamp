/*
    we can run any of these right in the browser console and achieve the same result
*/

describe('examples of random values using vanillaJS without a library like chanceJS', () => {

    it('generates a random hash pswd ', () => {
        // this is an example of the what code could look like to generate a random hash passwordwithout a random value library like ChanceJS
        function generatePassword(passwordLength) {
            let numberChars = "0123456789";
            let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let lowerChars = "abcdefghijklmnopqrstuvwxyz";
            let allChars = numberChars + upperChars + lowerChars;
            let randPasswordArray = Array(passwordLength);
            randPasswordArray[0] = numberChars;
            randPasswordArray[1] = upperChars;
            randPasswordArray[2] = lowerChars;
            randPasswordArray = randPasswordArray.fill(allChars, 3);
            return shuffleArray(randPasswordArray.map(function (x) {
                return x[Math.floor(Math.random() * x.length)]
            })).join('');
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        let examplePassword = generatePassword(12);
        // console.log('Random vanilla js pswd:', generatePassword(12));
        alert(`Example Random Hash Generated With VanillaJS: ( ${examplePassword} )`);
    })


    it('generate a random word consisting of alphanumeric characters, use', () => {
        let randomstring = Math.random().toString(36).slice(-8);
        // console.log('randomstring:', randomstring);
        alert(`Example Random alpha-numeric Generated With VanillaJS: ( ${randomstring} )`);
        /*
        HOW IT WORKS

        Math.random()  Generate random number, eg: 0.123456
        .toString(36)  Convert  to base-36 : "0.4fzyo82mvyr"
           .slice(-8);  Cut off last 8 characters : "yo82mvyr"
        */

    })
})



