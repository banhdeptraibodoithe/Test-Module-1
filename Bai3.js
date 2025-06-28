class SOTIETKIEM {
    maSo;
    loaiTietKiem;
    hoTenKH;
    CMND;
    ngayMoSo;
    tienGui;

    constructor(maSo, loaiTietKiem, hoTenKH, CMND, ngayMoSo, tienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTenKH = hoTenKH;
        this.CMND = CMND;
        this.ngayMoSo = ngayMoSo;
        this.tienGui = tienGui;
    }
}

let soTietKiem = [];
showSTK();

function showSTK() {
    if (soTietKiem.length == 0)
        return;
    let html = `
        <table border="1">
            <tr>
                <th>Mã số</th>
                <th>Loại tiết kiệm</th>
                <th>Họ tên khách hàng</th>
                <th>Chứng minh nhân dân</th>
                <th>Ngày mở sổ</th>
                <th>Số tiền gửi</th>
            </tr>
    `;
    for (let i = 0; i < soTietKiem.length; i++) {
        let data = soTietKiem[i];
        html += `
        <tr>
            <td>${data.maSo}</td>
            <td>${data.loaiTietKiem}</td>
            <td>${data.hoTenKH}</td>
            <td>${data.CMND}</td>
            <td>${data.ngayMoSo}</td>
            <td>${data.tienGui}</td>
        </tr>
        `;
    }
    html += "</table>";
    document.getElementById("bang").innerHTML = html;
}
function navTothemSTK() {
    document.getElementById("bang").innerHTML = `
        <input type="text" placeholder="Mã số" id="code">
        <br>
        <br>
        <input type="text" placeholder="Loại tiết kiệm" id="kind">
        <br>
        <br>
        <input type="text" placeholder="Họ tên khách hàng" id="name">
        <br>
        <br>
        <input type="number" placeholder="Chứng minh nhân dân" id="cmnd">
        <br>
        <br>
        <input type="date" placeholder="Ngày mở sổ" id="time">
        <br>
        <br>
        <input type="number" placeholder="Số tiền gửi" id="money">
        <br>
        <br>
        <button onclick="themSTK()">Thêm sổ mới/button>
    `;
}
function themSTK() {
    let code = document.getElementById("code").value;
    let kind = document.getElementById("kind").value;
    let name = document.getElementById("name").value;
    let cmnd = document.getElementById("cmnd").value;
    let time = document.getElementById("time").value;
    let money = document.getElementById("money").value;
    if (code.length > 5) {
        alert("Mã số tối đa 5 ký tự");
        return;
    }
    if (kind.length > 10) {
        alert("Loại tiết kiệm tối đa 10 ký tự");
        return;
    }
    if (name.length > 30) {
        alert("Họ tên tối đa 30 ký tự");
        return;
    }
    if (cmnd < 0) {
        alert("CMND không hợp lệ");
        return;
    }
    if (money < 1) {
        alert("Số tiền gửi không hợp lệ");
        return;
    }
    for (let i = 0; i < soTietKiem.length; i++) {
        if (soTietKiem[i].maSo == code) {
            alert("Mã số đã tồn tại");
            return;
        }
    }
    if (checkNull(code, kind, name, cmnd, time, money)) {
        soTietKiem.push(new SOTIETKIEM(code, kind, name, cmnd, time, money));
        alert("Thêm sổ tiết kiệm thành công");
        showSTK();
    }
}
function xoaSTK() {
    let codeDel = prompt("Nhập mã sổ muốn xoá");
    for (let i = 0; i < soTietKiem.length; i++) {
        if (soTietKiem[i].maSo == codeDel) {
            if (confirm("Bạn có chắc chắn xoá sổ tiết kiệm này không ?")) {
                soTietKiem.splice(i, 1);
                showSTK();
            }
            return;
        }
    }
    alert("Mã sổ tiết kiệm sai hoặc không có trong hệ thống, vui lòng nhập lại");
    xoaSTK();
}
function checkNull(code, kind, name, cmnd, time, money) {
    if (code == "" || kind == "" || name == "" || cmnd == "" || time == "" || money == "") {
        alert("Vui lòng nhập đủ hết trường thông tin");
        return false;
    }
    return true;
}