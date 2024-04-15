import * as React from "react";
import { Typography } from "@mui/material";

function DetailsCard(props) {
    const {title, content} = props;

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="header">
                        <Typography variant="h6" style={{paddingLeft: '20px', textAlign: 'left',color:'#0a0a0a'}}>
                           <h3>{title} </h3> 
                        </Typography> 
                    </div>
                    <div className="content">
                        <Typography variant="body1" style={{paddingLeft: '10px', textAlign: 'left'}}>
                            {content} 
                        </Typography>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    margin: 0 auto; /* Center the card */
                    display: flex;
                    justify-content: center;
                    padding-top: 10px; /* Adjusted padding top */
                }
                .card {
                    border-radius: 4px;
                    border-color: rgba(0, 0, 0, 0.125);
                    border-style: solid;
                    border-width: 1px;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                   
                    max-width: 800px; /* Adjusted max-width to match the previous component */
                    width: 100%;
                }
                .header {
                    border-radius: 3px 3px 0px 0px;
                    background-color: rgba(0, 0, 0, 0.03);
                    
                }
                .content {
                    padding: 10px;
                }

                @media (max-width: 991px) {
                    .card,
                    .header {
                        max-width: 100%; /* Adjusted max-width for responsiveness */
                        padding: 1px 0 30px; /* Adjusted padding to match the previous component */
                    }
                }
            `}</style>
        </>
    );
}

export default DetailsCard;
