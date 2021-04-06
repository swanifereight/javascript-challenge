// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
function buildTable(data) {
	tbody.html("");
	data.forEach((dataRow) =>) {
		const row = tbody.append("tr");
		Object.values(dataRow).forEach((values)=> {
			let cell = row.append("td");
			cell.text(values)
		});
	}
}