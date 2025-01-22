

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here...
    console.log('Welcome to FizzBuzz!');
    console.log('Hello World');
    for( let i = 1; i <= 300; i++ ) {
        console.log(appendCode(i));
    }
}

function appendCode(number) {
    const numArr = [3, 5, 7, 11, 13,17];
    let output = "";
    const multiples = { 
        3 :'Fizz',
        5 :'Buzz',
        7: 'Bang',
        11: 'Bong',
        13: 'Fezz',
        17:''

    };
    for (let num=0; num < numArr.length ; num++) {
        // if the number is a multiple of any of the specified numbers, insert code accordingly
        if (number % numArr[num] === 0) {
            // If the number is a multiple of 13, add code of 13 before the code if the existing code starts with 'B' , otherwise append to the end of code
            if (numArr[num] === 13) {
                if (isNaN(output) && output.indexOf('B')!= -1) {    
                    let pos = output.indexOf('B');
                    output = output.substring(0,pos).concat(multiples[numArr[num]]).concat(output.substring(pos,output.length));
                }
                else {
                    output =  output.concat(multiples[numArr[num]]);
                }
            }
            else {
                //print only the code of 11 if it is a multiple of 11 (exception if it is also a multiple of 13)
                if (numArr[num] === 11) {
                    output = multiples[numArr[num]];
                }
                else {    
                    output = output.concat(multiples[numArr[num]]);
                    //Reverse the code order in case of multiple of 17
                    if (numArr[num] === 17) {
                        if (isNaN(output) && output.length > 0){
                            let number_of_multiples = Math.floor(output.length / 4 );
                            let startPos = output.length - 4;
                            let endPos = output.length;
                            let newOutput="";
                            for(let k = 1 ; k <= number_of_multiples ; k++){
                                newOutput = newOutput.concat(output.substring(startPos,endPos));
                                endPos = startPos;
                                startPos = startPos - 4;
                            }
                            output = newOutput;
                        }
                    }   
                }
            } 
             

        } 
    }
    // if the number is not a multiple of any of the specified number, display the number as is.
    if(output === ""){
        output = number;
    }
    return output;
}
// Now we run the main function...
fizzbuzz();
