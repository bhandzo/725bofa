document.addEventListener("DOMContentLoaded", function() {
    let checkInCount = localStorage.getItem("checkInCount") || 0;
    document.getElementById("check-in-count").textContent = checkInCount;

    document.getElementById("check-in").addEventListener("click", function() {
        checkInCount++;
        localStorage.setItem("checkInCount", checkInCount);
        document.getElementById("check-in-count").textContent = checkInCount;
        document.getElementById("tracker-message").textContent = `Great job! You've checked in ${checkInCount} times.`;
    });

    document.getElementById("petition-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        document.getElementById("petition-message").textContent = `Thank you, ${name}, for supporting our cause!`;
        document.getElementById("petition-form").reset();
    });
});
