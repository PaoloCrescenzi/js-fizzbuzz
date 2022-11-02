const boxContainer = document.querySelector(".box-container")

// scrivo i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
        boxContainer.innerHTML += `<div class="box bg-red">FizzBuzz</div>`
    } else if(i % 3 === 0){
        console.log("Fizz")
        boxContainer.innerHTML += `<div class="box bg-green">Fizz</div>`
    } else if(i % 5 === 0){
        console.log("Buzz")
        boxContainer.innerHTML += `<div class="box bg-yellow">Buzz</div>`
    } else{
        console.log(i)
        boxContainer.innerHTML += `<div class="box">${i}</div>`
    }

}