function stringify_obj_from_json(obj_from_json){

  if(typeof obj_from_json !== "object" && !Array.isArray(obj_from_json)){
    // not an object, stringify using native function
    return JSON.stringify(obj_from_json);
  }

  // Next implements recursive array or object serialization according to JSON spec
  // but without quotes around the keys.

  if(Array.isArray(obj_from_json)){
    let props = obj_from_json
      .map(el => `${stringify_obj_from_json(el)}`)
      .join(",");
    return `[${props}]`;
  }

  let props = Object
    .keys(obj_from_json)
      .map(key => `"${key}":${stringify_obj_from_json(obj_from_json[key])}`)
      .join(",");
  return `{${props}}`;
}
