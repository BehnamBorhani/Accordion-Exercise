import React, { Component } from "react";
import "./Accordion.css";
import Card from "../cards/Card";
import jsonData from "../../json/productList.json";

class Accordion extends Component {
   toggler = (event) => {
      const allHeaders = document.querySelectorAll(".header");
      allHeaders.forEach((header) => {
         if (event.target === header) {
            event.target.classList.toggle("active");
         } else {
            header.classList.remove("active");
         }
      });
   };

   createCards = (groupProducts) => {
      let allCards = groupProducts.map((product) => {
         return (
            <Card
               img={product.productImage}
               title={product.productName}
               price={product.productPrice}
            />
         );
      });

      return allCards;
   };

   render() {
      const groupData = jsonData.productsGroups.find((group) => {
         return group.groupID === this.props.id;
      });

      return (
         <>
            <div className="accordion">
               <div className="header" onClick={this.toggler}>
                  <h2>{groupData.groupTitle}</h2>
                  <span></span>
               </div>
               <div className="content">
                  {
                     this.createCards(groupData.groupProducts)
                     /*result:
                        <Card img="./images/cake1.jpg" title="Chiffon Cake" price="30" />
                        <Card img="./images/cake2.jpg" title="Biscuit Cake" price="15" />
                        <Card img="./images/cake3.jpg" title="Sponge Cake" price="20" />
                        <Card img="./images/cake4.jpg" title="Genoise Cake" price="35" />
                     */
                  }
               </div>
            </div>
         </>
      );
   }
}

export default Accordion;
