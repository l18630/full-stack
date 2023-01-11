import { connect } from "react-redux"
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
//import loading_dots from 'assets/img/loading-dots.gif'
import logo_boomslag from 'assets/img/boomslag-black.png'
//import loading_fork from 'assets/img/loading-fork.gif'
import { DotLoader } from "react-spinners"
//import PacmanLoader from "react-spinners/PacmanLoader"

function Navbar() {

    // Loading icon
    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)
    
    return (
        <nav id="navbar" className='w-full py-6 top-0 transition duration-300 eas z-40 fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img src={logo_boomslag} width={180} height={90} className="" />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">

                    
                       <button
                            to="/contacto"
                            className="ml-12 inline-flex items-center rounded-md border border-transparent bg-yellow-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-button focus:ring-offset-2"
                        >
                            Join us!
                            <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color='#ffffff' />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = states => ({

})

export default connect(mapStateToProps, {

})(Navbar)