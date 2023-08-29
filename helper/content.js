export const navLinks = ['Home', 'Projects', 'About', 'Blog'];
export const homeContainer = {
  'special-text': 'Your vision, my Expertise.',
  title: 'Elevate your online presence Today!',
  info: 'Crafting digital masterpieces with expert precision where imagination meets excellence.',
};

export const projects = [
  {
    id: 1,
    name: 'Safari - Plan your perfect stay',
    link: 'https://safari-shellfishdeveloper.onrender.com',
    repo: 'https://github.com/dhrub1999/first-fullstack-project',
    img1: '/imgs/safari/safari-landing.png',
    img2: '',
    img3: '',
    industry: '',
    location: '',
    companyWebsite: '',
    languages: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'ExpressJS',
      'MongoDB',
      'Mongo Atlas',
      'NodeJS',
      'Cloudinary',
      'PassportJS',
      'Render',
      'Mapbox',
    ],
    description:
      'Safari is a full-stack web application designed to provide voyagers with a seamless experience in finding and exploring hotel destinations. The application allows users to search for hotels, view rates per night, read reviews, and even contribute their own reviews and star ratings. Safari aims to simplify the process of finding the perfect accommodation for travelers, ensuring they have a memorable and hassle-free stay.',
    problemStatement:
      'The travel industry is vast and ever-growing, with countless options for accommodation available to travelers. However, finding reliable information about hotels, including rates and reviews, can be a time-consuming and overwhelming task. Existing platforms often lack user-friendly interfaces and comprehensive features, making it difficult for users to make informed decisions. There is a need for a centralized platform that provides accurate and up-to-date information about hotel destinations, along with a seamless user experience.',
    languageUsed:
      "To develop Safari, I utilized ExpressJS, a popular web application framework for Node.js, as the backend technology. JavaScript was used for both frontend and backend development. MongoDB, a NoSQL database, was chosen to store and retrieve data efficiently. CSS & Bootstrap was employed for styling the application's user interface.",
    solution:
      'I developed Safari, a comprehensive web application that simplifies the process of finding and exploring hotel destinations. By leveraging ExpressJS, JavaScript, and MongoDB, I created a robust and scalable backend infrastructure. The frontend was designed using Bootstrap to provide an intuitive and visually appealing user interface.',
    features: {
      'Rate Per Night':
        'Safari displays the rate per night for each hotel/campground, allowing users to compare prices.',
      Reviews:
        'Users can access reviews from other travelers, providing valuable insights into the quality of campgrounds.',
      'User Authentication':
        'The login feature, implemented using passport.js, allows users to create accounts and log in and log out securely.',
      'User generated content':
        'Logged-in users can add, edit, or delete their thoughts and star ratings for hotels.',
      'Session tracking':
        'Cookies are used to track user sessions, ensuring a seamless and personalized experience.',
    },
    conclusion:
      'Safari successfully addresses the challenges faced by travelers in finding reliable hotel information. By leveraging ExpressJS, JavaScript, and MongoDB, the team created a powerful and scalable web application. The inclusion of user authentication, user-generated content, and session tracking enhances the overall user experience. Safari empowers voyagers to make informed decisions and explore hotel destinations with confidence.',
  },

  {
    id: 2,
    name: 'Expense Tracker',
    link: '',
    repo: 'https://github.com/dhrub1999/Expense_tracker',
    img1: '/imgs/expense-tracker/expense-tracker-1.png',
    img2: '',
    img3: '',
    industry: '',
    location: '',
    companyWebsite: '',
    languages: ['ReactJS', 'CSS'],
    description:
      'Expense Tracker is a user-friendly website designed to help individuals visualize and manage their expenses. Built using ReactJs, this project aims to provide a simple and intuitive platform for users to track their spending habits and make informed financial decisions.',
    problemStatement:
      'Many individuals struggle with keeping track of their expenses and understanding where their money is being spent. Traditional methods of expense tracking, such as manual record-keeping or using complex financial software, can be time-consuming and overwhelming. There is a need for a user-friendly solution that simplifies the process of expense tracking and provides clear visualizations to help users understand their spending patterns.',
    languageUsed:
      'The Expense Tracker project is developed using ReactJs, a popular JavaScript library for building user interfaces.',
    solution:
      'The Expense Tracker website provides a straightforward solution to the problem of expense tracking. By leveraging the power of ReactJs, the project offers a responsive and interactive user interface that is easy to navigate. The use of React hooks, specifically useState and useEffect, enables efficient state management and data fetching.',
    features: {
      'Expense Visualization':
        'The website provides users with clear visualizations with a bar chart of their expenses, allowing them to easily understand their spending patterns.',
      'Monthly Expense Tracking':
        'Users can add their expenses on a monthly basis, enabling them to track their spending habits over time. This feature allows for better budgeting and financial planning.',
      'User-friendly Design':
        'The website is designed with simplicity and ease of use in mind. The intuitive interface ensures that users can quickly navigate through the various features and understand their financial data without any confusion.',
    },
    conclusion:
      'The Expense Tracker project addresses the common problem of expense tracking by providing a user-friendly and visually appealing solution. By leveraging the power of ReactJs and utilizing React hooks, the project offers an efficient and intuitive platform for users to manage their expenses. With its simple design and comprehensive features, Expense Tracker empowers individuals to make informed financial decisions and gain control over their spending habits.',
  },

  {
    id: 3,
    name: 'Recipe Website',
    link: 'https://deliciousrecipe-tamalbiswas.netlify.app/',
    repo: '',
    img1: '/imgs/recipe/recipe-1.png',
    img2: '',
    img3: '',
    industry: '',
    location: '',
    companyWebsite: '',
    languages: ['ReactJS'],
    description:
      'Delicious Recipes is a website designed to provide users with a comprehensive collection of recipes from around the world. It aims to make it easy for users to search for and access recipes, while also providing important information such as nutritional values, ingredients, and preparation instructions.',
    problemStatement:
      'The problem that Delicious Recipes aims to solve is the difficulty users often face in finding specific recipes and accessing relevant information. With countless recipes available online, it can be overwhelming for users to search for a particular dish or find recipes that cater to their dietary preferences.',
    languageUsed:
      'Delicious Recipes is built using the React framework, a popular JavaScript library for building user interfaces. It leverages various plugins and libraries, including axios for retrieving data from the spoonacular API, styled components for styling, and useState, useEffect, and useReducer hooks for managing state and side effects.',
    solution:
      'The solution provided by Delicious Recipes is a user-friendly website that simplifies the recipe search process and provides comprehensive information. The website utilizes the React framework to create a responsive and interactive user interface. It integrates with the spoonacular API to fetch recipe data, including ingredients, preparation instructions, and nutritional values.',
    features: {
      'Search Bar':
        'The website features a search bar that allows users to search for specific recipes or ingredients, making it convenient to find what they want to eat.',
      'Recipe Carousel':
        'The website includes a dedicated carousel for vegetarian items, making it easy for users with specific dietary preferences to find suitable recipes.',
      'Nutritional Information':
        'Each recipe includes detailed nutritional information per serving, enabling users to make informed choices based on their dietary requirements',
      'Cuisine Section':
        'The website categorizes recipes by cuisine, making it simple for users to explore and discover dishes from different parts of the world.',
    },
    conclusion:
      'Delicious Recipes successfully addresses the problem of finding and accessing recipes by providing a user-friendly platform with comprehensive information. The use of the React framework and various plugins enhances the functionality and aesthetics of the website, ensuring a seamless user experience',
  },

  {
    id: 4,
    name: 'Responsive Restaurant Website',
    link: 'https://deliciousrecipe-tamalbiswas.netlify.app/',
    repo: 'https://github.com/dhrub1999/restaurentNew',
    img1: '/imgs/restaurant-website/hotel-1.png',
    img2: '/imgs/restaurant-website/hotel-menu.png',
    img3: '/imgs/restaurant-website/hotel-responsive.png',
    industry: '',
    location: '',
    companyWebsite: '',
    languages: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    description:
      'The restaurant website project is a fully responsive website built by me after learning HTML, CSS, Sass, and JavaScript from FreeCodeCamp.org. This project marks my first attempt at creating a responsive website.',
    problemStatement:
      'I had an aim to create a website for a restaurant that would provide an optimal user experience across various devices and screen sizes. The main challenge was to ensure that the website would adapt seamlessly to different devices, such as desktops, tablets, and mobile phones, while maintaining a consistent and visually appealing design.',
    languageUsed:
      "To accomplish this project, I utilized HTML, CSS, Sass, and JavaScript. HTML was used for structuring the website's content, CSS for styling and layout, Sass for enhanced CSS functionality, and JavaScript for interactivity and dynamic elements.",
    solution:
      "I began by planning the website's structure and layout, considering the different sections and pages required. I then implemented the design using HTML and CSS, ensuring that the website's elements were appropriately styled and positioned. To enhance the CSS functionality, Sass was employed, allowing for the use of variables, mixins, and nested rules.",
    features: {
      'User InterFace':
        "The website's design is visually appealing, with carefully chosen color schemes, typography, and imagery that reflect the restaurant's brand identity. The use of Sass allows for easy maintenance and scalability of the website's styles.",
    },
    conclusion:
      'In conclusion, I had successfully built a fully responsive restaurant website as my first project after learning HTML, CSS, Sass, and JavaScript. By utilizing these languages and incorporating interactive features, I was able to create a visually appealing and user-friendly website that adapts seamlessly to different devices. This project showcases my newfound skills and serves as a solid foundation for future web development endeavors.',
  },
];

