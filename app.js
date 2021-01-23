let input = document.querySelectorAll("input");
let select = document.querySelectorAll("select");
let result = "";

function getRate() {
    //exchangerate.host/#/docs
  const url = "https://api.exchangerate.host/latest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.rates);
      let arrkey = Object.keys(data.rates);
      console.log(arrkey);
      arrkey.forEach((rate) => {
        console.log(rate);

        return (result += `<option value="${rate}">${rate}</option>`);
      });
      select.forEach((values) => {
        values.innerHTML = result;
      });
        function convert(i,j) {
              input[i].value = ((input[j].value * data.rates[select[i].value]) /
                (data.rates[select[j].value])).toFixed(2);
                document.getElementById("rere").innerHTML = input[i].value = convert(i, j);
        }
      input[0].addEventListener("keyup", ()=>convert(1,0));

      input[1].addEventListener("keyup", () => convert(0, 1));
      // Select
      select[0].addEventListener("change",  () => convert(1, 0));

        select[1].addEventListener("change", () => convert(0, 1));
        document.getElementById("rere").innerHTML = input[i].value;


    });
}
getRate();
