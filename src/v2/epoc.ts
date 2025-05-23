import { Content } from "./content";
import { html, uid, uri, langcode } from "./types";
import { Question } from "./question";
import { Badge } from "./badge";
import { Rule } from "./rule";
import { License } from './license';
import { Publisher } from './publisher';

/**
 * Contains all the ePoc metadata that can be retrieved from the library API
 */
export interface EpocMetadata {
    /**
     * Specifies the ePoc editor version for debug purpose
     */
    editorVersion: string;

    /**
     * Specifies the ePoc data format version for backward compatibility
     */
    version: number;

    /**
     * Specifies the ePoc language
     */
    lang?: string;

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
    thumbnail: uri;

    /**
     * Defines the summary of the ePoc
     */
    summary: html;

    /**
     * List of all authors of the ePoc
     */
    authors: Author[];

    /**
     * The entity responsible for making the ePoc available
     */
    publisher: Publisher;

    /**
     * Defines the list of pedagogical objectives of the ePoc
     */
    objectives: string[];

    /**
     * Defines the list of prerequisites to know before starting the ePoc
     */
    prerequisites: string[];

    /**
     * Specifies the total of chapters of the ePoc
     */
    chaptersCount: number;

    /**
     * Specifies the total of assessments of the ePoc
     */
    assessmentsCount: number;

    /**
     * Specifies the mean duration of the ePoc chapters
     */
    chapterDuration: number;

    /**
     * Specifies the download URL
     */
    download: uri;

    /**
     * Tags associated with the ePoc for categorization and filtering.
     * @optional
     */
    tags?: string[];

    /**
     * Map of translations available (lang code, ePoc id)
     */
    translations?: Map<langcode, uid>;

    /**
     * Specifies the ePoc license
     */
    license: License;
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
     * Specifies if the ePoc is not delivering a certificate
     * @default false
     */
    certificateDisabled?: boolean;

    /**
     * The score to obtain the certificate
     * @deprecated Use badges instead
     */
    certificateScore?: number;

    /**
     * The number of badges to obtain the certificate
     * @default 1
     */
    certificateBadgeCount: number;

    /**
     * Map of all badges (id, badge) of the ePoc
     */
    badges: Map<uid, Badge>;

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
    title: string;

    /**
     * Specifies the author's profil picture
     */
    description: html;
}

export interface Parameters {}

export interface Chapter {
    /**
     * Specifies the chapter title
     */
    title: string;

    /**
     * Specifies the chapter subtitle
     */
    subtitle?: string;

    /**
     * Specifies the chapter starting edges
     */
    edges: Edge[];

    /**
     * Estimated duration to complete the chapter
     */
    duration: number;
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
     * Specifies if the screen appears in the detailed table of contents
     */
    hidden?: boolean;

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
     * Specifies the target screen uid
     */
    target: uid;

    /**
     * Specifies the rule to activate this edge
     */
    rule: Rule;
}