export const codepenProjects = [
  {
    id: 1,
    title: 'AnimeJS Implemantation',
    link: 'https://codepen.io/tamal-biswas/pen/RwpJQgQ',
    gif: '/imgs/codepens/animejs.png',
    desc: 'Anime.js is a lightweight JavaScript animation library that allows developers to create smooth and powerful animations for web applications and websites.',
  },
  {
    id: 2,
    title: 'Glitch effect',
    link: 'https://codepen.io/tamal-biswas/pen/RwpJQgQ',
    gif: '/imgs/codepens/glitch-effect.png',
    desc: 'Experience the spooky allure of Halloween with my glitch effect image, that may add an eerie twist to your visuals. Get ready for a hauntingly captivating display!',
  },
  {
    id: 3,
    title: 'Interactive Mobile Menu',
    link: 'https://codepen.io/tamal-biswas/pen/RwqvMgg',
    gif: '/imgs/codepens/mobile-menu.png',
    desc: 'This is a mobile menu with icons and text. The menu items are highlighted with an indicator, and clicking on an item activates it.',
  },
  {
    id: 4,
    title: 'Random Password Generator',
    link: 'https://codepen.io/tamal-biswas/pen/RwpJQgQ',
    gif: '/imgs/codepens/random-passwords.png',
    desc: 'Introducing a powerful random password generator on CodePen! Create secure and unique passwords with just a click, ensuring your online accounts stay protected.',
  },
];

