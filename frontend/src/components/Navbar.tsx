import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <>
       <div className="">
         <div className="sm:px-5 w-auto h-15 flex items-center justify-between px-2 py-1 shadow-lg z-10">
            <h1 className=" font-mono font-bold text-2xl"><span className="text-blue-500">mode</span>Switch</h1>
            <div className="flex justify-between gap-x-2 text-md">
                <Link to="/tools">Tools</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blog</Link>
            </div>
        </div>
       </div>
    </>
  )
}
