import {Author} from './author';
import {Content} from './content';
import {html, uid} from './types';
import {Question} from './question';

export interface EpocMetadata {
    lastModif : string;
    version : string;
    id: string;
    title: string;
    image: string;
    teaser?: string;
    authors: Author[];
    thumbnail : string;
    summary: html;
    objectives: string[];
    chaptersCount: number;
    assessmentsCount: number;
    download: string;
    edition: string;
}

export interface Epoc extends EpocMetadata {
    certificateScore: number;
    parameters: Parameters;
    plugins: string[];
    contents: Record<uid, Content>;
    chapters: Record<uid, Chapter>;
    questions: Record<uid, Question>;
}

export interface Chapter {
    title: string;
    objectives?: string[];
    contents: uid[];
}

export interface Parameters {
    chapterParameter?: string;
    easierScoring?: boolean;
    openQuestionButton?: string;
}
