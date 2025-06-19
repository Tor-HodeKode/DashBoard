// JSON Schema example
// NPM package: https://www.npmjs.com/package/jsonschema

import * as JsonSchema from "jsonschema";

const validator = new JsonSchema.Validator();
const validInstance = 4;
const invalidInstance = "Foobar";

const schemaTest = { type: "number" };

console.log(
  "Validation result (validInstance):",
  validator.validate(validInstance, schemaTest).valid
);
console.log(
  "Validation result (invalidInstance):",
  validator.validate(invalidInstance, schemaTest).valid
);

const obj = {
  username: "Foo",
  userId: "0123456789abdef",
  forcePasswordChange: false,
};

const schemaUserObj = {
  username: { type: "string" },
  userId: { type: "string" },
  forcePasswordChange: { type: "boolean" },
};

console.log("Object validator:", validator.validate(obj, schemaUserObj).valid);
