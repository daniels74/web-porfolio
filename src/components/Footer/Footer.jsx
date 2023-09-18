import React, { useState } from 'react'
import "./Footer.css"
import Box from '@mui/material/Box';
// import {FaLinkedin} from "react-icons/fa"
// import {SiHandshake} from "react-icons/si"


const Footer = () => {
    const [footerState, setFooterState] = useState(false);

    return (
        <Box onMouseEnter={() => setFooterState(true)} onMouseLeave={() => setFooterState(false)} component="footer" sx={{
            height: footerState ? "20%" : "10%",
            width: footerState ? "100%" : "25%",
            backgroundColor: "rgb(8, 20, 33)",
            color: "lightblue",
            position: "fixed",
            bottom: 0,
            borderRadius: "1rem",
            borderStyle: "solid",
            borderWidth: "thin",
            borderColor: "lightBlue",
        }}>
            <Box sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
            }}>
                <Box component="h4" sx={{
                    height: "30%",
                    // background: "red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>Personal Sites in Progress</Box>
                <Box sx={{
                    height: "75%",
                    width: "100%",
                    listStyle: "none",
                    display: footerState ? "flex" : "none",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>
                    <Box component="li" sx={{
                        display: footerState ? "flex" : "none",
                    }}>
                        <Box component='a' sx={{
                            color: "lightblue"
                        }} href="https://cold-jupiter-d4aac7c2f1f0.herokuapp.com">
                            CryptoZapp
                        </Box>
                    </Box>
                    <Box component="li" sx={{
                        display: footerState ? "flex" : "none",
                    }}>
                        <Box component='a' sx={{
                            color: "lightblue"
                        }} href="https://wiseupv3.herokuapp.com/">
                            WiseUp
                        </Box>
                    </Box>
                    <Box component="li" sx={{
                        display: footerState ? "flex" : "none",
                    }}>
                        <Box component='a' sx={{
                            color: "lightblue"
                        }} href="https://cryptonica.vercel.app/">
                            Cryptonika
                        </Box>
                    </Box>
                    <Box component="li" sx={{
                        display: footerState ? "flex" : "none",
                    }}>
                        <Box component='a' sx={{
                            color: "lightblue"
                        }} href="https://royerslandscaping.vercel.app/">
                            LandPros
                        </Box>
                    </Box>
                    <Box component="li" sx={{
                        display: footerState ? "flex" : "none",
                    }}>
                        <Box component='a' sx={{
                            color: "lightblue"
                        }} href="https://thelandscapes.vercel.app/">
                            Landscapes
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer