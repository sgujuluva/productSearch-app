import React,{useState} from "react"
import Header from './components/Header';
import Result from './components/Result';
import './App.css';


const initialProducts = [
  {
    productName: "xbox",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false,
  },
  {
    productName: "Playstation",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false,
  },
  {
    productName: "iPhone",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false,
  },
  {
    productName: "MacBook",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false,
  },
  {
    productName: "xbox1",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false,
  },
  {
    productName: "Playstation1",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false,
  },
  {
    productName: "iPhone1",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false,
  },
  {
    productName: "MacBook1",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false,
  },
];


function App() {

  const [products,setProducts] = useState(initialProducts)

const handleDelete=(index) => {
let updateArray = products.filter((index,i) => i !== index)
setProducts(updateArray)
console.log(products)
}

const handleSold=(index) => {
  const updatedArray = products.map((item,i)=> i===index ? {...item, sold: !item.sold} : item )
  setProducts(updatedArray)
}
  return (
    <div className="App">
      <Header/>
      <Result handleSold={handleSold} handleDelete={handleDelete} product={products}/> 
    </div>
  );
}

export default App;
