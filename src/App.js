import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import CardComponent from "./CardComponent";
import CardInfo from "./CardInfo";
import chicken1 from './images/carbonera.jpeg'
import chicken2 from './images/car2.jpg'
import rat1 from './images/rat.jpg'
import rat2 from './images/oui.jpg'
import faf1 from './images/fala.jpg'
import faf2 from './images/fel.jpeg'
import vet1 from './images/SA.jpg'
import vet2 from './images/koek.jpg'
import Navbar from "./Navbar";




const cardData = [
  {
    name: "Chicken Carbonara",
    origin: "Italy",
    description: [
      "STEP Cook the spaghetti following pack instructions.",
      "Meanwhile, heat the oil in a frying pan and fry the garlic and pancetta until crisp, then add the chicken strips and fry briefly until they're just cooked through.",
      "Fish out the garlic clove and discard it.",
      "Beat the eggs with the grana padano and some black pepper."
    ],
    image1: chicken1,
    image2: chicken2
  },
  {
    name: "Ratatouille",
    origin: "France",
    description: [
      "Preheat the oven for 375˚F (190˚C).",
      "Preheat the oven for 375˚F (190˚C).",
      "Using a sharp knife or a mandoline, slice the eggplant, tomatoes, squash, and zucchini into approximately ¹⁄₁₆-inch (1-mm)-thick rounds, then set aside.", "Make the sauce: Heat the olive oil in a 12 - inch(30 - cm) oven - safe pan over medium - high heat.Sauté the onion, garlic, and bell peppers until soft, about 10 minutes.Season with salt and pepper, then add the crushed tomatoes.Stir until the ingredients are fully incorporated.Remove from heat, then add the basil.Stir once more, then smooth the surface of the sauce with a spatula.",
      "Arrange the veggies in alternating slices, (for example, eggplant, tomato, squash, zucchini) on top of the sauce, working from the outer edge to the center of the pan.Season with salt and pepper.",
      " Make the herb seasoning: In a small bowl, mix together the basil, garlic, parsley, thyme, salt, pepper, and olive oil.Spoon the herb seasoning over the vegetables.",
      "Cover the pan with foil and bake for 40 minutes.Uncover, then bake for another 20 minutes, until the vegetables are softened.","Serve hot as a main dish or side.The ratatouille is also excellent the next day–cover with foil and reheat in a 350˚F(180˚C) oven for 15 minutes, or simply microwave to desired temperature."
    ],
    image1: rat1,
    image2: rat2
  },
  {
    name: "FALAFEL",
    origin: "Middle East",
    description: [
      "Soak your dried chickpeas. Overnight or for at least 8-12 hours. Note that the chickpeas will triple in size, so cover them with plenty of water. Then drain and rinse them.",
      "Add all the ingredients to a food processor. Add the chickpeas, onion, parsley, cilantro, garlic, green pepper and spices to a food processor. I recommend roughly chopping up the onion, herbs and pepper before adding. Pulse the food processor but do not blend completely. The final mixture should resemble coarse sand.",
      "Transfer the mixture to a bowl. Then add the chickpea flour and baking soda, stir it together until it’s fully combined and cover with plastic wrap or a lid.Place the bowl in the fridge. Chill the falafel mixture for 30 minutes to 1 hour.",
     " Shape your falafel. You can do this by hand, with a cookie scoop (which is what I use) or a falafel scoop. Decide if you’d like round balls or flatter patty shapes. The flatter shapes are better if you plan to pan fry or bake. Any shape can be used for deep frying. Form all your falafel and place on a plate."
    ],
    
    image1: faf1,
    image2: faf2

  },
 
 
  {
    name: "Vetkoek (Fried Donuts Stuffed with Minced Meat)",
    origin: "South Africa",
    description: [
      "In a large bowl, mix salt, sugar, water, and yeast. Set aside for 5 minutes. Add flour then mix dough until everything has come together.",
"Covers loosely with a clean clothe and let rise in a warm, draft-free place for 1 to 2 hours or until doubled.",
"Turn dough on a floured surface, flatten to knock out air bubbles and knead to make firm, you may add flour as needed.",
" Roll out dough in to 1 inch thick, cut into desired shapes or use 3 inch or larger cookie cutter to cut dough.",
" In a large, sauce pan pour vegetable oil, until it is at least 3 inches (or about 5 centimeters) high (too little will result in flatter vetkoeks and place on medium heat until oil is 350 degrees.",
"Fry until golden brown about 3-5 minutes depending on size. Remove with a slotted spoon and drain on paper napkin.",
"Let it cool.Split in half and fill with mince meat. Serve warm."
    ],
    image1: vet1,
    image2: vet2
  }
];

function App() {
  return (
    <>
        <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<CardComponent data={cardData} />} />
            <Route path="/info/:name" element={<CardInfo data={cardData} />} />
        
          </Routes>
          
    
     </Router>
      </div>
      

    </>
  );
}

export default App;

