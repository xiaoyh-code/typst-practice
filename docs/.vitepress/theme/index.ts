import DefaultTheme from "vitepress/theme";
import "./custom.css";
import SandboxEditor from "./components/SandboxEditor.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("SandboxEditor", SandboxEditor);
  },
};
