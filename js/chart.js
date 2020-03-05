function falconRader() {
    var radarChart = document.getElementById('myRadar').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(radarChart, {
        type:'radar',
        data:{
            labels:['Mars', 'Earth', 'Venus', 'Moon', 'Jupiter','Saturnis'],
            datasets:[{
                label:'Falcon 9 radar',
                data:[65,59,90,81,56,55,40],
                fill: true,
                backgroundColor: '#27ae60',
                borderColor: '#ae331f',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff',
            }]
        },
        options:{
            title:{
                display:true
            },

            legend:{
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}
function startScript(){
    falconRader();
}
window.onload = startScript();
