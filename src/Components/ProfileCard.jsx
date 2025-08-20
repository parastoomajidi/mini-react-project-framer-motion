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
        image: "data:image/png;base64,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",
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
                            className="scoial-icon"
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
