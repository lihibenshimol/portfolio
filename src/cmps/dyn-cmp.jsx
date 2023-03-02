import { About } from "./about"
import { Project } from "./project"

export function DynamicCmp({ type }) {

    function getNoteType(type) {
        switch (type) {
            case "about":
                return <About />

            case "project":
                return <Project />
        }
    }
    return (
        <section id="cmp" >
            {getNoteType(type)}
        </section>
    )
}