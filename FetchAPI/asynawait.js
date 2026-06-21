async function getUsers() {
    let user = await fetch("https://dummyjson.com/users?limit=5");
    let data = await user.json();
    console.log(data);
}

getUsers();