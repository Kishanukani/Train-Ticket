const trains = [
  {
    name: "Express 101",
    source: "cityA",
    destination: "cityB",
    availableSeats: { sleeper: 20, ac: 10 },
    travelDates: ["2024-09-22", "2024-09-23"],
  },
  // Other trains...
];

function searchTrains() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("travelDate").value;

  const availableTrains = trains.filter(
    (train) =>
      train.source === source &&
      train.destination === destination &&
      train.travelDates.includes(date)
  );

  displayTrains(availableTrains);
}

function displayTrains(availableTrains) {
  const resultContainer = document.getElementById("trainResults");
  resultContainer.innerHTML = "";

  if (availableTrains.length === 0) {
    resultContainer.innerHTML =
      "<p>No trains available for the given route and date.</p>";
    return;
  }

  availableTrains.forEach((train) => {
    const trainElement = document.createElement("div");
    trainElement.classList.add("train");

    trainElement.innerHTML = `
          <h3>${train.name}</h3>
          <p>Source: ${train.source}</p>
          <p>Destination: ${train.destination}</p>
          <p>Available Seats (Sleeper): ${train.availableSeats.sleeper}</p>
          <p>Available Seats (AC): ${train.availableSeats.ac}</p>
          <button onclick="selectTrain('${train.name}', '${train.source}', '${train.destination}', ${train.availableSeats.sleeper}, ${train.availableSeats.ac})">Book</button>
      `;
    resultContainer.appendChild(trainElement);
  });
}

// function selectTrain(trainName, source, destination, sleeperSeats, acSeats) {
//   const trainDetails = {
//     trainName,
//     source,
//     destination,
//     availableSeats: { sleeper: sleeperSeats, ac: acSeats },
//   };
//   // Store the train details in localStorage
//   localStorage.setItem("selectedTrain", JSON.stringify(trainDetails));

//   // Redirect to booking page
//   window.location.href = "booking.html";
// }

function selectTrain(trainName, source, destination, availableSeats) {
  const trainDetails = {
    trainName,
    source,
    destination,
    availableSeats,
  };

  // Store train details in localStorage
  localStorage.setItem("selectedTrain", JSON.stringify(trainDetails));
  localStorage.setItem("selectedTrainName", trainName);
  localStorage.setItem("selectedSource", source);
  localStorage.setItem("selectedDestination", destination);
  localStorage.setItem(
    "selectedAvailableSeats",
    JSON.stringify(availableSeats)
  );

  // Redirect to the booking page
  // window.location.href = "booking.html";
  window.open("booking.html", "_blank");
}
