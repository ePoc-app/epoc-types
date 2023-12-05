import {uid} from './types';
import {Rule} from './rule';

export interface Badge {
    id?: uid;
    title: string;
    description: string;
    icon: string;
    rule: Rule
}