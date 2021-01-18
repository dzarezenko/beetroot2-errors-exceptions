let json = `{ "age": 34, "name: "Dmytro" }`;

let fn = () => {
  try {
    //alert("Hello World!!!');
    //eval(`alert("Hello World!!!')`);

    let data = JSON.parse(json);
    let name = data.name;
    console.log(name);

  } catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);

    return;
  } finally {
    console.log("JSON was processed!");
  }

  //console.log("JSON was processed!");
}

fn();
