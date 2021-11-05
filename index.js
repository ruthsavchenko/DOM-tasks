let users = document.createElement('div')
users.setAttribute('id', 'users')
document.body.prepend(users);

let button = document.createElement('button')
button.setAttribute('onclick', 'getUsers()')
button.innerText = 'Get data';
document.body.prepend(button);

users.appendChild(button);

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    const userData = users.map(user => {
        return `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <div class="user-card__address">
            <h4>Address:</h4>
                <p>${user.address.street} street, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <div>
                    <p>Coordinates: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                </div>
            </div>
            <p>Phone: ${user.phone}</p>
            <p>Website: <a href="${user.website}">${user.website}</a></p>
            <div class="user-card__company">
            <h4>Company:</h4>
                <p>"${user.company.name}"</p>
                <p>Catch phrase: ${user.company.catchPhrase}</p>
                <p>${user.company.bs}</p>
            </div>
        </div>
        `
    }).join('');

    console.log(userData)

    document.querySelector('#users').innerHTML = userData

    return userData
}
