import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function githubUserInfo(name) {
  axios
    .get(`https://api.github.com/users/${name}`)
    .then((res) => {
      document.querySelector(".cards").appendChild(makeCard(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
}

console.log(githubUserInfo("RoseGabriely"));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function makeCard({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let image = document.createElement("img");
  image.setAttribute("src", `${avatar_url}`);

  let cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info");

  let fullName = document.createElement("h3");
  fullName.setAttribute("class", "name");
  fullName.textContent = name;

  let userName = document.createElement("p");
  userName.setAttribute("class", "username");
  userName.textContent = login;

  let userLocation = document.createElement("p");
  userLocation.textContent = `Location: ${location}`;

  let url = document.createElement("a");
  url.href = html_url;
  url.textContent = html_url;

  let profileLink = document.createElement("p");
  profileLink.textContent = `Profile: ${url}`;

  let usersFollowers = document.createElement("p");
  usersFollowers.textContent = `Followers: ${followers}`;

  let usersFollowings = document.createElement("p");
  usersFollowings.textContent = `Following: ${following}`;

  let userBio = document.createElement("p");
  userBio.textContent = `Bio: ${bio}`;

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(fullName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profileLink);
  profileLink.appendChild(url);
  cardInfo.appendChild(usersFollowers);
  cardInfo.appendChild(usersFollowings);
  cardInfo.appendChild(userBio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
