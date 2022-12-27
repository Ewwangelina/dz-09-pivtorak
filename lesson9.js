/*- спросить у пользователя длины катетов треугольника

- пользователь вводит длины одним сообщением через пробел

– если пользователь ввел невалидные длины, то вывести ему ошибку

- если длины валидны, вывести ему длину гипотенузы, посчитанной двумя способами: с и без использования Math*/

const inputKats = prompt('Enter two katets')

let gipoten1 = 0;
let gipoten2 = 0;

if(inputKats !== null){
    if(inputKats.trim() !== ""){
        const kats = inputKats.split(" ")
        console.log(kats[0], kats[1])
        console.log (isNaN (kats[0]))
        console.log (isNaN (kats[1]))
        if (isNaN (kats[0]) || isNaN (kats[1])) {
            alert(`Число не валидное ${kats[0], kats[1]}`)
        }else {
            
            // max = maximum(|kats[0]|, |kats[1]|)
            // min = minimum(|kats[0]|, |kats[1]|)
            // r = min / max
            // gipoten1=  max*sqrt(1 + r*r)


            gipoten2 = Math.sqrt((kats[0] * kats[0]) + (kats[1] * kats[1]))
            // alert(`Ваш результат ${gipoten1}`)
            alert(`Ваш результат ${gipoten2}`)
        }
    }else {
        alert(`Строка пуста`)
    }
}else {
    alert(`Ви скасували завдання`)
}
 
