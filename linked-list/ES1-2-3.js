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
 * @method findNth -> recupera l'elemento all aposizione specificata
 * @method insert(data) -> inserisce un elemento nella lista
 * @method remove -> rimuove un elemento dalla lista
 * @method removeNth -> rimuove l'elemento dalla lista alla posizione specificata
 * @method insertFirst -> inserisce un elemento all'inizio della lista
 * @method insertLast -> inserisce un elemento alla fine della lista
 * @method insertAfter -> inserisce un elemento dopo un altro elemento della lista
 * @method insertBefore -> inserisce un elemento prima di un altro elemento della lista
 * @method insertNth -> inserisce un elemento alla posizione specificata nella lista
 * @method display -> stampa gli elementi della lista
 * @method reverse -> Inverti l'ordine dei nodi
 * @method advance(n) -> Muoviti di n nodi in avanti in maniera sequenziale partendo dalla testa della Linked List
 * @method back(n) -> Muoviti di n nodi indietro in maniera sequenziale partendo dalla coda della Linked List
 * @method show(fnc) -> Callback che mostra la posizione del nodo corrente dopo averlo mosso di n posizioni
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
        newNode.next = current.next // imposto il vecchio next di current al nuovo next di newNode
        current.next = newNode // imposto il nuovo next di current al nuovo nodo
        this.length++
    }

    remove(compare) {
        if (this.length === 0) return
        const prev = this.findPrev(compare)
        if (prev !== null) {
            prev.next = prev.next.next
        }
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

    display() {
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

    advance(data) {
        let currentNode = this.head
        for (let i = 1; i < data; i++) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
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

    back(data) {
        let currentNode = this.reverse()
        for (let i = 1; i < data; i++) {
            currentNode = currentNode.next
        }

        console.log(currentNode)
    }

    show(fn) {
        let current = this.head;
        while (current) {
            if (fn) {
                fn(current);
            }
            current = current.next;
        }
    }

}


/** USO LA CLASSE -> devo avere meno responsabilità possibile */
const llist = new LinkedList()
llist.insert({ hello: 'world' })
llist.insert(1, current => current.hello && current.hello === 'world')
llist.insert(4)
llist.insert(3)
llist.remove(current => current === 4)
llist.display()

console.log('ES. 1-2-3 =  Implement the advance(n), back(n) and show()')
console.log('NB Ho voluto provare a svolgere l esercizio utilizzando solo una Linked List, l unica soluzione che ho trovato è  stata creare due puntatori che scorrono i nodi, uno all inizio e l altra alla fine della LL ed una callback che mostra i valori dei rispettivi puntatori')
llist.show(llist.advance(1))
llist.show(llist.back(1))
