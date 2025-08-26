const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgb(229, 6, 6)",
          borderColor: "rgba(207, 95, 4, 0.27)",
          data: yValues,
        }]
      },
      options: {
        legend: {
          display: false,
          labels:{
            color:"rgba(0,0,0,1)"
          }
         },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Y Axis Label", // ✨ Your Y-axis label here
              fontColor: "white",
              fontSize: 14
            },
            ticks: {
              min: 6,
              max: 16,
              fontColor:"rgba(255,255,255,1)"
            },
            gridLines: {
          color: "rgba(30, 186, 36, 0.33)"
        } 
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "X Axis Label", // ✨ Your Y-axis label here
              fontColor: "white",
              fontSize: 14
            },
            title: {
            display: true,
            text: 'Sales (in $1000)',
            color: 'black',
            font: {
              size: 14,
              weight: 'bold'
            }
        },
        beginAtZero: true,  
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              fontColor:"rgba(255,255,255,1)"
            },
            gridLines: {
            color: "rgba(31, 178, 200, 0.28)"
            } 
          }]
        }
      }
    });

   new Chart("myCharting", {
    type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgb(229, 6, 6)",
          borderColor: "rgba(207, 95, 4, 0.27)",
          data: yValues,
        }]
      },
      options: {
        legend: {
          display: false,
          labels: {
            color: "rgba(0,0,0,1)"
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 6,
              max: 16,
              fontColor: "rgba(255,255,255,1)"
            },
            scaleLabel: {
              display: true,
              labelString: "Y Axis Label", // ✨ Your Y-axis label here
              fontColor: "white",
              fontSize: 14
            },
            gridLines: {
              color: "rgba(30, 186, 36, 0.33)"
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              fontColor: "rgba(255,255,255,1)"
            },
            scaleLabel: {
              display: true,
              labelString: "X Axis Label", // ✨ Your X-axis label here
              fontColor: "white",
              fontSize: 14
            },
            gridLines: {
              color: "rgba(31, 178, 200, 0.28)"
            }
          }]
        }
      }
    });

    //pie
    const ctx1 = document.getElementById("p1").getContext("2d");
    const tempGradient = ctx1.createLinearGradient(0, 0, 600, 0);
      tempGradient.addColorStop(0, "#000851");
      tempGradient.addColorStop(1, "#1CB5E0");

    const ctx2 = document.getElementById("p1").getContext("2d");
    const Humiditygradient = ctx2.createLinearGradient(0, 100, 600, 0);
      Humiditygradient.addColorStop(0.283,"rgba(253,109,38,1)");
      Humiditygradient.addColorStop(0.55,"rgba(253,189,38,1)");

    const ctx3 = document.getElementById("p1").getContext("2d");
    const Voltagegradient = ctx2.createLinearGradient(0, 100, 600, 0);
      Voltagegradient.addColorStop(0.2, "rgb(24, 82, 24)");
      Voltagegradient.addColorStop(0.57, "rgb(100, 245, 3)");

    const ctx4 = document.getElementById("p1").getContext("2d");
    const Currentgradient = ctx4.createRadialGradient(
      -30, -30, 0,
      300, 300, 600);
      Currentgradient.addColorStop(0.1, "rgba(103,49,145,1)");
      Currentgradient.addColorStop(0.8, "rgba(50,0,129,1)");

    const xValue = ["Temperatue", "Humidity", "Voltage","Current"];
    const yValue = [55, 49, 44, 24];
      
    const barColors = [
      tempGradient,
      Humiditygradient,
      Voltagegradient,
      Currentgradient,
    ];

    new Chart("p1", {
      type: "polarArea",
      data: {
      labels: xValue,
      datasets: [{
        backgroundColor: barColors,
        data: yValue
      }]
    },
    options: {
      res
      title: {
        display: true,
        text: "Daily Report",
        fontColor:"Black"
      },
      legend:{
        display:false,
        labels:{
          fontColor:'white'
        }
      },
      scale: {
      ticks: {
        display: false  }
      }
    }
    });

    new Chart("p2", {
      type: "polarArea",
      data: {
      labels: xValue,
      datasets: [{
        backgroundColor: barColors,
        data: yValue
      }]
    },
    options: { 
      title: {
        display: true,
        text: "Weekly Report",
        fontColor:"Black"
      },
      legend:{
        display:false
      },
      scale: {
      ticks: {
        display: false  }
    }
    }
    });

    new Chart("p3", {
      type: "polarArea",
      data: {
      labels: xValue,
      datasets: [{
        backgroundColor: barColors,
        data: yValue
      }]
    },
    options: { 
      title: {
        display: true,
        text: "Monthly Report",
        fontColor:"Black"
      },
      legend:{
        display:false
      },
      scale: {
      ticks: {
        display: false  }
    }
    }
    });

    new Chart("p4", {
      type: "polarArea",
      data: {
      labels: xValue,
      datasets: [{
        backgroundColor: barColors,
        data: yValue
      }]
    },
    options: { 
      title: {
        display: true,
        text: "Yearly Report",
        fontColor:"Black"
      },
      legend:{
        display:false
      },
      scale: {
      ticks: {
        display: false  }
    }
    }
    });