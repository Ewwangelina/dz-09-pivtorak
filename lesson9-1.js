const inputUser = prompt("Введите 2 катета через пробел")

if(inputUser?.trim() !== '' && inputUser !== null) {
    const arrCatet = inputUser.split(" ")
    if (Number(arrCatet[0]) > 0 && Number(arrCatet[1]) > 0 && arrCatet.length === 2) {
        const firstCatet = arrCatet[0];
        const secondCatet = arrCatet[1]
        alert(`гіпотенуза = ${Math.sqrt((firstCatet**2)+ (secondCatet**2))}`)
    }else {
        alert("треба ввести два числа більше 0")}
}else {
    alert('Нажаль вы нічого не ввели')}