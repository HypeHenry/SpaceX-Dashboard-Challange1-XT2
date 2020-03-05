google.charts.load('current', {'packages':['gauge', 'corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawCurveTypes);
google.charts.setOnLoadCallback(drawChartFuel);


// speed meter
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 10]
    ]);

    var options = {

        redFrom: 900, redTo: 1000,
        yellowFrom:750, yellowTo: 900,
        greenFrom: 100, greenTo: 330,
        minorTicks: 10, majorTicks: ['0','250','500','750','1000'],
        min: 90, max: 1000,
        width: 200,

    };

    // var formatter = new google.visualization.NumberFormat({
    //     suffix: 'km/h',
    //     fractionDigits: 1
    // });
    // formatter.format(data, 1);

    var chart = new google.visualization.Gauge(document.getElementById('chart_div_speed'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 700 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 300);
}

// graffic
function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'values');
    data.addColumn({id:'i0', type:'number', role:'interval'});
    data.addColumn({id:'i1', type:'number', krole:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});
    data.addColumn({id:'i2', type:'number', role:'interval'});

    data.addRows([
        [1, 100, 90, 110, 85, 96, 104, 120],
        [2, 120, 95, 130, 90, 113, 124, 140],
        [3, 130, 105, 140, 100, 117, 133, 139],
        [4, 90, 85, 95, 85, 88, 92, 95],
        [5, 70, 74, 63, 67, 69, 70, 72],
        [6, 30, 39, 22, 21, 28, 34, 40],
        [7, 80, 77, 83, 70, 77, 85, 90],
        [8, 100, 90, 110, 85, 95, 102, 110]]);

    var options_lines = {
        title: 'falcon 9',
        curveType: 'function',
        lineWidth: 4,
        intervals: { 'style':'line' },
        legend: 'none',
        width: 200
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div_graff'));
    chart.draw(data, options_lines);
}
// fuel
function drawChartFuel() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Storage", { role: "style" } ],
        ["Water", 8.94, "#40a4df"],
        ["kerosine", 10.49, "blue"],
        ["oil", 19.30, "green"],
        ["diesel", 21.45, "black"],
        ["gas", 24.45, "red"],

    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {

        title: "Storage of Falcon 9 Fuel Gas, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        width: 210
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}

