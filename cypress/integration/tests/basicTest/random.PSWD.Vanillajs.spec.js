describe('examples of random values using vanillaJS without a library like chanceJS', () => {

    it('generates a random hash pswd ', () => {
        // this is an example of the code you could have to write to generate a random hash passwordwithout a random value library like ChanceJS
        function generatePassword(passwordLength) {
            var numberChars = "0123456789";
            var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lowerChars = "abcdefghijklmnopqrstuvwxyz";
            var allChars = numberChars + upperChars + lowerChars;
            var randPasswordArray = Array(passwordLength);
            randPasswordArray[0] = numberChars;
            randPasswordArray[1] = upperChars;
            randPasswordArray[2] = lowerChars;
            randPasswordArray = randPasswordArray.fill(allChars, 3);
            return shuffleArray(randPasswordArray.map(function (x) {
                return x[Math.floor(Math.random() * x.length)]
            })).join('');
        }

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        console.log('Random vanilla js pswd:', generatePassword(12));
        alert(generatePassword(12));
    })


    it('generate a random word consisting of alphanumeric characters, use', () => {
        var randomstring = Math.random().toString(36).slice(-8);

        /*
        HOW IT WORKS

        Math.random()  Generate random number, eg: 0.123456
        .toString(36)  Convert  to base-36 : "0.4fzyo82mvyr"
           .slice(-8);  Cut off last 8 characters : "yo82mvyr"
        */

    })
})



