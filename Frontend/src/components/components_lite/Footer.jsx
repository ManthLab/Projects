
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <p>&copy; 2025 Job Portal. All rights reserved.</p>
        </div>

        <div className="text-center">
          <p>
            Developed by{" "}
            <a
              href="https://github.com/ManthLab"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
            >
              Manthan Pawar
            </a>
          </p>
        </div>

        <div className="text-center md:text-right">
          <a href="/privacy-policy" className="hover:underline mr-4">
            Privacy Policy
          </a>
        </div>
        <div className="text-center md:text-right">
          <a href="/TermsofService" className="hover:underline">
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;





















// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         {/*Generate a footer for the current page*/}
//         <div>
//         <p>�� 2023 Job Portal. All rights reserved.</p>
//         <p>Developed by <a href="https://github.com/Manthan & Malhar 2002">Mohit Sharma</a></p>
//         <p>Privacy Policy | Terms of Service</p>
//         </div>
//     </div>
//   )
// }

// export default Footer;