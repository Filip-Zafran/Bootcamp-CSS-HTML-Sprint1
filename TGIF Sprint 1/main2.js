var members = data.results[0].members;

for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    // AlX:
    td1.innerHTML =
        (members[i].last_name || "") +
        " " +
        (members[i].first_name || "") +
        " " +
        (members[i].middle_name || "") +
        " ";

    td2.innerHTML = members[i].party;
    td3.innerHTML = members[i].state;
    td4.innerHTML = members[i].seniority;
    td5.innerHTML = members[i].votes_with_party_pct + "%";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    var tbody = document.getElementById("house-data");
    tbody.appendChild(tr);
}