const abid = {
    name: 'Abid',
    age: 40,
    isMarried: true
};

abid.name = 'Muhammad Abid';
console.log(abid);

console.log(Object.getOwnPropertyDescriptor(abid, "name"));
/*
{
  value: 'Muhammad Abid',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

