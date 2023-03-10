import {uid, html, uri, langcode} from './types';

/**
* Define the union type of all kind of screen content
*/
export type Content = Html | Video | Assessment | SimpleQuestion;

/**
* Define the base content properties
*/
export interface BaseContent {
    type: string;
}

/**
* Define the html content properties
*/
export interface Html extends BaseContent {
    /**
     * Specifies the type of content
     */
    type: 'html';
    
    /**
     * Specifies the rich html text of the content
     */
    html: html;
}

/**
* Define the video content properties
*/
export interface Video extends BaseContent {
    /**
     * Specifies the type of content
     */
    type: 'video';
    
    /**
     * Specifies the video source uri
     */
    src: uri;
    
    /**
     * Specifies the list of available subtitles (label, lang, uri)
     */
    subtitles: {label: string, lang: langcode, src: uri}[];
    
    /**
     * Specifies the text transcript of the video
     */
    transcript: string;
    
    /**
     * Specifies the video poster (thumbnail) uri
     */
    poster: uri;
}

/**
* Define the assessment content properties
*/
export interface Assessment extends BaseContent {
    /**
     * Specifies the type of content
     */
    type: 'assessment';
    
    /**
     * Quick summary of the assessment
     */
    summary?: string;
    
    /**
     * List of question ids attached to the assessment
     */
    questions?: uid[];
    
    /**
     * Estimated time to do the assessment
     */
    time?: number;
}

/**
* Define the simple question content properties
*/
export interface SimpleQuestion extends BaseContent {
    /**
     * Specifies the type of content
     */
    type: 'simple-question';
    
    /**
     * Question id attached to the assessment
     */
    question: uid;
}
