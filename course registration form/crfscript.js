let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");
let regForm = document.getElementById("regForm");
let messageBox = document.getElementById("messageBox");
subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;
        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });
        totalBox.innerText = "₹" + total;
    });
});
regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let selectedSubjects = [];
    let total = 0;
    subjects.forEach(sub => {
        if (sub.checked) {
            selectedSubjects.push(sub.parentElement.textContent.trim());
            total += parseInt(sub.value);
        }
    });
     messageBox.innerHTML = `
        <h3>Registration Details</h3>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Selected Subjects:</strong><br>${selectedSubjects.join("<br>")}</p>
        <p><strong>Total Fee:</strong> ₹${total}</p>
    `;
    regForm.reset();
    totalBox.innerText = "₹0";
});