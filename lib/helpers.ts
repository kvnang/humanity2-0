export const capitalizeEachWord = (str: string) =>
  str.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());

export const formatKey = (key: string) => {
  // Replace camelCase with spaces
  // Replace dashes with spaces
  // Capitalize first letter of each word

  return capitalizeEachWord(
    key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/-/g, " ")
  );
};
