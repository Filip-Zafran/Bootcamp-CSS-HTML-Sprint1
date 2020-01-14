var members = data.results[0].members;

for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = members[i].party;
    td2.innerHTML = members[i].votes_with_party_pct + "%";

    tr.appendChild(td1);
    tr.appendChild(td2);

    var tbody = document.getElementById("senate-data");
    tbody.appendChild(tr);
}