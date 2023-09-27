const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."

import engineoil11 from "../../../assets/products/engineoil1-1.png"
import engineoil12 from "../../../assets/products/engineoil1-2.png"

import engineoil21 from "../../../assets/products/engineoil2-1.png"
import engineoil22 from "../../../assets/products/engineoil2-2.png"

import engineoil31 from "../../../assets/products/engineoil3-1.png"
import engineoil32 from "../../../assets/products/engineoil3-2.png"


const engineOil = [{
        id: 1,
        name: "Classic Mineral Motor Oil",
        description: description,
        img1: engineoil11,
        img2: engineoil12,
        price: 29.00,
        oldPrice: 45,
        amount: 1,
        category: "Engine Oil"
    },
    {
        id: 2,
        name: "Max Life Synthetic Oil",
        description: description,
        img1: engineoil21,
        img2: engineoil22,
        price: 25.00,
        oldPrice: 35,
        amount: 1,
        category: "Engine Oil"
    },
    {
        id: 3,
        name: "Premium High Mileage Motor Oil",
        description: description,
        img1: engineoil31,
        img2: engineoil32,
        price: 18.00,
        amount: 1,
        oldPrice: 20,
        category: "Engine Oil"
    },
]
export {
    engineOil
}