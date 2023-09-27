const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engine oils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."


import engineoil1 from "../../../assets/products/engineoil1-1.png"
import engineoil2 from "../../../assets/products/engineoil1-2.png"

import engineoil3 from "../../../assets/products/engineoil2-1.png"
import engineoil4 from "../../../assets/products/engineoil2-2.png"

import tires1 from "../../../assets/products/tires1-1.png"
import tires2 from "../../../assets/products/tires1-2.png"

import accessories1 from "../../../assets/products/accessories1-1.png"
import accessories2 from "../../../assets/products/accessories1-2.png"

import accessories3 from "../../../assets/products/accessories2-1.png"
import accessories4 from "../../../assets/products/accessories2-2.png"

import tools1 from "../../../assets/products/tools1-1.png"
import tools2 from "../../../assets/products/tools1-2.png"

import chain1 from "../../../assets/products/chain2-1.png"
import chain2 from "../../../assets/products/chain2-2.png"

import kask1 from "../../../assets/products/kask3-1.png"
import kask2 from "../../../assets/products/kask3-2.png"

const BestSellersData = [{

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
        id: 2,
        name: "Max Life Synthetic Oil",
        description: description,
        img1: engineoil3,
        img2: engineoil4,
        price: 25.00,
        oldPrice: 65,
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
        oldPrice: 65,
        amount: 1,
        category: "Tires"
    },
    {
        id: 7,
        name: "ClampTight Windshield Phone Mount",
        description: description,
        img1: accessories1,
        img2: accessories2,
        price: 17.00,
        oldPrice: 35,
        amount: 1,
        category: "Accessories"
    },

    {
        id: 8,
        name: "QuickClip CD Slot Phone Mount",
        description: description,
        img1: accessories3,
        img2: accessories4,
        price: 26.00,
        oldPrice: 35,

        amount: 1,
        category: "Accessories"
    },
    {
        id: 10,
        name: "AirCharge Compact Car Air Pump",
        description: description,
        img1: tools1,
        img2: tools2,
        price: 36.00,
        oldPrice: 45,
        amount: 1,
        category: "Tools"
    },



    {
        id: 14,
        name: "RK 530XSOZ1 Chain",
        description: description,
        img1: chain1,
        img2: chain2,
        price: 26.00,
        oldPrice: 35,
        amount: 1,
        category: "Chain"
    },

    {
        id: 18,
        name: "HJC RPHA1 KASK",
        description: description,
        img1: kask1,
        img2: kask2,
        price: 26.00,
        oldPrice: 35,
        amount: 1,
        category: "Helmant"
    },

]

export {
    BestSellersData
}