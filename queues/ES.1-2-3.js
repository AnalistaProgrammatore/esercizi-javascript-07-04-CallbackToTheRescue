/**
 * @property name -> Contiene la proprietà nome del paziente
 * @property code -> Contiene la proprietà codice del paziente
 * 
 */
class Patient {
    constructor(name, code) {
        this.name = name
        this.code = code
    }
}

/**
 * @property store -> Array che contiene i dati della coda
 * @method enqueueRight -> Metto l'elemento nella coda
 * @method enqueueLeft -> Metto l'elemento al primo posto  della coda
 * @method dequeueLeft -> Elimino il primo elemento dalla coda
 * @method dequeueRight -> Elimino l'ultimo elemento dalla coda
 * @method isEmpty -> Boolean -> Se l'array è vuoto torna true, altrimenti false
 * @method isPalindrome(word) -> Boolean -> Se l'argomento della funzione è palindromo ritorna true, altrimenti false
 * @method dequeuePriority -> Estrai elemento dalla coda in base al @property codice della Classe Paziente
 * @method toString() -> Ritorna i valori @property nome-codice degli elementi della classe Paziente
 */

class Queue {
    constructor(...store) {
        this.store = store
    }

    enqueueRight(data) {
        this.store.push(data);
    }

    enqueueLeft(data) {
        this.store.unshift(data);
    }

    dequeueLeft() {
        return this.store.shift();
    }

    dequeueRight() {
        return this.store.splice(this.store.length - 1, 1)[0]
    }

    isEmpty() {
        return this.store.length === 0;
    }

    isPalindrome(word) {
        const dequeue = new Queue();
        for (let i = 0; i < word.length; i++) {
            dequeue.enqueueRight(word[i])
        }
        while (!dequeue.isEmpty()) {
            let leftVal = dequeue.dequeueLeft();
            let rightVal = dequeue.dequeueRight();
            if (leftVal && rightVal && leftVal !== rightVal) {
                return false
            }
        }
        return true
    }

    dequeuePriority() {
        let next = 0
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].code > this.store[next].code) {
                next = i
            }
        }
        return this.store.splice(next, 1)
    }

    toString() {
        let string = ""
        for (let i = 0; i < this.store.length; i++) {
            string += this.store[i].name + " code: " +
                this.store[i].code + "\n"
        }
        return string
    }

}

console.log(' ESERCIZIO N. 1 =   A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list ')
const deque = new Queue()
deque.enqueueLeft(1)
deque.enqueueLeft(2)
deque.enqueueLeft(3)
deque.dequeueLeft()
deque.dequeueRight()
console.log(deque)


console.log('ESERCIZIO N. 2 = Determine if a given word is a palindrome.')
const queue = new Queue()
console.log(queue.isPalindrome('ossesso'))
console.log(queue.isPalindrome('assassino'))



console.log('ESERCIZIO N. 3 =  Modify the priority queue example  so that the higher-priority elements have higher numbers rather than lower numbers.')
const ed = new Queue()
const patientOne = new Patient('Rosario', 1)
ed.enqueueRight(patientOne)
const patientTwo = new Patient('Cristiano', 5)
ed.enqueueRight(patientTwo)
const patientThree = new Patient('Giovanni', 3)
ed.enqueueRight(patientThree)
console.log('Pazienti in coda attualmente: ')
console.log(ed.toString())
console.log('Visito il paziente con il codice più alto nella coda.')
ed.dequeuePriority()
console.log('Pazienti in coda attualmente: ')
console.log(ed.toString())
console.log('Visito il paziente con il codice più alto nella coda.')
ed.dequeuePriority()
console.log('Pazienti in coda attualmente: ')
console.log(ed.toString())



