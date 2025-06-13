function fetchAndDisplayUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) { //! mean not
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const usercontainer = document.getElementById("user-container");
        usercontainer.innerHTML = "";//Clear inside dev tag
        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email :</strong> ${user.email}</p>
            <p><strong>Phone :</strong> ${user.phone}</p>
            <p><strong>Web :</strong> ${user.website}</p>     
            `;
            usercontainer.appendChild(userDiv);
        })
    })
    .catch(error => {
        console.error("There was a problem with fetch operatoion", error);
    });
}
fetchAndDisplayUsers();


