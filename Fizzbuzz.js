

for (var i=1; i<=100; i++) {
    if (i % 3 ==0 && i % 5 ==0){
        console.log ("fizzbizz");
    }
    
    else if ( i % 3 ==0) {
        console.log("Fizz");
    }
    else if (i % 5 ==0) {
        console.log ("bizz");
    }
    else {
        console.log(i);
    }
}

