function eval() {
    return;
}

function recursive(items, numbers, arrayExpression, i) {
    let x = numbers.pop();
    let y = numbers.pop();
    if (items[items.length - 1] === '+') {
        numbers.push(+x + +y);
        items.pop();
    } else if (items[items.length - 1] === '*') {
        numbers.push(+x * +y);
        items.pop();
    } else if (items[items.length - 1] === '/') {
        numbers.push(+y / +x);
        items.pop();
    } else if (items[items.length - 1] === '-') {
        numbers.push(+y - +x);
        items.pop();
    }

    if (expressionItem[items[items.length - 1]] >= expressionItem[arrayExpression[i]]) {
        recursive(items, numbers);
    } else if (arrayExpression[i] !== ')'){
        items.push(arrayExpression[i])
    }

}

function expressionCalculator(expr) {
    let result;
    let numbers = [];
    let items = [];
    let arrayExpression = expr.split(' ');
    for (let i = arrayExpression.length - 1; i >= 0; i--) {
        if (arrayExpression[i] === '') {
            arrayExpression.splice(i, 1);
        }
    }

    for (let i = 0; i < arrayExpression.length  ; i++) {

        if (arrayExpression[i] !== '+' && arrayExpression[i] !== '-' && arrayExpression[i] !== '*' && arrayExpression[i] !== '/' && arrayExpression[i] !== '(' && arrayExpression[i] !== ')') {
            numbers.push(arrayExpression[i]);
        }

        if (arrayExpression[i] === '(') {
            items.push(arrayExpression[i])
        }

        if (arrayExpression.length  === (i + 1)) {
            let x =parseFloat( numbers.pop());
            let y =parseFloat( numbers.pop());

            if (items[items.length - 1] === '+') {
                numbers.push(+x + +y);
                items.pop();
            } else if (items[items.length - 1] === '*') {
                numbers.push(+x * +y);
                items.pop();
            } else if (items[items.length - 1] === '/') {
                numbers.push(+y / +x);
                items.pop();
            } else if (items[items.length - 1] === '-') {
                numbers.push(+x - +y);
                items.pop();
            }
        }

        if (arrayExpression[i] === '*' || arrayExpression[i] === '+' || arrayExpression[i] === '-' || arrayExpression[i] === '/') {
            if (items.length === 0) {
                items.push(arrayExpression[i]);
            } else {
                if (expressionItem[items[items.length - 1]] < expressionItem[arrayExpression[i]] || items[items.length - 1] === '(') {
                    items.push(arrayExpression[i])
                } else {

                    let x = numbers.pop();
                    let y = numbers.pop();

                    if (items[items.length - 1] === '+') {
                        numbers.push(+x + +y);
                        items.pop();
                    } else if (items[items.length - 1] === '*') {
                        numbers.push(+x * +y);
                        items.pop();
                    } else if (items[items.length - 1] === '/') {
                        numbers.push(+y / +x);
                        items.pop();
                    } else if (items[items.length - 1] === '-') {
                        numbers.push(+x - +y);
                        items.pop();
                    }
                    if (expressionItem[items[items.length - 1]] >= expressionItem[arrayExpression[i]] || items[items.length] === 0) {
                        recursive(items, numbers, arrayExpression, i);
                    } else {items.push(arrayExpression[i])}
                }
            }
        }

        if (arrayExpression[i] === ')') {
            // recursive(items, numbers, arrayExpression, i)

            do {
                let x = numbers.pop();
                let y = numbers.pop();
                if (items[items.length - 1] === '+') {
                    numbers.push(+x + +y);
                    items.pop();
                } else if (items[items.length - 1] === '*') {
                    numbers.push(+x * +y);
                    items.pop();
                } else if (items[items.length - 1] === '/') {
                    numbers.push(+y / +x);
                    items.pop();
                } else if (items[items.length - 1] === '-') {
                    numbers.push(+y - +x);
                    items.pop();
                }

            }while (items[items.length - 1] !== '(');
            items.pop();
        }
    }

    result = numbers.pop();
    return result;
}

let expressionItem = {
    '+': '1',
    '-': '1',
    '*': '2',
    '/': '2'
};


module.exports = {
    expressionCalculator
};