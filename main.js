// definitions
let stringArray = new Array();

// functions
function AddString() {
    console.log("in the form submit event...");
    // concat user inputs
    let stringConcat = document.getElementById("custname").value + "-"
                    + document.getElementById("city").value + "-"
                    + document.getElementById("payment").value;

    // push inputs to stringArray
    stringArray.push(stringConcat);

    // create and clear ul
    let myUl = document.createElement('ul');
    myUl.setAttribute("id", "list");
    document.getElementById("outputlist").appendChild(myUl);
    let ul = document.getElementById("list");
    ul.innerHTML = "";
    // this also works with ul defined in .html
    // let ul = document.getElementById("list");
    // ul.innerHTML = "";

    // loop through array to display <li>
    for(let i = 0; i < stringArray.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = stringArray[i];
    }
}
