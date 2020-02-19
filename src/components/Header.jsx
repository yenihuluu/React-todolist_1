import React from "react"; // Deklarasiin var React dari package/dependencies/react
//props-type di hilangin karena props(children) sudah tidak digunakan

const Header = () => {
  //disini ga menggunakan props (children) karena Header ini bagian dari Children
  return (
    <section className="header">
      <button className="header-btn main-black-color">Add</button>
      <h1 className="header-title">Todo list</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

export default Header;
