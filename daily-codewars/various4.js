const arr = N => Array.from({length: N}, (v, i) => i);

function hello(name) {
    if(name){
      name = name.toLowerCase()
      name = name[0].toUpperCase() + name.slice(1, name.length)
      return `Hello, ${name}!`
    }else{
      return 'Hello, World!'
    }
  }