import {html} from './types';

/**
* Define the base question properties
*/
export interface Question {
    /**
     * Specifies the type of question
     */
    type: string;

    /**
     * The score of this question
     * @deprecated Use badges instead
     */
    score: number;

    /**
     * The statement of the question
     */
    statement: string;

    /**
     * The label of the question
     */
    label: string;

    /**
     * The list of possible responses of the question
     */
    responses: Array<Response>;

    /**
     * The correction of the question
     */
    correctResponse: string|Array<string>|Array<{label: string, values: string[]}>;

    /**
     * The explanation of the correction of the question
     */
    explanation: html;
}

/**
* Define the question response properties
*/
export interface Response {
    /**
     * The label of the response
     */
    label: string;

    /**
     * The hidden value of the response
     */
    value: string;
}

/**
* Define the simple choice question properties
*/
export interface SimpleChoiceQuestion extends Question {
    /**
     * Specifies the type of question
     */
    type: 'choice';

    /**
     * The correction for question with single value expected
     */
    correctResponse: string;
}

/**
* Define the multiple choice question properties
*/
export interface MultipleChoiceQuestion extends Question {
    /**
     * Specifies the type of question
     */
    type: 'multiple-choice';

    /**
     * The correction for question with multiple values expected
     */
    correctResponse: Array<string>;
}

/**
* Define the drag and drop question properties
*/
export interface DragAndDropquestion extends Question{
    /**
     * Specifies the type of question
     */
    type: 'drag-and-drop';

    /**
     * The correction for sortable question type (drag-and-drop, swipe, dropdown)
     */
    correctResponse: Array<{label: string, values: string[]}>;
}

/**
* Define the swipe question properties
*/
export interface SwipeQuestion extends Question {
    /**
     * Specifies the type of question
     */
    type: 'swipe';

    /**
     * The correction for sortable question type (drag-and-drop, swipe, dropdown)
     */
    correctResponse: Array<{label: string, values: string[]}>;
}

/**
* Define the dropdown question properties
*/
export interface DropDownListQuestion extends Question {
    /**
     * Specifies the type of question
     */
    type: 'dropdown-list';

    /**
     * The correction for sortable question type (drag-and-drop, swipe, dropdown)
     */
    correctResponse: Array<{label: string, values: string[]}>;
}

/**
 * Define the plugin custom question properties
 */
export interface CustomQuestion extends Question {
    /**
     * Specifies the type of question
     */
    type: 'custom';

    /**
     * The correction for question with single value expected
     */
    correctResponse: string;


    /**
     * The custom html template filename
     */
    template: string;
}
