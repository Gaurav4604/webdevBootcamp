let list = [];

while (true) {
    let input = prompt("Input the Command").toLowerCase();
    if (input == 'new') {
        let inputPt1 = prompt("Value to be added?");
        list.push(inputPt1);
        console.log("List item added");
    }
    if (input == "list") {
        console.log("************");
        for (let i = 0; i < list.length; ++i) {
            console.log(`${i} : ${list[i]}`);
        }
        console.log("************");
    }
    if (input == "delete") {
        let inputPt2 = prompt("Index to be deleted");
        let index = parseInt(inputPt2);
        list.splice(index, 1)
        console.log("List item deleted");
    }
    if (input == "quit") {
        console.log("Quitting");
        break;
    }
}

alert("Quited App");