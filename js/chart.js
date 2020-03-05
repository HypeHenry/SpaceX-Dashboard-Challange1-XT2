function falconRader() {
    var radarChart = document.getElementById('myRadar').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(radarChart, {
        type:'radar',
        data:{
            labels:['Mars', 'Earth', 'Venus', 'Moon', 'Jupiter','Saturnis'],
            datasets:[{

                label:'Afstand van Falcon 9 ',
                data:[65,59,90,81,56,55,40],
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: '#ae331f',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            title:{
                display:true,
                text: 'Falcon 9 Radar',
                fontStyle: 'bold'

            },
            scale: {
                angleLines: {
                    display: true,
                    color: '#FFF',
                },
                gridLines: {
                    display: true,
                    color: '#FFF',
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                }
            },
            legend:{
                fontColor: 'black',
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
