import React from "react";
import ToDo from "./components/ToDo";
import img1 from "./images/f3.png"
import img2 from "./images/f4.png"
import img3 from "./images/f5.png"
import "./App.css"
function App() {
  return (
    <div class = "osnov_div">
      <h1 class = "h22">То что вам необходимо</h1>
      <div class = "ToDo_info">
        <ToDo title = 'Первый блок' img = {img1} text = {'текст тут текст тут текст тут текст тут'} class="block"/>
        <ToDo title = 'Второй блок' img = {img2} text = {'текст тут текст тут текст тут текст тут'} class="block"/>
        <ToDo title = 'Третий блок' img = {img3} text = {'текст тут текст тут текст тут текст тут'} class="block"/>
      </div>
    </div>
  );
}

export default App;
