function increaseLike(profileID){
    var profileLikes = document.querySelector(`#like-${profileID}`);

    profileLikes.innerHTML = parseInt(profileLikes.innerHTML) + 1;
}