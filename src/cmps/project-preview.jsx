import AppSus from '../assests/img/projects/AppSus.mp4'

export function ProjectPreview({ projects }) {

    function getProjVid(projName) {
        switch (projName) {
            case "AppSus":
                return AppSus

            case "test":
                return AppSus
        }
    }


    return (
        <>
            {projects?.map(proj => <div className='proj-preview animate__animated animate__fadeInUp' key={proj.name}>

                <a href={proj.web} target="_blank">
                <video autoPlay className='video' src={proj.vid}></video>
                </a>

                <article>
                    <h1>{proj.name}</h1>
                    <h2>{proj.subTitle}</h2>
                    <p>{proj.desc}</p>
                </article>


            </div>
            )
            }
        </>
    )
}