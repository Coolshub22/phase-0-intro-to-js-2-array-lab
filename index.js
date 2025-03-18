// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats);

const cats2 = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("");
console.log(cats);

function destructivelyPrependCat(name) {
cats.unshift(name);
}
destructivelyPrependCat('');

function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    return [...cats, name];
  }

  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }

  