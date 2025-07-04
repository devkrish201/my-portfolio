// import { Link, useLocation } from "react-router-dom"
// import { ChevronRight } from "lucide-react"

// export default function AutoBreadcrumb() {
//   const location = useLocation()
//   const pathnames = location.pathname.split("/").filter((x) => x)

//   return (
//     <nav className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm">
//       <Link
//         to="/"
//         className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
//       >
//         Home
//       </Link>

//       {pathnames.map((segment, index) => {
//         const to = "/" + pathnames.slice(0, index + 1).join("/")
//         const isLast = index === pathnames.length - 1

//         return (
//           <div key={to} className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
//             <ChevronRight className="mx-2 h-4 w-4 text-gray-400 dark:text-gray-500" />
//             {isLast ? (
//               <span className="text-gray-900 dark:text-white capitalize">{segment}</span>
//             ) : (
//               <Link
//                 to={to}
//                 className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
//               >
//                 {segment}
//               </Link>
//             )}
//           </div>
//         )
//       })}
//     </nav>
//   )
// }


import { Link, useLocation } from "react-router-dom"
import { Home } from "lucide-react"

function formatSegment(segment: string) {
    return segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function AutoBreadcrumb() {
    const location = useLocation()
    const pathnames = location.pathname.split("/").filter((x) => x)

    const title = pathnames.length === 0 ? "Home" : formatSegment(pathnames[pathnames.length - 1])

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 sm:p-8  shadow-sm mt-10 transition-colors">
            <div className=" mx-auto">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>

                {/* Breadcrumb */}
                <nav className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-2">
                    <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>

                    {pathnames.map((segment, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`
                        const isLast = index === pathnames.length - 1

                        return (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-gray-400">›</span>
                                {isLast ? (
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        {formatSegment(segment)}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {formatSegment(segment)}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
