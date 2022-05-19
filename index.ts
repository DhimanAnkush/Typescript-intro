
type User = {
    id: number;
    name: string;
    age: number;
    salary: number;
};

var arr: User[] = [
    {
        id: 1,
        name: "Ankush",
        age: 25,
        salary: 12000
    },
    {
        id: 3,
        name: "Johny",
        age: 23,
        salary: 9000
    },
    {
        id: 2,
        name: "Simran",
        age: 30,
        salary: 6000
    }
]


var sorted = (array) => {

    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1].id > array[i].id) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;

}

console.log(sorted(arr))

export { }

