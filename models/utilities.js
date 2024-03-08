let getFactorial = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++)
        fact *= i;
    return fact;
}

/*
function getFactorial(num){

}
*/

let product = (req,res)=>{
    //console.log("request received = ", req);
    let givenNum1 = req.params.number1; 
    let givenNum2 = req.params.number2; 

    let prod = givenNum1 * givenNum2;

    res.status(200);    
    res.send("<h1 style='color:green'>Product of "+givenNum1 +"* "+givenNum2 + " is:"+prod+" </h1>");

}




module.exports = {getFactorial, product, divOperation}

//TODO:

// Fibonacci series from 0,1 up to n
// any other util function refresh

//post end point
 // take body input arr = [5, 12, 3, 5, 4]
 // return json data like this {
//  {
   // {number:5, factorial : !5}, {number:12, factorial:!12} 
//}
 //}

