import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <>
        <div className="w-auto h-15 flex justify-between px-2 py-1 shadow-xl z-10">
            <h1 className="text-blue-500 font-bold">YUUUUUUUU</h1>
            <div className="flex justify-between gap-x-2">
                <Link to="/tools">Tools</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    </>
  )
}