export const figmaDrafts = [
  {
    id: 1,
    title: 'Business Landing Page',
    imgSrc: 'imgs/ui-designs/business-landing-page.png',
  },
  {
    id: 2,
    title: 'Foodpanda Home Page',
    imgSrc: 'imgs/ui-designs/foodpanda-home.png',
  },
  {
    id: 3,
    title: 'Foodpanda Login Page',
    imgSrc: 'imgs/ui-designs/foodpanda-collections.png',
  },
  {
    id: 4,
    title: 'Portfolio Landing Page',
    imgSrc: 'imgs/ui-designs/portfolio-landing.png',
  },
  {
    id: 5,
    title: 'Money Tracking App Design',
    imgSrc: 'imgs/ui-designs/money-tracking.png',
  },
  {
    id: 6,
    title: 'Money Tracking App Design',
    imgSrc: 'imgs/ui-designs/money-tracking-home.png',
  },
  {
    id: 1,
    title: 'Business Landing Page',
    imgSrc: 'imgs/ui-designs/clash-of-clans.png',
  },
];

export const myBio = [
  {
    id: 1,
    title: 'About me',
    info: "Hey there! I'm Tamal Biswas, a self-taught Front-end Developer and UI Designer. I have a passion for creating beautiful and modern websites that not only captivate users but also provide seamless and immersive experiences. With my expertise in the latest technologies like ReactJS, NextJS, EJS, MongoDB, HTML, CSS, JS, and Node, I can bring your digital dreams to life.",
  },
  {
    id: 2,
    title: 'My journey',
    info: 'I embarked on my journey as a developer with a burning desire to learn and create. Armed with determination and an insatiable curiosity, I taught myself the intricacies of front-end development and UI design. Through countless hours of hands-on experience and continuous learning, I honed my skills to become a proficient and versatile developer.',
  },
  {
    id: 3,
    title: 'Technical expertise',
    info: 'As a front-end developer, I specialize in creating stunning user interfaces with a focus on seamless user experiences. I am well-versed in the latest tech stack, including ReactJS, NextJS, EJS, MongoDB, HTML, CSS, JS, and Node. These technologies enable me to build dynamic and interactive websites that engage users and leave a lasting impression.',
  },
  {
    id: 4,
    title: 'Passionate storyteller',
    info: 'What sets me apart from others is my ability to weave stories through my designs. I believe that a website is not just a collection of pages but a platform to tell a captivating story. By understanding your brand, target audience, and goals, I can create visually appealing designs that align with your narrative and evoke the desired emotions.',
  },
  {
    id: 5,
    title: 'Immersive UX',
    info: 'User experience is at the core of every project I undertake. I strive to create intuitive and user-friendly interfaces that enhance usability and engagement. By conducting thorough research and employing best practices, I ensure that every element of the website contributes to a seamless and immersive user experience.',
  },
  {
    id: 6,
    title: "Let's collaborate",
    info: "Whether you're a recruiter or a client, I am excited to collaborate with you and bring your vision to life. I am passionate about delivering high-quality work and building long-term relationships based on trust and mutual growth. Let's embark on a journey together and create exceptional digital experiences that leave a lasting impact.",
  },
];

