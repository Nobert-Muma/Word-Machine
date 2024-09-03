function solution(S){
    let stack=[];
    let operation=0;
    function isInteger(value){
        return /^-?\d+$/.test(value);
    }
    if (S.length < 0 || S.length > 2000){
        return -1;
    } else {
        let arrayFormatOfString=S.split(" ");
        while (operation < arrayFormatOfString.length){
            if (arrayFormatOfString[operation]==="POP"){
                if (stack.length===0){
                    return -1;
                } else {
                    stack.pop();
                }
            } else if (arrayFormatOfString[operation]==="DUP") {
                if(stack.length===0){
                    return -1;
                } else {
                    let lastElement=stack[stack.length-1];
                    stack.push(lastElement);
                }
            } else if(arrayFormatOfString[operation]==="+") {
                if (stack.length < 2){
                    return -1;
                } else {
                    let firstNumber=stack.pop();
                    let secondNumber=stack.pop();
                    let sum=firstNumber+secondNumber;
                    if (sum < 0 || sum > 219){
                        return -1;
                    } else {
                        stack.push(sum);
                    }
                }
            } else if(arrayFormatOfString[operation]==="-"){
                if (stack.length < 2){
                    return -1;
                } else {
                    let numberOne=stack.pop();
                    let numberTwo=stack.pop();
                    let difference=numberOne-numberTwo;
                    if (difference < 0){
                        return -1;
                    } else {
                        stack.push(difference);
                    }
                }
            } else if (isInteger(arrayFormatOfString[operation])){
                    stack.push(parseInt(arrayFormatOfString[operation], 10));
                } else {
                    return -1;
                }
            operation+=1;
        }
    }
    return stack[stack.length-1];
}
console.log(solution("13 DUP 4 POP 5 DUP + DUP + -"))
console.log(solution("4 5 6 - 7 +"))
console.log(solution("5 6 + -"))
console.log(solution("3 DUP 5 - -"))
console.log(solution("1048575 DUP +"))

