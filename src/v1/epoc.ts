import {Author} from './author';
import {Content} from './content';
import {html, uid} from './types';
import {Question} from './question';
import {Badge} from './badge';

export interface EpocMetadata {
    lastModif : string;
    editorVersion: string;
    version : string;
    lang: string;
    id: string;
    title: string;
    image: string;
    teaser?: string;
    authors: Author[];
    thumbnail : string;
    summary: html;
    objectives: string[];
    prerequisites: string[];
    chaptersCount: number;
    assessmentsCount: number;
    chapterDuration: number;
    download: string;
    edition: string;
    license: {
        name: string;
        url: string;
        content: string;
    }
}

export interface Epoc extends EpocMetadata {
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
    objectives?: string[];
    contents: uid[];
    duration: number;
}

export interface Parameters {
    chapterParameter?: string;
    openQuestionButton?: string;
}
