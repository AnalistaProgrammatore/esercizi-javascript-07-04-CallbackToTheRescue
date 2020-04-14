class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

/** ABSTRACT DATA TYPE per le linked list
 * @property head -> Nodo di testa
 * @property length -> conta i nodi della lista
 * @method first -> ritorna il primo elemento della lista
 * @method last -> ritorna l'ultimo elemento della lista
 * @method find -> cerca un elemento nella lista
 * @method add(data) -> inserisce un elemento nella lista
 * @method remove -> rimuove un elemento dalla lista
 * @method insertFirst -> inserisce un elemento all'inizio della lista
 * @method insertLast -> inserisce un elemento alla fine della lista
 * @method traverse -> Attraversa i nodi della lista
 * @method reverse -> inverte l'ordine della lista
 * @method traverseReverse -> Attraversa i nodi della lista in ordine invertito
 * @method display -> stampa gli elementi della lista
 */

class DoubleLinkedList {
    constructor() {
        this.head = new Node(null)
        this.tail = new Node(null)
        this.length = 0
    }
  
    add(data) {
            const newNode = new Node(data);
            if (this.length === 0) {
              this.head = newNode;
              this.tail = newNode;
            } else {
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode

            }
            this.length ++
            return newNode;
          }

          traverse(fn) {
            let current = this.head;
            while(current) {
              if(fn) {
                fn(current);
              }
              current = current.next;
            }
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

        traverseReverse(fn) {
            let current = this.head
            current = this.reverse()
            while(current) {
              if(fn) {
                fn(current);
              }
              current = current.next;
            }
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
}

const doubleLL = new DoubleLinkedList()
doubleLL.add(10)
doubleLL.add(20)
doubleLL.add(30)
console.log(doubleLL)
doubleLL.traverse(node =>console.log('scorro i nodi in maniera sequenziale',node.data))
doubleLL.traverseReverse(node =>console.log('scorro i nodi inversamente in maniera sequenziale',node.data))
