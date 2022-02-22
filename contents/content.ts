import {uid} from '../types';

export interface Content {
    id: uid;
    type: 'html' | 'assessment' | 'video' | 'simple-question' | 'choice';
    title: string;
    subtitle?: string;
    conditional?: boolean;
    conditionResolver?: ScoreResolver | ChoiceResolver;
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
