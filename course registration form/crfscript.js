let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");
let regForm = document.getElementById("regForm");
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
    alert(
        "Student Name: " + name + "\n\n" +
        "Selected Subjects:\n" + selectedSubjects.join("\n") + "\n\n" +
        "Total Fee: ₹" + total
    );
    regForm.reset();
    totalBox.innerText = "₹0";
});