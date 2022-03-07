import { Link } from "react-router-dom"
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs";

const Homepage = () => {
    return(
        <div className="App min-h-screen">
            <div className="bg-sky-700">
                <div className="container mx-auto">
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-2 text-4xl py-2 text-white'>Compero</div>
                        <div className='col-end-13 col-span-4 flex items-center'>
                            <ul>
                                <li className='inline p-2 text-slate-300'> <Link to="/">For Client</Link></li>
                                <li className='inline p-2 text-slate-300'> <Link to="/">For Company</Link></li>
                                <li className='inline p-2 text-slate-300'> <Link to="/">Contact</Link></li>
                                <li className='inline p-2 text-slate-300'> <Link to="/">Support</Link></li>
                                <li className='inline p-2 text-slate-300'> <Link to="/">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sky-800">
                <div className="container mx-auto">
                    <ul className="flex items-center">
                        <li className='inline p-2'><Link to="/">cleaning</Link></li>
                        <li className='inline p-2'><Link to="/">relocation</Link></li>
                        <li className='inline p-2'><Link to="/">painter</Link></li>
                        <li className='inline p-2'><Link to="/">photographer</Link></li>
                        <li className='inline p-2'><Link to="/">Real estate sale</Link></li>
                        <li className='inline p-2'><Link to="/">catering</Link></li>
                        <li className='inline p-2'><Link to="/">used cars</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bg-content-1 pt-150 pl-100">
                <div className="w-2/5 bg-white">
                    <div className="text-2xl text-center py-2 bg-sky-800 text-white">
                        Get free quotes for cleaning
                    </div>
                    <div>
                        <div className="text-center py-2 text-sky-800 font-bold text-xl">Where do you need cleaning</div>
                        <div className="text-lg flex">
                            <div className="w-1/6 py-3 bg-gray-300 m-2 min-w-min inline"><BsBuilding className="text-4xl"/>Apartment</div>
                            <div className="w-1/6 py-3 bg-gray-300 m-2 min-w-min inline"><BsHouseFill className="text-4xl"/>House</div>
                            <div className="w-1/6 py-3 bg-gray-300 m-2 min-w-min inline"><BsFileEarmarkText className="text-4xl"/>Office</div>
                            <div className="w-1/6 py-3 bg-gray-300 m-2 min-w-min inline"><BsQuestionLg className="text-4xl"/>Miscellaneous</div>
                        </div>
                        <div className="text-center">
                            <button className="text-white bg-green-500 p-2 text-lg my-3 rounded">Further</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage