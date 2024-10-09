import Feature1 from '../../assets/images/feature-1.png'
import Feature2 from '../../assets/images/feature-2.png'
import Feature3 from '../../assets/images/feature-3.png'
import Feature4 from '../../assets/images/feature-4.png'

export const Right1 = () => {
    const Styling3={
        bg:{
            width:'500px',
            // height:'300px',
        }
    }
    return(
        <>
        <div style={Styling3.bg}>
            <img src={Feature1} alt="" style={{width:'100%'}} />
        </div>
        </>
    )
}
export const Right2 = () => {
    return(
        <div style={{width:'500px'}}>
            <img src={Feature2} alt="" style={{width:'100%'}} />
        </div>
    )
}
export const Right3 = () => {
    return(
        <div style={{width:'500px'}}>
            <img src={Feature3} alt="" style={{width:'100%'}} />
        </div>
    )
}
export const Right4 = () => {
    return(
        <div style={{width:'500px'}}>
            <img src={Feature4} alt="" style={{width:'100%'}} />
        </div>
    )
}