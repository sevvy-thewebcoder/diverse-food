import { aboutSection__image, bestseller__images, menu__images, testimonial__images, blogAndArticle__images } from "./images"

const { bsImg01, bsImg02, bsImg03, bsImg04 } = bestseller__images;
const { menuImg01, menuImg02, menuImg03, menuImg04, menuImg05, menuImg06, menuImg07, menuImg08, menuImg09, menuImg10 } = menu__images;
const { testImg01, testImg02,testImg03 } = testimonial__images;
const { baImg01, baImg02, baImg03 } = blogAndArticle__images;



const headerSection = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About Us",
        url: "#about"
    },
    {
        id: 3,
        title: "Bestseller",
        url: "#bestseller"
    },
    {
        id: 4,
        title: "Menu",
        url: "#menu"
    },
    {
        id: 5,
        title: "Testimonials",
        url: "#testimonial"
    },
    {
        id: 6,
        title: "Blog & Articles",
        url: "#blogs"
    }
]

const bestsellerSection = [
    {
        id: 1,
        image: bsImg01,
        title: "Poutine",
        stars: 5,
        price: "$61.00"
    },
    {
        id: 2,
        image: bsImg02,
        title: "Chicken Rice",
        stars: 4,
        price: "$113.00"
    },
    {
        id: 3,
        image: bsImg03,
        title: "Seafood Paella",
        stars: 5,
        price: "$88.00"
    },
    {
        id: 4,
        image: bsImg04,
        title: "Salad Fruit",
        stars: 5,
        price: "$18.00"
    },
]

const menuSection = [
    {
        id: 1,
        image: menuImg01,
        title: "Burger",
        price: "$25.00"
    },
    {
        id: 2,
        image: menuImg02,
        title: "Chicken Wings",
        price: "$55.00"
    },
    {
        id: 3,
        image: menuImg03,
        title: "Noodle",
        price: "$15.00"
    },
    {
        id: 4,
        image: menuImg04,
        title: "Seafood Paella",
        price: "$88.00"
    },
    {
        id: 5,
        image: menuImg05,
        title: "Pizza",
        price: "$45.00"
    },
    {
        id: 6,
        image: menuImg06,
        title: "Poutine",
        price: "$61.00"
    },
    {
        id: 7,
        image: menuImg07,
        title: "Chicken Rice",
        price: "$113.00"
    },
    {
        id: 8,
        image: menuImg08,
        title: "Tacos",
        price: "$35.00"
    },
    {
        id: 9,
        image: menuImg09,
        title: "Pho",
        price: "$28.00"
    },
    {
        id: 10,
        image: menuImg10,
        title: "Rendang",
        price: "$65.00"
    },
]

const testimonialSection = [
    {
        id: 1,
        image: testImg01,
        title: "Sarah Wilson",
        subTitle: "Customer",
        text: "Read More"
    },
    {
        id: 2,
        image: testImg02,
        title: "Dr. Jasmine Kovacek",
        subTitle: "Central Integration Strategist",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce , lorem ut bibendum nulla vel consequat odio eros et tortor."
    },
    {
        id: 3,
        image: testImg03,
        title: "Ivan Backdhum",
        subTitle: "Customer",
        text: "Read More"
    }
]

const blogSection = [
    {
        id: 1,
        image: baImg01,
        title: "Introducing Our New Seasonal Menu",
        date: "13 July 2023",
        text: "Lorem ipsum dolor sit amet. Fusce , lorem ut bibendum nulla vel consequat odio eros et tortor."
    },
    {
        id: 2,
        image: baImg02,
        title: "A Glimpse into the Culinary Innovations at Diverse Food",
        date: "30 August 2023",
        text: "Lorem ipsum dolor sit amet. Fusce , lorem ut bibendum nulla vel consequat odio eros et tortor."
    },
    {
        id: 3,
        image: baImg03,
        title: "Showcasing the Best of Regional Cuisine",
        date: "20 September 2023",
        text: "Lorem ipsum dolor sit amet. Fusce , lorem ut bibendum nulla vel consequat odio eros et tortor."
    }
]

export { headerSection, aboutSection__image, bestsellerSection, menuSection, testimonialSection, blogSection }