import {html, uid} from './types';

export interface Content {
    id: uid;
    type: 'html' | 'assessment' | 'video' | 'simple-question' | 'choice';
    title: string;
    subtitle?: string;
    conditional?: boolean;
    conditionResolver?: ScoreResolver | ChoiceResolver;
}

export interface Video extends Content {
    source: string;
    summary: html;
    subtitles: {label: string, lang: string, src: string}[];
    transcript: string;
    poster: string;
}

export interface Html extends Content {
    html: html;
}

export interface Assessment extends Content {
    summary?: string;
    questions?: uid[];
    time?: number;
}

export interface SimpleQuestion extends Content {
    question: uid;
}

 interface Resolver {
    conditionalFlag: ConditionalFlag[];
}

export interface ScoreResolver extends Resolver{
    type: 'score';
}

export interface ChoiceResolver extends Resolver{
    type: 'choice';
    choices: Choice[];
}

export interface Choice {
    label: string;
    value: string;
}

export interface ConditionalFlag {
    value: string;
    flags: uid[];
}
