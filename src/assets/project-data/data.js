import fyyur from "../project-image/fyyur.png";
import storefront from "../project-image/storefront.png";
import image_resizer from "../project-image/image_resizer.png"

const DATA = [
  {
    id: 1,
    title: "storefront - an e-commerce website",
    image: storefront.src,
    details: [
      "This storefront is a comprehensive full-stack e-commerce platform built with an Angular 19 frontend and a Node.js/Express TypeScript backend. The platform provides a complete online shopping experience for audio equipment including headphones, speakers, and earphones with robust user authentication, product browsing, and order management capabilities.",
      " The project implements a seamless CI/CD pipeline using CircleCI workflows with automated build processes, approval gates, and deployment to AWS Elastic Beanstalk for the backend and S3 for the frontend. This ensures consistent and reliable updates to the production environment.",
      "Security is a priority with a JWT-based authentication system that utilizes bcrypt password hashing and proper security measures to protect user data. The database design features a normalized PostgreSQL schema with strategic indexing for optimal query performance when handling product searches, user data, and order processing.",
      "The application architecture separates concerns across development, testing, and production environments with appropriate variable management. Database schema changes and data population are handled through automated migrations using db-migrate, providing version control for the database structure.",
      "The cloud infrastructure leverages AWS services with load balancing, health checks, and secure environment variable management. The frontend delivers a modern shopping experience built on the latest Angular framework (v19), ensuring responsive and interactive user interfaces",
      "The backend follows RESTful API architecture principles, creating a well-structured interface for product browsing, user management, and order processing. This approach supports maintainability and scalability as the platform grows to accommodate more products and users.",
    ],
    tools: ["SaSS", "Angular", "TypeScript", "NodeJs", "Postgres", "API"],
    link: "https://storefront-virid.vercel.app",
  },
  {
    id: 2,
    title: "fyyur - a music & venue booking site",
    image: fyyur.src,
    details: [
      "Fyyur is a dynamic booking website that connects artists with venues, streamlining the live performance booking process. As the developer, I transformed this platform from a static site running on dummy data into a fully functional application with a robust database backend.",
      "I designed and implemented a PostgreSQL database schema to replace static dummy data, creating data models and relationships using SQLAlchemy ORM to handle complex artist-venue connections. The work included building form submission validation and processing to ensure data integrity, implementing search functionality to help users find artists and venues efficiently, and developing database migration strategies using Flask-Migrate to allow for seamless schema updates.",
      "I also created API endpoints to serve venue and artist data to the frontend and engineered a booking system that tracks show dates, times, and availability.",
    ],
    tools: ["Flask", "SqlAlchemy", "Bootstrap", "Postgres"],
    link: "https://duejezie.vercel.app",
  },
  {
    id: 3,
    title: "image resizer - an image resizing web application",
    image: image_resizer.src,
    details: [
      "This project delivers a robust image processing API built with Node.js, TypeScript, and Express that allows users to upload and transform images through a clean, intuitive interface. At its core, the application leverages Sharp—a high-performance image processing library—to handle various transformation operations including resizing dimensions and converting between different image formats (JPG, PNG, WebP, AVIF, and GIF).",
      "The application features a responsive front-end with drag-and-drop functionality that provides immediate visual feedback. On the back-end, it implements intelligent caching mechanisms using node-cache to store processed images, significantly improving performance for repeated requests while reducing server load. Error handling is comprehensive throughout the application, with user-friendly messages that guide users when issues arise.",
      "The codebase demonstrates modern TypeScript practices with strong typing and interfaces, maintaining separation of concerns through a modular architecture. Routes are clearly organized, with middleware handling authentication, logging, and file validation. The project includes thorough test coverage using Jasmine and Supertest, ensuring reliability across unit tests for the image processor service and integration tests for the API endpoints.",
      "Deployment is streamlined through configuration for Vercel, making the application production-ready with minimal setup. Security considerations are addressed by implementing file size limitations, type validation, and proper error handling to prevent common vulnerabilities. Overall, this project showcases professional-grade development practices while solving the practical need for on-demand image transformation services."
    ],
    tools: ["NodeJs", "TypeScript", "Express", "API"],
    link: "https://image-processing-woad.vercel.app/api",
  },
];

export default DATA