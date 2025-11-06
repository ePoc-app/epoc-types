import { Author } from "./author";
import { Content } from "./content";
import { html, uid } from "./types";
import { Question } from "./question";
import { Badge } from "./badge";
import { License } from './license';
import { Publisher } from './publisher';
import { Rule } from './rule';
 
export interface EpocMetadata {
    lastModif: string;
    editorVersion: string;
    version: string;
    lang?: string;
    id: string;
    title: string;
    image: string;
    teaser?: string;
    publisher: Publisher
    authors: Author[];
    thumbnail: string;
    summary: html;
    tags: string[];
    objectives: string[];
    prerequisites: string[];
    chaptersCount: number;
    assessmentsCount: number;
    chapterDuration: number;
    download: string;
    edition: string;
    license: License;
}

export interface Epoc extends EpocMetadata {
    certificateDisabled?: boolean;
    certificateBadgeCount: number;
    certificateScore: number;
    parameters: Parameters;
    plugins: string[];
    contents: Record<uid, Content>;
    chapters: Record<uid, Chapter>;
    questions: Record<uid, Question>;
    badges: Record<uid, Badge>;
}

export interface Chapter {
    title: string;
    subtitle?: string;
    objectives?: string[];
    contents: uid[];
    duration: number;
    rule?: Rule;
}

export interface Parameters {}
