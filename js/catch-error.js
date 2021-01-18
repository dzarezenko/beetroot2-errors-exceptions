let json = `{ "age": 34, "name": "Dmytro" }`;

try {
  //alert("Hello World!!!');
  //eval(`alert("Hello World!!!')`);

  let data = JSON.parse(json);
  let name = data.name;
  console.log(name);

} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("Finished");
