function falconRader() {
    var radarChart = document.getElementById('myRadar').getContext('2d');

    Chart.defaults.global.defaultFontSize = 25;
    Chart.defaults.global.defaultFontColor = '#fff';

    var myRader = new Chart(radarChart, {
        type:'radar',
        data:{
            labels:['Mars', 'Venus', 'Earth', 'Moon', 'Jupiter','Saturnis'],
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
                fontStyle: 'bold',
                fontFamily: 'Oxanium Regular'

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

function resourceRadar() {

    var pieChart = document.getElementById('myResources').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var myResources = new Chart(pieChart, {
        type:'pie',
        data:{
            labels:['Water', 'Iridium', 'Kobalt', 'Germanium', 'Indium','Scandium', 'Niobium'],
            datasets:[{

                label:'Afstand van Falcon 9 ',
                data:[65,59,90,81,56,55,40],
                fill: true,
                backgroundColor: ['rgba(0,123,180,0.7)','rgba(174,51,31,0.7)','rgba(85,161,58,0.7)','rgba(161,23,147,0.7)','rgba(255,53,0,0.7)','rgba(0,0,0,0.7)','rgba(255,255,255,0.7)'],
                borderColor: '#011126',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: '#00',
            }]
        },
        options:{
            responsive: true,
            title:{
                display:true,
                text: 'Next Planet: Resourse ',
                fontStyle: 'bold',
                fontFamily: 'Oxanium Regular'

            },

            legend:{
                fontColor: 'black',
                display:true
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function fuelTank() {
    var barChart = document.getElementById('myfuel').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#FFF';

    var myFuel = new Chart(barChart, {
        type:'horizontalBar',
        data: {
            labels:['Diesel', 'kerosine', 'gasoline', 'coolant', 'water' ],
            datasets: [{
                data: [33, 46, 53, 80, 90],
                backgroundColor: ['rgba(0,0,0,0.7)','rgba(161, 202, 241, 0.7)','rgba(221,15,33,0.7)','rgba(57,255,20,0.7)','rgba(224,255,255,0.7)'],

            }]
    },
        options:{
            title:{
                display:true,
                text: 'Falcon 9 fuel',
                fontStyle: 'bold',
                fontFamily: 'Oxanium Regular'

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
    resourceRadar();
    fuelTank();
}
window.onload = startScript();
