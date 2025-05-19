const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
        btn.classList.remove(
        "text-blue-600",
        "border-blue-600",
        "font-semibold"
        );
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
function themSo(){
    const numberN = document.getElementById('numberN').value * 1;
    let temp =  numberN;
    if(temp !== ""){
        arr.push(temp);
        hienThiSo();
        numberN.value = "";
    }
   
}

function hienThiSo(){
    // const ul = document.getElementById("mangHienTai");
    const p = document.getElementById('mangHienTai');
    p.innerHTML = `${arr}`;

    // ul.innerHTML = ""; // xoá nội dung cũ
    //   arr.forEach((item, index) => {
    //     const li = document.createElement("li");
    //     li.textContent = `${index + 1}: ${item}`;
    //     ul.appendChild(li);
    //   });
}
// Bài tập 1
function tongSoD(){
    let tong = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 0){
            tong += arr[i];
        }
    }
    const p = document.getElementById('tongSoDuong');
    p.innerHTML = tong;
}

// Bài tập 2
function demSoD(){
    let dem = 0;
    const p = document.getElementById('demSo');
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            dem++;
        }
    }
     p.innerHTML = dem;
}

// Bài tập 3

function timSoMin(){
    let min = arr[0];
    const p = document.getElementById("soMin");
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    p.innerHTML = min;
}



    // console.log(123);
    // const coreGoal= document.getElementById('coreGoal').value * 1;
    // const core1 = document.getElementById('core1').value * 1;
    // const core2 = document.getElementById('core2').value * 1;
    // const core3 = document.getElementById('core3').value * 1;
    // const coreLocation = document.getElementById('coreLocation').value * 1;
    // const coreObject = document.getElementById('coreObject').value * 1;
    // console.log(coreGoal,core1,core2,core3,coreLocation,coreObject);
    // const coreTotal = core1 + core2 + core3 + coreLocation + coreObject;
    // // console.log(coreTotal);
    // const showResult = document.getElementById('showResult');
    // let result;
    
    // if(core1 === 0 || core2 === 0 || core3 === 0){
    //     result = `<h1 class="text-red-600">Bạn đã Rớt. Do có môn điểm 0</h1>`;
    //         showResult.innerHTML = result;
    // }else{
    //     if(coreTotal >= coreGoal ){
    //         result = `<h1 class="text-green-600">Bạn đã đậu. Tổng điểm: ${coreTotal}</h1>`;
    //         showResult.innerHTML = result;
    //     }else{
    //         result = `<h1 class="text-red-600">Bạn đã Rớt. Tổng điểm: ${coreTotal}</h1>`;
    //         showResult.innerHTML = result;
    //     }
    // }       
// }

// ********************
