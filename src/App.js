import './App.css';
import {Routes, Route} from "react-router-dom"
import {ProductEdit} from "./components/ProductEdit";
import {ProductView} from "./components/ProductView";
import {Main} from "./components/Main";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/product" element={<ProductView/>}/>
                <Route path="/product/edit" element={<ProductEdit/>}/>
            </Routes>
        </div>
    );
}

export default App;
