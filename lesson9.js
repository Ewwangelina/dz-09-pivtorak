const inputKats = prompt('Введить 2 катета через пробіл')

if(inputKats.trim !== null) {
    const kats = inputKats.split(" ")
    if ( Number(kats[0]) > 0 && Number((kats[1]) > 0  && kats.length === 2)) {
        const firstKat = kats[0];
        const secondKat = kats[1]
        alert(`Ваш результат ${Math.sqrt(Math.pow(kats[0], 2) + Math.pow(kats[1], 2))}`) 
    } else {
        alert(`Треба ввести два числа більше 0`)
    }
} else {
    alert('Нажаль вы нічого не ввели')}




 

            

