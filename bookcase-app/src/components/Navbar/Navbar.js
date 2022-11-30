import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ basketValue, quantity }) => {
  return (
      <NavbarBs
        style={{ height: "100%", width: "100%", position: "sticky" }}
        className="bg-white shadow-sm mb-3"
        expand="lg"
      >
        <Container  style={{ top: 0 }}>
          <Link to="/" style={{color: "black",textDecoration: "none", paddingRight: "2vh"}}>
            <h2>Book store</h2>
          </Link>
          <Nav className="me-auto navLinkWrapper">
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/" as={NavLink}>
              Library
            </Nav.Link>
          </Nav>
          <Link to="/basket">
            <Button
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "3rem",
                height: "3rem",
                padding: 0,
                margin: 0,
                position: "relative",
              }}
              variant="outline-primary"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="3vh"
                height="3vh"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M78 4789 c-43 -22 -78 -81 -78 -129 0 -50 35 -107 80 -130 37 -19 58
                  -20 367 -20 l329 0 361 -1266 362 -1266 -29 -58 c-50 -99 -72 -177 -72 -260 0
                  -208 135 -382 337 -435 43 -11 115 -15 265 -16 185 -1 200 -2 155 -13 -84 -21
                  -147 -57 -211 -121 -177 -176 -177 -453 1 -630 258 -259 695 -118 757 244 24
                  141 -22 281 -127 387 -63 63 -143 109 -218 124 -24 4 262 8 658 8 580 0 691
                  -2 650 -12 -84 -21 -147 -57 -211 -121 -177 -176 -177 -454 0 -630 260 -259
                  696 -118 758 244 39 227 -111 452 -337 507 -43 11 -11 12 238 13 268 1 291 2
                  327 21 45 23 80 80 80 130 0 50 -35 107 -80 130 -39 20 -56 20 -1332 20 -1211
                  0 -1295 1 -1328 18 -81 40 -101 128 -53 227 l27 55 1323 0 c1312 0 1324 0
                  1364 20 28 15 46 33 59 63 27 56 620 2139 620 2174 0 41 -40 103 -80 124 -33
                  18 -104 19 -1951 19 l-1916 0 -67 238 c-83 289 -93 314 -150 341 -41 20 -58
                  21 -442 21 -377 -1 -401 -2 -436 -21z m4688 -896 c-3 -10 -118 -415 -257 -900
                  l-252 -883 -1242 0 -1242 0 -252 883 c-139 485 -254 890 -257 900 -5 16 83 17
                  1751 17 1668 0 1756 -1 1751 -17z m-2436 -3003 c45 -23 80 -80 80 -131 0 -74
                  -76 -149 -151 -149 -46 0 -108 39 -130 82 -37 72 -14 151 57 194 48 29 92 30
                  144 4z m1510 0 c45 -23 80 -80 80 -131 0 -74 -76 -149 -151 -149 -46 0 -108
                  39 -130 82 -37 72 -14 151 57 194 48 29 92 30 144 4z"
                  />
                </g>
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(70%, 30%)",
                }}
              >
                {quantity}
              </div>
            </Button>
          </Link>
        </Container>
      </NavbarBs>
  );
};

export default Navbar;
