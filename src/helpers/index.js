export const withHttp = (url) =>
  !/^https?:\/\//i.test(url) ? `http://${url}` : url;

export const cleanUrl = (url) => url.replace(/(^\w+:|^)\/\//, "");

export const iamgeToDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
