let myChart;

function draw(xValues, yValues, highest) {
  console.log(xValues);
  console.log(yValues);
  myChart = new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: yValues.sort()[0], max: highest["value"] } }],
      },
    },
  });
}

async function graph() {
  let xValues = [];
  let yValues = [];
  let duration;
  if (document.getElementById(1).checked) {
    duration = "weekly";
  } else if (document.getElementById(2).checked) {
    duration = "monthly";
  } else if (document.getElementById(3).checked) {
    duration = "quarterly";
  } else if (document.getElementById(4).checked) {
    duration = "yearly";
  }

  let body = JSON.stringify({
    currency1: "USD",
    currency2: document.getElementById("scurr").value,
    chartType: duration,
    year: document.getElementById("year").value,
  });

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  let highest;

  try {
    const response = await fetch(
      "https://backend-mitwpu-team7.vercel.app/chart",
      requestOptions
    );

    const result = await response.json();

    highest = result["highest"];
    let data = result["datapoints"];

    data.forEach((element) => {
      if (element["value"] !== 0) {
        xValues.push(element["date"]);
        yValues.push(element["value"]);
      }
    });
  } catch (error) {
    console.log("error", error);
  }

  console.log(xValues);
  console.log(yValues);

  if (myChart != undefined) {
    myChart.clear();
  }
  draw(xValues, yValues, highest);

  document.getElementById("hv").innerHTML = "Max value=" + highest["value"];
  document.getElementById("lv").innerHTML = "Min value=" + yValues.sort()[0];
}
