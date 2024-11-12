"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          className="logo-image"
          src="/images/logo.png"
          width={100}
          height={50}
          alt="Logo"
        />
      </div>
      <div className="navbar-title">
        Tuition-Free Education Program on Latest Technologies
      </div>

      <ul className="navbar-links">
        <Link href="./">Home</Link>
        <Link href="./Apply">Apply</Link>
        <Link href="./Jobs">Jobs</Link>
        <Link href="./Result">Result</Link>
        <li>Courses</li>
      </ul>

      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isOpen && (
        <ul className="mobile-menu">
          <Link href="./" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="./Apply" onClick={toggleMenu}>
            Apply
          </Link>
          <Link href="./Jobs" onClick={toggleMenu}>
            Jobs
          </Link>
          <Link href="./Result" onClick={toggleMenu}>
            Result
          </Link>
          <li onClick={toggleMenu}>Courses</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
