

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');
    console.log('Hello World');
    for(let i = 0 ; i<100;i++){
        let j = i+1;
        if((j%3 == 0 && j%5 == 0)){
            console.log("FizzBuzz");
        }
        else if( j %3 == 0) {
            console.log("Fizz");
        }
        else if( j %5 == 0) {
            console.log("Buzz");
        }
        else{
            console.log(j);
        }
        
    }

    // Put your code here...

    
}

// Now we run the main function...
fizzbuzz();
