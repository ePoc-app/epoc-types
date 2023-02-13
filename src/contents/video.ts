import {Content} from './content';
import {html} from '../types';

export interface Video extends Content {
    source: string;
    summary: html;
    subtitles: {label: string, lang: string, src: string}[];
    transcript: string;
    poster: string;
}
