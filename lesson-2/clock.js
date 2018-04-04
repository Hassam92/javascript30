const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.min-hand`);
const hoursHand = document.querySelector(`.hour-hand`);
function setDate(){
    // To get current Time
    const now  = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hrs = now.getHours();

    // To rotate Hands
    const secdegree = ((sec / 60) * 360) + 90;
    const mindegree = ((min / 60) * 360) + 90;
    const hrsdegree = ((hrs / 12) * 360) + 90;

    // Applying rotation to Hands
    secondHand.style.transform = `rotate(${secdegree}deg)`;
    minuteHand.style.transform = `rotate(${mindegree}deg)`;
    hoursHand.style.transform  = `rotate(${hrsdegree}deg)`;
    console.log(sec+' and '+ min +' and '+ hrs);
}

setInterval(setDate, 1000);