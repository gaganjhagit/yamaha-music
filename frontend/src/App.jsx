
import Layout from "./component/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App =()=>{
return(
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Layout/>}>
        
        </Route>
      </Routes>
      </BrowserRouter>
    <Layout/>
  </>
)
}


export default App;
