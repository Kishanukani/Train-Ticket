document.addEventListener("DOMContentLoaded", () => {
  // Load selected train details from localStorage
  const selectedTrain = JSON.parse(localStorage.getItem("selectedTrain"));

  if (selectedTrain) {
    document.getElementById("trainDetails").innerHTML = `
            <h2>Train: ${selectedTrain.trainName}</h2>
            <p>Source: ${selectedTrain.source}</p>
            <p>Destination: ${selectedTrain.destination}</p>
            <p>Available Sleeper Seats: ${selectedTrain.availableSeats.sleeper}</p>
            <p>Available AC Seats: ${selectedTrain.availableSeats.ac}</p>
        `;
  }
});

function storePassengerDetails() {
  const passengerName = document.getElementById("passengerName").value;
  const age = document.getElementById("age").value;
  const seatClass = document.getElementById("seatClass").value;

  // Create a passenger object
  const passengerDetails = {
    name: passengerName,
    age: age,
    seatClass: seatClass,
    trainName: localStorage.getItem("selectedTrainName"), // Retrieve from localStorage
    source: localStorage.getItem("selectedSource"),
    destination: localStorage.getItem("selectedDestination"),
    availableSeats: JSON.parse(localStorage.getItem("selectedAvailableSeats")),
  };

  // Store the booking in local storage
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(passengerDetails);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking successful!");
  window.location.href = "booking-history.html"; // Redirect to history page
}
