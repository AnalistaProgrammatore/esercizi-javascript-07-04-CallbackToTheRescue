class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/** ABSTRACT DATA TYPE per le linked list
 * @property head -> Nodo di testa
 * @property length -> conta i nodi della lista
 * @method first -> ritorna il primo elemento della lista
 * @method last -> ritorna l'ultimo elemento della lista
 * @method find -> cerca un elemento nella lista
 * @method insert(data) -> inserisce un elemento nella lista
 * @method remove -> rimuove un elemento dalla lista
 * @method insertFirst -> inserisce un elemento all'inizio della lista
 * @method insertLast -> inserisce un elemento alla fine della lista
 * @method pop -> rimuove l'ultimo elemento della lista
 * @method display -> stampa gli elementi della lista
 */

class LinkedList {
    constructor() {
        this.head = new Node(null)
        this.length = 0
    }

    insert(data, compare) {
        if (this.length === 0) return this.insertFirst(data)
        if (!compare) return this.insertLast(data)
        const newNode = new Node(data)
        const current = this.find(compare)
        newNode.next = current.next 
        current.next = newNode
        this.length++
    }

    remove(compare) {
        if (this.length === 0) return
        const prev = this.findPrev(compare)
        if (prev !== null) {
            prev.next = prev.next.next
        }
    }

    pop() {
        if (this.head.next === null) return null
        let currentNode = this.head
        let secondNode = currentNode
        while(currentNode.next !== null){
            secondNode = currentNode
            currentNode = currentNode.next
        }
        secondNode.next = null
        this.length--
        return currentNode
    }


    insertFirst(data) {
        const newNode = new Node(data)
        this.head = newNode
        this.length++
    }

    insertLast(data) {
        const newNode = new Node(data)
        const last = this.last()
        last.next = newNode
        this.length++
    }

    find(compare) {
        let currentNode = this.head
        while (!compare(currentNode.data)) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    findPrev(compare) {
        let currentNode = this.head
        let prev = null
        while (currentNode.next !== null && !compare(currentNode.data)) {
            prev = currentNode
            currentNode = currentNode.next
        }
        return prev
    }

    reverse() {
        let currNode = this.head
        let tmp = null
        while (currNode !== null) {
            let next = currNode.next
            currNode.next = tmp
            tmp = currNode
            currNode = next
        }
        return tmp
    }

    first() {
        return this.head
    }

    last() {
        let last = this.head
        while (last.next !== null) {
            last = last.next
        }
        return last
    }

    length() {
        return this.length
    }

    display() {
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
}

/** ABSTRACT DATA TYPE per lo Stack estendendo le Linked List
 * @property store -> contiene la coda (linked list)
 * @method push(data) -> inserisce l'elemento nello stack
 * @method pop -> rimuove l'ultimo elemento dallo stack
 * @method length -> ritorna la lunghezza dello stack
 */

class Stack {
    constructor() {
        this.store = new LinkedList(null)
    }

    length() {
        return this.store.length
    }

    push(data) {
        this.store.insert(data)
    }

    pop() {
        this.store.pop()
    }

    peek() {
        while (this.store.head.next !== null) {
            return this.store.head = this.store.head.next
        }
    }
}

const stack = new Stack()
stack.push('Edoardo')
stack.push('Giovanni')
stack.push('Luca')
stack.pop()
console.log(stack.length())
console.log(stack)
