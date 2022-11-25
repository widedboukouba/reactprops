
import './App.css';
import {FullName} from './profil/component/FullName';
import {Profission} from './profil/component/Profission';
import Image from './profil/component/Image';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1 style={{color:"#a12929",textDecoration:"underline",textAlign:"center"}}>Profil:</h1>
    <></>
      <FullName name={"WIDAD"} lastName={"BOUKOUBA"}/>
      
      <Profission profi={"Full Stack Web Developer"}/>

      <Image>
      <img src={"https://media-exp1.licdn.com/dms/image/C4D03AQFFBJNHNGZZBg/profile-displayphoto-shrink_800_800/0/1663409858916?e=1674691200&v=beta&t=c0EJ19IM8c8NelkRWbDCUD6RzBXHi89AeTzlWNyugSA"}  alt="myimage" className='Me' style={{width:'30%',borderRadius:'50%',paddingTop:'10px'}}/>
      </Image>
      
      </header>
    </div>
  );
}

export default App;
