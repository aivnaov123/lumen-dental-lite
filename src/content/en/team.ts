import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    slug: "elena-petrova",
    name: "Dr. Elena Petrova",
    specialty: "Implantology & oral surgery",
    years: 8,
    languages: ["EN","BG"],
    bio: "Placed over 1,200 implants. Trained in Zurich and Barcelona.",
    image: "/images/team/elena-petrova.jpg",
  },
  {
    slug: "martin-ivanov",
    name: "Dr. Martin Ivanov",
    specialty: "Orthodontics",
    years: 6,
    languages: ["EN","BG"],
    bio: "Certified clear-aligner provider with a focus on adult orthodontics.",
    image: "/images/team/martin-ivanov.jpg",
  },
  {
    slug: "maria-dimitrova",
    name: "Dr. Maria Dimitrova",
    specialty: "Aesthetic dentistry",
    years: 7,
    languages: ["EN","BG","DE"],
    bio: "Digital smile design and minimally invasive veneers.",
    image: "/images/team/maria-dimitrova.jpg",
  },
  {
    slug: "stefan-georgiev",
    name: "Dr. Stefan Georgiev",
    specialty: "Endodontics",
    years: 9,
    languages: ["EN","BG"],
    bio: "Microscope-assisted root canal treatment.",
    image: "/images/team/stefan-georgiev.jpg",
  },
  {
    slug: "yana-koleva",
    name: "Dr. Yana Koleva",
    specialty: "Children's dentistry",
    years: 5,
    languages: ["EN","BG"],
    bio: "Makes first visits fun. Specialist in preventive care for kids.",
    image: "/images/team/yana-koleva.jpg",
  },
  {
    slug: "petar-nikolov",
    name: "Dr. Petar Nikolov",
    specialty: "Prosthodontics",
    years: 10,
    languages: ["EN","BG","RU"],
    bio: "Crowns, bridges and full-mouth rehabilitation.",
    image: "/images/team/petar-nikolov.jpg",
  },
];

export const values = [
  {
    "title": "No upselling",
    "text": "You get the treatment you need, explained in plain words, with the price up front."
  },
  {
    "title": "Time for questions",
    "text": "Consultations are 30 minutes. Nobody rushes you."
  },
  {
    "title": "Digital everything",
    "text": "3D scans, digital X-rays and in-house milling mean fewer visits and better fit."
  },
  {
    "title": "Continuous training",
    "text": "Each doctor attends at least two international courses a year."
  }
];
