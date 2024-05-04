import React from 'react';
import '../profile/Profile.css';
import { FaUser, FaChartBar, FaUserEdit, FaListAlt, FaStar, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';


const ProfilePage = () => {
    return (
        <>
            <div className="user-image">
                <img />
                <h3>Username</h3>
            </div>

            <button className="button">
                <FaChartBar className="icon" />Stats
                <br />
                <h6>Check your activities</h6>
            </button>
            
            <h2>Settings</h2>
            <button className="button">
                <FaUserEdit className="icon" />Edit Profile
            </button>

            <button className="button">
                <FaListAlt className="icon" />Exercise List
            </button>

            <h2>Feedback</h2>
            <button className="button">
                <FaStar className="icon" />Rate the app
            </button>
            <button className="button">
                <FaEnvelope className="icon" />Send Feedback
            </button>
            <button className="button">
                <FaSignOutAlt className="icon" />Log Out
            </button>


            <h6>Terms of Service, Privacy Policy, Disclaimer <br />Acknowledgments</h6>
            <h6>Version 1.0</h6>

        </>
    );
};

export default ProfilePage;
