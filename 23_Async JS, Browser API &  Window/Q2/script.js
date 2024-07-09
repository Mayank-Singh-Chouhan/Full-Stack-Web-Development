document.getElementById('fetchUsersBtn').addEventListener('click', fetchUserNames);

function fetchUserNames() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear the list before adding new items

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            console.log(users);
        } else {
            console.error('Error:', xhr.status);
        }
    };

    xhr.send();
}