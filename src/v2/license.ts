/**
 * Represents a license for a resource, including its name, URL, and content.
 */
export interface License {
    /**
     * The name of the license (e.g., "Creative Commons").
     */
    name: string;

    /**
     * The URL where the full license text can be found.
     */
    url: string;

    /**
     * The content or summary of the license.
     */
    content: string;
}