// let m1 = ['hello world', 'lorem ipsum', 'javascript is cool',]
// console.log(m1[2].length) //можна підставити потрібне значення
// console.log(m1[0].length,m1[1].length,m1[2].length) //значення в ряд
// console.log('hello world'.toLocaleUpperCase());
// console.log('lorem ipsum'.toLocaleUpperCase());
// console.log('javascript is cool'.toLocaleUpperCase());
// console.log('HELLO WORLD'.toLocaleLowerCase());
// console.log('LOREM IPSUM'.toLocaleLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLocaleLowerCase());
// let str = ' dirty string   '
// console.log(str)
// let str2 = str.trim()
// console.log(str2)
// let str3 = 'Каждый охотник желает знать';
// let str4 = str3.split(' ',4);
// console.log(str4)
{
let str = 'Кожний мисливець бажає знати';
let arr = str.substr(0,6);
console.log(arr)
document.write(arr)
}
{
  let str = 'HTML JavaScript PHP'
  function insert_dash(str) {
  return str.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
} 
document.writeln(insert_dash(str));
}