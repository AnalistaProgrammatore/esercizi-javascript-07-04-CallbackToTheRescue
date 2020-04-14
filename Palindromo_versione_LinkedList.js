class Node {
    constructor(char, next) {
        this.value = char;
        this.next = next;
    }
}
class LinkedList {
    constructor(word) {
        const index = word.length;
        let currentNode = null;
        for (let i = index - 1; i >= 0; i--) {
            let node = new Node(word[i], currentNode);
            currentNode = node;
        }
        this.head = currentNode;
    }

    isPalindrome() {
        let currentNode = this.head
        let pointerOne = currentNode
        let pointerTwo = pointerOne
        if (pointerOne.next == null) {
            return true
        }
        while (pointerTwo.next != null) {
            pointerOne = pointerOne.next;
            pointerOne.prev = currentNode
            currentNode = pointerOne
            pointerTwo = pointerTwo.next
            if (pointerTwo.next == null) {
                currentNode = pointerOne.prev;
            } else {
                pointerTwo = pointerTwo.next;
            }
        }
        do {
            if (pointerOne.value !== currentNode.value) {
                return false
            }
            pointerOne = pointerOne.next;
            currentNode = currentNode.prev;
        } while (pointerOne != null)
        return true
    }
}

const ciao = new LinkedList('ciao')
console.log(ciao.isPalindrome())
const ossesso = new LinkedList('ossesso')
console.log(ossesso.isPalindrome())
