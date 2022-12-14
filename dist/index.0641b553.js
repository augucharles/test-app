// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2iQxA":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ??? Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>???? <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cardashiftLucidContracts = require("cardashift-lucid-contracts");
var _cardashiftLucidContractsDefault = parcelHelpers.interopDefault(_cardashiftLucidContracts);
var _configJs = require("./config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
console.log("Hello world!");
async function connect() {
    (0, _cardashiftLucidContractsDefault.default)((0, _configJsDefault.default).url, (0, _configJsDefault.default).apiKey, "nami").then(({ claimFunds , fundsAvailable  })=>{
        const epData = {
            // native1
            addr_test1wplllmmv66873lu9fxvralrddql5pxqg9ws8wvy4tz7gquqnyhmwk: [
                {
                    nativeScript: {
                        unlockTime: 61302000,
                        pkh: "404b36ba72b1e6602d33ad069ef25d8b65757c8d728e02aa1a280cd8"
                    },
                    asset: {
                        currencySymbol: "",
                        tokenName: ""
                    }
                }
            ],
            // native2
            addr_test1wr4s67h09peh3ssrx95l5k5rlfzw4ez4x2hlsuf6m4pwukc87xd44: [
                {
                    nativeScript: {
                        unlockTime: 61310000,
                        pkh: "404b36ba72b1e6602d33ad069ef25d8b65757c8d728e02aa1a280cd8"
                    },
                    asset: {
                        currencySymbol: "",
                        tokenName: ""
                    }
                }
            ]
        };
        fundsAvailable(epData).then(console.log);
    });
}

},{"cardashift-lucid-contracts":"81ge9","@parcel/transformer-js/src/esmodule-helpers.js":"k4nC5","./config.js":"jtCLN"}],"81ge9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lucidCardano = require("lucid-cardano");
function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return generator._invoke = function(innerFn, self, context) {
            var state = "suspendedStart";
            return function(method, arg) {
                if ("executing" === state) throw new Error("Generator is already running");
                if ("completed" === state) {
                    if ("throw" === method) throw arg;
                    return doneResult();
                }
                for(context.method = method, context.arg = arg;;){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if ("next" === context.method) context.sent = context._sent = context.arg;
                    else if ("throw" === context.method) {
                        if ("suspendedStart" === state) throw state = "completed", context.arg;
                        context.dispatchException(context.arg);
                    } else "return" === context.method && context.abrupt("return", context.arg);
                    state = "executing";
                    var record = tryCatch(innerFn, self, context);
                    if ("normal" === record.type) {
                        if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    }
                    "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                }
            };
        }(innerFn, self, context), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        this._invoke = function(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (undefined === method) {
            if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        catch: function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var groupBy = function groupBy(array, predicate) {
    return array.reduce(function(acc, cur) {
        var key = predicate(cur);
        if (!acc[key]) acc[key] = [];
        acc[key].push(cur);
        return acc;
    }, {});
};
var deduplicateUtxosReducer = function deduplicateUtxosReducer(acc, cur) {
    return [].concat(acc, cur.utxos.filter(function(newUtxo) {
        return !acc.some(function(existingUtxo) {
            return newUtxo.txHash === existingUtxo.txHash && newUtxo.outputIndex === existingUtxo.outputIndex;
        });
    }));
};
var claimChecks = function claimChecks(lucid) {
    return function(pkh, unlockTime, assets) {
        return [
            function() {
                return lucid.utils.unixTimeToSlot(Date.now()) > unlockTime;
            },
            function(u) {
                var assetsConcat = assets.map(function(asset) {
                    var assetConcat = asset.currencySymbol + asset.tokenName;
                    if (!assetConcat.length) assetConcat = "lovelace";
                    return assetConcat;
                });
                var containsAssets = assetsConcat.some(function(asset) {
                    return Object.keys(u.assets).includes(asset);
                });
                return !!u.assets && containsAssets;
            },
            //   assets.currencySymbol + assets.tokenName
            // ),
            function() {
                return !!pkh;
            }
        ];
    };
};
var buildTimelockedNativeScript = function buildTimelockedNativeScript(slot, pkh) {
    var ns = (0, _lucidCardano.C).NativeScripts["new"]();
    ns.add((0, _lucidCardano.C).NativeScript.new_timelock_start((0, _lucidCardano.C).TimelockStart["new"]((0, _lucidCardano.C).BigNum.from_str(slot.toString()))));
    ns.add((0, _lucidCardano.C).NativeScript.new_script_pubkey((0, _lucidCardano.C).ScriptPubkey["new"]((0, _lucidCardano.C).Ed25519KeyHash.from_hex(pkh))));
    var scriptAll = (0, _lucidCardano.C).ScriptAll["new"](ns);
    return (0, _lucidCardano.C).NativeScript.new_script_all(scriptAll);
};
var groupByScript = function groupByScript(toClaim) {
    var withAddress = Object.entries(toClaim).map(function(_ref) {
        var address = _ref[0], entries = _ref[1];
        return entries.map(function(entry) {
            return _extends({
                address: address
            }, entry);
        });
    }).flat(); // groups native scripts by address and native script (pkh and unlockTime)
    // This is to extract unique products of the form { address, nativeScript }
    var groupedByAddress = groupBy(withAddress, function(entry) {
        return entry.address + entry.nativeScript.pkh + entry.nativeScript.unlockTime;
    }); // traverse each individual group and merge the assets field
    var mergedAssets = Object.values(groupedByAddress).map(function(entries) {
        return entries.reduce(function(acc, entry) {
            return _extends({}, acc, {
                assets: [].concat(acc.assets, [
                    entry.asset
                ])
            });
        }, _extends({}, entries[0], {
            assets: []
        }));
    });
    return mergedAssets;
};
var lookupAvailableFunds = function lookupAvailableFunds(lucid) {
    return /*#__PURE__*/ function() {
        var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(toClaim) {
            var groupedByScript, addressesWithUtxos;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while(true)switch(_context2.prev = _context2.next){
                    case 0:
                        groupedByScript = groupByScript(toClaim);
                        _context2.next = 3;
                        return Promise.all(groupedByScript.map(/*#__PURE__*/ function() {
                            var _ref2 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(x) {
                                var utxos, predicates, claimableUtxos;
                                return _regeneratorRuntime().wrap(function _callee$(_context) {
                                    while(true)switch(_context.prev = _context.next){
                                        case 0:
                                            _context.next = 2;
                                            return lucid.utxosAt(x.address);
                                        case 2:
                                            utxos = _context.sent;
                                            predicates = claimChecks(lucid)(x.nativeScript.pkh, x.nativeScript.unlockTime, x.assets);
                                            claimableUtxos = utxos.filter(function(u) {
                                                return predicates.every(function(p) {
                                                    return p(u);
                                                });
                                            });
                                            return _context.abrupt("return", {
                                                utxos: claimableUtxos,
                                                nativeScript: x.nativeScript,
                                                address: x.address
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop();
                                    }
                                }, _callee);
                            }));
                            return function(_x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));
                    case 3:
                        addressesWithUtxos = _context2.sent;
                        return _context2.abrupt("return", addressesWithUtxos.filter(function(x) {
                            return !!x.utxos.length;
                        }));
                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2);
        }));
        return function(_x) {
            return _ref.apply(this, arguments);
        };
    }();
};
var totalClaimableUtxos = function totalClaimableUtxos(flattenedUtxos) {
    return flattenedUtxos.reduce(deduplicateUtxosReducer, []).map(function(x) {
        return x.assets;
    }).flat().reduce(function(acc, cur) {
        return Object.entries(cur).reduce(function(acc2, _ref3) {
            var _extends2, _extends3;
            var a = _ref3[0], v = _ref3[1];
            return a in acc2 ? _extends({}, acc2, (_extends2 = {}, _extends2[a] = acc2[a].valueOf() + v.valueOf(), _extends2)) : _extends({}, acc2, (_extends3 = {}, _extends3[a] = v, _extends3));
        }, acc);
    }, {});
};
var claimVestedFunds = function claimVestedFunds(lucid) {
    return /*#__PURE__*/ function() {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(toClaim) {
            var claimableUtxos, natives, tx, txScriptAttached, signed, txHash;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while(true)switch(_context3.prev = _context3.next){
                    case 0:
                        _context3.next = 2;
                        return lookupAvailableFunds(lucid)(toClaim);
                    case 2:
                        claimableUtxos = _context3.sent;
                        if (claimableUtxos.length) {
                            _context3.next = 5;
                            break;
                        }
                        throw Error("Nothing to claim");
                    case 5:
                        natives = claimableUtxos.map(function(x) {
                            return buildTimelockedNativeScript(x.nativeScript.unlockTime, x.nativeScript.pkh);
                        });
                        _context3.t0 = lucid.newTx().collectFrom(claimableUtxos.map(function(x) {
                            return x.utxos;
                        }).flat());
                        _context3.next = 9;
                        return lucid.wallet.address();
                    case 9:
                        _context3.t1 = _context3.sent;
                        _context3.t2 = totalClaimableUtxos(claimableUtxos);
                        tx = _context3.t0.payToAddress.call(_context3.t0, _context3.t1, _context3.t2);
                        natives.forEach(function(n) {
                            return tx.txBuilder.add_native_script(n);
                        });
                        _context3.next = 15;
                        return tx.validFrom(Date.now() - 100000).complete();
                    case 15:
                        txScriptAttached = _context3.sent;
                        _context3.next = 18;
                        return txScriptAttached.sign().complete();
                    case 18:
                        signed = _context3.sent;
                        _context3.next = 21;
                        return signed.submit();
                    case 21:
                        txHash = _context3.sent;
                        return _context3.abrupt("return", txHash);
                    case 23:
                    case "end":
                        return _context3.stop();
                }
            }, _callee3);
        }));
        return function(_x3) {
            return _ref4.apply(this, arguments);
        };
    }();
};
/**
 * Initialise the library and expose lib API
 * @param {string} blockfrostUrl Blockfrost API URL
 * @param {string} apiKey Blockfrost API Key
 * @param wallet Either bech32 encoded signing key or a browser wallet provider.
 * @param {string} [network]
 * @namespace cardashift-lucid-contracts
 */ var init = /*#__PURE__*/ function() {
    var _ref5 = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(blockfrostUrl, apiKey, wallet, network) {
        var lucid, getEndpointData;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while(true)switch(_context6.prev = _context6.next){
                case 0:
                    if (network === void 0) network = "Testnet";
                    _context6.next = 3;
                    return (0, _lucidCardano.Lucid)["new"](new (0, _lucidCardano.Blockfrost)(blockfrostUrl, apiKey), network);
                case 3:
                    lucid = _context6.sent;
                    if (wallet.startsWith("ed25519")) lucid.selectWalletFromPrivateKey(wallet);
                    else // For browser wallet:
                    lucid.selectWallet(wallet);
                    getEndpointData = function getEndpointData() {
                        return fetch("http://localhost:8000/data.json").then(function(r) {
                            return r.json();
                        });
                    };
                    return _context6.abrupt("return", {
                        /**
               * Query and return available funds that can be claimed optionally based on
               * given claim data, otherwise fetches claim data from configured endpoint otherwise.
               * @memberof cardashift-lucid-contracts
               */ fundsAvailable: function() {
                            var _fundsAvailable = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(epData) {
                                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                    while(true)switch(_context4.prev = _context4.next){
                                        case 0:
                                            _context4.t0 = totalClaimableUtxos;
                                            _context4.t1 = lookupAvailableFunds(lucid);
                                            _context4.t2 = epData;
                                            if (_context4.t2) {
                                                _context4.next = 7;
                                                break;
                                            }
                                            _context4.next = 6;
                                            return getEndpointData();
                                        case 6:
                                            _context4.t2 = _context4.sent;
                                        case 7:
                                            _context4.t3 = _context4.t2;
                                            _context4.next = 10;
                                            return (0, _context4.t1)(_context4.t3);
                                        case 10:
                                            _context4.t4 = _context4.sent;
                                            return _context4.abrupt("return", (0, _context4.t0)(_context4.t4));
                                        case 12:
                                        case "end":
                                            return _context4.stop();
                                    }
                                }, _callee4);
                            }));
                            function fundsAvailable(_x8) {
                                return _fundsAvailable.apply(this, arguments);
                            }
                            return fundsAvailable;
                        }(),
                        /**
               * Claim available funds optionally from given claim data when param is
               * provided, otherwise request claim data from configured endpoint.
               * @memberof cardashift-lucid-contracts
               * @param {ToClaim} [epData] Optional endpoint data to claim from
               */ claimFunds: function() {
                            var _claimFunds = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(epData) {
                                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                    while(true)switch(_context5.prev = _context5.next){
                                        case 0:
                                            _context5.t0 = claimVestedFunds(lucid);
                                            _context5.t1 = epData;
                                            if (_context5.t1) {
                                                _context5.next = 6;
                                                break;
                                            }
                                            _context5.next = 5;
                                            return getEndpointData();
                                        case 5:
                                            _context5.t1 = _context5.sent;
                                        case 6:
                                            _context5.t2 = _context5.t1;
                                            return _context5.abrupt("return", (0, _context5.t0)(_context5.t2));
                                        case 8:
                                        case "end":
                                            return _context5.stop();
                                    }
                                }, _callee5);
                            }));
                            function claimFunds(_x9) {
                                return _claimFunds.apply(this, arguments);
                            }
                            return claimFunds;
                        }()
                    });
                case 7:
                case "end":
                    return _context6.stop();
            }
        }, _callee6);
    }));
    return function init(_x4, _x5, _x6, _x7) {
        return _ref5.apply(this, arguments);
    };
}();
exports.default = init;

},{"lucid-cardano":"5vwnN","@parcel/transformer-js/src/esmodule-helpers.js":"k4nC5"}],"5vwnN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Blockfrost", ()=>Blockfrost);
parcelHelpers.export(exports, "C", ()=>C);
parcelHelpers.export(exports, "Construct", ()=>Construct);
parcelHelpers.export(exports, "Data", ()=>Data);
parcelHelpers.export(exports, "Lucid", ()=>Lucid);
parcelHelpers.export(exports, "Tx", ()=>Tx);
parcelHelpers.export(exports, "TxComplete", ()=>TxComplete);
parcelHelpers.export(exports, "TxSigned", ()=>TxSigned);
parcelHelpers.export(exports, "Utils", ()=>Utils);
parcelHelpers.export(exports, "assetsToValue", ()=>assetsToValue);
parcelHelpers.export(exports, "coreToUtxo", ()=>coreToUtxo);
parcelHelpers.export(exports, "costModel", ()=>costModel);
parcelHelpers.export(exports, "datumJsonToCbor", ()=>datumJsonToCbor);
parcelHelpers.export(exports, "fromHex", ()=>fromHex);
parcelHelpers.export(exports, "toHex", ()=>toHex);
parcelHelpers.export(exports, "utxoToCore", ()=>utxoToCore);
parcelHelpers.export(exports, "valueToAssets", ()=>valueToAssets);
var Buffer = require("buffer").Buffer;
var global = arguments[3];
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
var runtime_1 = createCommonjsModule(function(module) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined$1; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return obj[key];
        }
        try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
        } catch (err) {
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
        }
        exports.wrap = wrap;
        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};
        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function() {
            return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        define(Gp, "constructor", GeneratorFunctionPrototype);
        define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
            [
                "next",
                "throw",
                "return"
            ].forEach(function(method) {
                define(prototype, method, function(arg) {
                    return this._invoke(method, arg);
                });
            });
        }
        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        };
        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") reject(record.arg);
                else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                        invoke("next", value, resolve, reject);
                    }, function(err) {
                        invoke("throw", err, resolve, reject);
                    });
                    return PromiseImpl.resolve(value).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
            return this;
        });
        exports.AsyncIterator = AsyncIterator;
        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
             : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) throw new Error("Generator is already running");
                if (state === GenStateCompleted) {
                    if (method === "throw") throw arg;
                    // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                    return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while(true){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") // Setting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    context.sent = context._sent = context.arg;
                    else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") context.abrupt("return", context.arg);
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }
        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$1) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;
                if (context.method === "throw") {
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined$1;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                        // "return" to "throw", let that override the TypeError below.
                        return ContinueSentinel;
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value;
                // Resume execution at the desired location (see delegateYield).
                context.next = delegate.nextLoc;
                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined$1;
                }
            } else // Re-yield the result returned by the delegate method.
            return info;
            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
        }
        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        define(Gp, iteratorSymbol, function() {
            return this;
        });
        define(Gp, "toString", function() {
            return "[object Generator]";
        });
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) entry.catchLoc = locs[1];
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
                {
                    tryLoc: "root"
                }
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        exports.keys = function(object) {
            var keys = [];
            for(var key in object)keys.push(key);
            keys.reverse();
            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
                while(keys.length){
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }
                // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if (typeof iterable.next === "function") return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                            next.value = iterable[i];
                            next.done = false;
                            return next;
                        }
                        next.value = undefined$1;
                        next.done = true;
                        return next;
                    };
                    return next.next = next;
                }
            }
            // Return an iterator with no values.
            return {
                next: doneResult
            };
        }
        exports.values = values;
        function doneResult() {
            return {
                value: undefined$1,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                this.sent = this._sent = undefined$1;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined$1;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for(var name in this)// Not sure about the optimal order of these conditions:
                    if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined$1;
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined$1;
                    }
                    return !!caught;
                }
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                    // it, so set the completion value of the entire function to
                    // throw the exception.
                    return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else throw new Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function(type, arg) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                if (record.type === "break" || record.type === "continue") this.next = record.arg;
                else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            "catch": function(tryLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined$1;
                return ContinueSentinel;
            }
        };
        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
    }(// If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);
    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, in modern engines
        // we can explicitly access globalThis. In older engines we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
        else Function("r", "regeneratorRuntime = r")(runtime);
    }
});
/** Check if environment is Node.js or SSR like Gatsby or Next.js */ var importNodeOrSSR = /*#__PURE__*/ function() {
    var _ref = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee() {
        return runtime_1.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return require(/* webpackIgnore: true */ "c29d9fccce48de06");
                case 3:
                    return _context.abrupt("return", _context.sent);
                case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    return _context.abrupt("return", null);
                case 9:
                case "end":
                    return _context.stop();
            }
        }, _callee, null, [
            [
                0,
                6
            ]
        ]);
    }));
    return function importNodeOrSSR() {
        return _ref.apply(this, arguments);
    };
}();
/** @internal */ var C = typeof window !== "undefined" ? await /*#__PURE__*/ require("9fb610f6fff10223") : await /*#__PURE__*/ importNodeOrSSR();
var costModel = {
    plutusV1: function plutusV1() {
        var costModel = [
            197209,
            0,
            1,
            1,
            396231,
            621,
            0,
            1,
            150000,
            1000,
            0,
            1,
            150000,
            32,
            2477736,
            29175,
            4,
            29773,
            100,
            29773,
            100,
            29773,
            100,
            29773,
            100,
            29773,
            100,
            29773,
            100,
            100,
            100,
            29773,
            100,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            1000,
            0,
            1,
            150000,
            32,
            150000,
            1000,
            0,
            8,
            148000,
            425507,
            118,
            0,
            1,
            1,
            150000,
            1000,
            0,
            8,
            150000,
            112536,
            247,
            1,
            150000,
            10000,
            1,
            136542,
            1326,
            1,
            1000,
            150000,
            1000,
            1,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            1,
            1,
            150000,
            1,
            150000,
            4,
            103599,
            248,
            1,
            103599,
            248,
            1,
            145276,
            1366,
            1,
            179690,
            497,
            1,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            148000,
            425507,
            118,
            0,
            1,
            1,
            61516,
            11218,
            0,
            1,
            150000,
            32,
            148000,
            425507,
            118,
            0,
            1,
            1,
            148000,
            425507,
            118,
            0,
            1,
            1,
            2477736,
            29175,
            4,
            0,
            82363,
            4,
            150000,
            5000,
            0,
            1,
            150000,
            32,
            197209,
            0,
            1,
            1,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            150000,
            32,
            3345831,
            1,
            1
        ];
        var costmdls = C.Costmdls["new"]();
        var costmdl = C.CostModel["new"]();
        costModel.forEach(function(cost, index) {
            costmdl.set(index, C.Int.new_i32(cost));
        });
        costmdls.insert(C.Language.new_plutus_v1(), costmdl);
        return costmdls;
    }
};
var Utils = /*#__PURE__*/ function() {
    function Utils(lucid) {
        this.lucid = lucid;
    }
    var _proto = Utils.prototype;
    _proto.validatorToAddress = function validatorToAddress(validator, stakeCredential) {
        var validatorHash = this.validatorToScriptHash(validator);
        if (stakeCredential) return C.BaseAddress["new"](networkToId(this.lucid.network), C.StakeCredential.from_scripthash(C.ScriptHash.from_hex(validatorHash)), stakeCredential.type === "Key" ? C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_hex(stakeCredential.hash)) : C.StakeCredential.from_scripthash(C.ScriptHash.from_hex(stakeCredential.hash))).to_address().to_bech32();
        else return C.EnterpriseAddress["new"](networkToId(this.lucid.network), C.StakeCredential.from_scripthash(C.ScriptHash.from_hex(validatorHash))).to_address().to_bech32();
    };
    _proto.validatorToScriptHash = function validatorToScriptHash(validator) {
        if (validator.type === "Native") return C.NativeScript.from_bytes(fromHex(validator.script)).hash(C.ScriptHashNamespace.NativeScript).to_hex();
        else if (validator.type === "PlutusV1") return C.PlutusScript.from_bytes(fromHex(validator.script)).hash(C.ScriptHashNamespace.PlutusV1).to_hex();
        else if (validator.type === "PlutusV2") C.PlutusScript.from_bytes(fromHex(validator.script)).hash(C.ScriptHashNamespace.PlutusV2).to_hex();
        throw new Error("No variant matched");
    };
    _proto.scriptHashToCredential = function scriptHashToCredential(scriptHash) {
        return {
            type: "Script",
            hash: scriptHash
        };
    };
    _proto.keyHashToCredential = function keyHashToCredential(keyHash) {
        return {
            type: "Key",
            hash: keyHash
        };
    };
    _proto.generatePrivateKey = function generatePrivateKey() {
        return C.PrivateKey.generate_ed25519().to_bech32();
    };
    _proto.unixTimeToSlot = function unixTimeToSlot(unixTime) {
        return this.lucid.network === "Mainnet" ? _unixTimeToSlot(unixTime) : unixTimeToSlotTestnet(unixTime);
    };
    _proto.slotToUnixTime = function slotToUnixTime(slot) {
        return this.lucid.network === "Mainnet" ? _slotToUnixTime(slot) : slotToUnixTimeTestnet(slot);
    } /** Address can be in bech32 or hex */ ;
    _proto.getAddressDetails = function getAddressDetails(address) {
        /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // Base Address
        try {
            var parsedAddress = C.BaseAddress.from_address(C.Address.from_bytes(fromHex(address)));
            var paymentCredential = parsedAddress.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(parsedAddress.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(parsedAddress.payment_cred().to_scripthash().to_bytes())
            };
            var stakeCredential = parsedAddress.stake_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(parsedAddress.stake_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(parsedAddress.stake_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Base",
                    address: parsedAddress.to_address().to_bech32()
                },
                paymentCredential: paymentCredential,
                stakeCredential: stakeCredential
            };
        } catch (e) {}
        try {
            var _parsedAddress = C.BaseAddress.from_address(C.Address.from_bech32(address));
            var _paymentCredential = _parsedAddress.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress.payment_cred().to_scripthash().to_bytes())
            };
            var _stakeCredential = _parsedAddress.stake_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress.stake_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress.stake_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Base",
                    address: _parsedAddress.to_address().to_bech32()
                },
                paymentCredential: _paymentCredential,
                stakeCredential: _stakeCredential
            };
        } catch (e1) {} // Enterprise Address
        try {
            var _parsedAddress2 = C.EnterpriseAddress.from_address(C.Address.from_bytes(fromHex(address)));
            var _paymentCredential2 = _parsedAddress2.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress2.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress2.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Enterprise",
                    address: _parsedAddress2.to_address().to_bech32()
                },
                paymentCredential: _paymentCredential2
            };
        } catch (e2) {}
        try {
            var _parsedAddress3 = C.EnterpriseAddress.from_address(C.Address.from_bech32(address));
            var _paymentCredential3 = _parsedAddress3.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress3.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress3.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Enterprise",
                    address: _parsedAddress3.to_address().to_bech32()
                },
                paymentCredential: _paymentCredential3
            };
        } catch (e3) {} // Pointer Address
        try {
            var _parsedAddress4 = C.PointerAddress.from_address(C.Address.from_bytes(fromHex(address)));
            var _paymentCredential4 = _parsedAddress4.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress4.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress4.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Pointer",
                    address: _parsedAddress4.to_address().to_bech32()
                },
                paymentCredential: _paymentCredential4
            };
        } catch (e4) {}
        try {
            var _parsedAddress5 = C.PointerAddress.from_address(C.Address.from_bech32(address));
            var _paymentCredential5 = _parsedAddress5.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress5.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress5.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Pointer",
                    address: _parsedAddress5.to_address().to_bech32()
                },
                paymentCredential: _paymentCredential5
            };
        } catch (e5) {} // Reward Address
        try {
            var _parsedAddress6 = C.RewardAddress.from_address(C.Address.from_bytes(fromHex(address)));
            var _stakeCredential2 = _parsedAddress6.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress6.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress6.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Reward",
                    address: _parsedAddress6.to_address().to_bech32()
                },
                stakeCredential: _stakeCredential2
            };
        } catch (e6) {}
        try {
            var _parsedAddress7 = C.RewardAddress.from_address(C.Address.from_bech32(address));
            var _stakeCredential3 = _parsedAddress7.payment_cred().kind() === 0 ? {
                type: "Key",
                hash: toHex(_parsedAddress7.payment_cred().to_keyhash().to_bytes())
            } : {
                type: "Script",
                hash: toHex(_parsedAddress7.payment_cred().to_scripthash().to_bytes())
            };
            return {
                address: {
                    type: "Reward",
                    address: _parsedAddress7.to_address().to_bech32()
                },
                stakeCredential: _stakeCredential3
            };
        } catch (e7) {}
        throw new Error("No address type matched for: " + address);
    };
    return Utils;
}();
var valueToAssets = function valueToAssets(value) {
    var assets = {};
    assets["lovelace"] = BigInt(value.coin().to_str());
    var ma = value.multiasset();
    if (ma) {
        var multiAssets = ma.keys();
        for(var j = 0; j < multiAssets.len(); j++){
            var policy = multiAssets.get(j);
            var policyAssets = ma.get(policy);
            var assetNames = policyAssets.keys();
            for(var k = 0; k < assetNames.len(); k++){
                var policyAsset = assetNames.get(k);
                var quantity = policyAssets.get(policyAsset);
                var unit = toHex(policy.to_bytes()) + toHex(policyAsset.name());
                assets[unit] = BigInt(quantity.to_str());
            }
        }
    }
    return assets;
};
var assetsToValue = function assetsToValue(assets) {
    var multiAsset = C.MultiAsset["new"]();
    var lovelace = assets["lovelace"];
    var units = Object.keys(assets);
    var policies = Array.from(new Set(units.filter(function(unit) {
        return unit !== "lovelace";
    }).map(function(unit) {
        return unit.slice(0, 56);
    })));
    policies.forEach(function(policy) {
        var policyUnits = units.filter(function(unit) {
            return unit.slice(0, 56) === policy;
        });
        var assetsValue = C.Assets["new"]();
        policyUnits.forEach(function(unit) {
            assetsValue.insert(C.AssetName["new"](fromHex(unit.slice(56))), C.BigNum.from_str(assets[unit].toString()));
        });
        multiAsset.insert(C.ScriptHash.from_bytes(fromHex(policy)), assetsValue);
    });
    var value = C.Value["new"](C.BigNum.from_str(lovelace ? lovelace.toString() : "0"));
    if (units.length > 1 || !lovelace) value.set_multiasset(multiAsset);
    return value;
};
var utxoToCore = function utxoToCore(utxo) {
    var output = C.TransactionOutput["new"](C.Address.from_bech32(utxo.address), assetsToValue(utxo.assets));
    if (utxo.datumHash) output.set_datum(C.Datum.new_data_hash(C.DataHash.from_bytes(fromHex(utxo.datumHash))));
    return C.TransactionUnspentOutput["new"](C.TransactionInput["new"](C.TransactionHash.from_bytes(fromHex(utxo.txHash)), C.BigNum.from_str(utxo.outputIndex.toString())), output);
};
var coreToUtxo = function coreToUtxo(coreUtxo) {
    var _coreUtxo$output, _coreUtxo$output$datu, _coreUtxo$output$datu2;
    return {
        txHash: toHex(coreUtxo.input().transaction_id().to_bytes()),
        outputIndex: parseInt(coreUtxo.input().index().to_str()),
        assets: valueToAssets(coreUtxo.output().amount()),
        address: coreUtxo.output().address().to_bech32(),
        datumHash: (_coreUtxo$output = coreUtxo.output()) == null ? void 0 : (_coreUtxo$output$datu = _coreUtxo$output.datum()) == null ? void 0 : (_coreUtxo$output$datu2 = _coreUtxo$output$datu.as_data_hash()) == null ? void 0 : _coreUtxo$output$datu2.to_hex()
    };
};
var networkToId = function networkToId(network) {
    if (network === "Testnet") return 0;
    else if (network === "Mainnet") return 1;
    throw new Error("Network not found");
};
var fromHex = function fromHex(hex) {
    return Buffer.from(hex, "hex");
};
var toHex = function toHex(bytes) {
    return Buffer.from(bytes).toString("hex");
};
var _unixTimeToSlot = function _unixTimeToSlot(unixTime) {
    return Math.floor((unixTime - 1596491091000 + 4924800000) / 1000);
};
var unixTimeToSlotTestnet = function unixTimeToSlotTestnet(unixTime) {
    return Math.floor((unixTime - 1564431616000 - 29937600000) / 1000);
};
var _slotToUnixTime = function _slotToUnixTime(slot) {
    return 1596491091000 + (slot * 1000 - 4924800000);
};
var slotToUnixTimeTestnet = function slotToUnixTimeTestnet(slot) {
    return 1564431616000 + slot * 1000 + 29937600000;
};
var Construct = function Construct(index, args) {
    this.index = index;
    this.args = args;
};
var Data = /*#__PURE__*/ function() {
    function Data() {}
    Data.to = function to(data) {
        var serialize = function serialize(data) {
            try {
                if (typeof data === "bigint" || typeof data === "number" || typeof data === "string" && !isNaN(parseInt(data)) && data.slice(-1) === "n") {
                    var bigint = typeof data === "string" ? BigInt(data.slice(0, -1)) : data;
                    return C.PlutusData.new_integer(C.BigInt.from_str(bigint.toString()));
                } else if (typeof data === "string") return C.PlutusData.new_bytes(fromHex(data));
                else if (data instanceof Construct) {
                    var index = data.index, args = data.args;
                    var plutusList = C.PlutusList["new"]();
                    args.forEach(function(arg) {
                        return plutusList.add(serialize(arg));
                    });
                    return C.PlutusData.new_constr_plutus_data(C.ConstrPlutusData["new"](C.BigNum.from_str(index.toString()), plutusList));
                } else if (data instanceof Array) {
                    var _plutusList = C.PlutusList["new"]();
                    data.forEach(function(arg) {
                        return _plutusList.add(serialize(arg));
                    });
                    return C.PlutusData.new_list(_plutusList);
                } else if (data instanceof Map) {
                    var plutusMap = C.PlutusMap["new"]();
                    for(var _iterator = _createForOfIteratorHelperLoose(data.entries()), _step; !(_step = _iterator()).done;){
                        var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
                        plutusMap.insert(serialize(key), serialize(value));
                    }
                    return C.PlutusData.new_map(plutusMap);
                }
                throw new Error("Unsupported type");
            } catch (error) {
                throw new Error("Could not serialize the data: " + error);
            }
        };
        return toHex(serialize(data).to_bytes());
    };
    Data.from = function from(data) {
        var plutusData = C.PlutusData.from_bytes(fromHex(data));
        var deserialize = function deserialize(data) {
            if (data.kind() === 0) {
                var constr = data.as_constr_plutus_data();
                var l = constr.data();
                var desL = [];
                for(var i = 0; i < l.len(); i++)desL.push(deserialize(l.get(i)));
                return new Construct(parseInt(constr.alternative().to_str()), desL);
            } else if (data.kind() === 1) {
                var m = data.as_map();
                var desM = new Map();
                var keys = m.keys();
                for(var _i = 0; _i < keys.len(); _i++)desM.set(deserialize(keys.get(_i)), deserialize(m.get(keys.get(_i))));
                return desM;
            } else if (data.kind() === 2) {
                var _l = data.as_list();
                var _desL = [];
                for(var _i2 = 0; _i2 < _l.len(); _i2++)_desL.push(deserialize(_l.get(_i2)));
                return _desL;
            } else if (data.kind() === 3) return BigInt(data.as_integer().to_str());
            else if (data.kind() === 4) return toHex(data.as_bytes());
            throw new Error("Unsupported type");
        };
        return deserialize(plutusData);
    };
    Data.empty = function empty() {
        return toHex(C.PlutusData.new_constr_plutus_data(C.ConstrPlutusData["new"](C.BigNum.from_str("0"), C.PlutusList["new"]())).to_bytes());
    };
    return Data;
}();
var TxSigned = /*#__PURE__*/ function() {
    function TxSigned(lucid, tx) {
        this.lucid = lucid;
        this.txSigned = tx;
    }
    var _proto = TxSigned.prototype;
    _proto.submit = /*#__PURE__*/ function() {
        var _submit = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee() {
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _context.next = 2;
                        return this.lucid.wallet.submitTx(this.txSigned);
                    case 2:
                        return _context.abrupt("return", _context.sent);
                    case 3:
                    case "end":
                        return _context.stop();
                }
            }, _callee, this);
        }));
        function submit() {
            return _submit.apply(this, arguments);
        }
        return submit;
    }();
    return TxSigned;
}();
var TxComplete = /*#__PURE__*/ function() {
    function TxComplete(lucid, tx) {
        this.lucid = lucid;
        this.txComplete = tx;
        this.witnessSetBuilder = C.TransactionWitnessSetBuilder["new"]();
        this.tasks = [];
    }
    var _proto = TxComplete.prototype;
    _proto.sign = function sign() {
        var _this = this;
        this.tasks.push(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee() {
            var witnesses;
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _context.next = 2;
                        return _this.lucid.wallet.signTx(_this.txComplete);
                    case 2:
                        witnesses = _context.sent;
                        _this.witnessSetBuilder.add_existing(witnesses);
                    case 4:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        })));
        return this;
    } /** Add an extra signature from a private key */ ;
    _proto.signWithPrivateKey = function signWithPrivateKey(privateKey) {
        var priv = C.PrivateKey.from_bech32(privateKey);
        var witness = C.make_vkey_witness(C.hash_transaction(this.txComplete.body()), priv);
        this.witnessSetBuilder.add_vkey(witness);
        return this;
    } /**
   * Signs the transaction and returns the witnesses that were just made
   */ ;
    _proto.partialSign = /*#__PURE__*/ function() {
        var _partialSign = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee2() {
            var witnesses;
            return runtime_1.wrap(function _callee2$(_context2) {
                while(true)switch(_context2.prev = _context2.next){
                    case 0:
                        _context2.next = 2;
                        return this.lucid.wallet.signTx(this.txComplete);
                    case 2:
                        witnesses = _context2.sent;
                        this.witnessSetBuilder.add_existing(witnesses);
                        return _context2.abrupt("return", toHex(witnesses.to_bytes()));
                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2, this);
        }));
        function partialSign() {
            return _partialSign.apply(this, arguments);
        }
        return partialSign;
    }() /**
   * Signs the transaction and returns the witnesses that were just made
   *
   * Add an extra signature from a private key */ ;
    _proto.partialSignWithPrivateKey = function partialSignWithPrivateKey(privateKey) {
        var priv = C.PrivateKey.from_bech32(privateKey);
        var witness = C.make_vkey_witness(C.hash_transaction(this.txComplete.body()), priv);
        this.witnessSetBuilder.add_vkey(witness);
        var witnesses = C.TransactionWitnessSetBuilder["new"]();
        witnesses.add_vkey(witness);
        return toHex(witnesses.build().to_bytes());
    } /**
   * Signs the transaction with the given witnesses
   */ ;
    _proto.assemble = function assemble(witnesses) {
        var _this2 = this;
        witnesses.forEach(function(witness) {
            var witnessParsed = C.TransactionWitnessSet.from_bytes(fromHex(witness));
            _this2.witnessSetBuilder.add_existing(witnessParsed);
        });
        return this;
    };
    _proto.complete = /*#__PURE__*/ function() {
        var _complete = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee3() {
            var _iterator, _step, task, signedTx;
            return runtime_1.wrap(function _callee3$(_context3) {
                while(true)switch(_context3.prev = _context3.next){
                    case 0:
                        _iterator = _createForOfIteratorHelperLoose(this.tasks);
                    case 1:
                        if ((_step = _iterator()).done) {
                            _context3.next = 7;
                            break;
                        }
                        task = _step.value;
                        _context3.next = 5;
                        return task();
                    case 5:
                        _context3.next = 1;
                        break;
                    case 7:
                        this.witnessSetBuilder.add_existing(this.txComplete.witness_set());
                        signedTx = C.Transaction["new"](this.txComplete.body(), this.witnessSetBuilder.build(), this.txComplete.auxiliary_data());
                        return _context3.abrupt("return", new TxSigned(this.lucid, signedTx));
                    case 10:
                    case "end":
                        return _context3.stop();
                }
            }, _callee3, this);
        }));
        function complete() {
            return _complete.apply(this, arguments);
        }
        return complete;
    }();
    return TxComplete;
}();
var Tx = /*#__PURE__*/ function() {
    function Tx(lucid) {
        this.nftMetadata = {};
        this.lucid = lucid;
        this.txBuilder = C.TransactionBuilder["new"](this.lucid.txBuilderConfig);
        this.tasks = [];
        this.nftMetadata = {};
        this.nftMetadata.version = 2;
    }
    /**
   * A public key or native script input
   *
   * With redeemer a plutus script input
   *  */ var _proto = Tx.prototype;
    _proto.collectFrom = function collectFrom(utxos, redeemer) {
        var _this = this;
        this.tasks.push(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee() {
            var _iterator, _step, utxo, coreUtxo;
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _iterator = _createForOfIteratorHelperLoose(utxos);
                    case 1:
                        if ((_step = _iterator()).done) {
                            _context.next = 11;
                            break;
                        }
                        utxo = _step.value;
                        if (!(utxo.datumHash && !utxo.datum)) {
                            _context.next = 7;
                            break;
                        }
                        _context.next = 6;
                        return _this.lucid.datumOf(utxo);
                    case 6:
                        utxo.datum = _context.sent;
                    case 7:
                        coreUtxo = utxoToCore(utxo);
                        _this.txBuilder.add_input(C.Address.from_bech32(utxo.address), coreUtxo.input(), coreUtxo.output().amount(), redeemer && C.ScriptWitness.new_plutus_witness(C.PlutusWitness["new"](C.PlutusData.from_bytes(fromHex(redeemer)), utxo.datum && C.PlutusData.from_bytes(fromHex(utxo.datum)))));
                    case 9:
                        _context.next = 1;
                        break;
                    case 11:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        })));
        return this;
    } /** All assets should be of the same Policy Id.
   *
   * You can chain mintAssets events together if you need to mint assets with different Policy Ids.
   *
   * If the plutus script doesn't need a redeemer, you still neeed to specifiy the empty redeemer.
   *  */ ;
    _proto.mintAssets = function mintAssets(assets, redeemer) {
        var units = Object.keys(assets);
        var policyId = units[0].slice(0, 56);
        var mintAssets = C.MintAssets["new"]();
        units.forEach(function(unit) {
            if (unit.slice(0, 56) !== policyId) throw new Error("Only one Policy Id allowed. You can chain multiple mintAssets events together if you need to mint assets with different Policy Ids.");
            mintAssets.insert(C.AssetName["new"](fromHex(unit.slice(56))), C.Int.from_str(assets[unit].toString()));
        });
        var scriptHash = C.ScriptHash.from_bytes(fromHex(policyId));
        this.txBuilder.add_mint(scriptHash, mintAssets, redeemer && C.ScriptWitness.new_plutus_witness(C.PlutusWitness["new"](C.PlutusData.from_bytes(fromHex(redeemer)))));
        return this;
    } /**
   * Pay to a public key or native script address
   *  */ ;
    _proto.payToAddress = function payToAddress(address, assets) {
        var output = C.TransactionOutput["new"](C.Address.from_bech32(address), assetsToValue(assets));
        this.txBuilder.add_output(output);
        return this;
    } /**
   * Pay to a public key or native script address with datum
   *  */ ;
    _proto.payToAddressWithDatum = function payToAddressWithDatum(address, datum, assets) {
        var plutusData = C.PlutusData.from_bytes(fromHex(datum));
        var output = C.TransactionOutput["new"](C.Address.from_bech32(address), assetsToValue(assets));
        output.set_datum(C.Datum.new_data_hash(C.hash_plutus_data(plutusData)));
        this.txBuilder.add_output(output);
        this.txBuilder.add_plutus_data(plutusData);
        return this;
    } /**
   * Pay to a plutus script address with datum
   *  */ ;
    _proto.payToContract = function payToContract(address, datum, assets) {
        var plutusData = C.PlutusData.from_bytes(fromHex(datum));
        var output = C.TransactionOutput["new"](C.Address.from_bech32(address), assetsToValue(assets));
        output.set_datum(C.Datum.new_data_hash(C.hash_plutus_data(plutusData)));
        this.txBuilder.add_output(output);
        this.txBuilder.add_plutus_data(plutusData);
        return this;
    } /**
   * Delegate to a stake pool
   */ ;
    _proto.delegateTo = function delegateTo(rewardAddress, poolId, redeemer) {
        var addressDetails = this.lucid.utils.getAddressDetails(rewardAddress);
        if (addressDetails.address.type !== "Reward" || !addressDetails.stakeCredential) throw new Error("Not a reward address provided");
        var credential = addressDetails.stakeCredential.type === "Key" ? C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_bytes(fromHex(addressDetails.stakeCredential.hash))) : C.StakeCredential.from_scripthash(C.ScriptHash.from_bytes(fromHex(addressDetails.stakeCredential.hash)));
        this.txBuilder.add_certificate(C.Certificate.new_stake_delegation(C.StakeDelegation["new"](credential, C.Ed25519KeyHash.from_bech32(poolId))), redeemer && C.ScriptWitness.new_plutus_witness(C.PlutusWitness["new"](C.PlutusData.from_bytes(fromHex(redeemer)))));
        return this;
    };
    _proto.registerStake = function registerStake(rewardAddress) {
        var addressDetails = this.lucid.utils.getAddressDetails(rewardAddress);
        if (addressDetails.address.type !== "Reward" || !addressDetails.stakeCredential) throw new Error("Not a reward address provided");
        var credential = addressDetails.stakeCredential.type === "Key" ? C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_bytes(fromHex(addressDetails.stakeCredential.hash))) : C.StakeCredential.from_scripthash(C.ScriptHash.from_bytes(fromHex(addressDetails.stakeCredential.hash)));
        this.txBuilder.add_certificate(C.Certificate.new_stake_registration(C.StakeRegistration["new"](credential)));
        return this;
    };
    _proto.deregisterStake = function deregisterStake(rewardAddress, redeemer) {
        var addressDetails = this.lucid.utils.getAddressDetails(rewardAddress);
        if (addressDetails.address.type !== "Reward" || !addressDetails.stakeCredential) throw new Error("Not a reward address provided");
        var credential = addressDetails.stakeCredential.type === "Key" ? C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_bytes(fromHex(addressDetails.stakeCredential.hash))) : C.StakeCredential.from_scripthash(C.ScriptHash.from_bytes(fromHex(addressDetails.stakeCredential.hash)));
        this.txBuilder.add_certificate(C.Certificate.new_stake_deregistration(C.StakeDeregistration["new"](credential)), redeemer && C.ScriptWitness.new_plutus_witness(C.PlutusWitness["new"](C.PlutusData.from_bytes(fromHex(redeemer)))));
        return this;
    };
    _proto.withdraw = function withdraw(rewardAddress, amount, redeemer) {
        this.txBuilder.add_withdrawal(C.RewardAddress.from_address(C.Address.from_bech32(rewardAddress)), C.BigNum.from_str(amount.toString()), redeemer && C.ScriptWitness.new_plutus_witness(C.PlutusWitness["new"](C.PlutusData.from_bytes(fromHex(redeemer)))));
        return this;
    } /**
   * Needs to be a public key address
   *
   * The PaymentKeyHash is taken when providing a Base, Enterprise or Pointer address
   *
   * The StakeKeyHash is taken when providing a Reward address
   */ ;
    _proto.addSigner = function addSigner(address) {
        var addressDetails = this.lucid.utils.getAddressDetails(address);
        if (!addressDetails.paymentCredential && !addressDetails.stakeCredential) throw new Error("Not a valid address.");
        var credential = addressDetails.address.type === "Reward" ? addressDetails.stakeCredential : addressDetails.paymentCredential;
        if (credential.type === "Script") throw new Error("Only key hashes are allow as signers.");
        this.txBuilder.add_required_signer(C.Ed25519KeyHash.from_bytes(fromHex(credential.hash)));
        return this;
    };
    _proto.validFrom = function validFrom(unixTime) {
        var slot = this.lucid.utils.unixTimeToSlot(unixTime);
        this.txBuilder.set_validity_start_interval(C.BigNum.from_str(slot.toString()));
        return this;
    };
    _proto.validTo = function validTo(unixTime) {
        var slot = this.lucid.utils.unixTimeToSlot(unixTime);
        this.txBuilder.set_ttl(C.BigNum.from_str(slot.toString()));
        return this;
    };
    _proto.attachMetadata = function attachMetadata(label, metadata) {
        this.txBuilder.add_json_metadatum(C.BigNum.from_str(label.toString()), JSON.stringify(metadata));
        return this;
    } /**
   * Converts strings to bytes if prefixed with **'0x'**
   */ ;
    _proto.attachMetadataWithConversion = function attachMetadataWithConversion(label, metadata) {
        this.txBuilder.add_json_metadatum_with_schema(C.BigNum.from_str(label.toString()), JSON.stringify(metadata), C.MetadataJsonSchema.BasicConversions);
        return this;
    } // /**
    ;
    _proto.attachSpendingValidator = function attachSpendingValidator(spendingValidator) {
        attachScript(this, spendingValidator);
        return this;
    };
    _proto.attachMintingPolicy = function attachMintingPolicy(mintingPolicy) {
        attachScript(this, mintingPolicy);
        return this;
    };
    _proto.attachCertificateValidator = function attachCertificateValidator(certValidator) {
        attachScript(this, certValidator);
        return this;
    };
    _proto.attachWithdrawalValidator = function attachWithdrawalValidator(withdrawalValidator) {
        attachScript(this, withdrawalValidator);
        return this;
    } /**
   * callback cannot be async
   *
   */ ;
    _proto.applyIf = function applyIf(condition, callback) {
        if (condition) callback(this);
        return this;
    };
    _proto.complete = /*#__PURE__*/ function() {
        var _complete = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee2(option) {
            var _this$txBuilder$redee, _this2 = this;
            var _iterator2, _step2, task, utxos, collateral;
            return runtime_1.wrap(function _callee2$(_context2) {
                while(true)switch(_context2.prev = _context2.next){
                    case 0:
                        _iterator2 = _createForOfIteratorHelperLoose(this.tasks);
                    case 1:
                        if ((_step2 = _iterator2()).done) {
                            _context2.next = 7;
                            break;
                        }
                        task = _step2.value;
                        _context2.next = 5;
                        return task();
                    case 5:
                        _context2.next = 1;
                        break;
                    case 7:
                        // Add NFT metadata
                        if (Object.keys(this.nftMetadata).length > 1) this.txBuilder.add_json_metadatum_with_schema(C.BigNum.from_str("721"), JSON.stringify(this.nftMetadata), C.MetadataJsonSchema.BasicConversions);
                        _context2.next = 10;
                        return this.lucid.wallet.getUtxosCore();
                    case 10:
                        utxos = _context2.sent;
                        if (!(((_this$txBuilder$redee = this.txBuilder.redeemers()) == null ? void 0 : _this$txBuilder$redee.len()) > 0)) {
                            _context2.next = 18;
                            break;
                        }
                        _context2.next = 14;
                        return this.lucid.wallet.getCollateralCore();
                    case 14:
                        collateral = _context2.sent;
                        if (!(collateral.length <= 0)) {
                            _context2.next = 17;
                            break;
                        }
                        throw new Error("No collateral UTxO found.");
                    case 17:
                        // 2 collateral utxos should be more than sufficient
                        collateral.slice(0, 2).forEach(function(utxo) {
                            _this2.txBuilder.add_collateral(utxo.output().address(), utxo.input());
                        });
                    case 18:
                        this.txBuilder.add_inputs_from(utxos);
                        _context2.t0 = this.txBuilder;
                        _context2.t1 = C.Address;
                        _context2.t2 = option == null ? void 0 : option.changeAddress;
                        if (_context2.t2) {
                            _context2.next = 26;
                            break;
                        }
                        _context2.next = 25;
                        return this.lucid.wallet.address();
                    case 25:
                        _context2.t2 = _context2.sent;
                    case 26:
                        _context2.t3 = _context2.t2;
                        _context2.t4 = _context2.t1.from_bech32.call(_context2.t1, _context2.t3);
                        _context2.t5 = option != null && option.datum ? C.Datum.new_data_hash(C.hash_plutus_data(C.PlutusData.from_bytes(fromHex(option.datum)))) : undefined;
                        _context2.t0.balance.call(_context2.t0, _context2.t4, _context2.t5);
                        if (option != null && option.datum) this.txBuilder.add_plutus_data(C.PlutusData.from_bytes(fromHex(option.datum)));
                        _context2.t6 = TxComplete;
                        _context2.t7 = this.lucid;
                        _context2.next = 35;
                        return this.txBuilder.construct();
                    case 35:
                        _context2.t8 = _context2.sent;
                        return _context2.abrupt("return", new _context2.t6(_context2.t7, _context2.t8));
                    case 37:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2, this);
        }));
        function complete(_x) {
            return _complete.apply(this, arguments);
        }
        return complete;
    }();
    return Tx;
}();
var attachScript = function attachScript(tx, script) {
    if (script.type === "Native") tx.txBuilder.add_native_script(C.NativeScript.from_bytes(fromHex(script.script)));
    if (script.type === "PlutusV1" || script.type === "PlutusV2") tx.txBuilder.add_plutus_script(C.PlutusScript.from_bytes(fromHex(script.script)));
};
var Lucid = /*#__PURE__*/ function() {
    function Lucid() {
        this.network = "Mainnet";
    }
    Lucid["new"] = /*#__PURE__*/ function() {
        var _new2 = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee(provider, network) {
            var lucid, protocolParameters;
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        lucid = new this();
                        if (network) lucid.network = network;
                        if (!provider) {
                            _context.next = 8;
                            break;
                        }
                        lucid.provider = provider;
                        _context.next = 6;
                        return provider.getProtocolParameters();
                    case 6:
                        protocolParameters = _context.sent;
                        lucid.txBuilderConfig = C.TransactionBuilderConfigBuilder["new"]().coins_per_utxo_word(C.BigNum.from_str(protocolParameters.coinsPerUtxoWord.toString())).fee_algo(C.LinearFee["new"](C.BigNum.from_str(protocolParameters.minFeeA.toString()), C.BigNum.from_str(protocolParameters.minFeeB.toString()))).key_deposit(C.BigNum.from_str(protocolParameters.keyDeposit.toString())).pool_deposit(C.BigNum.from_str(protocolParameters.poolDeposit.toString())).max_tx_size(protocolParameters.maxTxSize).max_value_size(protocolParameters.maxValSize).ex_unit_prices(C.ExUnitPrices.from_float(protocolParameters.priceMem, protocolParameters.priceStep)).blockfrost(C.Blockfrost["new"](provider.url + "/utils/txs/evaluate", provider.projectId)).costmdls(costModel.plutusV1()).prefer_pure_change(true).build();
                    case 8:
                        lucid.utils = new Utils(lucid);
                        return _context.abrupt("return", lucid);
                    case 10:
                    case "end":
                        return _context.stop();
                }
            }, _callee, this);
        }));
        function _new(_x, _x2) {
            return _new2.apply(this, arguments);
        }
        return _new;
    }();
    var _proto = Lucid.prototype;
    _proto.newTx = function newTx() {
        return new Tx(this);
    };
    _proto.fromTx = function fromTx(tx) {
        return new TxComplete(this, C.Transaction.from_bytes(fromHex(tx)));
    };
    _proto.currentSlot = /*#__PURE__*/ function() {
        var _currentSlot = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee2() {
            return runtime_1.wrap(function _callee2$(_context2) {
                while(true)switch(_context2.prev = _context2.next){
                    case 0:
                        return _context2.abrupt("return", this.provider.getCurrentSlot());
                    case 1:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2, this);
        }));
        function currentSlot() {
            return _currentSlot.apply(this, arguments);
        }
        return currentSlot;
    }();
    _proto.utxosAt = /*#__PURE__*/ function() {
        var _utxosAt = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee3(address) {
            return runtime_1.wrap(function _callee3$(_context3) {
                while(true)switch(_context3.prev = _context3.next){
                    case 0:
                        return _context3.abrupt("return", this.provider.getUtxos(address));
                    case 1:
                    case "end":
                        return _context3.stop();
                }
            }, _callee3, this);
        }));
        function utxosAt(_x3) {
            return _utxosAt.apply(this, arguments);
        }
        return utxosAt;
    }();
    _proto.utxosAtWithUnit = /*#__PURE__*/ function() {
        var _utxosAtWithUnit = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee4(address, unit) {
            return runtime_1.wrap(function _callee4$(_context4) {
                while(true)switch(_context4.prev = _context4.next){
                    case 0:
                        return _context4.abrupt("return", this.provider.getUtxosWithUnit(address, unit));
                    case 1:
                    case "end":
                        return _context4.stop();
                }
            }, _callee4, this);
        }));
        function utxosAtWithUnit(_x4, _x5) {
            return _utxosAtWithUnit.apply(this, arguments);
        }
        return utxosAtWithUnit;
    }();
    _proto.awaitTx = /*#__PURE__*/ function() {
        var _awaitTx = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee5(txHash) {
            return runtime_1.wrap(function _callee5$(_context5) {
                while(true)switch(_context5.prev = _context5.next){
                    case 0:
                        return _context5.abrupt("return", this.provider.awaitTx(txHash));
                    case 1:
                    case "end":
                        return _context5.stop();
                }
            }, _callee5, this);
        }));
        function awaitTx(_x6) {
            return _awaitTx.apply(this, arguments);
        }
        return awaitTx;
    }();
    _proto.datumOf = /*#__PURE__*/ function() {
        var _datumOf = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee6(utxo) {
            return runtime_1.wrap(function _callee6$(_context6) {
                while(true)switch(_context6.prev = _context6.next){
                    case 0:
                        if (utxo.datumHash) {
                            _context6.next = 2;
                            break;
                        }
                        throw new Error("This UTxO does not have a datum hash.");
                    case 2:
                        if (!utxo.datum) {
                            _context6.next = 4;
                            break;
                        }
                        return _context6.abrupt("return", utxo.datum);
                    case 4:
                        _context6.next = 6;
                        return this.provider.getDatum(utxo.datumHash);
                    case 6:
                        utxo.datum = _context6.sent;
                        return _context6.abrupt("return", utxo.datum);
                    case 8:
                    case "end":
                        return _context6.stop();
                }
            }, _callee6, this);
        }));
        function datumOf(_x7) {
            return _datumOf.apply(this, arguments);
        }
        return datumOf;
    }() /**
   * Cardano Private key in bech32; not the BIP32 private key or any key that is not fully derived
   */ ;
    _proto.selectWalletFromPrivateKey = function selectWalletFromPrivateKey(privateKey) {
        var _this = this;
        var priv = C.PrivateKey.from_bech32(privateKey);
        var pubKeyHash = priv.to_public().hash();
        this.wallet = {
            address: function() {
                var _address = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee7() {
                    return runtime_1.wrap(function _callee7$(_context7) {
                        while(true)switch(_context7.prev = _context7.next){
                            case 0:
                                return _context7.abrupt("return", C.EnterpriseAddress["new"](_this.network === "Mainnet" ? 1 : 0, C.StakeCredential.from_keyhash(pubKeyHash)).to_address().to_bech32());
                            case 1:
                            case "end":
                                return _context7.stop();
                        }
                    }, _callee7);
                }));
                function address() {
                    return _address.apply(this, arguments);
                }
                return address;
            }(),
            rewardAddress: function() {
                var _rewardAddress = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee8() {
                    return runtime_1.wrap(function _callee8$(_context8) {
                        while(true)switch(_context8.prev = _context8.next){
                            case 0:
                                return _context8.abrupt("return", undefined);
                            case 1:
                            case "end":
                                return _context8.stop();
                        }
                    }, _callee8);
                }));
                function rewardAddress() {
                    return _rewardAddress.apply(this, arguments);
                }
                return rewardAddress;
            }(),
            getCollateral: function() {
                var _getCollateral = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee9() {
                    var utxos;
                    return runtime_1.wrap(function _callee9$(_context9) {
                        while(true)switch(_context9.prev = _context9.next){
                            case 0:
                                _context9.t0 = _this;
                                _context9.next = 3;
                                return _this.wallet.address();
                            case 3:
                                _context9.t1 = _context9.sent;
                                _context9.next = 6;
                                return _context9.t0.utxosAt.call(_context9.t0, _context9.t1);
                            case 6:
                                utxos = _context9.sent;
                                return _context9.abrupt("return", utxos.filter(function(utxo) {
                                    return Object.keys(utxo.assets).length === 1 && utxo.assets.lovelace >= 5000000n;
                                }));
                            case 8:
                            case "end":
                                return _context9.stop();
                        }
                    }, _callee9);
                }));
                function getCollateral() {
                    return _getCollateral.apply(this, arguments);
                }
                return getCollateral;
            }(),
            getCollateralCore: function() {
                var _getCollateralCore = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee10() {
                    var utxos;
                    return runtime_1.wrap(function _callee10$(_context10) {
                        while(true)switch(_context10.prev = _context10.next){
                            case 0:
                                _context10.t0 = _this;
                                _context10.next = 3;
                                return _this.wallet.address();
                            case 3:
                                _context10.t1 = _context10.sent;
                                _context10.next = 6;
                                return _context10.t0.utxosAt.call(_context10.t0, _context10.t1);
                            case 6:
                                utxos = _context10.sent;
                                return _context10.abrupt("return", utxos.filter(function(utxo) {
                                    return Object.keys(utxo.assets).length === 1 && utxo.assets.lovelace >= 5000000n;
                                }).map(function(utxo) {
                                    return utxoToCore(utxo);
                                }));
                            case 8:
                            case "end":
                                return _context10.stop();
                        }
                    }, _callee10);
                }));
                function getCollateralCore() {
                    return _getCollateralCore.apply(this, arguments);
                }
                return getCollateralCore;
            }(),
            getUtxos: function() {
                var _getUtxos = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee11() {
                    return runtime_1.wrap(function _callee11$(_context11) {
                        while(true)switch(_context11.prev = _context11.next){
                            case 0:
                                _context11.t0 = _this;
                                _context11.next = 3;
                                return _this.wallet.address();
                            case 3:
                                _context11.t1 = _context11.sent;
                                _context11.next = 6;
                                return _context11.t0.utxosAt.call(_context11.t0, _context11.t1);
                            case 6:
                                return _context11.abrupt("return", _context11.sent);
                            case 7:
                            case "end":
                                return _context11.stop();
                        }
                    }, _callee11);
                }));
                function getUtxos() {
                    return _getUtxos.apply(this, arguments);
                }
                return getUtxos;
            }(),
            getUtxosCore: function() {
                var _getUtxosCore = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee12() {
                    var utxos, coreUtxos;
                    return runtime_1.wrap(function _callee12$(_context12) {
                        while(true)switch(_context12.prev = _context12.next){
                            case 0:
                                _context12.t0 = _this;
                                _context12.next = 3;
                                return _this.wallet.address();
                            case 3:
                                _context12.t1 = _context12.sent;
                                _context12.next = 6;
                                return _context12.t0.utxosAt.call(_context12.t0, _context12.t1);
                            case 6:
                                utxos = _context12.sent;
                                coreUtxos = C.TransactionUnspentOutputs["new"]();
                                utxos.forEach(function(utxo) {
                                    coreUtxos.add(utxoToCore(utxo));
                                });
                                return _context12.abrupt("return", coreUtxos);
                            case 10:
                            case "end":
                                return _context12.stop();
                        }
                    }, _callee12);
                }));
                function getUtxosCore() {
                    return _getUtxosCore.apply(this, arguments);
                }
                return getUtxosCore;
            }(),
            signTx: function() {
                var _signTx = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee13(tx) {
                    var witness, txWitnessSetBuilder;
                    return runtime_1.wrap(function _callee13$(_context13) {
                        while(true)switch(_context13.prev = _context13.next){
                            case 0:
                                witness = C.make_vkey_witness(C.hash_transaction(tx.body()), priv);
                                txWitnessSetBuilder = C.TransactionWitnessSetBuilder["new"]();
                                txWitnessSetBuilder.add_vkey(witness);
                                return _context13.abrupt("return", txWitnessSetBuilder.build());
                            case 4:
                            case "end":
                                return _context13.stop();
                        }
                    }, _callee13);
                }));
                function signTx(_x8) {
                    return _signTx.apply(this, arguments);
                }
                return signTx;
            }(),
            submitTx: function() {
                var _submitTx = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee14(tx) {
                    return runtime_1.wrap(function _callee14$(_context14) {
                        while(true)switch(_context14.prev = _context14.next){
                            case 0:
                                _context14.next = 2;
                                return _this.provider.submitTx(tx);
                            case 2:
                                return _context14.abrupt("return", _context14.sent);
                            case 3:
                            case "end":
                                return _context14.stop();
                        }
                    }, _callee14);
                }));
                function submitTx(_x9) {
                    return _submitTx.apply(this, arguments);
                }
                return submitTx;
            }()
        };
        return this;
    };
    _proto.selectWallet = function selectWallet(api) {
        this.wallet = {
            address: function() {
                var _address2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee15() {
                    return runtime_1.wrap(function _callee15$(_context15) {
                        while(true)switch(_context15.prev = _context15.next){
                            case 0:
                                _context15.t0 = C.Address;
                                _context15.t1 = fromHex;
                                _context15.next = 4;
                                return api.getUsedAddresses();
                            case 4:
                                _context15.t2 = _context15.sent[0];
                                _context15.t3 = (0, _context15.t1)(_context15.t2);
                                return _context15.abrupt("return", _context15.t0.from_bytes.call(_context15.t0, _context15.t3).to_bech32());
                            case 7:
                            case "end":
                                return _context15.stop();
                        }
                    }, _callee15);
                }));
                function address() {
                    return _address2.apply(this, arguments);
                }
                return address;
            }(),
            rewardAddress: function() {
                var _rewardAddress2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee16() {
                    var _yield$api$getRewardA, rewardAddressHex, rewardAddress;
                    return runtime_1.wrap(function _callee16$(_context16) {
                        while(true)switch(_context16.prev = _context16.next){
                            case 0:
                                _context16.next = 2;
                                return api.getRewardAddresses();
                            case 2:
                                _yield$api$getRewardA = _context16.sent;
                                rewardAddressHex = _yield$api$getRewardA[0];
                                rewardAddress = rewardAddressHex != null ? rewardAddressHex : C.RewardAddress.from_address(C.Address.from_bytes(fromHex(rewardAddressHex))).to_address().to_bech32();
                                return _context16.abrupt("return", rewardAddress);
                            case 6:
                            case "end":
                                return _context16.stop();
                        }
                    }, _callee16);
                }));
                function rewardAddress() {
                    return _rewardAddress2.apply(this, arguments);
                }
                return rewardAddress;
            }(),
            getCollateral: function() {
                var _getCollateral2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee17() {
                    var utxos;
                    return runtime_1.wrap(function _callee17$(_context17) {
                        while(true)switch(_context17.prev = _context17.next){
                            case 0:
                                _context17.next = 2;
                                return api.experimental.getCollateral();
                            case 2:
                                utxos = _context17.sent.map(function(utxo) {
                                    var parsedUtxo = C.TransactionUnspentOutput.from_bytes(fromHex(utxo));
                                    return coreToUtxo(parsedUtxo);
                                });
                                return _context17.abrupt("return", utxos);
                            case 4:
                            case "end":
                                return _context17.stop();
                        }
                    }, _callee17);
                }));
                function getCollateral() {
                    return _getCollateral2.apply(this, arguments);
                }
                return getCollateral;
            }(),
            getCollateralCore: function() {
                var _getCollateralCore2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee18() {
                    var utxos;
                    return runtime_1.wrap(function _callee18$(_context18) {
                        while(true)switch(_context18.prev = _context18.next){
                            case 0:
                                _context18.next = 2;
                                return api.experimental.getCollateral();
                            case 2:
                                utxos = _context18.sent.map(function(utxo) {
                                    return C.TransactionUnspentOutput.from_bytes(fromHex(utxo));
                                });
                                return _context18.abrupt("return", utxos);
                            case 4:
                            case "end":
                                return _context18.stop();
                        }
                    }, _callee18);
                }));
                function getCollateralCore() {
                    return _getCollateralCore2.apply(this, arguments);
                }
                return getCollateralCore;
            }(),
            getUtxos: function() {
                var _getUtxos2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee19() {
                    var utxos;
                    return runtime_1.wrap(function _callee19$(_context19) {
                        while(true)switch(_context19.prev = _context19.next){
                            case 0:
                                _context19.next = 2;
                                return api.getUtxos();
                            case 2:
                                _context19.t0 = _context19.sent;
                                if (_context19.t0) {
                                    _context19.next = 5;
                                    break;
                                }
                                _context19.t0 = [];
                            case 5:
                                utxos = _context19.t0.map(function(utxo) {
                                    var parsedUtxo = C.TransactionUnspentOutput.from_bytes(fromHex(utxo));
                                    return coreToUtxo(parsedUtxo);
                                });
                                return _context19.abrupt("return", utxos);
                            case 7:
                            case "end":
                                return _context19.stop();
                        }
                    }, _callee19);
                }));
                function getUtxos() {
                    return _getUtxos2.apply(this, arguments);
                }
                return getUtxos;
            }(),
            getUtxosCore: function() {
                var _getUtxosCore2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee20() {
                    var utxos;
                    return runtime_1.wrap(function _callee20$(_context20) {
                        while(true)switch(_context20.prev = _context20.next){
                            case 0:
                                utxos = C.TransactionUnspentOutputs["new"]();
                                _context20.next = 3;
                                return api.getUtxos();
                            case 3:
                                _context20.t0 = _context20.sent;
                                if (_context20.t0) {
                                    _context20.next = 6;
                                    break;
                                }
                                _context20.t0 = [];
                            case 6:
                                _context20.t0.forEach(function(utxo) {
                                    utxos.add(C.TransactionUnspentOutput.from_bytes(fromHex(utxo)));
                                });
                                return _context20.abrupt("return", utxos);
                            case 8:
                            case "end":
                                return _context20.stop();
                        }
                    }, _callee20);
                }));
                function getUtxosCore() {
                    return _getUtxosCore2.apply(this, arguments);
                }
                return getUtxosCore;
            }(),
            signTx: function() {
                var _signTx2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee21(tx) {
                    var witnessSet;
                    return runtime_1.wrap(function _callee21$(_context21) {
                        while(true)switch(_context21.prev = _context21.next){
                            case 0:
                                _context21.next = 2;
                                return api.signTx(toHex(tx.to_bytes()), true);
                            case 2:
                                witnessSet = _context21.sent;
                                return _context21.abrupt("return", C.TransactionWitnessSet.from_bytes(fromHex(witnessSet)));
                            case 4:
                            case "end":
                                return _context21.stop();
                        }
                    }, _callee21);
                }));
                function signTx(_x10) {
                    return _signTx2.apply(this, arguments);
                }
                return signTx;
            }(),
            submitTx: function() {
                var _submitTx2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee22(tx) {
                    var txHash;
                    return runtime_1.wrap(function _callee22$(_context22) {
                        while(true)switch(_context22.prev = _context22.next){
                            case 0:
                                _context22.next = 2;
                                return api.submitTx(toHex(tx.to_bytes()));
                            case 2:
                                txHash = _context22.sent;
                                return _context22.abrupt("return", txHash);
                            case 4:
                            case "end":
                                return _context22.stop();
                        }
                    }, _callee22);
                }));
                function submitTx(_x11) {
                    return _submitTx2.apply(this, arguments);
                }
                return submitTx;
            }()
        };
        return this;
    } /**
   * Emulates a CIP30 wallet by constructing it
   * with the UTxOs, collateral and addresses.
   *
   * If utxos are not set, utxos are fetched from the provided address
   */ ;
    _proto.selectWalletFrom = function selectWalletFrom(_ref) {
        var _this2 = this;
        var _address3 = _ref.address, utxos = _ref.utxos, collateral = _ref.collateral, _rewardAddress3 = _ref.rewardAddress;
        var addressDetails = this.utils.getAddressDetails(_address3);
        this.wallet = {
            address: function() {
                var _address4 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee23() {
                    return runtime_1.wrap(function _callee23$(_context23) {
                        while(true)switch(_context23.prev = _context23.next){
                            case 0:
                                return _context23.abrupt("return", _address3);
                            case 1:
                            case "end":
                                return _context23.stop();
                        }
                    }, _callee23);
                }));
                function address() {
                    return _address4.apply(this, arguments);
                }
                return address;
            }(),
            rewardAddress: function() {
                var _rewardAddress4 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee24() {
                    var rewardAddr;
                    return runtime_1.wrap(function _callee24$(_context24) {
                        while(true)switch(_context24.prev = _context24.next){
                            case 0:
                                rewardAddr = !_rewardAddress3 && addressDetails.stakeCredential ? function() {
                                    if (addressDetails.stakeCredential.type === "Key") return C.RewardAddress["new"](_this2.network === "Mainnet" ? 1 : 0, C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_hex(addressDetails.stakeCredential.hash))).to_address().to_bech32();
                                    return C.RewardAddress["new"](_this2.network === "Mainnet" ? 1 : 0, C.StakeCredential.from_scripthash(C.ScriptHash.from_hex(addressDetails.stakeCredential.hash))).to_address().to_bech32();
                                }() : _rewardAddress3;
                                return _context24.abrupt("return", rewardAddr);
                            case 2:
                            case "end":
                                return _context24.stop();
                        }
                    }, _callee24);
                }));
                function rewardAddress() {
                    return _rewardAddress4.apply(this, arguments);
                }
                return rewardAddress;
            }(),
            getCollateral: function() {
                var _getCollateral3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee25() {
                    return runtime_1.wrap(function _callee25$(_context25) {
                        while(true)switch(_context25.prev = _context25.next){
                            case 0:
                                return _context25.abrupt("return", collateral ? collateral : []);
                            case 1:
                            case "end":
                                return _context25.stop();
                        }
                    }, _callee25);
                }));
                function getCollateral() {
                    return _getCollateral3.apply(this, arguments);
                }
                return getCollateral;
            }(),
            getCollateralCore: function() {
                var _getCollateralCore3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee26() {
                    return runtime_1.wrap(function _callee26$(_context26) {
                        while(true)switch(_context26.prev = _context26.next){
                            case 0:
                                return _context26.abrupt("return", collateral ? collateral.map(function(utxo) {
                                    return utxoToCore(utxo);
                                }) : []);
                            case 1:
                            case "end":
                                return _context26.stop();
                        }
                    }, _callee26);
                }));
                function getCollateralCore() {
                    return _getCollateralCore3.apply(this, arguments);
                }
                return getCollateralCore;
            }(),
            getUtxos: function() {
                var _getUtxos3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee27() {
                    return runtime_1.wrap(function _callee27$(_context27) {
                        while(true)switch(_context27.prev = _context27.next){
                            case 0:
                                if (!utxos) {
                                    _context27.next = 4;
                                    break;
                                }
                                _context27.t0 = utxos;
                                _context27.next = 7;
                                break;
                            case 4:
                                _context27.next = 6;
                                return _this2.utxosAt(_address3);
                            case 6:
                                _context27.t0 = _context27.sent;
                            case 7:
                                return _context27.abrupt("return", _context27.t0);
                            case 8:
                            case "end":
                                return _context27.stop();
                        }
                    }, _callee27);
                }));
                function getUtxos() {
                    return _getUtxos3.apply(this, arguments);
                }
                return getUtxos;
            }(),
            getUtxosCore: function() {
                var _getUtxosCore3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee28() {
                    var coreUtxos;
                    return runtime_1.wrap(function _callee28$(_context28) {
                        while(true)switch(_context28.prev = _context28.next){
                            case 0:
                                coreUtxos = C.TransactionUnspentOutputs["new"]();
                                if (!utxos) {
                                    _context28.next = 5;
                                    break;
                                }
                                _context28.t0 = utxos;
                                _context28.next = 8;
                                break;
                            case 5:
                                _context28.next = 7;
                                return _this2.utxosAt(_address3);
                            case 7:
                                _context28.t0 = _context28.sent;
                            case 8:
                                _context28.t0.forEach(function(utxo) {
                                    return coreUtxos.add(utxoToCore(utxo));
                                });
                                return _context28.abrupt("return", coreUtxos);
                            case 10:
                            case "end":
                                return _context28.stop();
                        }
                    }, _callee28);
                }));
                function getUtxosCore() {
                    return _getUtxosCore3.apply(this, arguments);
                }
                return getUtxosCore;
            }(),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            signTx: function() {
                var _signTx3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee29(_) {
                    return runtime_1.wrap(function _callee29$(_context29) {
                        while(true)switch(_context29.prev = _context29.next){
                            case 0:
                                throw new Error("Not implemented");
                            case 1:
                            case "end":
                                return _context29.stop();
                        }
                    }, _callee29);
                }));
                function signTx(_x12) {
                    return _signTx3.apply(this, arguments);
                }
                return signTx;
            }(),
            submitTx: function() {
                var _submitTx3 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee30(tx) {
                    return runtime_1.wrap(function _callee30$(_context30) {
                        while(true)switch(_context30.prev = _context30.next){
                            case 0:
                                _context30.next = 2;
                                return _this2.provider.submitTx(tx);
                            case 2:
                                return _context30.abrupt("return", _context30.sent);
                            case 3:
                            case "end":
                                return _context30.stop();
                        }
                    }, _callee30);
                }));
                function submitTx(_x13) {
                    return _submitTx3.apply(this, arguments);
                }
                return submitTx;
            }()
        };
        return this;
    };
    return Lucid;
}();
if (typeof window === "undefined") {
    var fetch$1 = await /*#__PURE__*/ require(/* webpackIgnore: true */ "16e35ef5f0d4b719"); // @ts-ignore
    global.fetch = fetch$1["default"]; // @ts-ignore
    global.Headers = fetch$1.Headers; // @ts-ignore
    global.Request = fetch$1.Request; // @ts-ignore
    global.Response = fetch$1.Response;
}
var Blockfrost = /*#__PURE__*/ function() {
    function Blockfrost(url, projectId) {
        this.url = url;
        this.projectId = projectId;
    }
    var _proto = Blockfrost.prototype;
    _proto.getProtocolParameters = /*#__PURE__*/ function() {
        var _getProtocolParameters = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee() {
            var result;
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _context.next = 2;
                        return fetch(this.url + "/epochs/latest/parameters", {
                            headers: {
                                project_id: this.projectId
                            }
                        }).then(function(res) {
                            return res.json();
                        });
                    case 2:
                        result = _context.sent;
                        return _context.abrupt("return", {
                            minFeeA: parseInt(result.min_fee_a),
                            minFeeB: parseInt(result.min_fee_b),
                            maxTxSize: parseInt(result.max_tx_size),
                            maxValSize: parseInt(result.max_val_size),
                            keyDeposit: BigInt(result.key_deposit),
                            poolDeposit: BigInt(result.pool_deposit),
                            priceMem: parseFloat(result.price_mem),
                            priceStep: parseFloat(result.price_step),
                            coinsPerUtxoWord: BigInt(result.coins_per_utxo_word)
                        });
                    case 4:
                    case "end":
                        return _context.stop();
                }
            }, _callee, this);
        }));
        function getProtocolParameters() {
            return _getProtocolParameters.apply(this, arguments);
        }
        return getProtocolParameters;
    }();
    _proto.getCurrentSlot = /*#__PURE__*/ function() {
        var _getCurrentSlot = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee2() {
            return runtime_1.wrap(function _callee2$(_context2) {
                while(true)switch(_context2.prev = _context2.next){
                    case 0:
                        _context2.next = 2;
                        return fetch(this.url + "/blocks/latest", {
                            headers: {
                                project_id: this.projectId
                            }
                        }).then(function(res) {
                            return res.json();
                        }).then(function(res) {
                            return parseInt(res.slot);
                        });
                    case 2:
                        return _context2.abrupt("return", _context2.sent);
                    case 3:
                    case "end":
                        return _context2.stop();
                }
            }, _callee2, this);
        }));
        function getCurrentSlot() {
            return _getCurrentSlot.apply(this, arguments);
        }
        return getCurrentSlot;
    }();
    _proto.getUtxos = /*#__PURE__*/ function() {
        var _getUtxos = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee3(address) {
            var result, page, pageResult;
            return runtime_1.wrap(function _callee3$(_context3) {
                while(true)switch(_context3.prev = _context3.next){
                    case 0:
                        result = [];
                        page = 1;
                    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/ case 2:
                        _context3.next = 5;
                        return fetch(this.url + "/addresses/" + address + "/utxos?page=" + page, {
                            headers: {
                                project_id: this.projectId
                            }
                        }).then(function(res) {
                            return res.json();
                        });
                    case 5:
                        pageResult = _context3.sent;
                        if (!pageResult.error) {
                            _context3.next = 16;
                            break;
                        }
                        if (!(result.status_code === 400)) {
                            _context3.next = 11;
                            break;
                        }
                        return _context3.abrupt("return", []);
                    case 11:
                        if (!(result.status_code === 500)) {
                            _context3.next = 15;
                            break;
                        }
                        return _context3.abrupt("return", []);
                    case 15:
                        pageResult = [];
                    case 16:
                        result = result.concat(pageResult);
                        if (!(pageResult.length <= 0)) {
                            _context3.next = 19;
                            break;
                        }
                        return _context3.abrupt("break", 22);
                    case 19:
                        page++;
                        _context3.next = 2;
                        break;
                    case 22:
                        return _context3.abrupt("return", result.map(function(r) {
                            return {
                                txHash: r.tx_hash,
                                outputIndex: r.output_index,
                                assets: function() {
                                    var a = {};
                                    r.amount.forEach(function(am) {
                                        a[am.unit] = BigInt(am.quantity);
                                    });
                                    return a;
                                }(),
                                address: address,
                                datumHash: r.data_hash
                            };
                        }));
                    case 23:
                    case "end":
                        return _context3.stop();
                }
            }, _callee3, this);
        }));
        function getUtxos(_x) {
            return _getUtxos.apply(this, arguments);
        }
        return getUtxos;
    }();
    _proto.getUtxosWithUnit = /*#__PURE__*/ function() {
        var _getUtxosWithUnit = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee4(address, unit) {
            var result, page, pageResult;
            return runtime_1.wrap(function _callee4$(_context4) {
                while(true)switch(_context4.prev = _context4.next){
                    case 0:
                        result = [];
                        page = 1;
                    case 2:
                        _context4.next = 5;
                        return fetch(this.url + "/addresses/" + address + "/utxos/" + unit + "?page=" + page, {
                            headers: {
                                project_id: this.projectId
                            }
                        }).then(function(res) {
                            return res.json();
                        });
                    case 5:
                        pageResult = _context4.sent;
                        if (!pageResult.error) {
                            _context4.next = 16;
                            break;
                        }
                        if (!(result.status_code === 400)) {
                            _context4.next = 11;
                            break;
                        }
                        return _context4.abrupt("return", []);
                    case 11:
                        if (!(result.status_code === 500)) {
                            _context4.next = 15;
                            break;
                        }
                        return _context4.abrupt("return", []);
                    case 15:
                        pageResult = [];
                    case 16:
                        result = result.concat(pageResult);
                        if (!(pageResult.length <= 0)) {
                            _context4.next = 19;
                            break;
                        }
                        return _context4.abrupt("break", 22);
                    case 19:
                        page++;
                        _context4.next = 2;
                        break;
                    case 22:
                        return _context4.abrupt("return", result.map(function(r) {
                            return {
                                txHash: r.tx_hash,
                                outputIndex: r.output_index,
                                assets: function() {
                                    var a = {};
                                    r.amount.forEach(function(am) {
                                        a[am.unit] = BigInt(am.quantity);
                                    });
                                    return a;
                                }(),
                                address: address,
                                datumHash: r.data_hash
                            };
                        }));
                    case 23:
                    case "end":
                        return _context4.stop();
                }
            }, _callee4, this);
        }));
        function getUtxosWithUnit(_x2, _x3) {
            return _getUtxosWithUnit.apply(this, arguments);
        }
        return getUtxosWithUnit;
    }();
    _proto.getDatum = /*#__PURE__*/ function() {
        var _getDatum = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee5(datumHash) {
            var datum;
            return runtime_1.wrap(function _callee5$(_context5) {
                while(true)switch(_context5.prev = _context5.next){
                    case 0:
                        _context5.next = 2;
                        return fetch(this.url + "/scripts/datum/" + datumHash, {
                            headers: {
                                project_id: this.projectId
                            }
                        }).then(function(res) {
                            return res.json();
                        }).then(function(res) {
                            return res.json_value;
                        });
                    case 2:
                        datum = _context5.sent;
                        if (!(!datum || datum.error)) {
                            _context5.next = 5;
                            break;
                        }
                        throw new Error("No datum found for datum hash: " + datumHash);
                    case 5:
                        return _context5.abrupt("return", datumJsonToCbor(datum));
                    case 6:
                    case "end":
                        return _context5.stop();
                }
            }, _callee5, this);
        }));
        function getDatum(_x4) {
            return _getDatum.apply(this, arguments);
        }
        return getDatum;
    }();
    _proto.awaitTx = /*#__PURE__*/ function() {
        var _awaitTx = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee7(txHash) {
            var _this = this;
            return runtime_1.wrap(function _callee7$(_context7) {
                while(true)switch(_context7.prev = _context7.next){
                    case 0:
                        return _context7.abrupt("return", new Promise(function(res) {
                            var confirmation = setInterval(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee6() {
                                var isConfirmed;
                                return runtime_1.wrap(function _callee6$(_context6) {
                                    while(true)switch(_context6.prev = _context6.next){
                                        case 0:
                                            _context6.next = 2;
                                            return fetch(_this.url + "/txs/" + txHash, {
                                                headers: {
                                                    project_id: _this.projectId
                                                }
                                            }).then(function(res) {
                                                return res.json();
                                            });
                                        case 2:
                                            isConfirmed = _context6.sent;
                                            if (!(isConfirmed && !isConfirmed.error)) {
                                                _context6.next = 7;
                                                break;
                                            }
                                            clearInterval(confirmation);
                                            res(true);
                                            return _context6.abrupt("return");
                                        case 7:
                                        case "end":
                                            return _context6.stop();
                                    }
                                }, _callee6);
                            })), 3000);
                        }));
                    case 1:
                    case "end":
                        return _context7.stop();
                }
            }, _callee7);
        }));
        function awaitTx(_x5) {
            return _awaitTx.apply(this, arguments);
        }
        return awaitTx;
    }();
    _proto.submitTx = /*#__PURE__*/ function() {
        var _submitTx = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee8(tx) {
            var result;
            return runtime_1.wrap(function _callee8$(_context8) {
                while(true)switch(_context8.prev = _context8.next){
                    case 0:
                        _context8.next = 2;
                        return fetch(this.url + "/tx/submit", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/cbor",
                                project_id: this.projectId
                            },
                            body: tx.to_bytes()
                        }).then(function(res) {
                            return res.json();
                        });
                    case 2:
                        result = _context8.sent;
                        if (!(!result || result.error)) {
                            _context8.next = 9;
                            break;
                        }
                        if (!((result == null ? void 0 : result.status_code) === 400)) {
                            _context8.next = 8;
                            break;
                        }
                        throw new Error(result.message);
                    case 8:
                        throw new Error("Could not submit transaction.");
                    case 9:
                        return _context8.abrupt("return", result);
                    case 10:
                    case "end":
                        return _context8.stop();
                }
            }, _callee8, this);
        }));
        function submitTx(_x6) {
            return _submitTx.apply(this, arguments);
        }
        return submitTx;
    }();
    return Blockfrost;
}();
/** This function is temporarily needed only, until Blockfrost returns the datum natively in cbor
 *
 * The conversion is ambigious, that's why it's better to get the datum directly in cbor
 */ var datumJsonToCbor = function datumJsonToCbor(json) {
    var convert = function convert(json) {
        if (!isNaN(json["int"])) return C.PlutusData.new_integer(C.BigInt.from_str(json["int"].toString()));
        else if (json.bytes || !isNaN(json.bytes)) return C.PlutusData.new_bytes(fromHex(json.bytes));
        else if (json.map) {
            var m = C.PlutusMap["new"]();
            json.map.forEach(function(_ref2) {
                var v = _ref2.v, k = _ref2.k;
                m.insert(convert(k), convert(v));
            });
            return C.PlutusData.new_map(m);
        } else if (json.list) {
            var l = C.PlutusList["new"]();
            json.list.forEach(function(v) {
                l.add(convert(v));
            });
            return C.PlutusData.new_list(l);
        } else if (!isNaN(json.constructor)) {
            var _l = C.PlutusList["new"]();
            json.fields.forEach(function(v) {
                _l.add(convert(v));
            });
            return C.PlutusData.new_constr_plutus_data(C.ConstrPlutusData["new"](C.BigNum.from_str(json.constructor.toString()), _l));
        }
        throw new Error("Unsupported type");
    };
    return toHex(convert(json).to_bytes());
};

},{"buffer":"fCgem","c29d9fccce48de06":"4IOIn","9fb610f6fff10223":"65cQ2","16e35ef5f0d4b719":"h4bhM","@parcel/transformer-js/src/esmodule-helpers.js":"k4nC5"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"4IOIn":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("lPpKD") + "cardano_multiplatform_lib.2ce13f84.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("b5eTA"));

},{"./helpers/browser/js-loader":"fcQrh","./helpers/bundle-url":"kSIq2"}],"fcQrh":[function(require,module,exports) {
"use strict";
var cacheLoader = require("../cacheLoader");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"../cacheLoader":"cvFS2"}],"cvFS2":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"kSIq2":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"65cQ2":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("lPpKD") + "cardano_multiplatform_lib.fa3b932f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fQU5j"));

},{"./helpers/browser/js-loader":"fcQrh","./helpers/bundle-url":"kSIq2"}],"h4bhM":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("lPpKD") + "node-fetch.646caad3.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("aDuCU"));

},{"./helpers/browser/js-loader":"fcQrh","./helpers/bundle-url":"kSIq2"}],"k4nC5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    url: "https://cardano-testnet.blockfrost.io/api/v0",
    apiKey: "testnetLcLqm10CEnmMJEzLMtp7w3MtaxhKKE13"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k4nC5"}]},["2iQxA","bNKaB"], "bNKaB", "parcelRequiref61b")

//# sourceMappingURL=index.0641b553.js.map
