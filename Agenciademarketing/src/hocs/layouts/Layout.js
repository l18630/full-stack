// es necesario hacer una conexion con redux mediante connect

import { connect } from "react-redux"
//import {motion} from 'framer-motion'

function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

//function llama a las variables que esta en redux
const mapStateToProps = state => ({

})

// necesario exportar las funciones de redux
export default connect(mapStateToProps,{

}) (Layout)