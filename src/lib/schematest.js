// JSON Schema example
// NPM package: https://www.npmjs.com/package/jsonschema

import * as JsonSchema from "jsonschema";
import Ajv from "ajv";
import S from "fluent-json-schema";

// Validator var for use in validation function
const validator = new JsonSchema.Validator();

// Example Validation [START]
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
// Example Validation [END]

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

// Ajv Example
const ajv = new Ajv();

// Ajv Schema
const ajvSchema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

// Example data
const ajvDummy = {
  foo: 1,
  bar: "abc",
};

// Compile schema into validator function
const ajvalidate = ajv.compile(ajvSchema);

// Feed data into validator function
const ajvalid = ajvalidate(ajvDummy);

// Log result
if (ajvalid) {
  console.log("Ajv Data:", ajvDummy);
} else {
  console.log("Ajv Data:", ajvalidate.errors);
}

// Fluent Json Schema
const generateSchema = S.object()
  .prop("foo", S.integer().required())
  .prop("bar", S.string().required())
  .valueOf();

const generatedSchema = ajv.compile(generateSchema);

const generatedResponse = generatedSchema(ajvDummy);

if (generatedResponse) {
  console.log("Generated Response:", ajvDummy);
} else {
  console.log("Generated Response:", generatedSchema.errors);
}
