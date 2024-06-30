// GenerateHash.js
/**
 * Generates a SHA-256 hash of the content from a blob URL.
 * @param {string} blobUrl - The URL of the blob resource.
 * @returns {Promise<string>} - A promise that resolves to the hexadecimal representation of the hash.
 */
const generateHash = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

export default generateHash;
