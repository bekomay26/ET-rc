/**
 * Set up default Reaction favicon for all browsers/platforms
 * Assets generated by https://realfavicongenerator.net
 */


// folder path where all assets live
const basePath = "https://assets.reactioncommerce.com/favicon/";


// define link tags
const linkTags = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: `${basePath}apple-touch-icon.png`
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/etrc-logo.png" // "favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/etrc-logo.png" // "favicon-16x16.png"
  },
  {
    rel: "manifest",
    href: `${basePath}manifest.json`
  },
  {
    rel: "mask-icon",
    color: "#5bbad5",
    href: `${basePath}safari-pinned-tab.svg`
  },
  {
    rel: "shortcut icon",
    href: `${basePath}favicon.ico`
  }
];


// define meta tags
const metaTags = [
  {
    name: "msapplication-config",
    content: `${basePath}browserconfig.xml`
  },
  {
    name: "theme-color",
    content: "#ffffff"
  }
];


/**
 * Add a tag to the <head> of the page
 * @param {String} type - tag type (link, meta, etc.)
 * @param {Object} details - key/value pairs for tag attributes
 * @return {undefined} no return value
 */
function addTag(type, details) {
  let props = "";
  for (const key in details) {
    if ({}.hasOwnProperty.call(details, key)) {
      props += `${key}="${details[key]}" `;
    }
  }
  const tag = `<${type} ${props}/>`;
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", tag);
}


// add the favicon tags to the <head>
linkTags.forEach(tag => addTag("link", tag));
metaTags.forEach(tag => addTag("meta", tag));


// HTML output should look like this...
//
// <link rel="apple-touch-icon" sizes="180x180" href="https://assets.reactioncommerce.com/favicon/apple-touch-icon.png">
// <link rel="icon" type="image/png" href="https://assets.reactioncommerce.com/favicon/favicon-32x32.png" sizes="32x32">
// <link rel="icon" type="image/png" href="https://assets.reactioncommerce.com/favicon/favicon-16x16.png" sizes="16x16">
// <link rel="manifest" href="https://assets.reactioncommerce.com/favicon/manifest.json">
// <link rel="mask-icon" href="https://assets.reactioncommerce.com/favicon/safari-pinned-tab.svg" color="#5bbad5">
// <link rel="shortcut icon" href="https://assets.reactioncommerce.com/favicon/favicon.ico">
// <meta name="msapplication-config" content="https://assets.reactioncommerce.com/favicon/browserconfig.xml">
// <meta name="theme-color" content="#ffffff">
