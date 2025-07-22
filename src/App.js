import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import UserProfile from "./Components/UserProfile";

function App() {

  return (
    <div>
      <NavBar/>
      <div style={{display:'flex'}}></div>
      <SideBar/>
      <MainContent/>
      <UserProfile/>
    </div>
  );
}

export default App;
