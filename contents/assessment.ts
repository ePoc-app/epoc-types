import {Content} from './content';
import {html, uid} from '../types';

export class Assessment extends Content {
    summary?: string;
    questions?: uid[];
    time?: number;
}

export class AssessmentRuntime extends Assessment {
    score?: number;
    scoreTotal?: number;
    chapterId?: uid;
    easierScoring?: boolean;
}

export class SimpleQuestion extends Content {
    question: uid;
}

export class SimpleQuestionRuntime extends SimpleQuestion {
    chapterId?: number;
}

export class Question {
    type: string;
    score: number;
    statement: string;
    label: string;
    responses: Array<Response>;
    correctResponse: string|Array<string>|Array<{label: string, values: string[]}>;
    explanation: html;
    easierScoring?: boolean;
}

export class DragAndDropquestion extends Question{
    correctResponse: Array<{label: string, values: string[]}>;
}

export class MultipleChoiceQuestion extends Question {
    correctResponse: Array<string>;
}

export class SimpleChoiceQuestion extends Question {
    correctResponse: string;
}

export class Response {
    label: string;
    value: string;
    explanation?: string;
}

export class SwipeQuestion extends Question {
    correctResponse: Array<{label: string, values: string[]}>;
}

export class SwipeQuestionRuntime extends SwipeQuestion {
    possibilities?: Array<string>;
}

export class DropDownListQuestion extends Question {
    correctResponse: Array<{label: string, values: string[]}>;
}

export class DropDownListQuestionRuntime extends DragAndDropquestion {
    categories?: Array<string>;
}