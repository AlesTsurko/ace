/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from ../SuperCollider.tmLanguage (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/

define(function(require, exports, module) {
"use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var SuperColliderHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
      start: [{
        token: "keyword",
        regex: /\b(?:if|while|for|forBy|do|case|switch)\b/
      }, 
      {
        token: "keyword.var",
        regex: /\b(?:var|classvar)\b/
      }, 
      {
        token: "string.double",
        regex: /"/,
        push: [{
          token: "string.double",
          regex: /"/,
          next: "pop"
        }, {
          token: "constant.character.escape",
          regex: /\\./
        }, {
          defaultToken: "string.double"
        }]
      }, 
      {
        token: "string.symbol",
        regex: /'/,
        push: [{
          token: "string.symbol",
          regex: /'/,
          next: "pop"
        }, {
          token: "constant.character.escape",
          regex: /\\./
        }, {
          defaultToken: "string.symbol"
        }]
      }, 
      {
        token: "constant.character",
        regex: /\$./
      }, 
      {
        token: "entity.name.tag",
        regex: /[a-z][a-zA-Z0-9_]*\:/
      }, 
      {
        token: [
          "text",
          "entity.name.function",
          "text",
          "text",
          "text"
        ],
        regex: /^(\s*\+*\s*)([A-Z]{1}[a-zA-Z0-9_]*)(\s*\:{1}\s*)([A-Z]{1}[a-zA-Z0-9_]*)(\s*\{)/
      },
      {
        token: ["entity.name.function", "text"],
        regex: /^([A-Z_]{1}[a-zA-Z0-9_]*)([^a-zA-Z0-9_])/
      }, 
      {
        token: ["text", "variable.parameter"],
        regex: /({[\s]*)(\|)/,
        push: [{
          token: "variable.parameter",
          regex: /\|/,
          next: "pop"
        }, {
          defaultToken: "variable.parameter"
        }]
      }, 
      {
        token: ["text", "variable.parameter"],
        regex: /({[\s]*)(arg)/,
        push: [{
          token: "text",
          regex: /;/,
          next: "pop"
        }, {
          defaultToken: "variable.parameter"
        }]
      }, 
      {
        token: "keyword.operator",
        regex: /!|%|&|\*|\-|\+|==|=|!=|!=|<=|<!|>=|<|>|!|&&|\|\|/
      }, 
      {
        token: [
          "text",
          "entity.name.function",
          "text"
        ],
        regex: /([^a-zA-Z0-9\\])([A-Z_]{1}[a-zA-Z0-9_]*)([^a-zA-Z0-9_])/
      },
      {
        token: "constant.language",
        regex: /\b(?:inf|nil|true|false)\b/
      }, 
      {
        token: "string.symbol",
        regex: /\\[a-zA-Z0-9\_]+/
      }, 
      {
        token: [
          "text",
          "entity.name.function",
          "text"
        ],
        regex: /^(\s*)(\**[a-z]{1}[a-zA-Z0-9_]*)(\s*\{)/
      }, 
      {
        token: "variable.other",
        regex: /\~[a-zA-Z0-9_]+/
      }, 
      {
        token: "variable.language",
        regex: /\b(?:this|thisThread|thisMethod|thisFunction|thisProcess)\b/
      }, 
      {
        token: "comment.single",
        regex: /\/\/.*/
      }, 
      {
        token: "comment.multiline",
        regex: /\/\*/,
        push: [{
          token: "comment.multiline",
          regex: /\*\//,
          next: "pop"
        }, {
          defaultToken: "comment.multiline"
        }]
      }, 
      {
        token: "constant.numeric",
        regex: /\\b(0[xX][A-Fa-f0-9](?=(_?[A-Fa-f0-9]))\\2(?:)*|\\d(?=(_?\\d))\\3(?:)*(\\.(?!(?:[\\s]|[\\d]))(?=(_?\\d))\\5(?:)*)?([eE][-+]?\\d(?=(_?\\d))\\7(?:)*)?|0[bB][01]+)\\b/,
        // TODO: "FIXME: regexp doesn't have js equivalent",
        // originalRegex: "\\b(0[xX]\\h(?>_?\\h)*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0[bB][01]+)\\b",
        comment: "Numbers"
      }
      ]
    };

    this.normalizeRules();
  };

  SuperColliderHighlightRules.metaData = {
    fileTypes: ["sc", "scd"],
    foldingStartMarker: "\\{|\\/\\*|\\(",
    foldingStopMarker: "\\}|\\*\\/|\\)",
    keyEquivalent: "^~S",
    name: "SuperCollider",
    scopeName: "source.supercollider"
  };


  oop.inherits(SuperColliderHighlightRules, TextHighlightRules);

  exports.SuperColliderHighlightRules = SuperColliderHighlightRules;
});
