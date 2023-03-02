import AppSus from '../assests/img/projects/AppSus.mp4'
import Trellofy from '../assests/img/projects/trellofy.mp4'
import icon from '../assests/img/icon.png';
import { ProjectPreview } from './project-preview';


export function Project() {

    const projects = [
        {
            name: 'Trellofy',
            subTitle: 'A React JS-based app that is designed to mimic the popular project management tool Trello.',
            desc: `
            The app has been built using NodeJS, rest APIs and MongoDB as the database.
            Trellofy allows users to create boards, lists, and cards, and add members to these cards.
            Users can also move cards between lists, and add labels, due dates, and descriptions to cards. 
            The app supports drag-and-drop functionality, making it easy for users to move cards and lists around and also includes a filter feature which allows users to filter cards by team members.
            In addition to its filter feature, Trellofy also utilizes sockets to provide real-time updates to users. Sockets allow for seamless communication between the app and its users, ensuring that everyone is always up-to-date on the latest changes to boards and cards.
            Additionally, Trellofy includes a media player that can be embedded into boards, allowing teams to play their favorite music during work.
            The app has been designed with a clean and modern user interface, making it easy for users to navigate and use. The app's responsive design also ensures that it looks great on all devices, including desktops, tablets, and mobile phones.
            Overall, Trellofy is a powerful project management tool that can help teams collaborate more efficiently and stay organized.`,
            web: 'https://trellofy.onrender.com/',
            vid: Trellofy
        },
        {
            name: 'AppSus',
            subTitle: 'A versatile app built using ReactJS, NodeJS, SCSS, and MongoDB, that offers Google app clones for Keep and Gmail, as well as a book management app.',
            desc: `Appsus is a powerful app that offers an all-in-one solution for managing your digital life.
            One of the standout features of Appsus is its ability to clone popular Google apps like Keep and Gmail. With Appsus, you can access all your notes and emails in one place, making it easier to stay organized and productive. The app offers a clean and intuitive interface, allowing you to navigate between different sections seamlessly.
            Apart from the Google app clones, Appsus also includes a book management app, which allows you to keep track of your reading list and manage your library with ease. You can add books to your reading list, categorize them, and even set reminders for when you want to start or finish reading them. This feature is especially useful for avid readers who want to keep their reading goals on track.
            
            With Appsus, you can also customize the app's appearance and functionality to your liking. The app has a range of themes and settings that you can tweak to suit your preferences, making it a truly personalized experience.
            
            In summary, Appsus is a versatile app that combines the functionality of multiple apps in one place, making it the ultimate productivity tool. Its use of modern technologies like ReactJS, NodeJS, SCSS, and MongoDB ensures that it is fast, secure, and reliable, while its intuitive interface and customization options make it a joy to use.`,
            web: 'https://aviadmalikan.github.io/AppSUS/#/',
            vid: AppSus
        },

        {
            name: 'test',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusan',
            img: [icon]
        },

    ]

    return (
        <>
            <div id="projects" className="projects main-container">

                <div className='project-list'>
                    <ProjectPreview projects={projects} />
                </div>



            </div>

        </>
    )

}