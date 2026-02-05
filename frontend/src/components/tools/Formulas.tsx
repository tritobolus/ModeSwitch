import { MAJOR_SCALE_FORMULA, MINOR_SCALE_FORMULA } from '@/assets/scale'

export const Formulas = () => {
  return (
    <div className='shadow-2xl rounded-2xl'>
         <div className="flex flex-col  justify-between">
        <div className="flex gap-x-2 items-center">
          <button className="bg-gray-200 px-2 py-1 rounded-lg">
            Major scale
          </button>
          <div className="flex gap-x-2">
            {MAJOR_SCALE_FORMULA.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button className="bg-gray-200 px-2 py-1 rounded-lg">
            Minor scale
          </button>
          <div className="flex gap-x-2">
            {MINOR_SCALE_FORMULA.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
