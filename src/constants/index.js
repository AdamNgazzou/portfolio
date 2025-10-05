import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  postgresql,
  typescript,
  firebase,
  reactjs,
  express,
  pitchup,
  edulearn,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  highschool,
  tesla,
  nextjs,
  redis,
  uni,
  licensePlate,
  yolov1,
  imagetotext,
  braintumor,
  python,
  pytorch,
  fastapi,
  ultralytics,
  opencv,
  frauddetection,
  insurance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },


];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web, // keeps it generic for web & backend
  },
  {
    title: "Deep Learning Engineer",
    icon: mobile, // create/import an icon representing AI or neural networks
  },
  {
    title: "Backend & APIs",
    icon: backend, // emphasize backend skills like FastAPI, Node.js
  },
  {
    title: "Computer Science Student",
    icon: creator, // shows you’re a CS student and developer
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "nextJs",
    icon: nextjs,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "ultralytics",
    icon: ultralytics,
  },
  {
    name: "opencv",
    icon: opencv,
  }





];

const experiences = [
  {
    title: "HighSchool Student",
    company_name: "farhat hached Highschool",
    icon: highschool,
    iconBg: "#181c2e",
    date: "Sep 2020 - juin 2024",
    points: [
      "Studied Data Structures and Algorithms as a main course, developing strong problem-solving skills.",
      "Passionate about web development, built static websites and server-side rendered applications using PHP and MySQL.",
      "Had a main course in databases and achieved a 16.31/20 overall grade in the Baccalaureate exam.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "Horizon Digital School of Technologies",
    icon: uni,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Juin 2027",
    points: [
      "Awarded a 100% scholarship for academic excellence, recognizing outstanding performance in my Computer Science degree.",
      "Participated in Nuit de l’Info, a national hackathon, collaborating on innovative solutions under time constraints.",
      "Gained expertise in full-stack development, mastering technologies like React, Next.js, Node.js, Express, Redis, and more.",
      "Consistently maintained high grades while actively developing projects in my free time, balancing academics and hands-on learning.",
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "Your Company",
    icon: tesla,
    iconBg: "#181c2e",
    date: "- Present",
    points: [
      "waiting for you to fulfill this place ^^"
    ],
  },
];



const projects = [
  {
    name: "License Plate Detector",
    description:
      "An end-to-end computer vision pipeline for automatic vehicle and license plate detection, tracking, and OCR using YOLOv8, SORT, and EasyOCR. Detects and reads plates from traffic footage, exporting results to CSV files and annotated video outputs.",
    tags: [
      { name: "python", color: "blue-text-gradient", icon: python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
      { name: "opencv", color: "green-text-gradient", icon: opencv },
      { name: "ultralytics", color: "orange-text-gradient", icon: ultralytics },
      /* python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
      { name: "opencv", color: "green-text-gradient", icon: opencv },
      { name: "ultralytics", color: "orange-text-gradient", icon: yolov8 },
      { name: "easyocr", color: "pink-text-gradient", icon: easyocr },
      { name: "sort", color: "purple-text-gradient", icon: sort },*/
    ],
    image: licensePlate, // import your project image at the top
    source_code_link: "https://github.com/AdamNgazzou/Automated-License-Plate-Recognition-YOLOv8", // replace with your actual repo link
    source_link: "" // optional, if you have a demo video or hosted page
  },
  {
    name: "YOLOv1 Object Detection",
    description:
      "A from-scratch PyTorch implementation of YOLOv1 based on the original paper. Modular codebase for training, evaluation, and testing on Pascal VOC 2007/2012, with mAP metrics, IoU calculations, and production-ready unit tests.",
    tags: [
      { name: "python", color: "blue-text-gradient", icon: python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
    ],
    image: yolov1, // import your project image at the top
    source_code_link: "https://github.com/AdamNgazzou/YOLOv1-from-Scratch", // replace with your actual repo
    source_link: "" // optional, e.g., Colab demo or hosted notebook
  },
  {
    name: "Image to Text Extraction",
    description:
      "A full-stack web application for extracting text from images using Tesseract-OCR. Provides an end-to-end solution for uploading images, performing AI-powered OCR, and viewing the extracted text directly in the browser.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient", icon: nextjs },
      { name: "react", color: "blue-text-gradient", icon: reactjs },
      { name: "fastapi", color: "green-text-gradient", icon: fastapi },
      { name: "docker", color: "pink-text-gradient", icon: docker },
    ],
    image: imagetotext, // import your project image at the top
    source_code_link: "https://github.com/AdamNgazzou/imagetotext", // replace with your GitHub repo
    source_link: "" // optional, e.g., hosted demo link
  },
  {
    name: "Brain Tumor Detection",
    description:
      "A full-stack web application for brain tumor MRI classification using Transfer Learning (ResNet18) and custom CNN models. Users can upload MRI scans to receive AI-powered tumor predictions with confidence scores, all via a clean web interface.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient", icon: nextjs },
      { name: "react", color: "blue-text-gradient", icon: reactjs },
      { name: "tailwind", color: "pink-text-gradient", icon: tailwind },
      { name: "fastapi", color: "green-text-gradient", icon: fastapi },
      { name: "python", color: "blue-text-gradient", icon: python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
    ],
    image: braintumor, // import your project image at the top
    source_code_link: "https://github.com/AdamNgazzou/Brain-Tumor-Detection", // replace with your GitHub repo
    source_link: "https://imagetotext-indol.vercel.app/" // optional, e.g., hosted frontend demo
  },
  {
    name: "Credit Card Fraud Detection",
    description:
      "A PyTorch-based neural network for credit card fraud detection, trained on anonymized transaction data. The model achieves 99.94% accuracy and robust precision, recall, and F1-score, effectively identifying fraudulent transactions while handling class imbalance.",
    tags: [
      { name: "python", color: "blue-text-gradient", icon: python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
    ],
    image: frauddetection, // import your project image at the top
    source_code_link: "https://github.com/AdamNgazzou/Pytorch-Credit-Card-Fraud-Detection", // replace with your GitHub repo
    source_link: "" // optional if you have a hosted notebook or demo
  },
  {
    name: "Insurance Cost Prediction",
    description:
      "A PyTorch-based machine learning project that predicts yearly medical insurance costs using personal attributes such as age, BMI, smoking habits, and more. Helps insurance companies estimate premiums and gain insights into risk factors.",
    tags: [
      { name: "python", color: "blue-text-gradient", icon: python },
      { name: "pytorch", color: "red-text-gradient", icon: pytorch },
    ],
    image: insurance, // import your project image at the top (e.g., Actual_vs_Predicted_Insurance_Charges.png)
    source_code_link: "https://github.com/AdamNgazzou/Insurance-Cost-Prediction-Linear-Regression-Pytorch", // replace with your GitHub repo
    source_link: "" // optional, e.g., live notebook or Colab
  },

  {
    name: "Pitchup startups",
    description:
      "Web-based platform that allows users to pitch, explore, and connect with startups, providing a collaborative space to discover, share, and engage with innovative business ideas, fostering networking and entrepreneurial growth.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
        icon: nextjs // Make sure this is imported at the top
      },
      {
        name: "react",
        color: "blue-text-gradient",
        icon: reactjs // Make sure this is imported at the top
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
        icon: mongodb // Make sure this is imported at the top
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        icon: tailwind // Make sure this is imported at the top
      },
    ],
    image: pitchup,
    source_code_link: "https://github.com/AdamNgazzou/startups-mern-backend",
    source_link: "https://pitchup-five.vercel.app"
  },
  {
    name: "Edulearn (LMS)",
    description:
      "Designed for educators and course creators, this platform enables instructors to manage courses, track performance, and monitor progress, while providing students with an organized, interactive space to learn, engage, and grow effectively.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
        icon: nextjs // Make sure this is imported at the top
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
        icon: express // Make sure this is imported at the top
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
        icon: nodejs // Make sure this is imported at the top
      },
      {
        name: "react",
        color: "blue-text-gradient",
        icon: reactjs // Make sure this is imported at the top
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
        icon: postgresql // Make sure this is imported at the top
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
        icon: tailwind // Make sure this is imported at the top
      },
    ],
    image: edulearn,
    source_code_link: "https://github.com/AdamNgazzou/Edulearn",
    source_link: "https://edulearn-chi.vercel.app/"
  },



];

export { services, technologies, experiences, projects };
