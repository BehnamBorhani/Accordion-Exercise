import React, { Component } from "react";
import "./Accordion.css";
import Card from "../cards/Card";
import menu3 from "../../images/menu3.jpg";
import menu5 from "../../images/menu5.jpg";
import menu7 from "../../images/menu7.jpg";
import menu9 from "../../images/menu9.jpg";

class Accordion extends Component {
   constructor() {
      super();
      this.state = {
         name: "Behnam",
      };
   }

   toggler = (event) => {
      const allHeaders = document.querySelectorAll(".header");
      allHeaders.forEach((header) => {
         if (event.target === header) {
            event.currentTarget.classList.toggle("active");
         } else {
            header.classList.remove("active");
         }
      });
   };

   render() {
      return (
         <>
            <div className="accordion">
               <div className="header" onClick={this.toggler}>
                  <h2>Delicious Cake</h2>
                  <span></span>
               </div>
               <div className="content">
                  {/* <Card img={menu2} title="Cake 1"/> */}
                  <Card img={menu3} title="Chiffon Cake" price="30" />
                  <Card img={menu5} title="Biscuit Cake" price="15" />
                  <Card img={menu7} title="Sponge Cake" price="20" />
                  <Card img={menu9} title="Genoise Cake" price="35" />
               </div>
            </div>
         </>
      );
   }
}

export default Accordion;
