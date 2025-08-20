import React, { use } from "react";
import { motion, scale} from "framer-motion";
import '../Styles/ProfileCard.css';

import { CiInstagram } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { image, line, title } from "framer-motion/client";


export const ProfileCard=()=>{
    const userData={
        name:"parastoo",
        title: "Product Owner(PO)",
        bio: "An active researcher!",
        image:"data:image/jpeg;base64,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",
        socialLinks:[
            {url: "#", icon:<CiInstagram/>},
            {url: "#", icon: <FaSquareTwitter/>},
            {url: "#", icon: <FaGithub/>}
        ]
    };

    return(
     <motion.div
     className="profile-card"
     whileHover={{y: -8}}
     transition={{duration: 0.1}}
     
     >
        <div className="card-header">
            <motion.img
            className="profile-img"
            src={userData.image}
            whileHover={{scale:1.1}}
            alt={userData.name}
            />
        </div>

        <div className="card-body">
                <h3 className="profilename">{userData.name}</h3>
                <p className="profile-title">{userData.title}</p>
                <p className="profile-bio">{userData.bio}</p>
            <div className="social-container">
                {
                    userData.socialLinks.map((link , index)=>(
                            <motion.a 
                            key={index}
                            className="social-icon"
                            src={userData.image}
                            whileHover={{scale:1.35, rotate:8}}
                            href={link.url}
                            transition={{duration: 0.1}}

                            >
                                <p className="icon">{link.icon}</p>

                            </motion.a>
                    ))
                }

            </div>

        </div>

     </motion.div>
    );
};
