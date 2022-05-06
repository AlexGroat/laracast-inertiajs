import hljs from "highlight.js/lib/common";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";

import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("php", php);
hljs.registerLanguage("javascript", javascript);

// if no query selection is made, highlight all
export function highlight(selector) {
    if (!selector) {
        hljs.highlightAll();

        return;
    }

    document.querySelectorAll(selector + " pre code ").forEach((element) => {
        hljs.highlightElement(element);
    });
}
