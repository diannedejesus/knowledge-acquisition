const buttonClicker = document.querySelector('#clickMe')
buttonClicker.addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  if(data.flip === 1){
    buttonClicker.removeEventListener('click', makeReq)
    document.querySelector("h2").innerHTML = "Heads"
    document.querySelector("img").src = "asset/Bronze_11.png"
    setTimeout(changeImage, 3000)
  }else{
    buttonClicker.removeEventListener('click', makeReq)
    document.querySelector("h2").innerHTML = "Tails"
    document.querySelector("img").src = "asset/Bronze_30.png"
    setTimeout(changeImage, 3000)
  }
}

function changeImage(){
  document.querySelector("img").src = "asset/fast.gif"
  buttonClicker.addEventListener('click', makeReq)
}