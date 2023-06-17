// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
let name
function destructivelyAppendCat(name){
    cats.push(name)
    cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    cats
}


function destructivelyRemoveLastCat(){
    cats.pop()
    cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    cats
}

function appendCat(name){
    let newCats=[...cats, name]
    return newCats
}

function prependCat(name){
    let newCats=[name, ...cats]
    return newCats
}

function removeLastCat(){
    let newCats=cats.slice(0,cats.length-1)
    return newCats
}

function removeFirstCat(){
    let newCats=cats.slice(1)
    return newCats
}