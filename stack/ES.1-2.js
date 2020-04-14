/** ABSTRACT DATA TYPE STACK 
 * @property store -> array degli elementi dello stack
 * @property top -> posizione della testa dello stack
 * @prototype contains -> aggiunto nel prototype una funzione che utilizzata all'interno del metodo postfix determina se una stringa contenga o meno i caratteri indicati al suo interno
 * @method push -> inserisce un elemento nella lista
 * @method pop -> recupera e rimuove l'elemento dalla testa della lista
 * @method length -> grandezza dello stack
 * @method postfix(expr) -> mette nello stack gli operatori e gli operandi contenuti nella stringa
 * @method parenthesesBal(exp) -> mette il puntatore dove manca la parentesi dell'espressione
 * @method calc(op1,op2) -> esegue operazione contenuta nell'operatore tra gli operandi
*/
class Stack {
    constructor() {
        this.store = []
        this.top = 0

    }

    length() {
        return this.store.length
    }

    push(data) {
        this.store[this.top++] = data
    }

    pop() {
        return this.store[--this.top]
    }

    parenthesesBal(expr) {
        const s = new Stack();
        let pos = 0;
        for (let index = 0; index < expr.length; index += 1) {
            if (expr[index] === "(") {
                s.push(expr[index]);
            } else if (expr[index] === ")") {
                s.pop();
            }
            pos++;
        }

        if (s.length() > 0) {
            console.log('s length', s.length())
            return pos;
        } else {
            return -1;
        }
    }

    postfix(expr) {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const operators = new Stack();
        const operands = new Stack();
        for (let index = 0; index < expr.length; index += 1) {
            if (expr[index] === " ") {
                continue;
            }
            if (nums.contains(parseInt(expr[index]))) {
                operands.push(expr[index]);
            } else {
                operators.push(expr[index]);
                let result = this.calc(operators, operands);
                operands.push(result);
            }
        }
        return operands.pop();
    }

    calc(operators, operands) {
        let second = operands.pop();
        let op = operators.pop();
        let first = operands.pop();
        let x = first + op + second;
        return eval(x);
    }

}

Array.prototype.contains = function (n) {
    for (let index = 0; index < this.length; index += 1) {
        if (this[index] === n) {
            return true;
        }
    }
    return false;
}

const stack = new Stack()
console.log('ESERCIZIO 1 = Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing')
console.log(stack.parenthesesBal("2.3 + 23 / 12 + (3.14159 * 24"))

console.log(' ESERCIZIO 2 = Using two stacks—one for the operands and one for the operators—design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression. ')
console.log(stack.postfix('4 3 + 2 /'))
