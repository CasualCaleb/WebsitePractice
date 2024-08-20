function MyFunction() {
    alert("The button was pressed!");
}

function goToResidentsPage() {
    window.location.href = "residents.html";
}

function goToMainPage() {
    window.location.href = "index.html";
}

function requestAPI() {
    fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => {
        alert(data);  // Display the server's response in an alert
    })
    .catch(error => {
        alert("Error connecting to API")
    });
}
console.log("JS Connected");
