/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
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
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
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
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

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

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

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
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
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
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

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
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
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
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

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
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./react/src/components/App.js":
/*!*************************************!*\
  !*** ./react/src/components/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Installation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Installation */ "./react/src/components/Installation.js");
/* harmony import */ var _RadioField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioField */ "./react/src/components/RadioField.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var useState = wp.element.useState;


var importFiles = tutormate.import_files;
var allCategories = ["all"].concat(_toConsumableArray(new Set(importFiles.map(function (item) {
  return item.categories;
}).flat())));
var elementorPlugins = builderplugins.elementor_plugins;
var gutenbergPlugins = builderplugins.gutenberg_plugins;

function App() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fetching = _useState4[0],
      setFetching = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      percentage = _useState6[0],
      setPercentage = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      importCompleted = _useState8[0],
      setImportCompleted = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDemo = _useState10[0],
      setSelectedDemo = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      builderList = _useState12[0],
      setBuilderList = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      clickedItem = _useState14[0],
      setClickedItem = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      modalState = _useState16[0],
      setModalState = _useState16[1];

  var _useState17 = useState('gutenberg'),
      _useState18 = _slicedToArray(_useState17, 2),
      builder = _useState18[0],
      setBuilder = _useState18[1];

  var _useState19 = useState(0),
      _useState20 = _slicedToArray(_useState19, 2),
      selectedIndex = _useState20[0],
      setSelectedIndex = _useState20[1];

  var _useState21 = useState(importFiles),
      _useState22 = _slicedToArray(_useState21, 2),
      listItems = _useState22[0],
      setListItems = _useState22[1];

  var _useState23 = useState(''),
      _useState24 = _slicedToArray(_useState23, 2),
      demoNotice = _useState24[0],
      setDemoNotice = _useState24[1];

  var _useState25 = useState(allCategories),
      _useState26 = _slicedToArray(_useState25, 2),
      categories = _useState26[0],
      setCategories = _useState26[1];

  var _useState27 = useState({}),
      _useState28 = _slicedToArray(_useState27, 2),
      pluginInfo = _useState28[0],
      setPluginInfo = _useState28[1];

  var _useState29 = useState([]),
      _useState30 = _slicedToArray(_useState29, 2),
      plugins = _useState30[0],
      setPlugins = _useState30[1];

  var builderOptions = builderList.length > 0 && builderList.map(function (item) {
    return {
      label: item.toUpperCase(),
      value: item
    };
  });

  var toggleModalState = function toggleModalState() {
    setModalState(!modalState);
  };

  var filterItems = function filterItems(category) {
    if ('all' === category) {
      setListItems(importFiles);
      return;
    }

    var newItems = importFiles.filter(function (item) {
      return item.categories.includes(category);
    });
    setListItems(newItems);
  };

  var searchResult = function searchResult(e) {
    var inputValue = e.target.value.trim().toLowerCase();
    var newItems = importFiles.filter(function (item) {
      return item.import_file_name.toLowerCase().includes(inputValue);
    });
    setListItems(newItems);
  };

  var getClickedItem = function getClickedItem(builders, index, notice) {
    setSelectedIndex(index);
    setBuilderList(builders);
    setDemoNotice(notice);
  };

  var selectedBuilder = function selectedBuilder(builder) {
    setBuilder(builder);
  };

  var pluginInstall = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selected, builder, plugins) {
      var pluginArray, selectedPlugins, totalPlugins, increment, _loop, i, contentData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSelectedDemo(selected);
              setModalState(!modalState);
              setFetching(true);
              setProgress('Your site is installing...');
              pluginArray = plugins.length > 0 && plugins.map(function (plugin) {
                return plugin.slug;
              });
              selectedPlugins = pluginArray;
              totalPlugins = selectedPlugins.length;
              increment = Math.ceil(60 / totalPlugins);
              _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(i) {
                var res, responseData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return installationAjax({
                          action: 'tutormate_individual_install_plugins',
                          security: tutormate.ajax_nonce,
                          selected: selected,
                          builder: builder,
                          installing: true,
                          plugin: selectedPlugins[i]
                        });

                      case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                      case 5:
                        responseData = _context.sent;

                        if (responseData.status === 'success') {
                          setPercentage(function (val) {
                            val = Math.min(60, val + increment);
                            return val;
                          });
                          setPluginInfo(function (prevData) {
                            return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, responseData.plugin_name, {
                              title: responseData.plugin_name,
                              responseStatus: responseData.status,
                              pluginState: plugins.find(function (plugin) {
                                return plugin.slug === responseData.plugin_slug && plugin.state === 'active';
                              }) ? 'active' : 'inactive'
                            }));
                          });
                        } else if (responseData.status === 'error') {
                          totalPlugins -= 1;
                          increment = Math.ceil(60 / totalPlugins);
                        }

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _loop);
              });
              i = 0;

            case 10:
              if (!(i < selectedPlugins.length)) {
                _context2.next = 15;
                break;
              }

              return _context2.delegateYield(_loop(i), "t0", 12);

            case 12:
              i++;
              _context2.next = 10;
              break;

            case 15:
              setProgress(tutormate.content_progress);
              setPercentage(65);
              contentData = new FormData();
              contentData.append('action', 'tutormate_import_demo_data');
              contentData.append('security', tutormate.ajax_nonce);
              contentData.append('selected', selectedDemo);
              doAjax(contentData);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    return function pluginInstall(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var installationAjax = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", fetch(tutormate.ajax_url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data)
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));

    return function installationAjax(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var doAjax = function doAjax(data) {
    var request = new XMLHttpRequest();
    request.open("POST", tutormate.ajax_url);

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        if ('undefined' !== response.status && 'newAJAX' === response.status) {
          setProgress(tutormate.content_progress);
          setPercentage(75);
          var contentData = new FormData();
          contentData.append('action', 'tutormate_import_demo_data');
          contentData.append('security', tutormate.ajax_nonce);
          contentData.append('selected', selectedDemo);
          doAjax(contentData);
        } else if ('undefined' !== response.status && 'customizerAJAX' === response.status) {
          setProgress(tutormate.customizer_progress);
          setPercentage(85);
          var customizerData = new FormData();
          customizerData.append('action', 'tutormate_import_customizer_data');
          customizerData.append('security', tutormate.ajax_nonce);
          customizerData.append('wp_customize', 'on');
          doAjax(customizerData);
          setProgress(tutormate.all_done_progress);
          setPercentage(100);
        } else if ('undefined' !== response.status && 'afterAllImportAJAX' === response.status) {
          setProgress(tutormate.all_done_progress);
          var afterImportData = new FormData();
          afterImportData.append('action', 'tutormate_after_import_data');
          afterImportData.append('security', tutormate.ajax_nonce);
          doAjax(afterImportData);
          setFetching(false);
          setImportCompleted(true);
        }
      } else {
        console.log('In Progress.');
      }
    };

    request.send(data);
  }; // Component - After Import


  var AfterImport = function AfterImport() {
    return /*#__PURE__*/React.createElement("div", {
      className: "installation-complete modal-wrapper active"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return setImportCompleted(false);
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "56",
      height: "56",
      viewBox: "0 0 56 56",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M28 56C12.5611 56 0 43.4389 0 28C0 12.5611 12.5611 0 28 0C43.4389 0 56 12.5611 56 28C56 43.4389 43.4389 56 28 56Z",
      fill: "#C3E678"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.0667 46.6667C25.6278 46.6667 13.0667 34.1056 13.0667 18.6667C13.0667 12.2041 15.289 6.26248 18.9807 1.51855C7.959 5.28401 0 15.7194 0 28C0 43.4389 12.5611 56 28 56C36.9763 56 44.9585 51.7372 50.086 45.1482C47.2513 46.1167 44.2249 46.6667 41.0667 46.6667Z",
      fill: "#A5D76E"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.2068 42.4828C21.7126 42.4828 21.2182 42.2941 20.8414 41.917L9.25522 30.3308C8.50086 29.577 8.50086 28.354 9.25522 27.6001C10.0086 26.8458 11.2325 26.8458 11.9859 27.6001L22.2069 37.8206L42.0829 17.9449C42.8363 17.1906 44.0602 17.1906 44.8136 17.9449C45.5679 18.6987 45.5679 19.9217 44.8136 20.6756L23.5721 41.917C23.1954 42.2941 22.7009 42.4828 22.2068 42.4828Z",
      fill: "white"
    })), /*#__PURE__*/React.createElement("h3", null, __('Thank You!', 'tutormate')), /*#__PURE__*/React.createElement("p", null, __('Visit', 'tutormate'), " ", /*#__PURE__*/React.createElement("a", {
      href: tutormate.site_url,
      target: "__blank"
    }, __('Site', 'tutormate')), " ", __('or go to', 'tutormate'), " ", /*#__PURE__*/React.createElement("a", {
      href: tutormate.admin_url,
      target: "__blank"
    }, __('Dashboard', 'tutormate'))))));
  }; // Component - PopupModal


  var PopupModal = function PopupModal(_ref3) {
    var selectedIndex = _ref3.selectedIndex;
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-wrapper ".concat(!modalState ? "" : "active")
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h3", null, __('Select Builder', 'tutormate')), /*#__PURE__*/React.createElement("button", {
      className: "close-btn",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement(_RadioField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selected: builder,
      options: builderOptions,
      selectedBuilder: selectedBuilder
    }), /*#__PURE__*/React.createElement("div", {
      className: "pluginstatus"
    }, /*#__PURE__*/React.createElement("p", null, __('The following plugins will be installed and activated for this demo if not already available:', 'tutormate')), 'elementor' === builder && elementorPlugins && elementorPlugins.map(function (item, index) {
      setPlugins(elementorPlugins);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(item.state),
        key: index
      }, /*#__PURE__*/React.createElement("strong", null, item.title), " ", /*#__PURE__*/React.createElement("span", null, item.state));
    }), 'gutenberg' === builder && gutenbergPlugins && gutenbergPlugins.map(function (item, index) {
      setPlugins(gutenbergPlugins);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(item.state),
        key: index
      }, /*#__PURE__*/React.createElement("strong", null, item.title), " ", /*#__PURE__*/React.createElement("span", null, item.state));
    }))), demoNotice && /*#__PURE__*/React.createElement("div", {
      className: "notices"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, __('Important: ', 'tutormate')), /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: demoNotice
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: function onClick() {
        return toggleModalState();
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: function onClick() {
        return pluginInstall(selectedIndex, builder, plugins);
      }
    }, __('Import Now', 'tutormate')))));
  }; // Component - ListItems


  var ListItems = function ListItems(_ref4) {
    var listItems = _ref4.listItems;
    return /*#__PURE__*/React.createElement("ul", {
      className: "list-container"
    }, listItems.length > 0 ? listItems.map(function (item, index) {
      var import_file_name = item.import_file_name,
          builders = item.builders,
          import_preview_image_url = item.import_preview_image_url,
          notice = item.notice,
          preview_url = item.preview_url;
      return /*#__PURE__*/React.createElement("li", {
        className: "single-item",
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, import_file_name), /*#__PURE__*/React.createElement("div", {
        className: "icons"
      }, builders.map(function (builder, index) {
        return builder === 'gutenberg' ? /*#__PURE__*/React.createElement("img", {
          key: index,
          src: "".concat(tutormate.tutormate_url, "/assets/images/qubely.png"),
          alt: "icon"
        }) : /*#__PURE__*/React.createElement("img", {
          key: index,
          src: "".concat(tutormate.tutormate_url, "/assets/images/").concat(builder, ".png"),
          alt: "icon"
        });
      }))), /*#__PURE__*/React.createElement("figure", {
        className: "thumbnail"
      }, /*#__PURE__*/React.createElement("img", {
        src: import_preview_image_url,
        alt: import_file_name
      }), /*#__PURE__*/React.createElement("div", {
        className: "overlay"
      }, /*#__PURE__*/React.createElement("h4", null, __('Available for', 'tutormate')), /*#__PURE__*/React.createElement("div", null, builders.map(function (builder, index) {
        return /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "btn overlay-btn",
          key: index
        }, builder);
      })))), /*#__PURE__*/React.createElement("div", {
        className: "actions"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        className: "preview-url btn btn-light",
        href: preview_url,
        target: "__blank"
      }, __('Preview', 'tutormate')), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary primary-btn",
        onClick: function onClick() {
          return toggleModalState();
        }
      }, /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return getClickedItem(builders, index, notice);
        }
      }, __('Import', 'tutormate'))))));
    }) : /*#__PURE__*/React.createElement("li", {
      className: "no-list-found"
    }, __('Nothing Found', 'tutormate')));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-ui"
  }, /*#__PURE__*/React.createElement(PopupModal, {
    clickedItem: clickedItem,
    selectedIndex: selectedIndex
  }), fetching && /*#__PURE__*/React.createElement(_Installation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    status: progress,
    percentage: percentage,
    plugins: plugins,
    pluginInfo: pluginInfo
  }), importCompleted && /*#__PURE__*/React.createElement(AfterImport, null), /*#__PURE__*/React.createElement("div", {
    className: "demo-importer-wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-version"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(tutormate.tutormate_url, "assets/images/tutor-starter-logo.png"),
    alt: "tutor starter logo"
  }), /*#__PURE__*/React.createElement("span", null, "\xA0 v", tutormate.theme_version)), /*#__PURE__*/React.createElement("p", null, __('Tutor LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience', 'tutormate'))), /*#__PURE__*/React.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-filter"
  }, categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "filter-btn",
      key: index,
      onClick: function onClick() {
        return filterItems(category);
      }
    }, /*#__PURE__*/React.createElement("span", null, category));
  })), /*#__PURE__*/React.createElement("div", {
    className: "search-filter"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    name: "search-demos",
    placeholder: "Search for starter packs\u2026",
    onChange: searchResult
  }), /*#__PURE__*/React.createElement("img", {
    src: "".concat(tutormate.tutormate_url, "assets/images/search-icon.png"),
    style: {
      width: '14px',
      height: '14px'
    },
    alt: "icon"
  })))), /*#__PURE__*/React.createElement(ListItems, {
    listItems: listItems
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./react/src/components/Installation.js":
/*!**********************************************!*\
  !*** ./react/src/components/Installation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;

var Installation = function Installation(_ref) {
  var status = _ref.status,
      percentage = _ref.percentage,
      plugins = _ref.plugins,
      pluginInfo = _ref.pluginInfo;
  var installedPlugins = useRef({});

  var SVGLoader = function SVGLoader() {
    if (100 !== percentage) {
      return /*#__PURE__*/React.createElement("svg", {
        className: "svg-spinner-solo",
        viewBox: "0 0 50 50"
      }, /*#__PURE__*/React.createElement("circle", {
        className: "path",
        cx: "25",
        cy: "25",
        r: "20",
        fill: "none",
        strokeWidth: "5"
      }));
    } else {
      return /*#__PURE__*/React.createElement("svg", {
        className: "svg-circle-solo"
      }, /*#__PURE__*/React.createElement("circle", {
        className: "circle-full",
        cx: "7",
        cy: "7",
        r: "7",
        fill: "#5FAC23"
      }), /*#__PURE__*/React.createElement("path", {
        className: "check-mark",
        d: "M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z",
        fill: "#fff"
      }));
    }
  };

  useEffect(function () {
    plugins.forEach(function (plugin) {
      return installedPlugins.current = _objectSpread(_objectSpread({}, installedPlugins.current), _defineProperty({}, plugin.title, false));
    });
  }, []);

  var renderLoader = function renderLoader() {
    if (Object.keys(pluginInfo).length) {
      return plugins.map(function (plugin, index) {
        var title = plugin.title;

        if (pluginInfo[title]) {
          installedPlugins.current = _objectSpread(_objectSpread({}, installedPlugins.current), _defineProperty({}, title, true));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "plugin-item",
          key: index
        }, /*#__PURE__*/React.createElement(Fragment, null, installedPlugins.current[title] ? /*#__PURE__*/React.createElement("svg", {
          id: "svg-circle"
        }, /*#__PURE__*/React.createElement("circle", {
          className: "circle-full",
          cx: "7",
          cy: "7",
          r: "7",
          fill: "#5FAC23"
        }), /*#__PURE__*/React.createElement("path", {
          className: "check-mark",
          d: "M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z",
          fill: "#fff"
        })) : /*#__PURE__*/React.createElement("svg", {
          className: "svg-spinner",
          viewBox: "0 0 50 50"
        }, /*#__PURE__*/React.createElement("circle", {
          className: "path",
          cx: "25",
          cy: "25",
          r: "20",
          fill: "none",
          strokeWidth: "5"
        })), /*#__PURE__*/React.createElement("div", {
          className: "title"
        }, title ? title : __('Loading...', 'tutormate'))));
      });
    }

    return plugins.map(function (_ref2, index) {
      var title = _ref2.title;
      return /*#__PURE__*/React.createElement("div", {
        className: "plugin-item",
        key: index
      }, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("svg", {
        className: "svg-spinner",
        viewBox: "0 0 50 50"
      }, /*#__PURE__*/React.createElement("circle", {
        className: "path",
        cx: "25",
        cy: "25",
        r: "20",
        fill: "none",
        strokeWidth: "5"
      })), /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, title ? title : __('Loading...', 'tutormate'))));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "installation-screen modal-wrapper active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("span", null, __('Hold on a moment', 'tutormate'), " ", /*#__PURE__*/React.createElement(SVGLoader, null)), " ", status)), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "installation-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-status",
    style: {
      width: "".concat(percentage, "%"),
      opacity: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "percentage"
  }, percentage, "%")), /*#__PURE__*/React.createElement("div", {
    className: "plugin-status"
  }, renderLoader()))));
};

