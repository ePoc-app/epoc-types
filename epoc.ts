import {Author} from './author';
import {Content} from './contents/content';
import {html, uid} from './types';
import {Assessment, Question} from './contents/assessment';

export interface EpocMetadata {
    lastModif : string;
    version : string;
    id: string;
    title: string;
    image: string;
    teaser?: string;
    authors: Record<uid, Author>;
    thumbnail : string;
    summary: html;
    objectives: string[];
    chaptersCount: number;
    assessmentsCount: number;
    download: string;
}

export interface EpocLibrary extends EpocMetadata {
    downloading: boolean;
    downloaded: boolean;
    unzipping: boolean;
}

export interface Epoc extends EpocMetadata {
    certificateScore: number;
    parameters: Parameters;
    contents: Record<uid, Content>;
    chapters: Record<uid, Chapter>;
    questions: Record<uid, Question>;
}

export interface EpocRuntime extends Epoc {
    assessments: Assessment[];
}

export interface Chapter {
    id: uid;
    title: string;
    image?: string;
    objectives?: string[];
    contents: uid[];
}

export interface ChapterRuntime extends Chapter {
    time: number;
    videoCount: number;
    assessmentCount: number;
    initializedContents: Content[];
    assessments: uid[];
    chapterOpened: boolean;
    assessmentDone: boolean;
}

export interface Parameters {
    chapterParameter?: string;
    easierScoring?: boolean;
    openQuestionButton?: string;
}
