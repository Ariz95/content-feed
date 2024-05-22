import React from "react";
import styles from "./Navbar.module.css";
import { Props as NavbarProps } from ".";
import logo from "../../../public/icons/react.png";

export const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <img
        src="https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
        alt="React Icon"
      />
      <span>{title}</span>
    </div>
  );
};
