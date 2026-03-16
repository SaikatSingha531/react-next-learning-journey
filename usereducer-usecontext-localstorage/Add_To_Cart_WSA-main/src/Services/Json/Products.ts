import type { Product } from "../../Typescript/Interface/Interface"
import one from "../../assets/Fone.jpg"
import two from "../../assets/adfgag.jpg"
import three from "../../assets/afga.jpg"
import four from "../../assets/agfad.jpg"
import five from "../../assets/asdf.jpg"
import six from "../../assets/dfgdadfg.jpg"
import seven from "../../assets/dgagafg.jpg"
import eight from "../../assets/dzfgfgf.jpg"
import nine from "../../assets/fasdf.jpg"



const productsData: Product[] = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "price": 249,
    "description": "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
    "rating": 4.5,
    "image": one
  },
  {
    "id": 2,
    "name": "Veg Burger",
    "price": 129,
    "description": "Crispy veg patty with lettuce, tomato, and special sauce.",
    "rating": 4.2,
    "image": two
  },
  {
    "id": 3,
    "name": "Chicken Biryani",
    "price": 299,
    "description": "Aromatic basmati rice cooked with spicy chicken masala.",
    "rating": 4.7,
    "image": three
  },
  {
    "id": 4,
    "name": "Paneer Butter Masala",
    "price": 269,
    "description": "Soft paneer cubes in rich buttery tomato gravy.",
    "rating": 4.6,
    "image": four
  },
  {
    "id": 5,
    "name": "Masala Dosa",
    "price": 149,
    "description": "Crispy dosa stuffed with spicy potato filling.",
    "rating": 4.4,
    "image": five
  },
  {
    "id": 6,
    "name": "French Fries",
    "price": 99,
    "description": "Golden fried potato sticks with a crispy finish.",
    "rating": 4.1,
    "image": six
  },
  {
    "id": 7,
    "name": "Chocolate Cake",
    "price": 199,
    "description": "Moist chocolate cake topped with rich chocolate ganache.",
    "rating": 4.8,
    "image": seven
  },
  {
    "id": 8,
    "name": "Caesar Salad",
    "price": 179,
    "description": "Fresh lettuce with creamy Caesar dressing and croutons.",
    "rating": 4.0,
    "image": eight
  },
  {
    "id": 9,
    "name": "Grilled Sandwich",
    "price": 139,
    "description": "Toasted sandwich filled with veggies and cheese.",
    "rating": 4.3,
    "image": nine
  },
]


export default productsData;
