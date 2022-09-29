function graph()
{
    var xValues=[];
    var yValues=[];
    if(document.getElementById(1).checked){
        var duration="weekly";
    }
    else if(document.getElementById(2).checked){
        var duration="monthly";
    }
    else if(document.getElementById(3).checked){
        var duration="quarterly";
    }
    else if(document.getElementById(4).checked){
        var duration="yearly";
    }
var body=JSON.stringify({
    "currency1":"USD",
    "currency2":document.getElementById("scurr").value,
    "chartType":duration,
    "year":document.getElementById("year").value
});

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: body,
  redirect: 'follow'
};

fetch("https://backend-mitwpu-team7.vercel.app/chart", requestOptions)
  .then(response => response.text())
  .then(result=>{
    
    result = JSON.parse(result);
    var data=result["datapoints"]
    data.forEach(element => {

            xValues.push(element["date"])
            yValues.push(element["value"])   
    })
})
  .catch(error => console.log('error', error));
  console.log(xValues);
  console.log(yValues);

    var myChart=new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{ticks: {min: 0, max:100}}],
          }
        }
      });

        var max=Math.max.apply(Math, yValues);
        document.getElementById("hv").innerHTML="Max value="+max;

        var min=Math.min.apply(Math, yValues);
        document.getElementById("lv").innerHTML="Min value="+min;

    }

