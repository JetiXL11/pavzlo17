function isEmpty(obj) {
  // ваш код...
 for (let key in obj) {
    // Учитываем только собственные свойства объекта (не унаследованные)
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

let schedule = {};