
const person = {
  firstName: "Rajnish Kumar",
  lastName: "Sharma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI and DS engineer",
  avatar: "/images/avatar.jpg",
  email: "rj2537580@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RajnishKumar05",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/itsrajnish",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Rajnish82157765",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building smart solutions where data meets intelligence.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Health AI website</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Rajnish — an AI and Data Science enthusiast turning ideas into intelligent systems, one project at a time.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.linkedin.com/in/rajnish-kumar-sharma-a583ab227/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rajnish is an AI and Data Science enthusiast with a passion for turning real-world problems into intelligent, data-driven solutions.
        His work bridges machine learning, interactive systems, and the fusion of code and creativity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IEEE MITS Chaper",
        timeframe: "2022 - 2025",
        role: "Web Developer",
        achievements: [
          <>
            Assisted in building and enhancing the website for IEEE Power & Energy Society (PES).
          </>,
          <>
           Worked on UI/UX improvements, responsive design, and performance optimization.  
          </>,
          <>
           Utilized HTML, CSS, JavaScript, and React.js for frontend development.   
          </>,
          <>
          Ensured seamless user experience and improved website functionality. 
          </> 
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Madhav Institute of Technology & Science",
        description: <>Internet of Things</>
      },
      {
        name:"Indian Institute of Technology Kanpur- NPTEL",
        description: <>Foundation of Cloud IoT Edge ML</>
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Proficiency",
  skills: [
    {
      title: "Machine Learning & Deep Learning",
      description: (
        <>
          Experienced in building machine learning models using Python, with expertise in TensorFlow and deep learning architectures like Convolutional Neural Networks (CNN). Skilled in data preprocessing, model optimization, and evaluation.
        </>
      ),
      images: [],
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      description: (
        <>
          Solid foundation in DSA with hands-on experience in solving complex algorithmic problems using C++ and Python. Familiar with competitive programming and performance optimization.
        </>
      ),
      images: [],
    },
    {
      title: "Web Development",
      description: (
        <>
          Proficient in creating responsive and interactive websites using HTML, CSS, JavaScript, and TypeScript. Focused on frontend development for clean UI/UX, with understanding of modern web development workflows.
        </>
      ),
      images: [],
    },
    {
      title: "Embedded Systems & IoT",
      description: (
        <>
          Skilled in working with ESP32, Arduino, various sensors, and real-time data communication using WebSocket. Developed IoT-based systems for smart monitoring and control applications.
        </>
      ),
      images: [],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
