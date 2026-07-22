import DefaultTheme from "vitepress/theme";
import TypstPlayground from "./components/TypstPlayground.vue";
import FigureImage from "./components/FigureImage.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TypstPlayground", TypstPlayground);
    app.component("FigureImage", FigureImage);
  },
};
