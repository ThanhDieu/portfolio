export const formatText = (skills: Record<string, string>) => {
    return Object.entries(skills).map(([key, value]) => {
        const formattedKey = key.replace(/_/g, ' ');
        return `<li><strong>${formattedKey}:</strong> ${value}</li>`;
    }).join('');
};