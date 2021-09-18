function loadUser(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser();
function displayUser(data){
    // console.log(data);
    const users = data.results;
    // console.log(users);
    const parentCall = document.getElementById('user');
    for (const user of users){
        console.log(user);
        const div = document.createElement('div');
        div.style.margin='30px'
        div.innerHTML = `
            <img src="${user.picture.large} " alt="">
            <h3>${user.name.title} ${user.name.first} ${user.name.last} </h3>
            <h5>${user.email} </h5>
            <p>age: ${user.dob.age} </p>
            <p>phone: ${user.phone} </p>
            <p>${user.location.city}, ${user.location.state}, ${user.location.country}</p>
            <p> ${user.location.street.number}, ${user.location.street.name}</p>
            <p>${user.location.timezone.offset}, ${user.location.timezone.description}</p>
            <p>latitude: ${user.location.coordinates.latitude}, longitude:${user.location.coordinates.longitude}</p>
        `
        parentCall.appendChild(div);
    }
}






























