import { h } from "vue";

// CustomIcons
import batata from "./HMiddleIcon.vue";

const customSvgNameToComponent = {
  batata,
};

const customSVGs = {
  component: (props) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs };
