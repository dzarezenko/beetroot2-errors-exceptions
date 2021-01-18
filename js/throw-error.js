class InvalidFormDataError extends Error {

  constructor(errorCode, ...params) {
    super(...params);

    this.errorCode = errorCode;
    this.name = "InvalidFormDataError";
  }

}

let fn = () => {

  // ...

  if (true /* invalid data detection condition */) {
    throw new InvalidFormDataError(42, "Invalid data received");
  }

}

try {
  fn();
} catch (e) {
  console.log(`${e.name} (${e.errorCode}): ${e.message}`);
}
