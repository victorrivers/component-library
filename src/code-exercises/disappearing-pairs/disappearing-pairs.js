function solution(S) {
  return transform(S);
}

function transform(S) {
  let result = S;
  let isTransformed = false;
  const indexA = S.indexOf("AA");
  if (indexA !== -1) {
    result = S.replaceAt(indexA);
    isTransformed = true;
  }

  const indexB = S.indexOf("BB");
  if (indexB !== -1) {
    result = S.replaceAt(indexB);
    isTransformed = true;
  }

  const indexC = S.indexOf("CC");
  if (indexC !== -1) {
    result = S.replaceAt(indexC);
    isTransformed = true;
  }

  if (isTransformed) {
    return transform(result);
  }
  return result;
}

String.prototype.replaceAt = function (index) {
  return this.substring(0, index) + this.substring(index + 2);
};
