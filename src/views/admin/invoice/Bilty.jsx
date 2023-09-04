import React from "react";
import './style.css'
import Logo from './logo.png'
import {
  Box,

} from "@chakra-ui/react";
const Chalan = () => {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
    <div
    style={{
      display:"flex",
      justifyContent:"center"
    }}
    >
    <div 
    style={{
      backgroundColor: "#e5a8f4",
      width: 680,
      padding:"20px"
    }}
    >
     <div
        style={{
          border: "5px solid black",
          padding: 5,
          backgroundColor: "#e5a8f4",
          fontFamily: "sans-serif",
          width: 640,
          margin: "auto",
        }}
      >
        <div style={{ width: 620, border: "2px solid black", padding: 20 }}>
          <div
            className="grid-column"
            style={{ gridTemplateColumns: "100px 500px" }}
          >
            <div className="grid-item">
              <img src={Logo} alt style={{ height: 100 }} />
            </div>
            <div
              className="grid-item grid-row"
              style={{ gridTemplateRows: "(2,1fr)" }}
            >
              <h2
                className="grid-item"
                style={{ fontWeight: "bold", fontSize: 30, color: "#14175d" }}
              >
                BALAJI TRANSPORT COMPANY
              </h2>
              <h5
                className="grid-item"
                style={{
                  backgroundColor: "#383794",
                  color: "white",
                  padding: 10,
                  height: 40,
                  boxSizing: "border-box",
                  width: 400,
                  textAlign: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                TRANSPORTER &amp; COMMISSION AGENT
              </h5>
            </div>
          </div>
          <div
            className="grid-row"
            style={{
              gridTemplateRows: "(4,1fr)",
              fontSize: 15,
              color: "#4f3a90",
            }}
          >
            <p className="grid-item">
              B.O. Krishna Dhaba, Near Sant Lal Rice Mills, Agra Road, MAINPURI
            </p>
            <p className="grid-item">(U.P.)-205001, 9166863725, 9783133725</p>
            <p className="grid-item">
              H.O. Near Prajapat Hotel, Kota Chouraha, NASIRABAD (Raj.)-305601
            </p>
            <p className="grid-item">Mob.: 8890717125, 9950810503</p>
            <p className="grid-item">E-mail: omprakashjat715@gmil.com</p>
          </div>
          <div
            className="grid-column"
            style={{
              gridTemplateColumns: "300px 300px",
              marginTop: 10,
              color: "#1f0352",
            }}
          >
            <div className="grid-item" style={{ alignItems: "start" }}>
              <span>No : </span>.............................
            </div>
            <div className="grid-item" style={{ textAlign: "end" }}>
              <span>Date :</span>.............................
            </div>
          </div>
          <div
            className="grid-column"
            style={{
              gridTemplateColumns: 600,
              marginTop: 10,
              color: "#1f0352",
            }}
          >
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Truck No : </span>.................................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Truck Owner : </span>...........................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Mobile No : </span>...............................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Driver Name : </span>...........................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Mobile No : </span>..............................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Cosignor : </span>.................................
            </div>
            <div
              className="grid-item"
              style={{ alignItems: "start", marginTop: 10 }}
            >
              <span>Cosignee : </span>.................................
            </div>
          </div>
          <div
            className="grid-column"
            style={{
              gridTemplateColumns: "300px 300px",
              marginTop: 10,
              color: "#1f0352",
            }}
          >
            <div className="grid-item" style={{ alignItems: "start" }}>
              <span>Weight : </span>....................................
            </div>
            <div className="grid-item" style={{ textAlign: "end" }}>
              <span>Rate :</span>.............................
            </div>
          </div>
          <div
            className="grid-column"
            style={{
              gridTemplateColumns: 600,
              marginTop: 10,
              alignItems: "flex-end",
              color: "#1f0352",
            }}
          >
            <div
              className="grid-item"
              style={{ alignItems: "end", marginTop: 10 }}
            />
            <div
              className="grid-item"
              style={{ textAlign: "end", marginTop: 10 }}
            >
              <span>Total Freight Rs : </span>.............................
            </div>
            <div
              className="grid-item"
              style={{ textAlign: "end", marginTop: 10 }}
            >
              <span>Advance Rs : </span>.............................
            </div>
            <div
              className="grid-item"
              style={{ textAlign: "end", marginTop: 10 }}
            >
              <span>Commission Rs : </span>.............................
            </div>
            <div
              className="grid-item"
              style={{ textAlign: "end", marginTop: 10 }}
            >
              <span>Balance Rs : </span>.............................
            </div>
          </div>
          <hr />
          <div
            className="grid-column"
            style={{
              gridTemplateColumns: "300px 300px",
              marginTop: 10,
              fontSize: 10,
              fontWeight: "bold",
              color: "#1f0352",
            }}
          >
            <div className="grid-item" style={{ alignItems: "start" }}>
              <span>Signature of Owner/Driver : </span>
              ....................................
            </div>
            <div className="grid-item" style={{ textAlign: "end" }}>
              <span>Dispatching : </span>.............................
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
        </Box>
     
  );
};

export default Chalan;
