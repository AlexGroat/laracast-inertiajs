require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from "@/Pages/Shared/Layout";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}.vue`)).default;

        page.layout ??= Layout;

        return page;
    },

    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({ methods: { route } })
            .mount(el);
    },

    title: (title) => "My App - " + title,
});

InertiaProgress.init({
    color: "red",
    showSpinner: true,
});
