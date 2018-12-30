const data = [
  {
    name: 'John Doe',
    age: 30,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
];

const profiles = profileIterator(data);

//call first person
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} else {
  // no more profiles
  window.location.reload();
}
}
//profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length 
      ? { value: profiles [nextIndex++], done: false }:
      { done: true }
    }
  };
}