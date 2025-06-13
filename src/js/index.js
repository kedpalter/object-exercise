// Onchage function
let khacOption = function (direct) {
    let other = document.getElementById(direct).value;
    if (other == 'Khác') {
        document.getElementById(`input${direct}`).classList.remove('d-none');
    } else {
        document.getElementById(`input${direct}`).classList.add('d-none');
    }
}
// Cập nhật số đang chọn khi kéo thanh range
const slider = document.getElementById('slider');
const currentValue = document.getElementById('currentValue');

slider.oninput = function () {
    currentValue.textContent = Number(this.value).toLocaleString("vi-VN");

};
// OOP
class FormYeuCau {
    hoTen = '';
    email = '';
    soDienThoai = '';
    nganSach = '';
    phanKhuc = '';
    thuongHieu = '';
    loaiXe = '';
    ghiChu = '';
}

document.querySelector('#btnYeuCau').onclick = function (e) {
    e.preventDefault();


    let yeuCau = new FormYeuCau();
    let arrYeuCau = document.querySelectorAll('#frmYeuCau .input');
    console.log(yeuCau);

    let strHTML = '';
    for (let tag of arrYeuCau) {
        let ten = tag.name;
        let giaTri = tag.value;
        let tieuDe = tag.title;

        yeuCau[ten] = giaTri;
        if (giaTri == 'Khác') {
            giaTri = document.querySelector(`#input${tag.id} input`).value;
        }

        if (tag.type == 'radio' && !tag.checked) continue;


        if (tieuDe) {
            if (ten == 'nganSach') {
                strHTML += `<li class="list-group-item d-flex justify-content-between text-white"><strong class="d-inline-block">${tieuDe}:</strong> <span class="d-inline-block">${Number(giaTri).toLocaleString('vi-VN')} đ</span></li>`;
            } else {
                strHTML += `<li class="list-group-item d-flex justify-content-between text-white"><strong class="d-inline-block">${tieuDe}:</strong> <span class="d-inline-block">${giaTri}</span></li>`;
            }

        }
    }
    document.querySelector('.yeu-cau').classList.add('d-none');
    document.querySelector('.ket-qua').classList.remove('d-none');
    document.querySelector('.ketQua ul').innerHTML = strHTML;

}

document.querySelector('#btnNewForm').onclick = function (e) {
    e.preventDefault();
    document.getElementById('frmYeuCau').reset();
    document.getElementById('currentValue').innerHTML = '1.000.000.000';
    document.querySelectorAll('.inputKhac').forEach(div => { div.style.display = "none" });
    document.querySelector('.yeu-cau').classList.remove('d-none');
    document.querySelector('.ket-qua').classList.add('d-none');
}