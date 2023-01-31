import { useLocation } from "react-router-dom"

function CategoriesHeader({categories}){

    const location = useLocation()

    return(
        <div className="w-full bg-gray-100 py-8" >
            <div className="grid grid-cols-12">
            <div className="col-span-10">

            <div className="space-x-8 px-6">
            <div className="relative">
                <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                    <ul
                            
                            className="mx-4 inline-flex space-x-8 sm:mx-6"
            >

                <button 
                className={`${location.pathname === '/blog' ? "text-orange-500":"text-gray-900"} inline-flex flex-col text-center lg:w-auto py-2 px-6 bg-white text-gray-900 rounded-md text-lg font-regular`}>
                    All
                </button>
                {
                categories&&categories.map(category=>(
                    <>
                    category
                    </>

                ))
                }
                        </ul>
                    </div>
                </div>   
            </div> 
            </div>
            <div className="col-span-2">
                Search
            </div>
        </div>
        </div>

    )
}
export default CategoriesHeader