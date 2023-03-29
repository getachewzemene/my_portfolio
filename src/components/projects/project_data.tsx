import React from "react"



export interface IProject {
    name: string,
    description: string,
    details?: any,
    frameworks: Array<string>,
    link?: string,
}


const projects: Array<IProject> = [

    {
        name: "Smart Patientcare", 
        description: "A smart patient care and assistant system help patients and doctors to communicate and monitor patients remotely. It also helps doctors to monitor patients remotely and provide them with the best care possible. It also helps patients to monitor their health and get the best care possible.",
        details: <>I contributed to  <span className="text-teal-300"> Smart Patientcare and Assistance System </span> while worked as a Web and Flutter developer.
                    </>,
        frameworks: [ 'Flutter','ReactJS', 'Tensorflow',"Express" ],
                link: "https://github.com/getachewzemene/smart_patientcare_web/tree/master"
    },
    {
        name: "Early Warning System",
        description: `Early Warning and Early Action System is used to help the agriculture sector to predict weather and climate changes and take necessary actions to prevent any damage. It uses OpenWeatherMap API to get weather data and Syncfusion and Chart.js to visualize weather data.`,
        details: <>I contributed to Early Waring System as a Flutter developer. The project was developed using <span className="text-teal-300"> Flutter  </span>  for cross-platform application and<span className="text-teal-300"> Laravel along with front-end Tamplate  </span> for the web.</>,
        frameworks: [ 'Flutter', 'Laravel',"Syncfusion","Chart JS" ]
    },
    {
        name: "Facility Management System",
        description: "Facility Management System is a web application that helps facility managers to manage their facilities and employees. It was developed for Amhara Leadership Academy, Ethiopia.",
        details: <> I contributed as Web developer|RE and Designer. The project was developed using <span className="text-teal-300"> Django,</span> python web framework.</>,
        frameworks: [ 'Djanog', 'MySQL']
    },

    {
        name: "Irregular Sleep Tracker",
        description: "A web application that helps users to track their sleep patterns and get insights on their sleep quality. It is a personal project that I developed to learn more about Web development.",
        details: <>I developed this project when I was taking a full-stack development training held by  <span className="text-teal-200">Targeted Technology Institute</span> for 4 months.</>,
        frameworks: [ 'Node JS', 'MySQL', 'Javascript', 'Bootstrap'],
        link: "https://github.com/getachewzemene/irregular_sleep_tracking"
    },
    {
        name: "Knowledge Management System",
        description: "A web application that helps a company to manage its knowledge in the form of documents and articles. It also helps company employees to share their knowledge with other employees with in the organization.",
        details: <>I contributed as a web developer. I developed this system using <span className="text-teal-200">Express JS</span> and <span className ="text-teal-200">EJS</span> template engine</>,
        frameworks: [ 'Express JS', 'EJS', 'Sequlize', 'MySQL']
    },
  
]

export default projects