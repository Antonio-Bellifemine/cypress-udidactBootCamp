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
        let examplePassword = generatePassword(25);
        // console.log('Random vanilla js pswd:', generatePassword(12));
        alert(`Example Random Hash Generated With VanillaJS: ( ${examplePassword} )`);
    })

    // ChanceJS example
    it('generate a random hash with chancejs', () => {
        alert("Example Random Hash Generated With VanillaJS:", chance.hash({ length: 25 }));
    })
})



