
captureOrder(
    prompt(
        "Please enter your froyo flavors separated by a comma." ,
       "vanilla,vanilla,vanilla,strawberry,coffee,coffee" 
    )
);

function captureOrder(prompt = "") {
    let commaSeparateValues = prompt.split(",");
    let table = commaSeparateValues.reduce((previousValue, currentValue) => {
        currentValue = currentValue
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, (s) => s.toUpperCase());

        if (currentValue.length) {
            !previousValue[currentValue]
                ? (previousValue[currentValue] = 1)
                : previousValue[currentValue]++;
        }

        return previousValue;
    }, {});
    console.table(table);
    renderOrderTable(table);
    return table;
}

function renderOrderTable(obj = {}) {
    let table = document.createElement("table");
    newTableRow(["Froyo Flavor", "Quantity"], table);
    Object.keys(obj).forEach((flavor) => {
        let tr = document.createElement("tr");
        newTableRow([flavor, obj[flavor]], table);
        table.append(tr);
    });

    function newTableRow(data, table) {
        let tr = document.createElement("tr");
        data.forEach((value) => {
            let td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    }  
}
