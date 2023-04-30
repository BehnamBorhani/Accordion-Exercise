import React, { Component } from "react";
import "./Accordion.css";



class Accordion extends Component {
   toggler = ()=>{
      document.querySelector(".header").classList.toggle("active")
   }

   render() {
      return (
         <>
            <div className="header">
               <h2>Accordion</h2>
               <span onClick={this.toggler}></span>
            </div>
            <div className="content">
               hello
            </div>
         </>
      );
   }
}

export default Accordion;
