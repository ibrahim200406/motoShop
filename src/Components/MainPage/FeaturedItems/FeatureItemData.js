const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."
import tools1 from "../../../assets/products/tools1-1.png"

import tools2 from "../../../assets/products/tools2-1.png"

import tools3 from "../../../assets/products/tools3-1.png"

import chain1 from "../../../assets/products/chain1-1.png"

const FeaturedItemData = [{
        id: 10,
        name: "AirCharge Compact Car Air Pump",
        description: description,
        img1: tools1,
        price: 36.00,
        oldPrice: 45,
        amount: 1,
        category: "Tools"
    },
    {
        id:11,
        name: "MightyGrip 1/4″DR Wrench Set",
        description: description,
        price: 26.00,
        oldPrice: 35,
        img1: tools2,
        amount: 1,
        category: "Tools"
    },
    {
        id: 12,
        name: "ErgoRatch K Handle Screwdriver",
        description: description,
        img1: tools3,
        price: 26.00,
        oldPrice: 15,

        amount: 1,
        category: "Tools"
    },
    {
        id: 13,
        name: "Off-Road Motorcycle X-Ring Chain",
        description: description,
        img1: chain1,
        price: 26.00,
        oldPrice: 45,
        amount: 1,
        category: "Chain"
    },
]

export {
    FeaturedItemData
}