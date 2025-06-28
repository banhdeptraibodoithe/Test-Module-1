let a = [], b = [];
let input;
while (true) {
    input = +prompt("Nhập kích thước mảng mong muốn (kích thước <= 50)");
    if (input > 0 && input <= 50) 
        break;
}
for (let i = 0; i < input; i++) {
    let number = +prompt("Nhập phần tử thứ " + (i + 1));
    a.push(number);
    if (number == 2)
        b.push(number);
    for (let j = 2; j < number; j++) {
        if (number % j == 0)
            break;
        if (j == number - 1)
            b.push(number);
    }
}
console.log("Mảng a " + a);
console.log("Mảng b " + b);