export const bridgingSection = [
  {
    id: 1,
    title: 'Understanding your vision',
    desc: "I start by diving deep into your project's vision and objectives. Understanding your goals helps me align my expertise with your aspirations, ensuring we're on the same page from the beginning.",
  },
  {
    id: 2,
    title: 'Open communication',
    desc: 'Clear communication is key. Throughout the project, I maintain an open line of dialogue to ensure your ideas are heard and to keep you updated on the progress every step of the way.',
  },
  {
    id: 3,
    title: 'Tailoring your solution',
    desc: "No two projects are the same, and I recognize that. I'll customize my approach to suit your specific needs, ensuring that the solutions I provide align perfectly with your unique goals",
  },
  {
    id: 4,
    title: 'Transparency & Trust',
    desc: "Transparency is crucial to building trust. I'll keep you informed about the project's progress, potential challenges, and successes, giving you the confidence that we're working together toward success.",
  },
  {
    id: 5,
    title: 'Adapting to changes',
    desc: "I understand that your vision might evolve as the project progresses. I'm flexible and ready to adapt to any changes or revisions, ensuring that your project remains in sync with your evolving goals.",
  },
  {
    id: 6,
    title: 'Milestones & Updates',
    desc: "To keep you engaged and informed, I'll provide regular updates and milestones. This way, you can see the project taking shape and give valuable feedback at each stage.",
  },
  {
    id: 7,
    title: 'Ensuring top quality',
    desc: "Quality is non-negotiable. I'm committed to delivering a product that meets high standards. I'll rigorously test and refine the project to ensure it aligns perfectly with your expectations.",
  },
  {
    id: 8,
    title: 'Creative problem solving',
    desc: "Challenges are opportunities for creativity. If unexpected issues arise, I'll tackle them head-on, finding innovative solutions that maintain the integrity of the project.",
  },
  {
    id: 9,
    title: 'Paying attention to details',
    desc: 'The little things matter. From design elements to coding standards, I pay meticulous attention to details to ensure that every aspect of the project reflects your vision.',
  },
  {
    id: 10,
    title: 'Meeting timelines',
    desc: 'The little things matter. From design elements to coding standards, I pay meticulous attention to details to ensure that every aspect of the project reflects your vision.',
  },
  {
    id: 11,
    title: 'Support beyond launch',
    desc: "My commitment extends beyond project completion. Even after launch, I'll be here to offer ongoing support and assistance, ensuring a smooth transition and addressing any needs that arise.",
  },
  {
    id: 12,
    title: 'Involving you as a partner',
    desc: "Your input matters. I value your insights and involve you in key decisions, making you an active partner in the project's development journey.",
  },
  {
    id: 13,
    title: 'Budget-friendly approach',
    desc: 'I understand the importance of budget. My pricing structure is flexible and designed to fit your financial considerations, ensuring you get the most value from our collaboration.',
  },
];

