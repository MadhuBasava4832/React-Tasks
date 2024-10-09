import './styling.css'
import { Header } from './header'
import { Extra1, Main1body } from './home1_body'
import { Left1, Left2, Left3, Left4 } from './block2/left'
import { Right1, Right2, Right3, Right4 } from './block2/right'
export const Main1 = () => {
    return (
        <div className='forb'>
            <div className="first1">
                <div className="subdiv1">
                    {/* <Header /> */}
                </div>
                <div className="subdiv2">
                    <Main1body />
                </div>
                <div className="block2" style={{ borderTop: '8px solid grey' }}>
                    <div className="leftdiv" ><Left1 /></div>
                    <div className="leftdiv"  ><Right1 /></div>
                </div>
                <div className="block2">
                    <div className="leftdiv" ><Right2 /></div>
                    <div className="leftdiv"  ><Left2 /></div>
                </div>
                <div className="block2">
                    <div className="leftdiv" ><Left3 /></div>
                    <div className="leftdiv"  ><Right3 /></div>
                </div>
                <div className="block2">
                    <div className="leftdiv" ><Right4 /></div>
                    <div className="leftdiv"  ><Left4 /></div>
                </div>
                <div className="ques">
                    <h2 style={{fontSize:'3.2rem' }}>Frequently Asked Questions</h2>
                    <Extra1/>


                    {/* <h2> Ready to watch? Enter your email to create or restart your membership. </h2> */}
                </div>
            </div>
        </div>
    )
}
