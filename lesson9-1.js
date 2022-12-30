const inputUser = prompt('Введить 2 катета через пробіл')

if(inputUser?.trim() !== null) {
    const arrCatet = inputUser.split(" ")
    if (Number(arrCatet[0]) > 0 && Number(arrCatet[1]) > 0 && arrCatet.length === 2) {
        let pow1 = arrCatet[0];
        pow1**= 2;
        let pow2 = arrCatet[1];
        pow2**= 2;
        console.log(pow1 + pow2);
        alert(`Ваш результат ${(pow1 + pow2)}`)
    }else {
        alert('Треба ввести два числа більше 0')}
}else {
    alert('Нажаль вы нічого не ввели')}

    