export const faqSection = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'I offer comprehensive web development solutions, including website design, front-end development, e-commerce integration, content management systems, and ongoing maintenance.',
  },
  {
    id: 2,
    question: "What's the estimated timeline for completing a project.",
    answer:
      "Project timelines can vary depending on the complexity and scope. I'll work closely with you to outline a realistic timeline during the initial consultation.",
  },
  {
    id: 3,
    question: 'Do you provide ongoing support after the website is launched?',
    answer:
      'Absolutely. I believe in maintaining long-term partnerships. My post-launch support includes updates, security checks, troubleshooting, and any assistance you may need.',
  },
  {
    id: 4,
    question: 'How do you handle revisions and changes during the project?',
    answer:
      'We value your input. We provide a structured revision process, allowing you to review and request changes at specific milestones, ensuring your vision is captured accurately.',
  },
  {
    id: 5,
    question: 'Can you optimize my website for search engines (SEO)?',
    answer:
      "Absolutely. I implement best practices to enhance your website's visibility on search engines. This includes keyword optimization, meta tags, site structure, and more.",
  },
];

export const refinedBridges = [
  {
    id: 1,
    svgPath: '/svgs/target.svg',
    title: 'Requirement gathering',
    desc: "I'll understand your needs, ultimate goal, and project scope to set clear expectations.",
  },
  {
    id: 2,
    svgPath: '/svgs/list.svg',
    title: 'Planning and Timeline',
    desc: "Then I'll break tasks, set deadlines, and manage time efficiently.",
  },
  {
    id: 3,
    svgPath: '/svgs/design.svg',
    title: 'Design and Development',
    desc: "After that I'll create UI/UX, code the website, and iterate based on feedback.",
  },
  {
    id: 4,
    svgPath: '/svgs/optimize.svg',
    title: 'Identify and Optimize',
    desc: "Thereafter, I'll identify and fix bugs (if any), ensure speed, security, and cross-device functionality.",
  },
  {
    id: 5,
    svgPath: '/svgs/launch.svg',
    title: 'Delivery and Launch',
    desc: "Finally I'll deliver the website and offer post-launch support.",
  },
  {
    id: 6,
    svgPath: '/svgs/support.svg',
    title: 'Continuous support',
    desc: "I'll maintain communication, update the website, and will give you assistance for ongoing success.",
  },
];
