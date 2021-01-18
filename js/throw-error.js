let fn = () => {

  // ...

  if (true /* invalid data detection condition */) {
    throw new Error("Invalid data received");
  }

}

try {
  fn();
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
