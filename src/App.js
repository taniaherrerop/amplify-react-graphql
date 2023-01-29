 
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

// import Navbar from '';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './pages';
import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';

function App({ signOut }) {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //       <Route exact path='/' exact element={<Home />} />
    //       <Route path='/about' element={<About/>} />
    //       <Route path='/contact' element={<Contact/>} />
    //       <Route path='/blogs' element={<Blogs/>} />
    //       <Route path='/sign-up' element={<SignUp/>} />
    //   </Routes>
    //   <Button onClick={signOut}>Sign Out</Button>
    // </Router>

    <View className="App">
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <Heading level={1}>We now have Auth Tania!</Heading>
        <About></About>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);