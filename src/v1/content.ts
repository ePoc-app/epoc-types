import {html, uid} from './types';

export interface Content {
    type: string;
    title: string;
    subtitle?: string;
    hidden?: boolean;
    conditional?: boolean;
}

export interface Video extends Content {
    type: 'video'
    source: string;
    summary: html;
    subtitles: {label: string, lang: string, src: string}[];
    transcript: string;
    poster: string;
}

export interface Audio extends Content {
    type: 'audio'
    source: string;
    summary: html;
    transcript: string;
}

export interface Html extends Content {
    type: 'html'
    html: html;
}

export interface Assessment extends Content {
    type: 'assessment'
    summary?: html;
    questions?: uid[];
    time?: number;
}

export interface SimpleQuestion extends Content {
    type: 'simple-question'
    question: uid;
}

export interface ChoiceCondition extends Content {
    type: 'choice'
    conditionResolver: ChoiceResolver;
}

export interface ChoiceResolver {
    type: 'choice';
    label: string;
    choices: Choice[];
    conditionalFlag: ConditionalFlag[];
}

export interface Choice {
    label: string;
    value: string;
}

export interface ConditionalFlag {
    value: string;
    flags: uid[];
}
