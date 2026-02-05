import { Link, Outlet,  useLocation } from "react-router-dom"
export const Tools = () => {
    const location = useLocation();
      const isToolsHome = location.pathname === "/tools";
  return (
     <>
     {isToolsHome && (
        
        <div className="grid grid-cols-3 gap-x-20 justify-center items-center">
            <Link to={"chord-conversion"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Chord Conversion</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
            <Link to={"capo-chord-converter"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Capo Chord Converter</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
               <Link to={"group-chords"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Find Group Chords</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
            <Link to={"tuner"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Tuner</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
            <Link to={"metronome"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Metronome</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
         
            <Link to={"metronome"} className=' h-50 w-60 flex flex-col gap-y-5 justify-between rounded-2xl bg-gray-100 shadow-xl p-5 hover:cursor-pointer hover:scale-103 duration-200 transition-all hover:shadow-2xl'>
                <h2 className='text-3xl font-bold text-blue-500 '>Chord Library</h2>
                <p className=""> Having problem with group chords whiel changing scale ? here is your solution </p>
            </Link>
        </div>
     )}

     <Outlet />
    </>
  )
}
