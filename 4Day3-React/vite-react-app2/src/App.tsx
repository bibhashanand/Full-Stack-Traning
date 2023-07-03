import ListGroup from "./component/ListGroup";
import Navbar from "./component/navbar";

function App()
{ 
  let items =[
    'Delhi',
    'Noida',
    'Ghaziabad',
    'Banglore',
    'Mumbai',
    'Patna',
    'Haryana',
    'Pune',
    'Prayagraj',
    'Bhuvneshwar'
];

  return(
    <div>
      <Navbar/>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}
export default App;