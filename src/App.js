import React from "react";
import Profile from "./Components/Profile/Profile";
import Pic from "./Assets/profilPhoto.jpg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const alertMyName = (name) => alert(name);
  return (
    <>
      <Navbar />
      <main>
        <Profile
          fullName="Saber Guirat"
          bio="Born August 12,1992,Tunisia"
          profession="Student"
          alertMyName={alertMyName}
        >
          {Pic}
        </Profile>
      </main>
      <Footer />
    </>
  );
}

export default App;
