const cache = {};

async function apiRequest(url, options = {}, retries = 2) {

  if (cache[url]) {
    return cache[url];
  }

  try {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 5000);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    clearTimeout(timeout);

    const data = await response.json();

    cache[url] = data;

    return data;

  } catch (error) {

    if (retries > 0) {
      return apiRequest(url, options, retries - 1);
    }

    throw error;
  }
}