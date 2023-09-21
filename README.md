# Portfolio Website

Welcome to my portfolio website! This project showcases my skills and projects. It was built using Next.js, Tailwind CSS, Supabase, Sanity, and Framer Motion.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Learn More](#learn-more)

## Technologies Used

This portfolio website is built using a stack of modern web development technologies and tools:

### Next.js

[Next.js](https://nextjs.org/) is a powerful React framework used for building modern web applications. It provides features like server-side rendering, routing, and code splitting out of the box, making it an excellent choice for creating fast and scalable websites.

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that allows for rapid UI development. It simplifies styling by providing a set of predefined utility classes that you can apply directly to my HTML elements.

### Supabase

[Supabase](https://supabase.io/) is an open-source alternative to Firebase, providing a suite of tools for building serverless applications. It offers features like database storage, authentication, and serverless functions, all of which can be leveraged to create dynamic web applications.

### Sanity

[Sanity](https://www.sanity.io/) is a headless Content Management System (CMS) that empowered me to manage and deliver content to my website. It offers a flexible and customizable content model, making it easy to add, edit, and organize content for my projects and blog posts.

These technologies, when combined, enable the creation of a visually appealing and functionally robust portfolio website that showcases my skills and projects effectively.

## Getting started

To run the development server locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.
3. Install dependencies using npm, yarn, or pnpm:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install

   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Your development server should now be running at http://localhost:3000. Open this URL in your web browser to see the website in action.

## Environment Variables

This portfolio website uses environment variables to manage sensitive information and configuration settings. To set up the necessary environment variables, follow these steps:

1. Create a `.env.local` file in the root directory of your project.

2. Define the following environment variables in the `.env.local` file:

   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
   ```

## Features

This portfolio website offers a range of features designed to make my online presence stand out and provide an exceptional user experience:

### Responsive Design

The website is fully responsive, ensuring that it looks and functions seamlessly on a variety of devices, including desktops, tablets, and mobile phones.

### Project Showcase

Showcase my work and portfolio with style. Utilize project cards and detailed project pages to provide visitors with in-depth information about my projects.

### Interactive Components

Engage users with interactive elements, such as animations, forms, and dynamic content. These interactive features captivate visitors and provide an immersive experience.

### Content Management

Easily update and manage content, including projects and blog posts, through Sanity CMS. The headless CMS empowers me to deliver content to my website efficiently.

### Serverless Backend

Leverage Supabase for database storage, authentication, and serverless functions. This serverless backend solution ensures scalability and security for my web applications.

### SEO Optimization

The website is optimized for search engines, helping my content rank well on platforms like Google and Bing. Gain visibility and attract more visitors to my portfolio.

### User-Friendly Navigation

Intuitive navigation ensures that visitors can explore my portfolio with ease, finding the information they're looking for quickly and efficiently.

These features, combined with the technologies used in this project, create a dynamic and visually appealing portfolio website that effectively showcases my skills and projects.

## Learn More

To further understand the technologies used in this project and learn how to customize this website for your own portfolio, explore the following resources:

### Next.js Documentation

- [Next.js Documentation](https://nextjs.org/docs): Dive into the official Next.js documentation to explore its features, API, and best practices. Learn how to build dynamic web applications using this powerful React framework.

### Tailwind CSS Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Explore the comprehensive documentation of Tailwind CSS to understand how to style your web components with utility classes efficiently.

### Supabase Documentation

- [Supabase Documentation](https://supabase.io/docs): Discover the capabilities of Supabase by reading its documentation. Learn how to set up serverless functions, manage authentication, and utilize the database for your web applications.

### Sanity Documentation

- [Sanity Documentation](https://www.sanity.io/docs): Familiarize yourself with Sanity, the headless CMS used in this project. The documentation provides insights into content modeling, querying data, and customization options.

By exploring these resources, you'll gain the knowledge and insights needed to make this portfolio website your own. Whether it's adjusting styling, adding new content, or extending functionality, these guides will help you achieve your goals.

## Contributing

👋 Thank you for considering contributing to this portfolio website project! Your contributions are greatly appreciated, and they can help make this project even better.

Here's how you can get involved and contribute:

1. **Reporting Issues**: If you find any issues or have suggestions for improvements, please [open an issue](https://github.com/dhrub1999/Portfolio-New) so that I can track and address them together.

2. **Submitting Pull Requests**: If you have a fix or feature you'd like to contribute, consider submitting a pull request. Follow these steps:

   - Fork the repository to your own GitHub account.
   - Clone the repository to your local machine.
   - Create a new branch for your feature or bug fix.
   - Make your changes and commit them with descriptive commit messages.
   - Push your changes to your forked repository.
   - Submit a pull request to the main repository, explaining the changes and improvements you've made.

3. **Providing Feedback**: Feel free to share your feedback or suggestions for enhancements. I'm open to ideas that can enhance the functionality and user experience of this portfolio website.

4. **Testing and Documentation**: Help test the website's functionality and contribute to documentation improvements. Your insights can be invaluable in ensuring a smooth user experience.

Remember to be respectful and considerate of others when contributing. I welcome contributors of all experience levels, and I'm here to help if you have any questions or need guidance.

Let's work together to make this portfolio website an outstanding showcase of skills and creativity! 🚀
