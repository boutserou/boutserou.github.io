import type { Project } from "../types/Project";

import deltaTwoImage from "../assets/images/projects/deltatwo.webp";
import XeniaImage from "../assets/images/projects/xenia.webp";
import MeditexImage from "../assets/images/projects/meditexltd.webp";
import AtaxtoiImage from "../assets/images/projects/ataxtoi.webp";


export const projects: Project[] = [
    {
        id: 1,
        title: "Delta Two",
        shortDescription: "Website developed for a Greek real estate development company.",
        longDescription:
            "The first live website I made while being an intern at WEDOO DIGITAL AGENCY. A Website made to present Delta Two, a real estate development company. The website was created following a figma design, using ACF field blocks for the front page, and gutenberg blocks for every inner page.",
        year:2025,
        technologies: ["WordPress","TypeWriter","JavaScript","Advanced Custom Fields", "Owl Carousel","Marquee Text","WPForms"],
        developmentProcess:
            ["Started following the figma design given, and was guided by senior developers.","Added an interactive Javascript particle animation","Created inner pages using Gutenberg blocks and adjusted CSS","Created Contact Forms"],
        image: deltaTwoImage,
        liveUrl: "https://deltatwo.gr",
        featured:true
    },
    {
        id: 2,
        title: "Xenia Kourtoglou",
        shortDescription: "Website presenting a motivational speaker for people and businesses.",
        longDescription: "A website I worked on alongside another developement intern at WEDOO DIGITAL AGENCY. We developed the initial website without a figma design, and later made a couple of changes based on the client's requests.",
        year:2025,
        technologies: ["WordPress","Advanced Custom Fields","Owl Carousel","GSAP","WPForms","Archive Page"],
        developmentProcess: ["Created the front page with a logo carousel, testimonials, newsletter.","Designed the format for inner pages.","Developed a custom podcast-like archive page for 1-minute audios that was later removed."],
        image: XeniaImage,
        liveUrl: "https://xeniakourtoglou.com",
        featured:true
    },
    {
        id: 3,
        title: "Meditex LTD",
        shortDescription: "Eshop for a clothes manufacting company based in Volos.",
        longDescription: "Redesign of previous website, another project I developed while being an intern at WEDOO DIGITAL AGENCY. This was the first project I took on entirely by myself. I was given plenty of creative freedom for inner pages, while honoring the client's requests and references. Every page follows a different format that complements the content while adhering to the main theme. The Facilities page was a custom idea of mine that the client really liked.",
        year:2026,
        technologies: ["WordPress","WooCommerce","PHP","Advanced Custom Fields","WPForms","GSAP"],
        developmentProcess: ["Followed references for design ideas for every page.","Created GSAP button animation","Customized WooCommerce PHP code and made additions.","Designed a custom 5-step Make Your Collection Form for custom product requests."],
        image: MeditexImage,
        liveUrl: "https://meditexltd.gr",
        featured:true
    },
    {
        id: 4,
        title: "Ataxtoi",
        shortDescription: "Website built for a team of volunteers that come together to help society.",
        longDescription: "This was my favourite project to work on while at WEDOO DIGITAL AGENCY. Starting from scratch, the code was clear written. The design was made following a figma template. Unfortunately I didn't get to finish this project during my time as an intern, and certain pages and functions I created were afterwards cut off. It's still an ongoing project at the agency so the link will change once finished.",
        year:2026,
        technologies: ["WordPress","Custom ACF Blocks","PHP","Archive Page","GSAP"],
        developmentProcess: ["Sorted fonts,gradients and variables in ready-to-use css classes.","Created ACF Blocks based on repeatable sections.","Created a custom Projects Archive page with 4 taxonomies, to showcase projects.","Created a project page with a common PHP template for every project.","Customised the New's page and every article's template using PHP."],
        image: AtaxtoiImage,
        liveUrl: "https://ataxtoi.pcinfo.work",
        featured:true
    }
];