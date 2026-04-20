class NestedListIterator {
    constructor(nestedList) {
        this.nestedList = nestedList;
        this.index = 0;
        this.currentList = this.nestedList[this.index];
    }

    hasNext() {
        while (this.currentList === null || this.currentList.length === 0) {
            this.index++;
            if (this.index >= this.nestedList.length) {
                return false;
            }
            this.currentList = this.nestedList[this.index];
        }
        return true;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("Next element does not exist");
        }
        let result = this.currentList.shift();
        if (this.currentList.length === 0) {
            this.index++;
            if (this.index < this.nestedList.length) {
                this.currentList = this.nestedList[this.index];
            } else {
                this.currentList = null;
            }
        }
        return result;
    }
}

// Test
let nestedList = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]];
let iterator = new NestedListIterator(nestedList);
while (iterator.hasNext()) {
    console.log(iterator.next());
}
```

Kodda NestedListIterator classi yaratilib, u ichma-ich ro'yxatni tekis iterator qiladi. hasNext() metodi ro'yxatda keyingi element mavjudligini tekshiradi, next() metodi keyingi elementni olib qaytaradi.
