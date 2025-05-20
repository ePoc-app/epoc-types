/**
 * Represents a publisher, which is an entity responsible for making resources
 * available. This could be an organization, institution, or individual that
 * publishes educational materials, books, articles, or other types of content.
 */
export interface Publisher {
    /**
     * A unique identifier for the publisher, such as an ISBN or URI.
     */
    identifier: string;

    /**
     * The name of the publisher.
     */
    name: string;

    /**
     * A brief description of the publisher.
     * @optional
     */
    description?: string;

    /**
     * URL or path to the publisher's logo.
     * @optional
     */
    logo?: string;

    /**
     * Contact email for the publisher.
     * @optional
     */
    email?: string;

    /**
     * URL of the publisher's website.
     * @optional
     */
    website?: string;
}
