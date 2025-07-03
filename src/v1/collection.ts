import { EpocMetadata } from './epoc';
import { Publisher } from './publisher';
import { License } from './license';
import { uid } from './types';

/**
 * Represents a collection of ePoc resources. An ePocCollection is a curated set
 * of educational resources, which can include various types of content such as
 * documents, videos, interactive modules, etc. This interface provides metadata
 * about the collection as a whole and includes the individual ePoc resources.
 */
export interface ePocCollection {
    /**
     * A unique identifier for the collection following a reverse domain name convention.
     * @example: fr.inria.learninglab.epocs
     */
    id: string;

    /**
     * The title of the collection.
     */
    title: string;

    /**
     * A description of the collection's purpose or content.
     */
    description: string;

    /**
     * The entity responsible for publishing the collection.
     */
    publisher: Publisher;

    /**
     * Default license for the collection.
     * @optional
     */
    licence?: License;

    /**
     * The url to fetch the collection.
     */
    url: string;

    /**
     * Tags associated with the collection for categorization and filtering.
     * @optional
     */
    tags?: string[];


    /**
     * Map of ePocs (id, ePoc metadata) included in this collection.
     */
    ePocs: Record<uid, EpocMetadata>;
}
