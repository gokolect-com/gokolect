import { Component } from "react";

import "./directory.styles.scss";

import Card from "../card/card.component";


class Directory extends Component {
    constructor() {
        super();
    
        this.state = {
            items : [
                {
                    id: 1,
                    name: "Leather balcony chair",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/chair.png"
                },
                {
                    id: 2,
                    name: "Led Television",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/television.png"
                },
                {
                    id: 3,
                    name: "Laptop Bag",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/bag.png"
                },
                {
                    id: 4,
                    name: "Toyota car",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/car.png"
                },
                {
                    id: 5,
                    name: "Leather balcony chair",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/chair.png"
                },
                {
                    id: 6,
                    name: "Led Television",
                    description: "Description of the chair goes here",
                    imageUrl: "./images/television.png"
                }
            ]
        }
        
    }
  
    render(){
        const items = this.state.items;
        return (
            <div className="directory">
               {
                   items.map(({id, ...otherProps}) => {
                       return (<Card key={id} {...otherProps} />);
                   })
               }
            </div>
        )
    }
};

export default Directory;