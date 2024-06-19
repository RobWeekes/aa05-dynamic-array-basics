class DynamicArray {
    constructor(defaultSize = 4) {
        this.data = [];
        this.capacity = defaultSize;
        this.length = 0;
        this.data.length = defaultSize;
    }

    read(index) {
        if (index < 0 || typeof index !== "number")
            throw new Error("index must be non-negative integer");
        return this.data[index];
    }

    unshift(val) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }

        // Add value to front
        this.data[0] = val;
        this.length++;
    }
}

// local testing

dynamicArr = new DynamicArray(8);

dynamicArr.data[0] = 99; //  = 99;
dynamicArr.length = 1; //  = 1;
console.log(dynamicArr);
console.log(dynamicArr.read(0)); // 99
console.log(dynamicArr.read(1)); // undef

module.exports = DynamicArray;
