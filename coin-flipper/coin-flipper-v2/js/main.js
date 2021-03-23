document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  if(data.flip === 1){
    document.querySelector("h2").innerHTML = "Heads"
    document.querySelector("img").src = "asset/Bronze_11.png"
  }else{
    document.querySelector("h2").innerHTML = "Tails"
    document.querySelector("img").src = "asset/Bronze_30.png"
  }
}