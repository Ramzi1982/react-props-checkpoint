import React from 'react'
import "../components/Profile.css"
import PropTypes from "prop-types";




function Profile(props) {
  const handleClick = () => {
    console.log('Hamzaoui Ramzi');
  }
  

  return (
    <div className='profile text-center '>
      <div className='overflow'>
        <img className='profile-img-top' src={props.Image} width="400" alt="image" />
      </div>
      <div className='profile-body text-light'>
        <h1 className='profile-name'>{props.FullName}</h1>
        <p className='profile-bio '>{props.Bio}</p>
        <h2 className='profile proffesion'>{props.Profession}</h2>
        <button className='btn btn-outline-primary rounded-0' onClick={handleClick}>click</button>
        
      </div>


    </div>

  )
}

Profile.propTypes = {
  Image: PropTypes.string,
  FullName: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,

}
export default Profile;