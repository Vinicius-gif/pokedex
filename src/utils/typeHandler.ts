export const typeHandler = (tipos : any) => {
  if (tipos[1]) {
    return tipos[0].type.name + " | " + tipos[1].type.name;
  }
  return tipos[0].type.name;
};