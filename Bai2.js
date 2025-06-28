function checkEquals(tso1, tso2, mso1, mso2) {
    if (tso1 == 0 && tso2 == 0)
        return true;
    if ((tso1 * mso2 == tso2 * mso1) && (mso1 * mso2 != 0))
        return true;
    return false;
}

console.log(checkEquals(1, 4, 5, 20));