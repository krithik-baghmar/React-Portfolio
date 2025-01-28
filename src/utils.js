const liveURL = import.meta.url;
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, liveURL).href;
}