import writeStateEntryToElement from "state-util/src/write-state-entry-to-element";

const StateBridge = ({
  children = null,
  store,
  element = document.body,
  keys,
}) => {
  const serialize = () => {
    const state = store.getState();
    (keys || Object.keys(state)).forEach(key => {
      const value = state[key];
      if (
        value === null ||
        typeof value === "boolean" ||
        typeof value === "string" ||
        typeof value === "number"
      ) {
        writeStateEntryToElement({ debug: true, element, key, value });
      } else {
        element.setAttribute("data-state-" + key, null);
      }
    });
  };
  store.subscribe(serialize);
  serialize();
  return children;
};

export default StateBridge;
