import {html, uid} from './types';

export interface Content {
    type: string;
    title: string;
    subtitle?: string;
    hidden?: boolean;
    conditional?: boolean;
    conditionResolver?: ScoreResolver | ChoiceResolver;
}

export interface Video extends Content {
    type: 'video'
    source: string;
    summary: html;
    subtitles: {label: string, lang: string, src: string}[];
    transcript: string;
    poster: string;
}

export interface Html extends Content {
    type: 'html'
    html: html;
}

export interface Assessment extends Content {
    type: 'assessment'
    summary?: string;
    questions?: uid[];
    time?: number;
}

export interface SimpleQuestion extends Content {
    type: 'simple-question'
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
