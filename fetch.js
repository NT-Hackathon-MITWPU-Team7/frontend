var res = [];
function graph() {
  if (document.getElementById(1).checked) {
    var duration = "weekly";
  } else if (document.getElementById(2).checked) {
    var duration = "monthly";
  } else if (document.getElementById(3).checked) {
    var duration = "quarterly";
  } else if (document.getElementById(4).checked) {
    var duration = "yearly";
  }
  var body = JSON.stringify({
    currency1: "USD",
    currency2: document.getElementById("scurr").value,
    chartType: duration,
    year: document.getElementById("year").value,
  });

  console.log(document.getElementById("scurr").value);
  console.log(duration);
  console.log(document.getElementById("year").value);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  fetch("https://backend-mitwpu-team7.vercel.app/chart", requestOptions)
    .then((response) => response.text())
    .then((result) => (res = result))
    .catch((error) => console.log("error", error));
}
