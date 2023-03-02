import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DynamicCmp } from "./dyn-cmp";


export function AppHeader() {
    const [type, setType] = useState(null)

    function handleClickScroll(cmp) {
        const element = document.getElementById('cmp');
        if (element) {
            // element.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start',
            //     inline: 'nearest',
            //     scrollMode: 'if-needed',
            //     scrollSnapType: 'y mandatory',
            //     scrollSnapDestination: '0% 100%',
            //     snapType: 'start'
            //   });
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setType(cmp)
    }



    return (
        <header className="app-header main-container">

            <div className="pages">

            <div className="btn-scroll" onClick={() => handleClickScroll('about')}>
                About
            </div>

            <div className="btn-scroll" onClick={() => handleClickScroll('project')}>
                Projects
            </div>

            {/* <DynamicCmp type={type} /> */}
            
            </div>
        </header>
    )
}