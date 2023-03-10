import {Content} from './content';
import {html, uid, uri, langcode} from './types';
import {Question} from './question';
import {Achievement} from './achievement';

/**
* Contains all the ePoc metadata that can be retrieved from the library API 
*/
export interface EpocMetadata {
    /**
     * Specifies the ePoc data format version for backward compatibility
     */
    version: number;

    /**
     * Specifies the last modification date (YYYY-MM-DD HH:MM:SS)
     */
    lastModif: string;

    /**
     * Defines the unique id of the ePoc
     */
    id: string;

    /**
     * Defines the edition name of the ePoc
     */
    edition: string;

    /**
     * Defines the title of the ePoc
     */
    title: string;

    /**
     * Defines the path or URL of the ePoc illustration
     */
    image: uri;

    /**
     * Defines the path or URL of the ePoc video teaser
     */
    teaser?: uri;

    /**
     * Defines the path or URL of the video thumbnail
     */
    thumbnail : uri;

    /**
     * Defines the summary of the ePoc
     */
    summary: html;

    /**
     * List of all authors of the ePoc
     */
    authors: Author[];

    /**
     * Defines the list of pedagogical objectives of the ePoc
     */
    objectives: string[];

    /**
     * Specifies the total of chapters of the ePoc
     */
    chaptersCount: number;

    /**
     * Specifies the total of assessments of the ePoc
     */
    assessmentsCount: number;

    /**
     * Specifies the download URL
     */
    download: uri;

    /**
     * Map of translations available (lang code, ePoc id)
     */
    translations?: Map<langcode, uid>;

}

/**
 * Contains all the ePoc metadata and contents
 */
export interface Epoc extends EpocMetadata {
    /**
     * Map of all chapters (id, chapter) of the ePoc
     */
    chapters: Map<uid, Chapter>;

    /**
     * Map of all screens (id, screens) of the ePoc
     */
    screens: Map<uid, Screen>;


    /**
     * Map of all contents (id, content) of the ePoc
     */
    contents: Map<uid, Content>;

    /**
     * Map of all questions (id, question) of the ePoc
     */
    questions: Map<uid, Question>;

    /**
     * Parameters of the ePoc
     */
    parameters: Parameters;

    /**
     * The score to obtain the certificate
     * @deprecated Use pedagogical achievements instead
     */
    certificateScore?: number;

    /**
     * Map of all contents (id, content) of the ePoc
     */
    achievements: Map<uid, Achievement>

    /**
     * List of plugins of the ePoc
     */
    plugins: uri[];

}


export interface Author {

    /**
     * Specifies the author's full name (firstname and lastname)
     */
    name: string;

    /**
     * Specifies the author's profil picture
     */
    image: string;

    /**
     * Specifies the author's job title
     */
    titre: string;

    /**
     * Specifies the author's profil picture
     */
    description: html;
}

export interface Parameters {

    /**
     * Specifies the chapter label globally
     * @default 'Chapter'
     */
    chapterLabel?: string;
}

export interface Chapter {

    /**
     * Specifies the chapter label
     * @default 'Chapter'
     */
    label?: string;

    /**
     * Specifies the chapter title
     */
    title: string;

    /**
     * Specifies the chapter starting edges
     */
    edges: Edge[];
}

export interface Screen {
    
    /**
     * Specifies the screen card icon
     */
    icon: string;

    /**
     * Specifies the screen card title
     */
    title: string;

    /**
     * Specifies the screen card subtitle
     */
    subtitle?: string;

    /**
     * List the screen content ids
     */
    contents: uid[];

    /**
     * Specifies the screen edges
     */
    edges: Edge[];
}

export interface Edge {

    /**
     * Specifies the source screen uid
     */
    source: uid;
  
    /**
     * Specifies the target screen uid
     */
    target: uid;
  
    /**
     * @Todo Define conditionnal behavior of edges
     */
    data?: Object;
}
