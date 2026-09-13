//object loop
const myObject = {
    js :'javascipt',
    cpp:'C++',
    rb :'ruby',
    swift :'swift by apple'
}
for(const key in myObject){
//   console.log(myObject[key]);
//   console.log(`${key}shortcut is for ${myObject[key]}`);
  
}


const Programming =['js','rb','py','java','c++']
for(const key in Programming){
    // console.log(Programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United ststes of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const key in map){
// console.log(key);  // map ke andar basics iteration nhi kiye jaa sakkte h
}
