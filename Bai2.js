function checkEquals(tso1, tso2, mso1, mso2) {
    if (tso1 == 0 && tso2 == 0)
        return true;
    if ((tso1 * mso2 == tso2 * mso1) && (mso1 * mso2 != 0))
        return true;
    return false;
}

let tso1 = +prompt("Nhập tử số 1");
let tso2 = +prompt("Nhập tử số 2");
let mso1 = +prompt("Nhập mẫu số 1");
let mso2 = +prompt("Nhập mẫu số 2");
alert(checkEquals(tso1, tso2, mso1, mso2));