const randColor = function () {
  const hex = '0123456789ABCDEF';
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // 6 is the max length of a hex color
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randColor());

let intervalId
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
         document.body.style.backgroundColor = randColor();
    }  
    setInterval
}
const stopChangingColor = function(){
    function stopColors () {     
    document.querySelector('#stop').addEventListener('click', startChangingColor);
    }    
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)