function sayHello(name) {
  return 'Hello, ' + name
}

function correct(string)
{
	string = string.replace(/0/g, 'O')
  string = string.replace(/5/g, 'S')
  string = string.replace(/1/g, 'I')
  
  return string
}