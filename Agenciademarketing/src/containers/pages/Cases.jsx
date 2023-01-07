import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Cases() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header/>
                <CasesList/>
            </div>
            <Footer />
        </Layout>
    )
}

export default Cases