import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
   constructor() {
      super();
      this.state = {
         like: false,
      };
   }

   likeToggler = () => {
      this.setState({ like: !this.state.like });
   };

   render() {
      const { img, title, price } = this.props;
      return (
         <>
            <div className="card">
               <img src={img} alt={title} />
               <div className="product">
                  <h2 className="product-name">{title}</h2>
                  <h3 className="product-price">
                     ${price - 5}
                     <del>${price}</del>
                  </h3>
               </div>
               <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  expedita accusantium unde. Nesciunt, id quo. Commodi molestiae
                  corrupti quas ducimus.
               </p>
               <div className="actions">
                  <button>Add to shop card</button>
                  {this.state.like ? (
                     <i className="fa fa-heart" onClick={this.likeToggler}></i>
                  ) : (
                     <i
                        className="fa fa-heart-o"
                        onClick={this.likeToggler}
                     ></i>
                  )}
               </div>
            </div>
         </>
      );
   }
}

export default Card;
