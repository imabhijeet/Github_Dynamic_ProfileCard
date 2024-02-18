// XML http request
function fetchData() {
    const requestUrl = 'https://api.github.com/users/imabhijeet';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);

    // whenever the state changes, function will be called
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {

            //convert the string content to json type
            const data = JSON.parse(this.responseText);
 
            //use ID to update the element because it targets the unique elements
            document.getElementById('userName').innerHTML = data.login;
            document.getElementById('userFollowers').innerHTML = `Followers: ${data.followers}`;
            document.getElementById('userFollowing').innerHTML = `Following: ${data.following}`;

            //profile pic
            const profileImageElement = document.getElementById('user-image');
            profileImageElement.src = data.avatar_url;
        }
    }
    xhr.send();
}

// function to update the data frequently
function updateData() {
    // fetch the data for first time
    fetchData()
    // fetch data every 5 minutes
    setInterval(fetchData, 3600000);
}

updateData();


