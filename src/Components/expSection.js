import React from "react";
import Subheading from "./Subheading";
import { Box } from "@mui/material";
import MediaControlCard from "./expCard";


function ExperienceSection(){
    return(
        <div id="Experience" className="experience-section">
            <Subheading content="My Experiences" />
            <Box display="grid" gap={2} sx={{justifyContent: "center"}}>
                <MediaControlCard 
                    location="Remote"
                    position="Web Dev intern"
                    organization="Vilearnx Advance Technologies"
                    startYear="2024"
                    content="I had the opportunity to work on a dynamic food delivery website at VilearnX Advance Technologies. Leveraging the power of the MERN stack, I developed a seamless and user-friendly platform designed to enhance the online food ordering experience."
                />
            </Box>

        </div>
    );
}

export default ExperienceSection;