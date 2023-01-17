function registration(e) {
    e.preventDefault();

    // let formLength = document.getElementById("form").elements;

    let result = " ";
    for (let i = 0; i < e.target.length - 1; i++) {
        if (e.target[i].name == 'gender' || e.target[i].name == 'card') {
            console.log("hello")
            if (e.target[i].checked)
                result = result + e.target[i].name + ":" + e.target[i].value + " " + "\n";
        }
        else {
            result = result + e.target[i].name + ":" + e.target[i].value + " " + "\n";
        }
    }
    alert(result);
}