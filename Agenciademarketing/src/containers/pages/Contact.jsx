/*import BlogList from "components/Contact/BlogList"
import CTA from "components/Contact/CTA"
import Features from "components/Contact/Features"
import Header from "components/Contact/Header"
import Incentives from "components/Contact/Incentives"
import LogoCloud from "components/Contact/LogoCloud"
import UseCases from "components/Contact/UseCases"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Scroll from "components/SmoothScrollbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"


function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Contact */

import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Contact() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Contact
            </div>
            <Footer />
        </Layout>
    )
}

export default Contact