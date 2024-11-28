import {html} from './types';

export interface Question {
    type: string;
    score: number;
    statement: html;
    label: string;
    responses: Array<Response>;
    correctResponse: string|Array<string>|Array<{label: string, values: string[]}>;

    /**
     * The explanation of the correction of the question
     * @deprecated use feedback property
     */
    explanation?: html;

    /**
     * The global feedback of the question
     */
    feedback?: html;
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

export interface CustomQuestion extends Question {
    type: 'custom';
    template: string;
    data?: Record<string, string>;
}

export interface Response {
    label: string;
    value: string;
    feedback?: string;
    score?:number;
}