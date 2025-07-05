// import logo from '../assets/logo/logo.svg'

// export default function DevKrishLogo() {
//   return (
//     <div className="flex items-center gap-2 text-3xl font-bold select-none">
//       {/* Symbol Logo */}
//       <div className="relative w-10 h-10 flex items-center justify-center text-[#4fc3f7]">
//         {/* <span className="absolute -left-2 text-4xl font-mono rotate-[-15deg]">⊃</span>
//         <span className="absolute left-[0.2rem] top-1 text-3xl rotate-[10deg] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">{'<'}</span>
//         <span className="absolute bottom-1 right-1 text-2xl text-gray-700 dark:text-gray-300">.</span> */}

//         <img src="logo" alt="" />
//       </div>

//       {/* Brand Name */}
//       <span className="text-gray-900 dark:text-white tracking-wide">
//         Dev<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Krish</span>
//       </span>
//     </div>
//   );
// }


// import React from 'react';
import LogoSvg from '../../assets/logo/logo.svg?react';


export default function DevKrishLogo() {
  return (
    <div className="flex items-center gap-3 select-none text-3xl font-bold leading-none">
      {/* Icon box */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 via-purple-600 to-blue-800 shadow-md">
        <LogoSvg className="w-7 h-7 text-white" />
      </div>

      {/* Brand Text */}
      <span className="text-gray-900 dark:text-white tracking-wide">
        Dev<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Krish</span>
      </span>
    </div>
  );
}
