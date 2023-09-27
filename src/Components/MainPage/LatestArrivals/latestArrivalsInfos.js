const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."
import engineoil1 from "../../../assets/products/engineoil1-1.png"
import engineoil2 from "../../../assets/products/engineoil1-2.png"

import tires1 from "../../../assets/products/tires1-1.png"
import tires2 from "../../../assets/products/tires1-2.png"

import accessories1 from "../../../assets/products/accessories1-1.png"
import accessories2 from "../../../assets/products/accessories1-2.png"

import tools1 from "../../../assets/products/tools1-1.png"
import tools2 from "../../../assets/products/tools1-2.png"



const LatestArrivalsInfos = [{
        id: 1,
        name: "Classic Mineral Motor Oil",
        description: description,
        img1: engineoil1,
        img2: engineoil2,
        price: 29.00,
        oldPrice: 45,
        amount: 1,
        category: "EngineOil"
    },
    {
        id: 4,
        name: "EcoBoost Fuel-Efficient Tire",
        description: description,
        img1: tires1,
        img2: tires2,
        price: 24.00,
        oldPrice: 35,
        amount: 1,
        category: "Tires"
    },
    {
        id: 7,
        name: "ClampTight Phone Mount",
        description: description,
        img1: accessories1,
        img2: accessories2,
        price: 17.00,
        oldPrice: 25,
        amount: 1,
        category: "Accessories"
    },
    {
        id: 10,
        name: "AirCharge Compact Air Pump",
        description: description,
        img1: tools1,
        img2: tools2,
        price: 36.00,
        oldPrice: 55,

        amount: 1,
        category: "Tools"
    },
]

export {
    LatestArrivalsInfos
}