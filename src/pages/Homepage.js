import { useState } from "react"
import { Link } from "react-router-dom"
import { BsBuilding , BsHouseFill , BsFileEarmarkText , BsQuestionLg } from "react-icons/bs";

const Homepage = () => {
    const [activeflag , setActiveflag ] = useState(1);
    return(
        <div className="App min-h-screen">
            <div className="bg-sky-700">
                <div className="container mx-auto">
                    <div className='grid grid-cols-12 gap-4 py-2'>
                        <div className='col-span-2 text-4xl py-2 text-white'><Link to="/">Compero</Link></div>
                        <div className='col-end-13 col-span-4 flex items-center'>
                            <ul>
                                <li className='inline p-2 text-slate-400 hover:text-white'> <Link to="/">For Client</Link></li>
                                <li className='inline p-2 text-slate-400 hover:text-white'> <Link to="/">For Company</Link></li>
                                <li className='inline p-2 text-slate-400 hover:text-white'> <Link to="/">Contact</Link></li>
                                <li className='inline p-2 text-slate-400 hover:text-white'> <Link to="/">Support</Link></li>
                                <li className='inline p-2 text-lime-400 hover:text-orange-500'> <Link to="/">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sky-800">
                <div className="container mx-auto">
                    <ul className="flex min-h-14 flex-wrap text-white">
                        {/* <li className="inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500" id="dropdownNavbarLink" data-dropdown-toggle="alldropcontent"><Link to="/">33</Link></li>
                        <div id="alldropcontent" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            sss
                        </div> */}
                        <li className={activeflag===1?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(1)}><Link to="/">cleaning</Link></li>
                        <li className={activeflag===2?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(2)}><Link to="/">relocation</Link></li>
                        <li className={activeflag===3?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(3)}><Link to="/">painter</Link></li>
                        <li className={activeflag===4?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(4)}><Link to="/">photographer</Link></li>
                        <li className={activeflag===5?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(5)}><Link to="/">Real estate sale</Link></li>
                        <li className={activeflag===6?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(6)}><Link to="/">catering</Link></li>
                        <li className={activeflag===7?"inline p-3 pt-4 border-b-4 border-lime-500 mb-0 text-lime-500":"inline p-3 pt-4 border-b-4 border-sky-800 hover:bg-lime-500 hover:border-lime-500"} onClick={()=>setActiveflag(7)}><Link to="/">used cars</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bg-content-1 pt-150">
                <div className="w-600 bg-white text-center mx-200 ">
                    <div className="text-2xl py-2 bg-sky-800 text-white">
                        Get free quotes for cleaning
                    </div>
                    <div>
                        <div className="mt-4 py-4 text-sky-800 font-bold text-xl">Where do you need cleaning</div>
                        <div className="text-lg inline-flex py-4 text-sky-800">
                            <div className="w-24 h-24 py-4 bg-gray-300 m-4 hover:text-orange-500 hover:bg-orange-200 hover:cursor-pointer"><BsBuilding className="text-4xl mx-auto"/>Apartment</div>
                            <div className="w-24 h-24 py-4 bg-gray-300 m-4 hover:text-orange-500 hover:bg-orange-200 hover:cursor-pointer"><BsHouseFill className="text-4xl mx-auto"/>House</div>
                            <div className="w-24 h-24 py-4 bg-gray-300 m-4 hover:text-orange-500 hover:bg-orange-200 hover:cursor-pointer"><BsFileEarmarkText className="text-4xl mx-auto"/>Office</div>
                            <div className="w-24 h-24 py-4 bg-gray-300 m-4 hover:text-orange-500 hover:bg-orange-200 hover:cursor-pointer"><BsQuestionLg className="text-4xl mx-auto"/>Miscellaneous</div>
                        </div>
                        <div className="py-4">
                            <button className="text-white bg-green-500 p-2 text-lg my-3 rounded">Further</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage