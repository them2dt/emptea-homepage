import { useState, useEffect } from "react";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left"></div>
      <div className="footer-right">
        <ul>
          <li>
            <a href=""> A project by M2DT.</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
