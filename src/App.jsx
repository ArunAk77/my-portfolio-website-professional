import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      {/* Add basename here */}
      <Router basename="/my-portfolio-website-professional">
        <Navbar />
        <Content />
      </Router>
    </main>
  );
};

const Content = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* Define the Home route */}
        <Route path="/" element={<Home />} />

        {/* Define specific routes for About, Projects, and Contact */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all route to redirect to Home */}
        <Route
          path="*"
          element={
            <Home />
          }
        />
      </Routes>

      {/* Show Footer only on About, Projects, and Contact pages */}
      {["/about", "/projects", "/contact"].includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;




// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { Footer, Navbar } from "./components";
// import { About, Contact, Home, Projects } from "./pages";

// const App = () => {
//   return (
//     <main className='bg-slate-300/20'>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route
//             path='/*'
//             element={
//               <>
//                 <Routes>
//                   <Route path='/about' element={<About />} />
//                   <Route path='/projects' element={<Projects />} />
//                   <Route path='/contact' element={<Contact />} />
//                 </Routes>
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

// export default App;
