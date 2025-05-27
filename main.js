const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("text-blue-600", "border-blue-600", "font-semibold");
      btn.classList.add("text-gray-600");
    });
    tabPanels.forEach((panel) => panel.classList.add("hidden"));

    button.classList.add(
      "text-blue-600",
      "border-b-2",
      "border-blue-600",
      "font-semibold"
    );
    button.classList.remove("text-gray-600");
    tabPanels[index].classList.remove("hidden");
  });
});

// *******************

const arr = [];
function themSo() {
  const numberN = document.getElementById("numberN").value * 1;
  let temp = numberN;
  if (temp !== "") {
    arr.push(temp);
    hienThiSo();
    numberN.value = "";
  }
}

function hienThiSo() {
  const p = document.getElementById("mangHienTai");
  p.innerHTML = `${arr}`;
}
// Bài tập 1
function tongSoD() {
  let tong = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      tong += arr[i];
    }
  }
  const p = document.getElementById("tongSoDuong");
  p.innerHTML = tong;
}

// Bài tập 2
function demSoD() {
  let dem = 0;
  const p = document.getElementById("demSo");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      dem++;
    }
  }
  p.innerHTML = dem;
}

// Bài tập 3
function timSoMin() {
  let min = arr[0];
  const p = document.getElementById("soMin");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  p.innerHTML = min;
}

// Bài tập 4
function timSoMinDuong() {
  let min = arr[0];
  const p = document.getElementById("soMinDuong");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min && arr[i] > 0) {
      min = arr[i];
    }
  }

  p.innerHTML = min;
}
// ********************
// Bài tập 5

function timSoChanCuoiCung(arr) {
  const p = document.getElementById("soChan");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      if (p) p.innerHTML = arr[i];
      return arr[i];
    }
  }

  p.innerHTML = "0";
  return 0;
}

// Bài tập 6
function doiCho() {
  const index1 = parseInt(document.getElementById("index1").value);
  const index2 = parseInt(document.getElementById("index2").value);

  const tb = document.getElementById("tb");
  if (
    !isNaN(index1) &&
    !isNaN(index2) &&
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < arr.length &&
    index2 < arr.length
  ) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    // hienThiSo();
    tb.innerHTML = `[${arr.join(", ")}]`;
  } else {
    tb.innerHTML = `Vị trí đổi chỗ không hợp lệ`;
  }
}

// Bài tập 7
function sapXeptangDan(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  const tangDan = document.getElementById("tangdan");
  if (tangDan) {
    tangDan.innerHTML = `[${arr.join(", ")}]`;
  }
}

// Bài tập 8

function soNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function timSoNguyenTo(arr) {
  const hienSoNTo = document.getElementById("hienSoNTo");
  for (let i = 0; i < arr.length; i++) {
    if (soNguyenTo(arr[i])) {
      if (hienSoNTo) hienSoNTo.innerHTML = `${arr[i]}`;
      return arr[i];
    }
  }
  if (hienSoNTo) hienSoNTo.innerHTML = "0";
  return -1;
}

// Bài tập 9
function demSoNguyen(arr) {
  let dem = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      dem++;
    }
  }
  const demSoN = document.getElementById("demSoN");
  if (demSoN) demSoN.innerHTML = `${dem}`;
}

// Bài tập 10

function soSanhSoAmDuong(arr) {
  let soAm = 0;
  let soDuong = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] > 0) {
        soDuong++;
      } else if (arr[i] < 0) {
        soAm++;
      }
    }
  }

  const soSanh = document.getElementById("soSanh");
  if (soSanh) {
    soSanh.innerHTML =
      `Số âm: ${soAm}, số dương: ${soDuong}.<br>` +
      (soAm > soDuong
        ? "Số âm nhiều hơn."
        : soDuong > soAm
        ? "Số dương nhiều hơn."
        : "Số âm và số dương bằng nhau.");
  }

  return { soAm, soDuong };
}
