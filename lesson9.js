const inputKats = prompt('Enter two katets')

let gipoten = 0;

if(inputKats !== null){
    if(inputKats.trim() !== ""){
        const kats = inputKats.split(" ")
        if ( Number(kats[0]) <=0 || Number((kats[1])<=0 )) {
            alert(`Число не валідне ${kats[0], kats[1]}`)
        }else {
            console.log(kats[0], kats[1])
            gipoten = Math.sqrt(Math.pow(kats[0], 2) + Math.pow(kats[1], 2))
            alert(`Ваш результат ${gipoten}`)
        }
    }else {
        alert('Нажаль вы нічого не ввели')}
}else {
    alert(`Ви скасували завдання`)}
