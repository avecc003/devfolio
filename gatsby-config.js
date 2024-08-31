module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.alejandrovecchio.dev`,
    // Your Name
    name: 'Alejandro Vecchio',
    // Main Site Title
    title: `Alejandro Vecchio | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Github account URL
    github: `https://github.com/avecc003`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alejandro-vecchio/`,
    // Optional: Email
    email: `alejandrovecchio01@gmail.com`,
    // Content of the About Me section
    about: `I'm a passionate full-stack developer skilled in both front and back-end web development. I thrive in a collaborative environment and thoroughly enjoy the process of optimizing software.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Cinemate Frontend',
        description:
          'Streaming service web application built with React and TailwindCSS. The user is able to bookmark and search for movies.',
        link: 'https://github.com/grammerjam/tg-main'
      },
      {
        name: 'Cinemate Backend',
        description:
          'Streaming service REST API built with Node.js, Express.js, and MongoDB with Prisma. The site implements content-based filtering to provide the user with a personalized recommended section.',
        link: 'https://github.com/grammerjam/team-miamiangels-backend'
      },
      {
        name: 'PantryKeeper',
        description:
          `Food management FERN stack web application. The user is able to keep track and manipulate different food containers, their individual contents, and how long they've been in storage with playful UI interactivity.`,
        link: 'https://github.com/avecc003/pantrykeeper'
      },
      {
        name: 'SPRK_E Backend',
        description:
          `Journaling API built with Node.js, Express.js, Knex, and MySQL. Implemented OAuth, and encryption for journal entries to keep user's data secure.`,
        link: 'https://github.com/avecc003/SPRK-E_backend'
      },
      {
        name: 'Pastagram',
        description:
          'Instagram clone built with Swift. The user is able to login, upload images, like, and comment on posts.',
        link: 'https://github.com/avecc003/Pastagram'
      },
      {
        name: 'GeekText',
        description:
          'Bookstore REST API built with Java, Spring Boot and MySQL.',
        link: 'https://github.com/AmberImani/CEN-4010-Group-15'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Institute for Expressive Analysis',
        description: 'Freelance Full-Stack Developer, September 2023 - December 2023',
        link: '',
      },
      {
        name: 'Florida International University',
        description: 'Android Developer, June 2022 - December 2022',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, Jest',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL, Firebase',
      },
      {
        name: 'Other',
        description:
          'Database Design, RESTful API Design, Web APIs, Agile Methodology, Git, Github, CI/CD, Prisma, Knex, NoSQL, Document Object Model (DOM), Unix Shell, SuperTest',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
