/**
 * @swagger
 * tags:
 *   name: Utils
 *   description: This is generic utility apis 
 * /factorial:
 *   get:
 *     summary: Finds Factorial of 5
 *     tags: [Utils]
 *     responses:
 *       200:
 *         description: Finds factorial of 5
 *         content:
 *           application/json:
 *             schema:
 *               type: number              
 *
 * 
 * /factorial/{num}:
 *   get:
 *     summary: Finds Factorial of a given number
 *     tags: [Utils]
 *     parameters:
 *       - in: path
 *         name: num
 *         schema:
 *           type: number
 *         required: true
 *         description: any number for which you want to find factorial
 *     responses:
 *       200:
 *         description: Finds factorial of a given number
 *         content:
 *           application/json:
 *             schema:
 *               type: number              
 *
 */

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

//TODO
let divOperation = () =>{}

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

