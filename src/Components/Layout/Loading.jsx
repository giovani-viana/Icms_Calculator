import '../../Styles/Loading.css'

import loading from '../../Imagens/Load.svg'

function Loading(){
    return(
        <div className="loader_container">
            <img src={loading} alt="Loading" />
        </div>
    )
}

export default Loading