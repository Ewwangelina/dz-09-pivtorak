const inputKats1 = prompt('Enter two katets')

let gipoten1 = 0;

if(inputKats1 !== null){
    if(inputKats1.trim() !== ""){
        const kats = inputKats1.split(" ")
        console.log(kats[0], kats[1])
        console.log (isNaN (kats[0]))
        console.log (isNaN (kats[1]))
        if (isNaN (kats[0]) || isNaN (kats[1])) {
            alert(`Число не валідне ${kats[0], kats[1]}`)
        }else {
            gipoten1 = Math.sqrt(Math.pow(kats[0], 2) + Math.pow(kats[1], 2))
            alert(`Ваш результат ${gipoten1}`)
        }
    }else {
        alert(`Строка пуста`)
    }
}else {
    alert(`Ви скасували завдання`)
}
 