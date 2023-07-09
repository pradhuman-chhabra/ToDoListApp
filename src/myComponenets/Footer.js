import React from "react";
import"./footer.css"

export const Footer = () => {
  let footerSyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    backgroundColour: "red",
    border: "10px solid grey",
  };
  return (
    // <footer className="bg-dark text-light py-3 footerStyle" style={footerSyle}> we can either use bg-dark which is a bootstrap class or we can set background-color using footer.css

    <footer className=" text-light py-3 footerStyle" style={footerSyle}>
      <p className="text-center">
        {/* this is a bootstarp class to make the text center aligned */}
        Copyright &copy; My ToDos List app
      </p>
    </footer>
  );
};
