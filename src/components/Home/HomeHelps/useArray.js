import array from "./array.json";

const FUNDATIONS = "fundations";
const ORGANIZATIONS = "organizations";
const LOCAL = "local";

export default () => {
  const fundationsArray = array.filter(({type}) => type === FUNDATIONS);
  const organizationsArray = array.filter(({type}) => type === ORGANIZATIONS);
  const localArray = array.filter(({type}) => type === LOCAL);

  return {
    fundationsArray, organizationsArray, localArray
  };
};

export { FUNDATIONS, ORGANIZATIONS, LOCAL };