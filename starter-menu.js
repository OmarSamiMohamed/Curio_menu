// Starter menu: used by the admin page's "Load starter menu" button and as an offline fallback on the public menu.
// Item format: [name, price, note, description]. price = number, or [[label, price], ...] for Hot / Ice style columns.
window.STARTER_MENU = [
  { id: "hot", name: "Hot Coffee", items: [
    ["Espresso", 75],
    ["Americano", 80],
    ["Macchiato", 75],
    ["Cortado", 85],
    ["Cappuccino", 90],
    ["Flat White", 90],
    ["Latte", 95],
    ["Spanish", 105],
    ["Salted Caramel", 105],
    ["Macchiato Caramel", 105],
    ["Mocha", 105, "White / Dark"],
    ["Turkish Coffee", 65],
    ["French Coffee", 70, "Classic / Hazelnut"]
  ]},
  { id: "ice", name: "Ice Coffee", items: [
    ["Americano", 95],
    ["Latte", 100],
    ["Spanish", 110],
    ["Salted Caramel", 110],
    ["Pistachio", 130],
    ["Mocha", 115, "White / Dark"],
    ["Honey Spice", 110],
    ["Caramel Macchiato", 115],
    ["Caramel Latte", 115]
  ]},
  { id: "karak", name: "Signature Karak", items: [
    ["Original Tea", 35],
    ["Original Karak", [["Hot", 65], ["Ice", 65]]],
    ["Spice Karak", [["Hot", 70], ["Ice", 70]]],
    ["Saffron Karak", [["Hot", 120], ["Ice", 120]]],
    ["Dates Karak", [["Hot", 70], ["Ice", 70]]],
    ["Cardamom Karak", [["Hot", 70], ["Ice", 70]]],
    ["Ginger Karak", [["Hot", 70], ["Ice", 70]]]
  ]},
  { id: "filter", name: "Filter Coffee", items: [
    ["V60", 130, "Hot or Ice"],
    ["Aeropress", 130, "Hot"]
  ]},
  { id: "matcha", name: "Matcha", sub: "Served iced", items: [
    ["Classic", 115],
    ["Spanish Matcha", 120, "Coffee / Non-coffee"],
    ["Strawberry Matcha", 120],
    ["Coconut Matcha", 120],
    ["Spice", 120],
    ["Vanilla", 120],
    ["Pineapple Matcha", 120]
  ]},
  { id: "blended", name: "Blended Coffee", items: [
    ["Classic", 110],
    ["Spanish", 115],
    ["Salted Caramel", 115],
    ["Caramel", 115],
    ["Mocha", 120, "White / Dark"],
    ["Date Latte", 120, "Coffee / Non-coffee"],
    ["Pistachio", 135]
  ]},
  { id: "chocolate", name: "Hot Chocolate", items: [
    ["Classic", 100],
    ["Marshmallow", 105],
    ["Hazelnut Creamy", 105],
    ["Pistachio Creamy", 120],
    ["Cookies Creamy", 110]
  ]},
  { id: "additions", name: "Additions", items: [
    ["Flavours", 25],
    ["Sauces", 25],
    ["Ice Cream Scoop", 25],
    ["Oat / Coconut / Almond", 30, "Milk"],
    ["Coffee Shot", 30],
    ["Fruity Bubbles", 30]
  ]},
  { id: "smoothies", name: "Smoothies", items: [
    ["Mixed Berry", 110],
    ["Blueberry", 110],
    ["Orange Cherry", 100],
    ["Sour Coconut", 100],
    ["Mango Passion", 110],
    ["Mango Kiwi", 105],
    ["Mango", 100],
    ["Strawberry", 100]
  ]},
  { id: "refreshers", name: "Refreshers", items: [
    ["Mojito", 85, "Soda or Redbull", "Classic · Passion · Strawberry Kiwi · Blueberry · Mix Berry · Coffee Nut · Pina Colada"],
    ["Hibiscus", 80, "", "Classic · Coconut · Taif Flowers · Passion · Berries"],
    ["Mix Bubbles", 95, "", "Strawberry · Mango · Blueberry · Passion"]
  ]},
  { id: "parathah", name: "Parathah", items: [
    ["Cold Cuts", 100],
    ["Cheese Lava", 75],
    ["Turkey & Cheddar", 75],
    ["Pastirma Volcano", 85],
    ["Bikini Hotdog", 80],
    ["Pistachio Dream", 100],
    ["Nutella Hug", 80],
    ["Kiri Honey", 75]
  ]}
];
