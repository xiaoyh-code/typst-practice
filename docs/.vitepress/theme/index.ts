import DefaultTheme from "vitepress/theme";
import TypstPlayground from "./components/TypstPlayground.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TypstPlayground", TypstPlayground);
  },
};
