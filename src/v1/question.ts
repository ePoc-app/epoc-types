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
    type: 'drag-and-drop';
    correctResponse: Array<{label: string, values: string[]}>;
}

export interface MultipleChoiceQuestion extends Question {
    type: 'multiple-choice';
    correctResponse: Array<string>;
}

export interface SimpleChoiceQuestion extends Question {
    type: 'choice';
    correctResponse: string;
}

export interface SwipeQuestion extends Question {
    type: 'swipe';
    correctResponse: Array<{label: string, values: string[]}>;
}

export interface DropDownListQuestion extends Question {
    type: 'dropdown-list';
    correctResponse: Array<{label: string, values: string[]}>;
}

export interface ReorderQuestion extends Question {
    type: 'reorder';
}

export interface Response {
    label: string;
    value: string;
    explanation?: string;
}