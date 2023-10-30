export const setDate = (date) => new Date(date).toISOString().substring(0, 10);
export const setUrlSearchParams = (key, value) => {
  if ('URLSearchParams' in window) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set([key], value);
    const newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
  }
}
