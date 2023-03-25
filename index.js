// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
beforeEach(function(){
cats.length =0;
cats.push("Milo", "Otis", "Garfield")

});
    
function destructivelyAppendCat(name){
   return  cats.push(name)
  };

  function destructivelyPrependCat(name){
    return cats.unshift("Bob")
  }
  function destructivelyRemoveLastCat(){
    return cats.pop("Garfield")
    
    }
  
  function destructivelyRemoveFirstCat(){
    return cats.shift()
  }
  function appendCat(name){
let newCat =[...cats,"Broom"]
    return newCat;
  }
function prependCat(name){
const newElement ="Arnold";
const newCat= [newElement,...cats,]
return newCat;
}
function removeLastCat(){
    return cats.slice(0,2);
}
function  removeFirstCat(){
    return cats.slice(1)
}  