document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Save').addEventListener('click', async function () {
        const data = {
            First_Name: document.getElementById("First_Name").value,
            Last_Name: document.getElementById("Last_Name").value,
            Email: document.getElementById("email").value,
            Contact: document.getElementById("contact").value,
            Date_of_Joining: document.getElementById("dateofjoining").value
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/create-employees/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Employee created successfully!");
            } else {
                alert("Error: " + JSON.stringify(result));
            }
        } catch (error) {
            alert("Request failed: " + error);
        }
    });
});
