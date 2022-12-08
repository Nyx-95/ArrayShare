
import './App.css';
import Header from "./Components/Header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/body';
import $ from "jquery"
import "./Fonts/Expose/Expose-Black.ttf";




function App() {

  $("changeTheme").on('click',function(){
    $('App').css('background-color','green');
});

  return (
    <div className="App">
      <Header/>
      <Body></Body>
    </div>
  );
}

export default App;
