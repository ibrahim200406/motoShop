const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."



import tires11 from "../../../assets/products/tires1-1.png";
import tires12 from "../../../assets/products/tires1-2.png";

import tires21 from "../../../assets/products/tires2-1.png";
import tires22 from "../../../assets/products/tires2-2.png";

import tires31 from "../../../assets/products/tires3-1.png";
import tires32 from "../../../assets/products/tires3-2.png";

const Tires = [{
        id: 4,
        name: "EcoBoost Fuel-Efficient Tire",
        description: description,
        img1: tires11,
        img2: tires12,
        price: 24.00,
        oldPrice: 30,
        amount: 1,
        category: "Tires"
    },
    {
        id: 5,
        name: "Sportster High-Performance Tire",
        description: description,
        img1: tires21,
        img2: tires22,
        price: 44.00,
        oldPrice: 30,
        amount: 1,
        category: "Tires"
    },
    {
        id: 6,
        name: "Trailblazer Off-Road Tire",
        description: description,
        img1: tires31,
        img2: tires32,
        price: 14.00,
        oldPrice: 25,
        amount: 1,
        category: "Tires"
    },
]

export {
    Tires
}