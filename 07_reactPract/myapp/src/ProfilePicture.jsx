
function ProfilePicture(){

    const imageUrl = './src/assets/Guide1.png';

    const handleClick = (e) => e.target.style.display = "none";
    
    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Guide" />
    );
}

export default ProfilePicture