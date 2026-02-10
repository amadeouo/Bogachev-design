const number = Math.round(Math.random() * 100);
console.log(number)
let promptValue = prompt()

for (let i = 0; i <= 5; i++) {
  if (promptValue > number) {
    alert('Введенное число больше загаданного')
    promptValue = prompt()
  } else if (promptValue < number) {
    alert('Введенное число меньше загаданного')
    promptValue = prompt()
  } else if (promptValue === number) {
    alert('Правильно')
  } else if (typeof promptValue === 'string') {
    alert('Вы ввели буквы')
    promptValue = prompt()
  }
}
