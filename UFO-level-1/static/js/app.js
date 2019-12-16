// from data.js
var tableData = data;
var tbody = d3.select('tbody');

//loop through ufosightings data and Use d3 to add ufosighting values in html output:
// (datetime, city, state, country, shape, durationMinutes, comments)
tableData.forEach((ufoSightings) => {
    var row = tbody.append('tr');
    Object.entries(ufoSightings).forEach(([key,value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});


//To filter the data according to the datetime entered by the user
//reference the button
var button = d3.select("#filter-btn")

//add event listener and the function to follow
button.on("click", function(){
    //remove the existing table
    tbody.html("")

    var inputDate = d3.select('#datetime')
    var inputValue = inputDate.property('value')
    //console.log(inputValue)

    //create funtion to filter the tabledata
    function filterdata(data){
        return data.datetime ===inputValue
    };
    //use function to filter tabledata and save it in a variable 
    var filteredData = tableData.filter(filterdata);
    console.log(filteredData);

    //create new row based on the filtered data
    filteredData.forEach((data) => {
        //console.log(ufoSighting);
        var row = tbody.append("tr")
        Object.entries(data).forEach(([key,value]) => {
            //console.log(key, value);
            var cell = row.append("td")
            cell.text(value);
        });
    });
});