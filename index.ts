// creating class for currenvy converting
// make methods of currency exchange
// ask user for currency convert
// then match with currency methods
// show output
// handle errors 
// test with different input

import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import showBanner from "node-banner";
import {pkrdollar,pkrpound,pkrriyal} from "./functions.js"
import {dollarpkr,dollarpound,dollarriyal} from "./functions.js"
import {riyaldollar,riyalpkr,riyalpound} from "./functions.js"
import {pounddollar,poundpkr,poundriyal} from "./functions.js"

let currencyAsk = [
    {
        type: "list",
        name: "currency",
        message: "Please select the Currency You want To convert",
        choices: ["Pkr","dollar","Riyal","pound"]
    },
    {
        type: "number",
        name: "amount1",
        message: "please Input the amount you want to convert",
        validate:(an:number)=>{
            if(isNaN(an)){
                return "Please input only numbers"
            }else {
                return true;
            }
        } 
    },
    {
        type: "list",
        name: "currencyTarget",
        message: "Please select the Currency You want To convert to that currency",
        choices: ["Pkr","dollar","Riyal","pound"]
    }
]
let asking = [
    {
        type: "confirm",
        name: "again",
        message: "Do you want more currency conversion"
    }
]
let condition = true;
do{
    let {currency,amount1,currencyTarget} = await inquirer.prompt(currencyAsk);
    if(currency === "Pkr" && currencyTarget === "dollar"){
        let result = pkrdollar(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Pkr" && currencyTarget === "Riyal"){
        let result = pkrriyal(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Pkr" && currencyTarget === "pound"){
        let result = pkrpound(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "dollar" && currencyTarget === "Pkr"){
        let result = dollarpkr(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "dollar" && currencyTarget === "Riyal"){
        let result = dollarriyal(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "dollar" && currencyTarget === "pound"){
        let result = dollarpound(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Riyal" && currencyTarget === "Pkr"){
        let result = riyalpkr(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Riyal" && currencyTarget === "dollar"){
        let result = riyaldollar(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Riyal" && currencyTarget === "pound"){
        let result = riyalpound(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "pound" && currencyTarget === "Pkr"){
        let result = poundpkr(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "pound" && currencyTarget === "dollar"){
        let result = pounddollar(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "pound" && currencyTarget === "Riyal"){
        let result = poundriyal(amount1);
        console.log(result.toFixed(2));
    }else if(currency === "Pkr" && currencyTarget === "Pkr"){
        console.log(amount1)
    }else if(currency === "dollar" && currencyTarget === "dollar"){
        console.log(amount1)
    }else if(currency === "Riyal" && currencyTarget === "Riyal"){
        console.log(amount1)
    }else if(currency === "pound" && currencyTarget === "pound"){
        console.log(amount1)
    }
    let {again} = await inquirer.prompt(asking);
    condition = again;
}while(condition)
