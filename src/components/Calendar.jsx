import * as React from "react";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
export default function Calendar() {
  return (
    <>
     
        <div className="calendar-container2">
          <div className="calendar-header">
           <FirstPageIcon></FirstPageIcon>
            <div className="calendar-header-date">April 2024</div>
           <LastPageIcon/>
          </div>
          <div className="calendar-day">
            <div className="calendar-day-div">
              <div className="calendar-day-hearder">
                <div className="calendar-day-name">Monday</div>
                <div className="calendar-div-9" />
              </div>
              <div className="calendar-div-10" />
              <div className="calendar-div-11">
                <div className="calendar-div-12">April 7, 2024</div>
                {/* <div className="calendar-div-13" /> */}
              </div>
            </div>
            <div className="calendar-div-14" />
            <div className="calendar-div-15">3:44pm - 7:14pm</div>
            <div className="calendar-div-16" />
          
          </div>
        </div>
    
      <style jsx>{`
       
        .calendar-container2{
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          
          width: 790px;
          max-width: 100%;
          flex-direction: column;
          padding: 10px;
        }
        @media (max-width: 991px) {
          .calendar-container2{
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .calendar-header {
          align-self: center;
          display: flex;
          gap: 20px;
          font-size: 20px;
          color: #364152;
          font-weight: 400;
          line-height: 116.7%;
          justify-content: space-between;
        }
       
        .calendar-header-date {
          font-family: Roboto, sans-serif;
        }
       
        .calendar-day {
          border-radius: 8px;
          border-color: rgba(227, 232, 239, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          margin: 22px 0 8px;
          padding: 52px 21px;
        }
        @media (max-width: 991px) {
          .calendar-day {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .calendar-day-div {
          background-color: #eef2f6;
          display: flex;
          padding-top: 13px;
          gap: 0px;
          font-size: 14px;
          color: #364152;
          font-weight: 400;
          text-align: center;
          line-height: 133.4%;
        }
        @media (max-width: 991px) {
          .calendar-day-div {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .calendar-day-hearder {
          align-self: start;
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .calendar-day-hearder {
            white-space: initial;
          }
        }
        .calendar-day-name {
          font-family: Roboto, sans-serif;
          align-self: start;
          margin-left: 24px;
        }
        @media (max-width: 991px) {
          .calendar-day-name {
            margin-left: 10px;
          }
        }
        .calendar-div-9 {
          background-color: #e3e8ef;
          margin-top: 6px;
          height: 1px;
        }
        .calendar-div-10 {
            background-color: #e3e8ef;
            align-self: end;
            margin-top: 21px;
            width: 60%;
            height: 1px;
          }
          @media (max-width: 991px) {
            .calendar-div-11 {
              min-width: 20%;
              max-width: 40%;
            }
          }
        .calendar-div-11 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .calendar-div-11 {
            max-width: 100%;
          }
        }
        .calendar-div-12 {
          font-family: Roboto, sans-serif;
          align-self: end;
          margin-right: 0px;
          
        }
        @media (max-width: 991px) {
          .calendar-div-12 {
            margin-right: 10px;
          }
        }
        .calendar-div-13 {
          background-color: #e3e8ef;
          margin-top: 8px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .calendar-div-13 {
            max-width: 100%;
          }
        }
        .calendar-div-14 {
          background-color: #e3e8ef;
          height: 1px;
        }
        @media (max-width: 991px) {
          .calendar-div-14 {
            max-width: 100%;
          }
        }
        .calendar-div-15 {
          color: #364152;
          align-self: start;
          margin: 13px 0 0 27px;
          font: 400 13px/144% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .calendar-div-15 {
            margin-left: 10px;
          }
        }
        .calendar-div-16 {
          background-color: #e3e8ef;
          margin-top: 8px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .calendar-div-16 {
            max-width: 100%;
          }
        }
       
       
      `}</style>
    </>
  );
}
