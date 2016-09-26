"use strict";

var assert = require("assert");
var ext = require("./");

it("should return correct extensions", function() {
  assert(ext("") === "");
  assert(ext(".") === "");
  assert(ext("file.") === "");
  assert(ext(".a.js") === "js");
  assert(ext("file.zip") === "zip");
  assert(ext("Makefile") === "makefile");
  assert(ext(".Dockerfile") === "dockerfile");
  assert(ext("Makefile", {preserveCase: true}) === "Makefile");
  assert(ext("INDEX.HTML", {preserveCase: true}) === "HTML");
  assert(ext(".Dockerfile", {preserveCase: true}) === "Dockerfile");
});
