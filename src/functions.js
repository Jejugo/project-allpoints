function camelize(str){
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};

function arrayCamelize(arr){
  const newArr = arr.map(item => {
    return camelize(item);
  });

 return newArr;
};

export default {camelize, arrayCamelize};