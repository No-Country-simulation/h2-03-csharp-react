const capitalize = (str: string | null) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export default capitalize;
