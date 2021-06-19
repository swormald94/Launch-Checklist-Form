// Write your JavaScript code here!
function init() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let submitButton = document.getElementById("formSubmit");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            response.json().then(function (json) {
                let missionTarget = document.getElementById("missionTarget");
                let index = 0;
                    missionTarget.innerHTML = `
                    <div>
                        <h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${json[index].name}</li>
                            <li>Diameter: ${json[index].diameter}</li>
                            <li>Star: ${json[index].star}</li>
                            <li>Distance from Earth: ${json[index].distance}</li>
                            <li>Number of Moons: ${json[index].moons}</li>
                            </ol>
                            <img src="${json[index].image}">
                    </div>
                    `;
            });
        });

   submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" || isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Alert!  All fields must be filled correctly in order to submit form.");
      } if (fuelLevel.value < 10000 && fuelLevel.value !== "") {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
         fuelStatus.innerHTML = `Fuel level is insufficient for journey.`;
         launchStatus.innerHTML = `Shuttle not ready for launch.`;
         launchStatus.style.color = "#b32121";
      } if (cargoMass.value > 10000 && cargoMass.value !== "") {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
         cargoStatus.innerHTML = `Too much mass in cargo for launch.`;
         launchStatus.innerHTML = `Shuttle not ready for launch.`;
         launchStatus.style.color = "#b32121";
      } if (fuelLevel.value > 10000 && fuelLevel.value !== "" && cargoMass.value < 10000 && cargoMass.value !== "" && pilotName.value !== "" && copilotName.value !== "" && (isNaN(pilotName.value) === true) && (isNaN(copilotName.value) === true)) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
         launchStatus.style.color = "#39b629";
         launchStatus.innerHTML = `Shuttle is ready for launch.`;
      };
   });
};

window.addEventListener("load", init);

function updatePilotStatus(pilotName) {
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
};

function updateCopilotStatus(copilotName) {
   copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
};

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
