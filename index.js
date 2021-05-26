function updateObjectWithKeyAndValue(object, key, value) {
  const newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
