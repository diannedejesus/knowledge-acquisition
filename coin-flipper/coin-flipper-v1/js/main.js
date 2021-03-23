document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  if(data.flip === 1){
    document.querySelector("h2").innerHTML = "Heads"
  }else{
    document.querySelector("h2").innerHTML = "Tails"
  }
}