/* harmony default export */ __webpack_exports__["default"] = (Installation);

/***/ }),

/***/ "./react/src/components/RadioField.js":
/*!********************************************!*\
  !*** ./react/src/components/RadioField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RadioField = function RadioField(_ref) {
  var selected = _ref.selected,
      options = _ref.options,
      selectedBuilder = _ref.selectedBuilder;

  var updateRadioValue = function updateRadioValue(event) {
    var radioInput = event.target.value;
    selectedBuilder(radioInput);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "radio-field-wrapper"
  }, options && options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "radio-field-item"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "builder",
      id: option.value,
      value: option.value,
      checked: option.value === selected ? true : false,
      onChange: function onChange(event) {
        return updateRadioValue(event);
      }
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: option.value
    }, option.value === 'gutenberg' ? /*#__PURE__*/React.createElement("img", {
      src: "".concat(tutormate.tutormate_url, "/assets/images/qubely.png"),
      alt: "icon"
    }) : /*#__PURE__*/React.createElement("img", {
      src: "".concat(tutormate.tutormate_url, "/assets/images/").concat(option.value, ".png"),
      alt: "icon"
    }), /*#__PURE__*/React.createElement("span", null, option.value)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioField);

/***/ }),

/***/ "./react/src/demo-importer.js":
/*!************************************!*\
  !*** ./react/src/demo-importer.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ "./react/src/components/App.js");
var render = wp.element.render;

render( /*#__PURE__*/React.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('demo-importer-id'));

/***/ }),

/***/ "./react/src/sass/app.scss":
/*!*********************************!*\
  !*** ./react/src/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ./react/src/demo-importer.js ./react/src/sass/app.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/zaman/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/react/src/demo-importer.js */"./react/src/demo-importer.js");
module.exports = __webpack_require__(/*! /Users/zaman/Local Sites/tutorstarter/app/public/wp-content/plugins/tutormate/react/src/sass/app.scss */"./react/src/sass/app.scss");


/***/ })

/******/ });