// import React, { useState, useEffect, createContext, useContext } from 'react';

// const isBrowser = typeof window !== 'undefined';

// // eslint-disable-next-line no-unused-vars
// const NavContext = createContext();

// export const useNav = () => {
//   const [isFixed, setIsFixed] = useContext(NavContext);
//   const handleScroll = (value) => setIsFixed(value);

//   useEffect(() => {
//     if (isBrowser) {
//       window.addEventListener('scroll', handleScroll);
//       if (window.scrollY === 0) {
//         handleScroll(false);
//       }
//       return () => window.removeEventListener('scroll', handleScroll);
//     }
//   }, [handleScroll]);

//   return [isFixed, setIsFixed];
// };

// // eslint-disable-next-line react/prop-types
// export const NavgationContext = ({ children }) => {
//   const [isFixed, setIsFixed] = useState(false);
//   return (
//     <NavContext.Provider value={(isFixed, setIsFixed)}>
//       {children}
//     </NavContext.Provider>
//   );
// };
