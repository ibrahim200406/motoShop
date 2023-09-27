const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."

import tools11 from "../../../assets/products/tools1-1.png"
import tools12 from "../../../assets/products/tools1-2.png"

import tools21 from "../../../assets/products/tools2-1.png"
import tools22 from "../../../assets/products/tools2-2,png.png"

import tools31 from "../../../assets/products/tools3-1.png"
import tools32 from "../../../assets/products/tools3-2.png"

const Tools = [{
        id: 10,
        name: "AirCharge Compact Car Air Pump",
        description: description,
        img1: tools11,
        img2: tools12,
        price: 36.00,
        amount: 1,
        oldPrice: 45,
        category: "Tools"
    },
    {
        id: 11,
        name: "MightyGrip 1/4″DR Wrench Set",
        description: description,
        img1: tools21,
        img2: tools22,
        price: 26.00,
        oldPrice: 55,
        amount: 1,
        category: "Tools"
    },
    {
        id: 12,
        name: "ErgoRatch K Handle Screwdriver",
        description: description,
        img1: tools31,
        img2: tools32,
        price: 26.00,
        oldPrice: 32,
        amount: 1,
        category: "Tools"
    },
]
export {
    Tools
}