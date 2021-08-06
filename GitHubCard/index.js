import axios from "axios";

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

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "RoseGabriely",
];

followersArray.forEach((item) => {
  githubUserInfo(item);
});

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
  url.setAttribute("href", `${html_url}`);
  url.setAttribute("target", "_blank");
  url.textContent = `${html_url}`;

  let profileLink = document.createElement("p");
  profileLink.textContent = `Profile: `;

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
