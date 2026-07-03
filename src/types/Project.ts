export interface Project {
    id: number;
    title: string;

    shortDescription: string;
    longDescription: string;
    year:number;

    technologies: string[];
    developmentProcess: string[];

    image: string;
    liveUrl: string;

    featured: boolean;
}