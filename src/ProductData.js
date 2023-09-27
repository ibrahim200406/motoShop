const description = "We offer a wide range of products to meet your automotive needs. We stock everything from rooftop cargo carriers to engineoils, tires, accessories, batteries, and tools. Whether you’re a professional mechanic or a weekend DIY enthusiast, we have everything you need to keep your vehicle running smoothly."

import engineoil11 from "./assets/products/engineoil1-1.png"
import engineoil12 from "./assets/products/engineoil1-2.png"

import engineoil21 from "./assets/products/engineoil2-1.png"
import engineoil22 from "./assets/products/engineoil2-2.png"

import engineoil31 from "./assets/products/engineoil3-1.png"
import engineoil32 from "./assets/products/engineoil3-2.png"

import tires11 from "./assets/products/tires1-1.png";
import tires12 from "./assets/products/tires1-2.png";

import tires21 from "./assets/products/tires2-1.png";
import tires22 from "./assets/products/tires2-2.png";

import tires31 from "./assets/products/tires3-1.png";
import tires32 from "./assets/products/tires3-2.png";


import accessories11 from "./assets/products/accessories1-1.png";
import accessories12 from "./assets/products/accessories1-2.png";

import accessories21 from "./assets/products/accessories2-1.png";
import accessories22 from "./assets/products/accessories2-2.png";

import accessories31 from "./assets/products/accessories3-1.png";
import accessories32 from "./assets/products/accessories3-2.png";

import tools11 from "./assets/products/tools1-1.png"
import tools12 from "./assets/products/tools1-2.png"

import tools21 from "./assets/products/tools2-1.png"
import tools22 from "./assets/products/tools2-2,png.png"

import tools31 from "./assets/products/tools3-1.png"
import tools32 from "./assets/products/tools3-2.png"

import chain11 from "./assets/products/chain1-1.png"
import chain12 from "./assets/products/chain1-2.png"

import chain21 from "./assets/products/chain2-1.png"
import chain22 from "./assets/products/chain2-2.png"

import chain31 from "./assets/products/chain3-1.png"
import chain32 from "./assets/products/chain3-2.png"

import kask11 from "./assets/products/kask1-1.png"
import kask12 from "./assets/products/kask1-2.png"

import kask21 from "./assets/products/kask2-1.png"
import kask22 from "./assets/products/kask2-2.png"


import kask31 from "./assets/products/kask3-1.png"
import kask32 from "./assets/products/kask3-2.png"

const products = [{
        id: 1,
        name: "Classic Mineral Motor Oil",
        description: description,
        img1: engineoil11,
        img2: engineoil12,
        price: 29.00,
        oldPrice: 45,
        amount: 1,
        category: "EngineOil"
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
        category: "EngineOil"
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
        category: "EngineOil"
    },
    {
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
    {
        id: 7,
        name: "ClampTight Windshield Phone Mount",
        description: description,
        img1: accessories11,
        img2: accessories12,
        price: 17.00,
        oldPrice: 20,
        amount: 1,
        category: "Accessories"
    },
    {
        id: 8,
        name: "ClampTight Windshield Phone Mount",
        description: description,
        img1: accessories21,
        img2: accessories22,
        price: 34.00,
        oldPrice: 45,
        amount: 1,
        category: "Accessories"
    },
    {
        id: 9,
        name: "QuickClip CD Slot Phone Mount",
        description: description,
        img1: accessories31,
        img2: accessories32,
        price: 26.00,
        oldPrice: 30,
        amount: 1,
        category: "Accessories"
    },
    {
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
    {
        id: 13,
        name: "Off-Road Motorcycle X-Ring Chain",
        description: description,
        img1: chain11,
        img2: chain12,
        price: 26.00,
        oldPrice: 45,
        amount: 1,
        category: "Chain"
    },
    {
        id: 14,
        name: "EK Chain 530 SRX2 Chain",
        description: description,
        img1: chain21,
        img2: chain22,
        price: 26.00,
        oldPrice: 45,

        amount: 1,
        category: "Chain"
    },
    {
        id: 15,
        name: "RK 530XSOZ1 Chain",
        description: description,
        img1: chain31,
        img2: chain32,
        price: 26.00,
        oldPrice: 45,

        amount: 1,
        category: "Chain"
    },
    {
        id: 16,
        name: "HJC RPHA1 KASK",
        description: description,
        img1: kask11,
        img2: kask12,
        price: 46.00,
        oldPrice: 45,
        amount: 1,
        category: "Helmant"
    },
    {
        id: 17,
        name: "HJC RPHA1 KASK",
        description: description,
        img1: kask21,
        img2: kask22,
        price: 36.00,
        oldPrice: 45,
        amount: 1,
        category: "Helmant"
    },
    {
        id: 18,
        name: "HJC RPHA1 KASK",
        description: description,
        img1: kask31,
        img2: kask32,
        price: 26.00,
        oldPrice: 45,
        amount: 1,
        category: "Helmant"
    },
]

export default products;