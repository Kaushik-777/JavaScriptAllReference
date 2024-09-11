const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.getElementById("fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting Data...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  factPara.innerText = data[3].text;
};

btn.addEventListener("click", getFacts);

/*async function getFacts() {
    let response = await fetch(URL);
    let data = await response.json();
    factPara.innerHTML = data[1].text;
    console.log(data);
}*/

/*function getFacts() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[4].text;
    });
}*/
