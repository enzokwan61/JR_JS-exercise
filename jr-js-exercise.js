let shoppingList = ["Ferrari", "Lambo", "Bugatti"]

shoppingList.push("Pagani", "Aston Martin")
console.log(`shopping list after added 2 items: ${shoppingList}`)

shoppingList.pop()
console.log(`shopping list after delete the last item: ${shoppingList}`)

//

function checkShoppingListFull() {
    if (shoppingList.length > 5) {
        console.log("Your cart is full")
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}: ${item}`)
        });
    }
}

function checkItemInShoppingList(item) {
    let found = false
    for (const element of shoppingList){
        if (element === item) {
            found = true
            break
        }
    }
    if (found === true) {
        console.log(`${item} is in the list`)
    } else {
        console.log(`${item} is NOT in the list`)
    }
}

let ferrari = {
    name: "F430",
    price: 2000000,
    quantity: 1
}

//my testing code
shoppingList.push("Toyota", "Honda", "Mazda")
console.log("added 3 new items, now 7 items in total")

checkShoppingListFull()

checkItemInShoppingList("Ferrari")