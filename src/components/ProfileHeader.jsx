import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import AssuranceChip from "./Chip";
import PaymentMethods from "./PaymentMethods";

function ProfileHeader() {
  return (
    <>
      <div className="container">
        <div className="div div-mobile">
          <div className="div-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa260e340695a31375213ccd511274452fdb240820459554c815635e0ce0b4fc?apiKey=cc52dc56f903481ab5f32a1b83cb4645&width=800"
              className="img"
            />
            <div className="div-3">
              <div className="div-4">Dr Foulen Ben Fouleni</div>
              <div className="div-5">Médecin généraliste</div>
            </div>
            <div className="location">
              <LocationOnIcon />
              <Typography variant="h5">Sousse</Typography>
            </div>
          </div>  
          <div className="div-6">
            {/* <AssuranceChip></AssuranceChip> */}
            <div className="div-8">
            <AssuranceChip></AssuranceChip>
            <PaymentMethods></PaymentMethods>
              {/* 100 Avenue Mohamed V Bp 19 Arfoud, Arfoud 52200, */}
            </div>
            {/* <div className="div-9">Devant Municipalité, Arfoud, 52200, Maroc</div> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding-top: 74px; /* Maintain the padding-top */
          display: flex;
          justify-content: center;
        }
        .div {
          background-color: #eef2f6;
          display: flex;
          flex-direction: column;
          font-weight: 400;
          padding: 18px;
          max-width: 800px;
          width: 100%;
        }
        .div-2 {
          display: flex;
          gap: 19px;
          color: #0a0a0a;
          padding: 18px;
          width: 100%;
        }
        .img {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-4 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .div-5 {
          font-size: 16px;
          color: #626262;
        }
        .location {
          display: flex;
          align-items: center;
          margin-left: auto;
          margin-top: 10px;
          gap: 8px;
        }
        .div-6 {
          padding-top: 24px;
          border-top: 1px solid #ccc;
          width: 100%;
          color: #626262;
        }
        .div-8 {
          font-size: 16px;
          padding: 12px 0;
        }
        .div-9 {
          font-size: 14px;
          color: #626262;
        }

        @media (max-width: 991px) {
          .div-desktop {
            display: none;
          }
          .div-mobile {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

export default ProfileHeader;
