// ;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import LandingPage from './components/LandingPage';

// import Career from './components/Careers';
// import Traffic from './components/Traffics';
// import Policys from './components/Policy';
// import Media from './components/Media';
// import Contacts from './components/Contacts';
// import Multimodel from './pages/Multimodel';
// import TerminalManagement from './pages/TerminalManagement';
// import CustomClearance from './pages/CustomClearance';
// import Warehousing from './pages/Warehousing';
// import AboutDetails from './components/AboutDetails';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsAndCondition from './pages/TermsAndCondition';
// import ServiceSection from './components/Services';
// import MainOverview from './components/MainOverview';
// import Services from './pages/Services';
// import OurFacilities from './pages/OurFacality';
// import MainOverviews from './components/MainOverview';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<LandingPage />} /> 
//         <Route path = "/services" element={<Services/>}/>
//         <Route path="/traffic-overview" element={<Traffic/>}/>
//         <Route path="/careers" element={<Career/>} /> 
//         <Route path="/environmental-policy" element={<Policys/>} /> 
//         <Route path="/media-releases" element={<Media/>} /> 
//         <Route path="/contact-us" element={<Contacts/>} />
//         <Route path="/multi-model-transportation" element={ <Multimodel/>}/>
//         <Route path="/terminal-management" element={<TerminalManagement/>}/>
//         <Route path="/custom-clearance" element={<CustomClearance/>}/>
//         <Route path="/Warehouse" element={<Warehousing/>}/>
//         <Route path="/about" element={<AboutDetails/>}/>
//         <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
//         <Route path="/terms-&-condition" element={<TermsAndCondition/>}/>
//         <Route path="/overview" element={<MainOverview/>}/>
//         <Route path="/facility" element= {<OurFacilities/>}/>
//         <Route path="/vision-mission-value" element= {<MainOverviews/>}/>
//       </Routes>
     
      
//     </Router>
    
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Career from './components/Careers';
import Traffic from './components/Traffics';
import Policys from './components/Policy';
import Media from './components/Media';
import Contacts from './components/Contacts';

import TerminalManagement from './pages/TerminalManagement';
import CustomClearance from './pages/CustomClearance';
import Warehousing from './pages/Warehousing';
import AboutDetails from './components/AboutDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import ServiceSection from './components/Services';
import MainOverview from './components/MainOverview';
import Services from './pages/Services';
import OurFacilities from './pages/OurFacality';
import MainOverviews from './components/MainOverview';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import MultimodelTransport from './pages/MultiModel';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/tariffs-overview" element={<Traffic />} />
        <Route path="/careers" element={<Career />} /> 
        <Route path="/environmental-policy" element={<Policys />} /> 
        <Route path="/blogs" element={<Media />} /> 
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/multi-modal-transportation" element={<MultimodelTransport />} />
        <Route path="/terminal-management" element={<TerminalManagement />} />
        <Route path="/custom-clearance-" element={<CustomClearance />} />
        <Route path="/Warehouse" element={<Warehousing />} />
        <Route path="/about" element={<AboutDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-&-condition" element={<TermsAndCondition />} />
        <Route path="/overview" element={<MainOverview />} />
        <Route path="/facility" element={<OurFacilities />} />
        <Route path="/vision-mission-value" element={<MainOverviews />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
      </Routes>
      <ScrollToTop /> {/* Include the ScrollToTop button */}
    </Router>
  );
}

export default App;
