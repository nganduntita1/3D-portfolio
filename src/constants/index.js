import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Co Extreme",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using Javascript/HTML/CSS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Upwork",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Present",
    points: [
      "Work with multiple clients on Upwork to design and develop custom navigation bars, buttons, contact forms and other, ensuring seamless user experience and increased engagement.",
      "Collaborated with clients to understand their business needs and provide solutions that align with their goals and objectives.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilized strong communication skills and attention to detail to manage projects from inception to delivery, consistently meeting or exceeding client expectations.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Sinappsus",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developing and designing Applications using VUE JS/ Laravel and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ntita proved me wrong.",
    name: "Marc Bukasa",
    designation: "Business Owner",
    company: "Shoe Rack",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ntita does.",
    name: "P Grace",
    designation: "Musical Artist",
    company: "pgracemusic.com",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ntita redesigned our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Nelson Green",
    designation: "Business Owner",
    company: "Nelnel Clothing",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant",
    description:
      "Restaurant website that showcases the establishment's menu, location, and hours of operation. The website features a user-friendly interface, responsive design, and intuitive navigation to provide an optimal user experience for potential customers. Through the implementation of various web development technologies and creative design strategies, the website effectively represents the restaurant's brand and mission, ultimately increasing its online presence and customer engagement.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://files.fm/thumb_show.php?i=8b52phqhn",
    source_code_link: "https://nganduntita1.github.io/restaurant-website/",
  },
  {
    name: "Perso",
    description:
      "dynamic and engaging website that showcases the latest trends in lifestyle, fashion, and food. Through strategic use of multimedia elements, such as high-quality images and videos, the website effectively captures the attention of its audience and provides valuable information on the latest industry developments. The website's responsive design and intuitive navigation ensure a seamless user experience across all devices. Overall, my website successfully delivers a visually appealing and informative platform for enthusiasts of lifestyle, fashion, and food.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://files.fm/thumb_show.php?i=248cg9x7t",
    source_code_link: "https://nganduntita1.github.io/perso/",
  },
  {
    name: "VEX",
    description:
      "A sleek and user-friendly e-commerce website that specializes in the sale of Apple Watches and accessories. Through a minimalist design approach and strategic use of product imagery, the website showcases the latest Apple Watch models and features in a visually appealing and informative way. The website's easy-to-use navigation and streamlined checkout process provide a seamless shopping experience for customers. By implementing various e-commerce optimization techniques and integrating with popular payment gateways, the website effectively drives conversions and boosts sales. Overall, my website delivers a seamless and enjoyable shopping experience for Apple Watch enthusiasts.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://files.fm/thumb_show.php?i=ex9gvy96e",
    source_code_link: "https://nganduntita1.github.io/Apple-watch/",
  },
  {
    name: "Shoe Rack",
    description:
      "A visually stunning and easy-to-navigate e-commerce website for a shoe store that offers a wide selection of footwear for all occasions. Through the use of high-quality product images and detailed descriptions, the website effectively showcases the store's extensive inventory, which includes the latest trends and styles in footwear. The website's intuitive search and filtering functionalities enable customers to quickly find the products they need, while its secure and streamlined checkout process ensures a seamless shopping experience. By implementing various e-commerce best practices and optimizing the website for search engines, I helped increase the store's online visibility and attract new customers. Overall, my website design and development efforts resulted in a user-friendly and visually appealing platform that effectively represents the shoe store's brand and mission.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "Ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: "https://files.fm/thumb.php?i=p5jr29gvy",
    source_code_link: "https://shoerackstore.company.site/",
  },
  {
    name: "Restaurent",
    description:
      "Restaurant website that showcases the establishment's menu, location, and hours of operation. The website features a user-friendly interface, responsive design, and intuitive navigation to provide an optimal user experience for potential customers. Through the implementation of various web development technologies and creative design strategies, the website effectively represents the restaurant's brand and mission, ultimately increasing its online presence and customer engagement.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://files.fm/thumb_show.php?i=3sncpm2hr",
    source_code_link: "https://nganduntita1.github.io/restaurant/",
  },
  {
    name: "Dashboard",
    description:
      "A comprehensive product management dashboard that allows users to efficiently manage and track their product inventory. The dashboard features an intuitive user interface that allows users to easily add new products, update existing ones, and monitor inventory levels in real-time. By integrating various data visualization tools and analytics, the dashboard provides users with valuable insights into product performance, sales trends, and other important metrics. Additionally, the dashboard includes various collaboration and communication features, enabling team members to work together seamlessly and efficiently. Overall, my product management dashboard effectively streamlines and simplifies the product management process, resulting in increased productivity, better decision-making, and improved business outcomes.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
    ],
    image: "https://files.fm/thumb_show.php?i=y9hdzawvw",
    source_code_link: "https://nganduntita1.github.io/dashboard/",
  },
];

export { services, technologies, experiences, testimonials, projects };
