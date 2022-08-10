const tipsBtn = document.querySelectorAll(".tip__tips");
const billInput = document.querySelector(".bill__input");
const totalBill = document.querySelector(".totalbill");
const totalTipAmount = document.querySelector(".totaltipamount");

const tipTips = document.querySelectorAll(".tip__tips");

let tipValue = 5;
let billValue = 0;
let peopleValue = 0;

totalBill.innerText = "$0";
totalTipAmount.innerText = "$0";

const error = {
  border: "1px solid red",
  message: "Can't be zero",
};

//function
function vaidate(a, b) {
  var rgx = /^[0-9]*\.?[0-9]*$/;

  if (a.value === "") {
    console.log("kosong");
  }
  if (a.value === "0") {
    b.style.display = "block";
    a.style.border = error.border;
    b.innerText = error.message;
  }
  if (a.value !== "0") {
    b.style.display = "none";
    a.style.border = "";
  }

  if (a.value !== a.value.match(rgx)) {
    a.value = a.value.match(rgx);
  }
}

function input(z) {
  if (z.value >= 1 || z.value === NaN) {
    billValue = bill.value;
    peopleValue = people.value;
    calculate(billValue, tipValue / 100, peopleValue);
  }
}

function calculate(bill, tip, people) {
  let tipTotal = (bill * tip) / people;
  let personTotal = bill / people;

  totalBill.innerText = "$" + parseFloat(personTotal.toFixed(2));
  totalTipAmount.innerText = "$" + parseFloat(tipTotal.toFixed(2));
}

function removeClass() {
  tipTips.forEach((s) => {
    if (s.classList.contains("active")) {
      s.classList.remove("active");
    }
  });
}

//EvenListener
bill.addEventListener("input", () => {
  vaidate(bill, bred);
  input(bill);
});

people.addEventListener("input", () => {
  vaidate(people, pred);
  input(people);
});

custom.addEventListener("input", () => {
  tipValue = parseFloat(custom.value);
  var rgx = /^[0-9]*\.?[0-9]*$/;
  if (custom.value !== custom.value.match(rgx)) {
    custom.value = custom.value.match(rgx);
  }
  input(custom);
  console.log(tipValue);
});

custom.addEventListener("click", () => {
  removeClass();
});

tipTips.forEach((e) => {
  e.addEventListener("click", (f) => {
    tipTips.forEach((a) => {
      a.classList.remove("active");
      if (f.target.innerText === a.innerText) {
        a.classList.add("active");
        tipValue = parseFloat(a.innerText);
      }
      billValue = bill.value;
      peopleValue = people.value;
      calculate(billValue, tipValue / 100, peopleValue);
    });

    console.log(tipValue / 100);
  });
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  totalBill.innerText = "$0";
  totalTipAmount.innerText = "$0";
  custom.value = "";

  removeClass();
});

// (bill.value * (15 / 100)) / people.value;
// bill.value / people.value;
// console.log("$" + total.tipAmount().toFixed(2));
// console.log("$" + parseFloat(total.totalBill().toFixed(2)));
