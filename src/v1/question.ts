import {html} from './types';

export interface Question {
    type: string;
    score: number;
    statement: string;
    label: string;
    responses: Array<Response>;
    correctResponse: string|Array<string>|Array<{label: string, values: string[]}>;
    explanation: html;
    easierScoring?: boolean;
}

export interface DragAndDropquestion extends Question{
    correctResponse: Array<{label: string, values: string[]}>;
}

export interface MultipleChoiceQuestion extends Question {
    correctResponse: Array<string>;
}

export interface SimpleChoiceQuestion extends Question {
    correctResponse: string;
}

export interface Response {
    label: string;
    value: string;
    explanation?: string;
}

export interface SwipeQuestion extends Question {
    correctResponse: Array<{label: string, values: string[]}>;
}

export interface DropDownListQuestion extends Question {
    correctResponse: Array<{label: string, values: string[]}>;
}