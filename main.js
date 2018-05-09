 const fibonacci = require('./lib/fibonacci')
 var len =20;
 for(var i=1;i<20;i++)
 {
     console.log(fibonacci(i));
 }

 console.log(fibonacci(1));

/*function isLeapYear(n){
    if(n%100==0)
    {
        if(n%400==0)
        return true
    }
    else
        {
            if(n%4==0)
            return true
        }
    return false
}
console.log(isLeapYear(2000));*/
