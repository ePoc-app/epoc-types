import {uid} from './types';
import {Rule} from './rule'

/**
* Describe a pedagogical achievement and conditions to unlock it
*/
export interface Achievement {
    /**
     * Achievement unique id
     */
    id: uid;

    /**
     * Achievement title that will be shown in the course
     */
    title: string;

    /**
     * The rule to obtain the achievement
     */
    rule: Rule 
}
