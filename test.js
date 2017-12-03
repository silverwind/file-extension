"use strict";
const ext = require("./");
const assert = require("assert");

[
  {in: "", out: ""},
  {in: ".", out: ""},
  {in: "file.", out: ""},
  {in: ".a.js", out: "js"},
  {in: "file.zip", out: "zip"},
  {in: "Makefile", out: "makefile"},
  {in: ".Dockerfile", out: "dockerfile"},
  {in: "/a/b/file.", out: ""},
  {in: "/.a.js", out: "js"},
  {in: "C:\\file.zip", out: "zip"},
  {in: "\\\\host\\Makefile", out: "makefile"},
  {in: "~/.Dockerfile", out: "dockerfile"},
  {in: "Makefile", opts: {preserveCase: true}, out: "Makefile"},
  {in: "INDEX.HTML", opts: {preserveCase: true}, out: "HTML"},
  {in: ".Dockerfile", opts: {preserveCase: true}, out: "Dockerfile"},
].forEach(function(test) {
  assert(ext(test.in, test.opts) === test.out);
});
