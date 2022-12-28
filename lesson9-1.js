const inputKats2 = prompt('Enter two katets')

let gipoTen2 = 0;

if(inputKats2 !== null){
    if(inputKats2.trim() !== ""){
        const kats = inputKats2.split(" ")
        console.log(kats[0], kats[1])
        console.log (isNaN (kats[0]))
        console.log (isNaN (kats[1]))
        if (isNaN (kats[0]) || isNaN (kats[1])) {
            alert(`Число не валідне ${kats[0], kats[1]}`)
        }else {
          gipoTen2 = (kats[0] * kats[0]) + (kats[1] * kats[1])
            alert(`Ваш результат ${gipoTen2}`)
        }
    }else {
        alert(`Строка пуста`)
    }
}else {
    alert(`Ви скасували завдання`)
}