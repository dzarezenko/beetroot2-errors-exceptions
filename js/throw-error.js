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
  if (e instanceof InvalidFormDataError) {
    switch (e.errorCode) {
      case (42): {
        console.log(`${e.name} (${e.errorCode}): ${e.message}`);

        break;
      }
    }
    
  }
}
