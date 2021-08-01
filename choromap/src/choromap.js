!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var _=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});

// https://d3js.org Version 4.13.0. Copyright 2018 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var version = "4.13.0";

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;

function pairs(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
}

function pair(a, b) {
  return [a, b];
}

function cross(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
}

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function number(x) {
  return x === null ? NaN : +x;
}

function variance(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
}

function deviation(array, f) {
  var v = variance(array, f);
  return v ? Math.sqrt(v) : v;
}

function extent(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
}

var array = Array.prototype;

var slice = array.slice;
var map = array.map;

function constant(x) {
  return function() {
    return x;
  };
}

function identity(x) {
  return x;
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function sturges(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}

function histogram() {
  var value = identity,
      domain = extent,
      threshold = sturges;

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = sequence(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisectRight(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
  };

  return histogram;
}

function threshold(values, p, valueof) {
  if (valueof == null) valueof = number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function freedmanDiaconis(values, min, max) {
  values = map.call(values, number).sort(ascending);
  return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
}

function scott(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
}

function max(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
}

function mean(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
}

function median(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return threshold(numbers.sort(ascending), 0.5);
}

function merge(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
}

function min(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
}

function permute(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
}

function scan(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = ascending;

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
}

function shuffle(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}

function sum(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
}

function transpose(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
}

function length(d) {
  return d.length;
}

function zip() {
  return transpose(arguments);
}

var slice$1 = Array.prototype.slice;

function identity$1(x) {
  return x;
}

var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number$1(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number$1)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = slice$1.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice$1.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function empty$1() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty$1 : function() {
    return this.querySelectorAll(selector);
  };
}

function selection_selectAll(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

function selection_filter(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant$1(x) {
  return function() {
    return x;
  };
}

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

function selection_data(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$1(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_merge(selection$$1) {

  for (var groups0 = this._groups, groups1 = selection$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

var filterEvents = {};

exports.event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = exports.event; // Events can be reentrant (e.g., focus).
    exports.event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event0;
    }
  };
}

function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, capture) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}

function customEvent(event1, listener, that, args) {
  var event0 = exports.event;
  event1.sourceEvent = exports.event;
  exports.event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event0;
  }
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function create(name) {
  return select(creator(name).call(document.documentElement));
}

var nextId = 0;

function local$1() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local$1.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

function sourceEvent() {
  var current = exports.event, source;
  while (source = current.sourceEvent) current = source;
  return current;
}

function point(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
}

function mouse(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
}

function selectAll(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
}

function touch(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
}

function touches(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
}

function nopropagation() {
  exports.event.stopImmediatePropagation();
}

function noevent() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
}

function dragDisable(view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

function constant$2(x) {
  return function() {
    return x;
  };
}

function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// Ignore right-click, since that should open the context menu.
function defaultFilter$1() {
  return !exports.event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: exports.event.x, y: exports.event.y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

function drag() {
  var filter = defaultFilter$1,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
    if (!gesture) return;
    select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    dragDisable(exports.event.view);
    nopropagation();
    mousemoving = false;
    mousedownx = exports.event.clientX;
    mousedowny = exports.event.clientY;
    gesture("start");
  }

  function mousemoved() {
    noevent();
    if (!mousemoving) {
      var dx = exports.event.clientX - mousedownx, dy = exports.event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    select(exports.event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(exports.event.view, mousemoving);
    noevent();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = exports.event.changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, touch, this, arguments)) {
        nopropagation();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = exports.event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = exports.event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex3 = /^#([0-9a-f]{3})$/;
var reHex6 = /^#([0-9a-f]{6})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var Kn = 18;
var Xn = 0.950470;
var Yn = 1;
var Zn = 1.088830;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new Rgb(
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861;
var B = +1.78277;
var C = -0.29227;
var D = -0.90649;
var E = +1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

function basis$1(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function constant$3(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$3(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color$$1 = gamma(y);

  function rgb$$1(start, end) {
    var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
        g = color$$1(start.g, end.g),
        b = color$$1(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$$1.gamma = rgbGamma;

  return rgb$$1;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color$$1;
    for (i = 0; i < n; ++i) {
      color$$1 = rgb(colors[i]);
      r[i] = color$$1.r || 0;
      g[i] = color$$1.g || 0;
      b[i] = color$$1.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color$$1.opacity = 1;
    return function(t) {
      color$$1.r = r(t);
      color$$1.g = g(t);
      color$$1.b = b(t);
      return color$$1 + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);

function array$1(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
}

function reinterpolate(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: reinterpolate(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolateValue(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$3(b)
      : (t === "number" ? reinterpolate
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array$1
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : reinterpolate)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var cssNode;
var cssRoot;
var cssView;
var svgNode;

function parseCss(value) {
  if (value === "none") return identity$2;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity$2;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: reinterpolate(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: reinterpolate(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var rho = Math.SQRT2;
var rho2 = 2;
var rho4 = 4;
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
function interpolateZoom(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    };
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    };
  }

  i.duration = S * 1000;

  return i;
}

function hsl$1(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = hsl(start)).h, (end = hsl(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hsl$2 = hsl$1(hue);
var hslLong = hsl$1(nogamma);

function lab$1(start, end) {
  var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

function hcl$1(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = hcl(start)).h, (end = hcl(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hcl$2 = hcl$1(hue);
var hclLong = hcl$1(nogamma);

function cubehelix$1(hue$$1) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix$$1(start, end) {
      var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix$$1.gamma = cubehelixGamma;

    return cubehelix$$1;
  })(1);
}

var cubehelix$2 = cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

function quantize(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}

var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1000;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

function interval$1(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create$1(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set$1(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create$1(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule$$1,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule$$1 = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule$$1.state > STARTING && schedule$$1.state < ENDING;
    schedule$$1.state = ENDED;
    schedule$$1.timer.stop();
    if (active) schedule$$1.on.call("interrupt", node, node.__data__, schedule$$1.index, schedule$$1.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule$$1 = set$1(this, id),
        tween = schedule$$1.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule$$1.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule$$1 = set$1(this, id),
        tween = schedule$$1.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule$$1.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule$$1 = set$1(this, id);
    (schedule$$1.value || (schedule$$1.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}

function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? reinterpolate
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrFunction$1(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS$1(fullname, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value + ""));
}

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition$$1) {
  if (transition$$1._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule$$1 = sit(this, id),
        on = schedule$$1.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule$$1.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection$1 = selection.prototype.constructor;

function transition_selection() {
  return new Selection$1(this._groups, this._parents);
}

function styleRemove$1(name, interpolate$$1) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name),
        value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function styleFunction$1(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this
          .styleTween(name, styleRemove$1(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
          : styleConstant$1(name, i, value + ""), priority);
}

function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease
};

function linear$1(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI;
var halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var root$1 = [null];

function active(node, name) {
  var schedules = node.__transition,
      schedule$$1,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule$$1 = schedules[i]).state > SCHEDULED && schedule$$1.name === name) {
        return new Transition([[node]], root$1, name, +i);
      }
    }
  }

  return null;
}

function constant$4(x) {
  return function() {
    return x;
  };
}

function BrushEvent(target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
}

function nopropagation$1() {
  exports.event.stopImmediatePropagation();
}

function noevent$1() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
}

var MODE_DRAG = {name: "drag"};
var MODE_SPACE = {name: "space"};
var MODE_HANDLE = {name: "handle"};
var MODE_CENTER = {name: "center"};

var X = {
  name: "x",
  handles: ["e", "w"].map(type),
  input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
  input: function(xy) { return xy; },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !exports.event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush$1(X);
}

function brushY() {
  return brush$1(Y);
}

function brush() {
  return brush$1(XY);
}

function brush$1(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      listeners = dispatch(brush, "start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        .on("mousedown.brush touchstart.brush", started);
  }

  brush.move = function(group, selection) {
    if (group.selection) {
      group
          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolateValue(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && empty(selection1) ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 && selection1 ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 == null || empty(selection1) ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args) {
    return that.__brush.emitter || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting) this.starting = false, this.emit("start");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type) {
      customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (exports.event.touches) { if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$1(); }
    else if (touchending) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = exports.event.target.__data__.type,
        mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (exports.event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx,
        dy,
        moving,
        shifting = signX && signY && exports.event.shiftKey,
        lockX,
        lockY,
        point0 = mouse(that),
        point = point0,
        emit = emitter(that, arguments).beforestart();

    if (type === "overlay") {
      state.selection = selection = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (exports.event.touches) {
      group
          .on("touchmove.brush", moved, true)
          .on("touchend.brush touchcancel.brush", ended, true);
    } else {
      var view = select(exports.event.view)
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);

      dragDisable(exports.event.view);
    }

    nopropagation$1();
    interrupt(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = mouse(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
        else lockX = true;
      }
      point = point1;
      moving = true;
      noevent$1();
      move();
    }

    function move() {
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      nopropagation$1();
      if (exports.event.touches) {
        if (exports.event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
        group.on("touchmove.brush touchend.brush touchcancel.brush", null);
      } else {
        yesdrag(exports.event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (exports.event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }

    function keyupped() {
      switch (exports.event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (exports.event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = extent.apply(this, arguments);
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), brush) : filter;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

var cos = Math.cos;
var sin = Math.sin;
var pi$1 = Math.PI;
var halfPi$1 = pi$1 / 2;
var tau$1 = pi$1 * 2;
var max$1 = Math.max;

function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

function chord() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = sequence(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(sequence(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = max$1(0, tau$1 - padAngle * n) / k;
    dx = k ? padAngle : tau$1 / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
}

var slice$2 = Array.prototype.slice;

function constant$5(x) {
  return function() {
    return x;
  };
}

var pi$2 = Math.PI;
var tau$2 = 2 * pi$2;
var epsilon$1 = 1e-6;
var tauEpsilon = tau$2 - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$2 + tau$2;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$2)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

function ribbon() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = slice$2.call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - halfPi$1,
        sa1 = endAngle.apply(this, argv) - halfPi$1,
        sx0 = sr * cos(sa0),
        sy0 = sr * sin(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - halfPi$1,
        ta1 = endAngle.apply(this, argv) - halfPi$1;

    if (!context) context = buffer = path();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$5(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
  };

  return ribbon;
}

var prefix = "$";

function Map() {}

Map.prototype = map$1.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$1(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function nest() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = map$1(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
}

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return map$1();
}

function setMap(map, key, value) {
  map.set(key, value);
}

function Set() {}

var proto = map$1.prototype;

Set.prototype = set$2.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set$2(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

function keys(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
}

function values(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
}

function entries(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
}

var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function dsv(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
}

var csv = dsv(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;

var tsv = dsv("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;

function center$1(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
}

function constant$6(x) {
  return function() {
    return x;
  };
}

function jiggle() {
  return (Math.random() - 0.5) * 1e-6;
}

function tree_add(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, inherit the existing extent.
  if (x1 < x0) x0 = this._x0, x1 = this._x1;
  if (y1 < y0) y0 = this._y0, y1 = this._y1;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

function tree_cover(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else if (x0 > x || x > x1 || y0 > y || y > y1) {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
      case 0: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
        break;
      }
      case 1: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
        break;
      }
      case 2: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
        break;
      }
      case 3: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
        break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  // If the quadtree covers the point already, just return.
  else return this;

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

function tree_data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}

function tree_extent(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

function Quad(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

function tree_find(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new Quad(node[3], xm, ym, x2, y2),
        new Quad(node[2], x1, ym, xm, y2),
        new Quad(node[1], xm, y1, x2, ym),
        new Quad(node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}

function tree_remove(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return next ? previous.next = next : delete previous.next, this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

function tree_root() {
  return this._root;
}

function tree_size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}

function tree_visit(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
    }
  }
  return this;
}

function tree_visitAfter(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

function defaultX(d) {
  return d[0];
}

function tree_x(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

function defaultY(d) {
  return d[1];
}

function tree_y(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;

function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

function collide(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = constant$6(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = jiggle(), l += x * x;
            if (y === 0) y = jiggle(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
  };

  return force;
}

function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

function link(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = constant$6(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || jiggle();
        y = target.y + target.vy - source.y - source.vy || jiggle();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = map$1(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance;
  };

  return force;
}

function x$1(d) {
  return d.x;
}

function y$1(d) {
  return d.y;
}

var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));

function simulation(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = map$1(),
      stepper = timer(step),
      event = dispatch("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

function manyBody() {
  var nodes,
      node,
      alpha,
      strength = constant$6(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = jiggle(), l += x * x;
        if (y === 0) y = jiggle(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = jiggle(), l += x * x;
      if (y === 0) y = jiggle(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
}

function radial(radius, x, y) {
  var nodes,
      strength = constant$6(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = constant$6(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _, initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
}

function x$2(x) {
  var strength = constant$6(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = constant$6(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x;
  };

  return force;
}

function y$2(y) {
  var strength = constant$6(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = constant$6(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y;
  };

  return force;
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent$1(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

function formatDefault(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "": formatDefault,
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!formatTypes[type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};

function identity$3(x) {
  return x;
}

var prefixes = ["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$3,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;



defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  exports.format = locale.format;
  exports.formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent$1(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
}

// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

function adder() {
  return new Adder;
}

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add$1(temp, y, this.t);
    add$1(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add$1(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}

var epsilon$2 = 1e-6;
var epsilon2$1 = 1e-12;
var pi$3 = Math.PI;
var halfPi$2 = pi$3 / 2;
var quarterPi = pi$3 / 4;
var tau$3 = pi$3 * 2;

var degrees$1 = 180 / pi$3;
var radians = pi$3 / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos$1 = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;

var log = Math.log;
var pow = Math.pow;
var sin$1 = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$3 : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi$2 : x < -1 ? -halfPi$2 : Math.asin(x);
}

function haversin(x) {
  return (x = sin$1(x / 2)) * x;
}

function noop$1() {}

function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

function geoStream(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

var areaRingSum = adder();

var areaSum = adder();
var lambda00;
var phi00;
var lambda0;
var cosPhi0;
var sinPhi0;

var areaStream = {
  point: noop$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau$3 + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop$1;
  },
  sphere: function() {
    areaSum.add(tau$3);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= radians, phi *= radians;
  lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
}

function areaPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  phi = phi / 2 + quarterPi; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = cos$1(phi),
      sinPhi = sin$1(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * cos$1(adLambda),
      v = k * sdLambda * sin$1(adLambda);
  areaRingSum.add(atan2(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

function area(object) {
  areaSum.reset();
  geoStream(object, areaStream);
  return areaSum * 2;
}

function spherical(cartesian) {
  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
  return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

var lambda0$1;
var phi0;
var lambda1;
var phi1;
var lambda2;
var lambda00$1;
var phi00$1;
var p0;
var deltaSum = adder();
var ranges;
var range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > epsilon$2) phi1 = 90;
    else if (deltaSum < -epsilon$2) phi0 = -90;
    range[0] = lambda0$1, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = cartesian([lambda * radians, phi * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2,
        sign$$1 = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * degrees$1 * sign$$1,
        phii,
        antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
      phii = inflection[1] * degrees$1;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
      phii = -inflection[1] * degrees$1;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
      }
    } else {
      if (lambda1 >= lambda0$1) {
        if (lambda < lambda0$1) lambda0$1 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0$1, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00$1 = lambda, phi00$1 = phi;
  }
  areaStream.point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  areaStream.lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00$1, phi00$1);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon$2) lambda0$1 = -(lambda1 = 180);
  range[0] = lambda0$1, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

function bounds(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
  ranges = [];
  geoStream(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0$1 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0$1, phi0], [lambda1, phi1]];
}

var W0;
var W1;
var X0;
var Y0;
var Z0;
var X1;
var Y1;
var Z1;
var X2;
var Y2;
var Z2;
var lambda00$2;
var phi00$2;
var x0;
var y0;
var z0; // previous point

var centroidStream = {
  sphere: noop$1,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi);
  centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi);
  x0 = cosPhi * cos$1(lambda);
  y0 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi),
      x = cosPhi * cos$1(lambda),
      y = cosPhi * sin$1(lambda),
      z = sin$1(phi),
      w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00$2, phi00$2);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00$2 = lambda, phi00$2 = phi;
  lambda *= radians, phi *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos$1(phi);
  x0 = cosPhi * cos$1(lambda);
  y0 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi),
      x = cosPhi * cos$1(lambda),
      y = cosPhi * sin$1(lambda),
      z = sin$1(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = sqrt(cx * cx + cy * cy + cz * cz),
      w = asin(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroid(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  geoStream(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < epsilon2$1) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < epsilon$2) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < epsilon2$1) return [NaN, NaN];
  }

  return [atan2(y, x) * degrees$1, asin(z / sqrt(m)) * degrees$1];
}

function constant$7(x) {
  return function() {
    return x;
  };
}

function compose(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
}

function rotationIdentity(lambda, phi) {
  return [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau$3) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos$1(deltaPhi),
      sinDeltaPhi = sin$1(deltaPhi),
      cosDeltaGamma = cos$1(deltaGamma),
      sinDeltaGamma = sin$1(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = cos$1(phi),
        x = cos$1(lambda) * cosPhi,
        y = sin$1(lambda) * cosPhi,
        z = sin$1(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = cos$1(phi),
        x = cos$1(lambda) * cosPhi,
        y = sin$1(lambda) * cosPhi,
        z = sin$1(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

function rotation(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
  };

  return forward;
}

// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos$1(radius),
      sinRadius = sin$1(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau$3;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$3;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau$3 - epsilon$2) % tau$3;
}

function circle() {
  var center = constant$7([0, 0]),
      radius = constant$7(90),
      precision = constant$7(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= degrees$1, x[1] *= degrees$1;
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * radians,
        p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : constant$7([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$7(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant$7(+_), circle) : precision;
  };

  return circle;
}

function clipBuffer() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop$1,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

function pointEqual(a, b) {
  return abs(a[0] - b[0]) < epsilon$2 && abs(a[1] - b[1]) < epsilon$2;
}

function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (pointEqual(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link$1(subject);
  link$1(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}

function link$1(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

var sum$1 = adder();

function polygonContains(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [sin$1(lambda), -cos$1(lambda), 0],
      angle = 0,
      winding = 0;

  sum$1.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + quarterPi,
        sinPhi0 = sin$1(phi0),
        cosPhi0 = cos$1(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + quarterPi,
          sinPhi1 = sin$1(phi1),
          cosPhi1 = cos$1(phi1),
          delta = lambda1 - lambda0,
          sign$$1 = delta >= 0 ? 1 : -1,
          absDelta = sign$$1 * delta,
          antimeridian = absDelta > pi$3,
          k = sinPhi0 * sinPhi1;

      sum$1.add(atan2(k * sign$$1 * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
      angle += antimeridian ? delta + sign$$1 * tau$3 : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -epsilon$2 || angle < epsilon$2 && sum$1 < -epsilon$2) ^ (winding & 1);
}

function clip(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = clipBuffer(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
}

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi$2 - epsilon$2 : halfPi$2 - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - halfPi$2 - epsilon$2 : halfPi$2 - b[1]);
}

var clipAntimeridian = clip(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi$3, -halfPi$2]
);

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi$3 : -pi$3,
          delta = abs(lambda1 - lambda0);
      if (abs(delta - pi$3) < epsilon$2) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$2 : -halfPi$2);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi$3) { // line crosses antimeridian
        if (abs(lambda0 - sign0) < epsilon$2) lambda0 -= sign0 * epsilon$2; // handle degeneracies
        if (abs(lambda1 - sign1) < epsilon$2) lambda1 -= sign1 * epsilon$2;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon$2
      ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
          - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi$2;
    stream.point(-pi$3, phi);
    stream.point(0, phi);
    stream.point(pi$3, phi);
    stream.point(pi$3, 0);
    stream.point(pi$3, -phi);
    stream.point(0, -phi);
    stream.point(-pi$3, -phi);
    stream.point(-pi$3, 0);
    stream.point(-pi$3, phi);
  } else if (abs(from[0] - to[0]) > epsilon$2) {
    var lambda = from[0] < to[0] ? pi$3 : -pi$3;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

function clipCircle(radius) {
  var cr = cos$1(radius),
      delta = 6 * radians,
      smallRadius = cr > 0,
      notHemisphere = abs(cr) > epsilon$2; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return cos$1(lambda) * cos$1(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? pi$3 : -pi$3), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
            point1[0] += epsilon$2;
            point1[1] += epsilon$2;
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !pointEqual(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = cartesian(a),
        pb = cartesian(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = cartesianCross(pa, pb),
        n2n2 = cartesianDot(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = cartesianCross(n1, n2),
        A = cartesianScale(n1, c1),
        B = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = cartesianDot(A, u),
        uu = cartesianDot(u, u),
        t2 = w * w - uu * (cartesianDot(A, A) - 1);

    if (t2 < 0) return;

    var t = sqrt(t2),
        q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = abs(delta - pi$3) < epsilon$2,
        meridian = polar || delta < epsilon$2;

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$2 ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > pi$3 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi$3 - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$3, radius - pi$3]);
}

function clipLine(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

var clipMax = 1e9;
var clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return abs(p[0] - x0) < epsilon$2 ? direction > 0 ? 0 : 3
        : abs(p[0] - x1) < epsilon$2 ? direction > 0 ? 2 : 1
        : abs(p[1] - y0) < epsilon$2 ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = clipBuffer(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = merge(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (clipLine(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

function extent$1() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
}

var lengthSum = adder();
var lambda0$2;
var sinPhi0$1;
var cosPhi0$1;

var lengthStream = {
  sphere: noop$1,
  point: noop$1,
  lineStart: lengthLineStart,
  lineEnd: noop$1,
  polygonStart: noop$1,
  polygonEnd: noop$1
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop$1;
}

function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin$1(phi),
      cosPhi = cos$1(phi),
      delta = abs(lambda - lambda0$2),
      cosDelta = cos$1(delta),
      sinDelta = sin$1(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
      z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y * y), z));
  lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
}

function length$1(object) {
  lengthSum.reset();
  geoStream(object, lengthStream);
  return +lengthSum;
}

var coordinates = [null, null];
var object$1 = {type: "LineString", coordinates: coordinates};

function distance(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length$1(object$1);
}

var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return distance(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = distance(coordinates[0], coordinates[1]),
      ao = distance(coordinates[0], point),
      ob = distance(point, coordinates[1]);
  return ao + ob <= ab + epsilon$2;
}

function containsPolygon(coordinates, point) {
  return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}

function contains(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
}

function graticuleX(y0, y1, dy) {
  var y = sequence(y0, y1 - epsilon$2, dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = sequence(x0, x1 - epsilon$2, dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return sequence(ceil(X0 / DX) * DX, X1, DX).map(X)
        .concat(sequence(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(sequence(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon$2; }).map(x))
        .concat(sequence(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon$2; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + epsilon$2], [180, 90 - epsilon$2]])
      .extentMinor([[-180, -80 - epsilon$2], [180, 80 + epsilon$2]]);
}

function graticule10() {
  return graticule()();
}

function interpolate$1(a, b) {
  var x0 = a[0] * radians,
      y0 = a[1] * radians,
      x1 = b[0] * radians,
      y1 = b[1] * radians,
      cy0 = cos$1(y0),
      sy0 = sin$1(y0),
      cy1 = cos$1(y1),
      sy1 = sin$1(y1),
      kx0 = cy0 * cos$1(x0),
      ky0 = cy0 * sin$1(x0),
      kx1 = cy1 * cos$1(x1),
      ky1 = cy1 * sin$1(x1),
      d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
      k = sin$1(d);

  var interpolate = d ? function(t) {
    var B = sin$1(t *= d) / k,
        A = sin$1(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      atan2(y, x) * degrees$1,
      atan2(z, sqrt(x * x + y * y)) * degrees$1
    ];
  } : function() {
    return [x0 * degrees$1, y0 * degrees$1];
  };

  interpolate.distance = d;

  return interpolate;
}

function identity$4(x) {
  return x;
}

var areaSum$1 = adder();
var areaRingSum$1 = adder();
var x00;
var y00;
var x0$1;
var y0$1;

var areaStream$1 = {
  point: noop$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: function() {
    areaStream$1.lineStart = areaRingStart$1;
    areaStream$1.lineEnd = areaRingEnd$1;
  },
  polygonEnd: function() {
    areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$1;
    areaSum$1.add(abs(areaRingSum$1));
    areaRingSum$1.reset();
  },
  result: function() {
    var area = areaSum$1 / 2;
    areaSum$1.reset();
    return area;
  }
};

function areaRingStart$1() {
  areaStream$1.point = areaPointFirst$1;
}

function areaPointFirst$1(x, y) {
  areaStream$1.point = areaPoint$1;
  x00 = x0$1 = x, y00 = y0$1 = y;
}

function areaPoint$1(x, y) {
  areaRingSum$1.add(y0$1 * x - x0$1 * y);
  x0$1 = x, y0$1 = y;
}

function areaRingEnd$1() {
  areaPoint$1(x00, y00);
}

var x0$2 = Infinity;
var y0$2 = x0$2;
var x1 = -x0$2;
var y1 = x1;

var boundsStream$1 = {
  point: boundsPoint$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: noop$1,
  polygonEnd: noop$1,
  result: function() {
    var bounds = [[x0$2, y0$2], [x1, y1]];
    x1 = y1 = -(y0$2 = x0$2 = Infinity);
    return bounds;
  }
};

function boundsPoint$1(x, y) {
  if (x < x0$2) x0$2 = x;
  if (x > x1) x1 = x;
  if (y < y0$2) y0$2 = y;
  if (y > y1) y1 = y;
}

// TODO Enforce positive area for exterior, negative area for interior?

var X0$1 = 0;
var Y0$1 = 0;
var Z0$1 = 0;
var X1$1 = 0;
var Y1$1 = 0;
var Z1$1 = 0;
var X2$1 = 0;
var Y2$1 = 0;
var Z2$1 = 0;
var x00$1;
var y00$1;
var x0$3;
var y0$3;

var centroidStream$1 = {
  point: centroidPoint$1,
  lineStart: centroidLineStart$1,
  lineEnd: centroidLineEnd$1,
  polygonStart: function() {
    centroidStream$1.lineStart = centroidRingStart$1;
    centroidStream$1.lineEnd = centroidRingEnd$1;
  },
  polygonEnd: function() {
    centroidStream$1.point = centroidPoint$1;
    centroidStream$1.lineStart = centroidLineStart$1;
    centroidStream$1.lineEnd = centroidLineEnd$1;
  },
  result: function() {
    var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1]
        : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1]
        : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1]
        : [NaN, NaN];
    X0$1 = Y0$1 = Z0$1 =
    X1$1 = Y1$1 = Z1$1 =
    X2$1 = Y2$1 = Z2$1 = 0;
    return centroid;
  }
};

function centroidPoint$1(x, y) {
  X0$1 += x;
  Y0$1 += y;
  ++Z0$1;
}

function centroidLineStart$1() {
  centroidStream$1.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream$1.point = centroidPointLine;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
  X1$1 += z * (x0$3 + x) / 2;
  Y1$1 += z * (y0$3 + y) / 2;
  Z1$1 += z;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function centroidLineEnd$1() {
  centroidStream$1.point = centroidPoint$1;
}

function centroidRingStart$1() {
  centroidStream$1.point = centroidPointFirstRing;
}

function centroidRingEnd$1() {
  centroidPointRing(x00$1, y00$1);
}

function centroidPointFirstRing(x, y) {
  centroidStream$1.point = centroidPointRing;
  centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0$3,
      dy = y - y0$3,
      z = sqrt(dx * dx + dy * dy);

  X1$1 += z * (x0$3 + x) / 2;
  Y1$1 += z * (y0$3 + y) / 2;
  Z1$1 += z;

  z = y0$3 * x - x0$3 * y;
  X2$1 += z * (x0$3 + x);
  Y2$1 += z * (y0$3 + y);
  Z2$1 += z * 3;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, tau$3);
        break;
      }
    }
  },
  result: noop$1
};

var lengthSum$1 = adder();
var lengthRing;
var x00$2;
var y00$2;
var x0$4;
var y0$4;

var lengthStream$1 = {
  point: noop$1,
  lineStart: function() {
    lengthStream$1.point = lengthPointFirst$1;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint$1(x00$2, y00$2);
    lengthStream$1.point = noop$1;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum$1;
    lengthSum$1.reset();
    return length;
  }
};

function lengthPointFirst$1(x, y) {
  lengthStream$1.point = lengthPoint$1;
  x00$2 = x0$4 = x, y00$2 = y0$4 = y;
}

function lengthPoint$1(x, y) {
  x0$4 -= x, y0$4 -= y;
  lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4));
  x0$4 = x, y0$4 = y;
}

function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle$1(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle$1(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle$1(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}

function index$1(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      geoStream(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    geoStream(object, projectionStream(areaStream$1));
    return areaStream$1.result();
  };

  path.measure = function(object) {
    geoStream(object, projectionStream(lengthStream$1));
    return lengthStream$1.result();
  };

  path.bounds = function(object) {
    geoStream(object, projectionStream(boundsStream$1));
    return boundsStream$1.result();
  };

  path.centroid = function(object) {
    geoStream(object, projectionStream(centroidStream$1));
    return centroidStream$1.result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$4) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
}

function transform(methods) {
  return {
    stream: transformer(methods)
  };
}

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};

function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  geoStream(object, projection.stream(boundsStream$1));
  fitBounds(boundsStream$1.result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

var maxDepth = 16;
var cosMinDistance = cos$1(30 * radians); // cos(minimum angular distance)

function resample(project, delta2) {
  return +delta2 ? resample$1(project, delta2) : resampleNone(project);
}

function resampleNone(project) {
  return transformer({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample$1(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = sqrt(a * a + b * b + c * c),
          phi2 = asin(c /= m),
          lambda2 = abs(abs(c) - 1) < epsilon$2 || abs(lambda0 - lambda1) < epsilon$2 ? (lambda0 + lambda1) / 2 : atan2(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}

var transformRadians = transformer({
  point: function(x, y) {
    this.stream.point(x * radians, y * radians);
  }
});

function transformRotate(rotate) {
  return transformer({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = clipAntimeridian, // clip angle
      x0 = null, y0, x1, y1, postclip = identity$4, // clip extent
      delta2 = 0.5, projectResample = resample(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * radians, point[1] * radians);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * degrees$1, point[1] * degrees$1];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return fitExtent(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return fitSize(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return fitWidth(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return fitHeight(projection, height, object);
  };

  function recenter() {
    projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = pi$3 / 3,
      m = projectionMutator(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
  };

  return p;
}

function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = cos$1(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, sin$1(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, asin(y * cosPhi0)];
  };

  return forward;
}

function conicEqualAreaRaw(y0, y1) {
  var sy0 = sin$1(y0), n = (sy0 + sin$1(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (abs(n) < epsilon$2) return cylindricalEqualAreaRaw(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;

  function project(x, y) {
    var r = sqrt(c - 2 * n * sin$1(y)) / n;
    return [r * sin$1(x *= n), r0 - r * cos$1(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [atan2(x, abs(r0y)) / n * sign(r0y), asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

function conicEqualArea() {
  return conicProjection(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
}

function albers() {
  return conicEqualArea()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
}

// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
function albersUsa() {
  var cache,
      cacheStream,
      lower48 = albers(), lower48Point,
      alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null, (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + epsilon$2, y + 0.120 * k + epsilon$2], [x - 0.214 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + epsilon$2, y + 0.166 * k + epsilon$2], [x - 0.115 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return fitExtent(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return fitSize(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return fitWidth(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return fitHeight(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
}

function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = cos$1(x),
        cy = cos$1(y),
        k = scale(cx * cy);
    return [
      k * cy * sin$1(x),
      k * sin$1(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = sqrt(x * x + y * y),
        c = angle(z),
        sc = sin$1(c),
        cc = cos$1(c);
    return [
      atan2(x * sc, z * cc),
      asin(z && y * sc / z)
    ];
  }
}

var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});

function azimuthalEqualArea() {
  return projection(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
}

var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin$1(c);
});

azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});

function azimuthalEquidistant() {
  return projection(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
}

function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi$2 + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * atan(exp(y)) - halfPi$2];
};

function mercator() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / tau$3);
}

function mercatorProjection(project) {
  var m = projection(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = pi$3 * scale(),
        t = m(rotation(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}

function tany(y) {
  return tan((halfPi$2 + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = cos$1(y0),
      n = y0 === y1 ? sin$1(y0) : log(cy0 / cos$1(y1)) / log(tany(y1) / tany(y0)),
      f = cy0 * pow(tany(y0), n) / n;

  if (!n) return mercatorRaw;

  function project(x, y) {
    if (f > 0) { if (y < -halfPi$2 + epsilon$2) y = -halfPi$2 + epsilon$2; }
    else { if (y > halfPi$2 - epsilon$2) y = halfPi$2 - epsilon$2; }
    var r = f / pow(tany(y), n);
    return [r * sin$1(n * x), f - r * cos$1(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy);
    return [atan2(x, abs(fy)) / n * sign(fy), 2 * atan(pow(f / r, 1 / n)) - halfPi$2];
  };

  return project;
}

function conicConformal() {
  return conicProjection(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
}

function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

function equirectangular() {
  return projection(equirectangularRaw)
      .scale(152.63);
}

function conicEquidistantRaw(y0, y1) {
  var cy0 = cos$1(y0),
      n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (abs(n) < epsilon$2) return equirectangularRaw;

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * sin$1(nx), g - gy * cos$1(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [atan2(x, abs(gy)) / n * sign(gy), g - sign(n) * sqrt(x * x + gy * gy)];
  };

  return project;
}

function conicEquidistant() {
  return conicProjection(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
}

function gnomonicRaw(x, y) {
  var cy = cos$1(y), k = cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}

gnomonicRaw.invert = azimuthalInvert(atan);

function gnomonic() {
  return projection(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
}

function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? identity$4 : transformer({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

function identity$5() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform$$1 = identity$4, // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = identity$4,
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform$$1(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform$$1 = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform$$1 = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform$$1 = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform$$1 = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return fitExtent(projection, extent, object);
    },
    fitSize: function(size, object) {
      return fitSize(projection, size, object);
    },
    fitWidth: function(width, object) {
      return fitWidth(projection, width, object);
    },
    fitHeight: function(height, object) {
      return fitHeight(projection, height, object);
    }
  };
}

function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (abs(delta) > epsilon$2 && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

function naturalEarth1() {
  return projection(naturalEarth1Raw)
      .scale(175.295);
}

function orthographicRaw(x, y) {
  return [cos$1(y) * sin$1(x), sin$1(y)];
}

orthographicRaw.invert = azimuthalInvert(asin);

function orthographic() {
  return projection(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + epsilon$2);
}

function stereographicRaw(x, y) {
  var cy = cos$1(y), k = 1 + cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}

stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});

function stereographic() {
  return projection(stereographicRaw)
      .scale(250)
      .clipAngle(142);
}

function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi$2 + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * atan(exp(x)) - halfPi$2];
};

function transverseMercator() {
  var m = mercatorProjection(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
}

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

function cluster() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
}

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

function node_count() {
  return this.eachAfter(count);
}

function node_each(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
}

function node_eachBefore(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
}

function node_eachAfter(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

function node_sum(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

function node_sort(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

function node_path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

function node_ancestors() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

function node_descendants() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

function node_leaves() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

function node_links() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy
};

var slice$3 = Array.prototype.slice;

function shuffle$1(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function enclose(circles) {
  var i = 0, n = (circles = shuffle$1(slice$3.call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
}

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}

function place(a, b, c) {
  var ax = a.x,
      ay = a.y,
      da = b.r + c.r,
      db = a.r + c.r,
      dx = b.x - ax,
      dy = b.y - ay,
      dc = dx * dx + dy * dy;
  if (dc) {
    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
    c.x = ax + x * dx + y * dy;
    c.y = ay + x * dy - y * dx;
  } else {
    c.x = ax + db;
    c.y = ay;
  }
}

function intersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return dr * dr - 1e-6 > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node$1(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node$1(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

function siblings(circles) {
  packEnclose(circles);
  return circles;
}

function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}

function constantZero() {
  return 0;
}

function constant$8(x) {
  return function() {
    return x;
  };
}

function defaultRadius$1(d) {
  return Math.sqrt(d.value);
}

function index$2() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = constantZero;

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius$1))
          .eachAfter(packChildren(constantZero, 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = optional(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : constant$8(+x), pack) : padding;
  };

  return pack;
}

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = packEnclose(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}

function roundNode(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

function treemapDice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

function partition() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
}

var keyPrefix$1 = "$";
var preroot = {depth: -1};
var ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

function stratify() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new Node(d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix$1 + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix$1 + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = required(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = required(x), stratify) : parentId;
  };

  return stratify;
}

function defaultSeparation$1(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(Node.prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
function tree() {
  var separation = defaultSeparation$1,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
}

function treemapSlice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

var squarify = (function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi);

function index$3() {
  var tile = squarify,
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = constantZero,
      paddingTop = constantZero,
      paddingRight = constantZero,
      paddingBottom = constantZero,
      paddingLeft = constantZero;

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$8(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$8(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$8(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$8(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$8(+x), treemap) : paddingLeft;
  };

  return treemap;
}

function binary(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
}

function sliceDice(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
}

var resquarify = (function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(phi);

function area$1(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
}

function centroid$1(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
}

// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
function cross$1(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && cross$1(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

function hull(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
}

function contains$1(polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0], y = point[1],
      x0 = p[0], y0 = p[1],
      x1, y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
}

function length$2(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
}

var slice$4 = [].slice;

var noabort = {};

function Queue(size) {
  this._size = size;
  this._call =
  this._error = null;
  this._tasks = [];
  this._data = [];
  this._waiting =
  this._active =
  this._ended =
  this._start = 0; // inside a synchronous task callback?
}

Queue.prototype = queue.prototype = {
  constructor: Queue,
  defer: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("defer after await");
    if (this._error != null) return this;
    var t = slice$4.call(arguments, 1);
    t.push(callback);
    ++this._waiting, this._tasks.push(t);
    poke$1(this);
    return this;
  },
  abort: function() {
    if (this._error == null) abort(this, new Error("abort"));
    return this;
  },
  await: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
    maybeNotify(this);
    return this;
  },
  awaitAll: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = callback;
    maybeNotify(this);
    return this;
  }
};

function poke$1(q) {
  if (!q._start) {
    try { start$1(q); } // let the current task complete
    catch (e) {
      if (q._tasks[q._ended + q._active - 1]) abort(q, e); // task errored synchronously
      else if (!q._data) throw e; // await callback errored synchronously
    }
  }
}

function start$1(q) {
  while (q._start = q._waiting && q._active < q._size) {
    var i = q._ended + q._active,
        t = q._tasks[i],
        j = t.length - 1,
        c = t[j];
    t[j] = end(q, i);
    --q._waiting, ++q._active;
    t = c.apply(null, t);
    if (!q._tasks[i]) continue; // task finished synchronously
    q._tasks[i] = t || noabort;
  }
}

function end(q, i) {
  return function(e, r) {
    if (!q._tasks[i]) return; // ignore multiple callbacks
    --q._active, ++q._ended;
    q._tasks[i] = null;
    if (q._error != null) return; // ignore secondary errors
    if (e != null) {
      abort(q, e);
    } else {
      q._data[i] = r;
      if (q._waiting) poke$1(q);
      else maybeNotify(q);
    }
  };
}

function abort(q, e) {
  var i = q._tasks.length, t;
  q._error = e; // ignore active callbacks
  q._data = undefined; // allow gc
  q._waiting = NaN; // prevent starting

  while (--i >= 0) {
    if (t = q._tasks[i]) {
      q._tasks[i] = null;
      if (t.abort) {
        try { t.abort(); }
        catch (e) { /* ignore */ }
      }
    }
  }

  q._active = NaN; // allow notification
  maybeNotify(q);
}

function maybeNotify(q) {
  if (!q._active && q._call) {
    var d = q._data;
    q._data = undefined; // allow gc
    q._call(q._error, d);
  }
}

function queue(concurrency) {
  if (concurrency == null) concurrency = Infinity;
  else if (!((concurrency = +concurrency) >= 1)) throw new Error("invalid concurrency");
  return new Queue(concurrency);
}

function defaultSource$1() {
  return Math.random();
}

var uniform = (function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;
    else max -= min;
    return function() {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
})(defaultSource$1);

var normal = (function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(defaultSource$1);

var logNormal = (function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = normal.source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
})(defaultSource$1);

var irwinHall = (function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(defaultSource$1);

var bates = (function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = irwinHall.source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
})(defaultSource$1);

var exponential$1 = (function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
})(defaultSource$1);

function request(url, callback) {
  var request,
      event = dispatch("beforesend", "progress", "load", "error"),
      mimeType,
      headers = map$1(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
}

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}

function type$1(defaultMimeType, response) {
  return function(url, callback) {
    var r = request(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
}

var html = type$1("text/html", function(xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
});

var json = type$1("application/json", function(xhr) {
  return JSON.parse(xhr.responseText);
});

var text = type$1("text/plain", function(xhr) {
  return xhr.responseText;
});

var xml = type$1("application/xml", function(xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
});

function dsv$1(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = request(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
}

function responseOf(parse, row) {
  return function(request$$1) {
    return parse(request$$1.responseText, row);
  };
}

var csv$1 = dsv$1("text/csv", csvParse);

var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);

var array$2 = Array.prototype;

var map$3 = array$2.map;
var slice$5 = array$2.slice;

var implicit = {name: "implicit"};

function ordinal(range) {
  var index = map$1(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : slice$5.call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map$1();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$5.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range$$1 = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range$$1[1] < range$$1[0],
        start = range$$1[reverse - 0],
        stop = range$$1[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
  };

  scale.rangeRound = function(_) {
    return range$$1 = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range$$1)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point$1() {
  return pointish(band().paddingInner(1));
}

function constant$9(x) {
  return function() {
    return x;
  };
}

function number$2(x) {
  return +x;
}

var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$9(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate$$1 = interpolateValue,
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate$$1)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$2), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$5.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice$5.call(_), interpolate$$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
  };

  return rescale();
}

function tickFormat(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = tickStep(start, stop, count == null ? 10 : count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return exports.formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return exports.format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return tickFormat(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$2() {
  var scale = continuous(deinterpolateLinear, reinterpolate);

  scale.copy = function() {
    return copy(scale, linear$2());
  };

  return linearish(scale);
}

function identity$6() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$2), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity$6().domain(domain);
  };

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : constant$9(b);
}

function reinterpolate$1(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log$1() {
  var scale = continuous(deinterpolate, reinterpolate$1).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = exports.format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return copy(scale, log$1().base(base));
  };

  return scale;
}

function raise$1(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow$1() {
  var exponent = 1,
      scale = continuous(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise$1(b, exponent) - (a = raise$1(a, exponent)))
        ? function(x) { return (raise$1(x, exponent) - a) / b; }
        : constant$9(b);
  }

  function reinterpolate(a, b) {
    b = raise$1(b, exponent) - (a = raise$1(a, exponent));
    return function(t) { return raise$1(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return copy(scale, pow$1().exponent(exponent));
  };

  return linearish(scale);
}

function sqrt$1() {
  return pow$1().exponent(0.5);
}

function quantile$$1() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[bisectRight(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$5.call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile$$1()
        .domain(domain)
        .range(range);
  };

  return scale;
}

function quantize$1() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[bisectRight(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice$5.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize$1()
        .domain([x0, x1])
        .range(range);
  };

  return linearish(scale);
}

function threshold$1() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[bisectRight(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice$5.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$5.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold$1()
        .domain(domain)
        .range(range);
  };

  return scale;
}

var t0$1 = new Date;
var t1$1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0$1.setTime(+start), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var milliseconds = millisecond.range;

var durationSecond$1 = 1e3;
var durationMinute$1 = 6e4;
var durationHour$1 = 36e5;
var durationDay$1 = 864e5;
var durationWeek$1 = 6048e5;

var second = newInterval(function(date) {
  date.setTime(Math.floor(date / durationSecond$1) * durationSecond$1);
}, function(date, step) {
  date.setTime(+date + step * durationSecond$1);
}, function(start, end) {
  return (end - start) / durationSecond$1;
}, function(date) {
  return date.getUTCSeconds();
});

var seconds = second.range;

var minute = newInterval(function(date) {
  date.setTime(Math.floor(date / durationMinute$1) * durationMinute$1);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getMinutes();
});

var minutes = minute.range;

var hour = newInterval(function(date) {
  var offset = date.getTimezoneOffset() * durationMinute$1 % durationHour$1;
  if (offset < 0) offset += durationHour$1;
  date.setTime(Math.floor((+date - offset) / durationHour$1) * durationHour$1 + offset);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getHours();
});

var hours = hour.range;

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationDay$1;
}, function(date) {
  return date.getDate() - 1;
});

var days = day.range;

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var months = month.range;

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var years = year.range;

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getUTCMinutes();
});

var utcMinutes = utcMinute.range;

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getUTCHours();
});

var utcHours = utcHour.range;

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay$1;
}, function(date) {
  return date.getUTCDate() - 1;
});

var utcDays = utcDay.range;

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek$1;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcMonths = utcMonth.range;

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

var utcYears = utcYear.range;

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day$$1 = week.getUTCDay();
          week = day$$1 > 4 || day$$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day$$1 = week.getDay();
          week = day$$1 > 4 || day$$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"};
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day$$1 = d.getDay();
  return day$$1 === 0 ? 7 : day$$1;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day$$1 = d.getDay();
  d = (day$$1 >= 4 || day$$1 === 0) ? thursday(d) : thursday.ceil(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day$$1 = d.getUTCDay();
  d = (day$$1 >= 4 || day$$1 === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale$1;





defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  exports.timeFormat = locale$1.format;
  exports.timeParse = locale$1.parse;
  exports.utcFormat = locale$1.utcFormat;
  exports.utcParse = locale$1.utcParse;
  return locale$1;
}

var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : exports.utcFormat(isoSpecifier);

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : exports.utcParse(isoSpecifier);

var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

function date$1(t) {
  return new Date(t);
}

function number$3(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
  var scale = continuous(deinterpolateLinear, reinterpolate),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second$$1,  1,      durationSecond],
    [second$$1,  5,  5 * durationSecond],
    [second$$1, 15, 15 * durationSecond],
    [second$$1, 30, 30 * durationSecond],
    [minute$$1,  1,      durationMinute],
    [minute$$1,  5,  5 * durationMinute],
    [minute$$1, 15, 15 * durationMinute],
    [minute$$1, 30, 30 * durationMinute],
    [  hour$$1,  1,      durationHour  ],
    [  hour$$1,  3,  3 * durationHour  ],
    [  hour$$1,  6,  6 * durationHour  ],
    [  hour$$1, 12, 12 * durationHour  ],
    [   day$$1,  1,      durationDay   ],
    [   day$$1,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month$$1,  1,      durationMonth ],
    [ month$$1,  3,  3 * durationMonth ],
    [  year$$1,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second$$1(date) < date ? formatMillisecond
        : minute$$1(date) < date ? formatSecond
        : hour$$1(date) < date ? formatMinute
        : day$$1(date) < date ? formatHour
        : month$$1(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year$$1(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year$$1;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond$$1;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map$3.call(_, number$3)) : domain().map(date$1);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
  };

  return scale;
}

function time() {
  return calendar(year, month, sunday, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
}

function utcTime() {
  return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
}

function colors(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
}

var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

var cubehelix$3 = cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var rainbow = cubehelix();

function rainbow$1(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
}

function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return linearish(scale);
}

function constant$10(x) {
  return function constant() {
    return x;
  };
}

var abs$1 = Math.abs;
var atan2$1 = Math.atan2;
var cos$2 = Math.cos;
var max$2 = Math.max;
var min$1 = Math.min;
var sin$2 = Math.sin;
var sqrt$2 = Math.sqrt;

var epsilon$3 = 1e-12;
var pi$4 = Math.PI;
var halfPi$3 = pi$4 / 2;
var tau$4 = 2 * pi$4;

function acos$1(x) {
  return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
}

function asin$1(x) {
  return x >= 1 ? halfPi$3 : x <= -1 ? -halfPi$3 : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt$2(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt$2(max$2(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant$10(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi$3,
        a1 = endAngle.apply(this, arguments) - halfPi$3,
        da = abs$1(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon$3)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau$4 - epsilon$3) {
      context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$3) {
        context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon$3) && (padRadius ? +padRadius.apply(this, arguments) : sqrt$2(r0 * r0 + r1 * r1)),
          rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon$3) {
        var p0 = asin$1(rp / r0 * sin$2(ap)),
            p1 = asin$1(rp / r1 * sin$2(ap));
        if ((da0 -= p0 * 2) > epsilon$3) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$3) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos$2(a01),
          y01 = r1 * sin$2(a01),
          x10 = r0 * cos$2(a10),
          y10 = r0 * sin$2(a10);

      // Apply rounded corners?
      if (rc > epsilon$3) {
        var x11 = r1 * cos$2(a11),
            y11 = r1 * sin$2(a11),
            x00 = r0 * cos$2(a00),
            y00 = r0 * sin$2(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < pi$4) {
          var oc = da0 > epsilon$3 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin$2(acos$1((ax * bx + ay * by) / (sqrt$2(ax * ax + ay * ay) * sqrt$2(bx * bx + by * by))) / 2),
              lc = sqrt$2(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min$1(rc, (r0 - lc) / (kc - 1));
          rc1 = min$1(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon$3)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon$3) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon$3) || !(da0 > epsilon$3)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon$3) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$4 / 2;
    return [cos$2(a) * r, sin$2(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };

  return arc;
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x$3(p) {
  return p[0];
}

function y$3(p) {
  return p[1];
}

function line() {
  var x$$1 = x$3,
      y$$1 = y$3,
      defined = constant$10(true),
      context = null,
      curve = curveLinear,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$$1(d, i, data), +y$$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : x$$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : y$$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area$2() {
  var x0 = x$3,
      x1 = null,
      y0 = constant$10(0),
      y1 = y$3,
      defined = constant$10(true),
      context = null,
      curve = curveLinear,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function descending$1(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function identity$7(d) {
  return d;
}

function pie() {
  var value = identity$7,
      sortValues = descending$1,
      sort = null,
      startAngle = constant$10(0),
      endAngle = constant$10(tau$4),
      padAngle = constant$10(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau$4, Math.max(-tau$4, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : padAngle;
  };

  return pie;
}

var curveRadialLinear = curveRadial(curveLinear);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return l;
}

function lineRadial$1() {
  return lineRadial(line().curve(curveRadialLinear));
}

function areaRadial() {
  var a = area$2().curve(curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return lineRadial(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return lineRadial(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return lineRadial(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return lineRadial(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return a;
}

function pointRadial(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

var slice$6 = Array.prototype.slice;

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link$2(curve) {
  var source = linkSource,
      target = linkTarget,
      x$$1 = x$3,
      y$$1 = y$3,
      context = null;

  function link() {
    var buffer, argv = slice$6.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = path();
    curve(context, +x$$1.apply(this, (argv[0] = s, argv)), +y$$1.apply(this, argv), +x$$1.apply(this, (argv[0] = t, argv)), +y$$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : x$$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : y$$1;
  };

  link.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial$1(context, x0, y0, x1, y1) {
  var p0 = pointRadial(x0, y0),
      p1 = pointRadial(x0, y0 = (y0 + y1) / 2),
      p2 = pointRadial(x1, y0),
      p3 = pointRadial(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link$2(curveHorizontal);
}

function linkVertical() {
  return link$2(curveVertical);
}

function linkRadial() {
  var l = link$2(curveRadial$1);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

var circle$2 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi$4);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau$4);
  }
};

var cross$2 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

var diamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810;
var kr = Math.sin(pi$4 / 10) / Math.sin(7 * pi$4 / 10);
var kx = Math.sin(tau$4 / 10) * kr;
var ky = -Math.cos(tau$4 / 10) * kr;

var star = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau$4 * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

var square = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

var triangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c = -0.5;
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;

var wye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

var symbols = [
  circle$2,
  cross$2,
  diamond,
  square,
  star,
  triangle,
  wye
];

function symbol() {
  var type = constant$10(circle$2),
      size = constant$10(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant$10(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant$10(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function noop$2() {}

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$2(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basis$2(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisClosed$1(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisOpen(context) {
  return new BasisOpen(context);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var bundle = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

function point$3(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$3(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinal = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalClosed = (function custom(tension) {

  function cardinal$$1(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal$$1.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal$$1;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalOpen = (function custom(tension) {

  function cardinal$$1(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal$$1.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal$$1;
})(0);

function point$4(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$3) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$3) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomClosed = (function custom(alpha) {

  function catmullRom$$1(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom$$1.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom$$1;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomOpen = (function custom(alpha) {

  function catmullRom$$1(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom$$1.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom$$1;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function linearClosed(context) {
  return new LinearClosed(context);
}

function sign$1(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$5(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$5(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$5(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$5(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function natural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function step(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

function none$1(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function none$2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackValue(d, key) {
  return d[key];
}

function stack() {
  var keys = constant$10([]),
      order = none$2,
      offset = none$1,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant$10(slice$6.call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$10(slice$6.call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
  };

  return stack;
}

function expand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none$1(series, order);
}

function diverging(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
}

function silhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  none$1(series, order);
}

function wiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  none$1(series, order);
}

function ascending$2(series) {
  var sums = series.map(sum$2);
  return none$2(series).sort(function(a, b) { return sums[a] - sums[b]; });
}

function sum$2(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

function descending$2(series) {
  return ascending$2(series).reverse();
}

function insideOut(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(sum$2),
      order = none$2(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
}

function reverse(series) {
  return none$2(series).reverse();
}

function constant$11(x) {
  return function() {
    return x;
  };
}

function x$4(d) {
  return d[0];
}

function y$4(d) {
  return d[1];
}

function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$4
            || Math.abs(edge[0][1] - edge[1][1]) > epsilon$4)) {
      delete edges[i];
    }
  }
}

function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon$4 || Math.abs(endY - startY) > epsilon$4) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < epsilon$4 && y1 - endY > epsilon$4 ? [x0, Math.abs(startX - x0) < epsilon$4 ? startY : y1]
              : Math.abs(endY - y1) < epsilon$4 && x1 - endX > epsilon$4 ? [Math.abs(startY - y1) < epsilon$4 ? startX : x1, y1]
              : Math.abs(endX - x1) < epsilon$4 && endY - y0 > epsilon$4 ? [x1, Math.abs(startX - x1) < epsilon$4 ? startY : y0]
              : Math.abs(endY - y0) < epsilon$4 && endX - x0 > epsilon$4 ? [Math.abs(startY - y0) < epsilon$4 ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2$2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < epsilon$4
      && Math.abs(y - lArc.circle.cy) < epsilon$4) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < epsilon$4
      && Math.abs(y - rArc.circle.cy) < epsilon$4) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > epsilon$4) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > epsilon$4) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon$4) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon$4) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

var epsilon$4 = 1e-6;
var epsilon2$2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree;
  circles = new RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

function voronoi() {
  var x$$1 = x$4,
      y$$1 = y$4,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x$$1(d, i, data) / epsilon$4) * epsilon$4, Math.round(y$$1(d, i, data) / epsilon$4) * epsilon$4];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : x$$1;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : y$$1;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
}

function constant$12(x) {
  return function() {
    return x;
  };
}

function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity$8 = new Transform(1, 0, 0);

transform$1.prototype = Transform.prototype;

function transform$1(node) {
  return node.__zoom || identity$8;
}

function nopropagation$2() {
  exports.event.stopImmediatePropagation();
}

function noevent$2() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
}

// Ignore right-click, since that should open the context menu.
function defaultFilter$2() {
  return !exports.event.button;
}

function defaultExtent$1() {
  var e = this, w, h;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    w = e.width.baseVal.value;
    h = e.height.baseVal.value;
  } else {
    w = e.clientWidth;
    h = e.clientHeight;
  }
  return [[0, 0], [w, h]];
}

function defaultTransform() {
  return this.__zoom || identity$8;
}

function defaultWheelDelta() {
  return -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500;
}

function defaultTouchable$1() {
  return "ontouchstart" in this;
}

function defaultConstrain(transform$$1, extent, translateExtent) {
  var dx0 = transform$$1.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform$$1.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform$$1.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform$$1.invertY(extent[1][1]) - translateExtent[1][1];
  return transform$$1.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

function zoom() {
  var filter = defaultFilter$2,
      extent = defaultExtent$1,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable$1,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      gestures = [],
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform$$1) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform$$1);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform$$1 === "function" ? transform$$1.apply(this, arguments) : transform$$1)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    });
  };

  zoom.scaleTo = function(selection, k) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = centroid(e),
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    });
  };

  zoom.translateBy = function(selection, x, y) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function(selection, x, y) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p = centroid(e);
      return constrain(identity$8.translate(p[0], p[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    });
  };

  function scale(transform$$1, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform$$1.k ? transform$$1 : new Transform(k, transform$$1.x, transform$$1.y);
  }

  function translate(transform$$1, p0, p1) {
    var x = p0[0] - p1[0] * transform$$1.k, y = p0[1] - p1[1] * transform$$1.k;
    return x === transform$$1.x && y === transform$$1.y ? transform$$1 : new Transform(transform$$1.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform$$1, center) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = center || centroid(e),
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform$$1 === "function" ? transform$$1.apply(that, args) : transform$$1,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args) {
    for (var i = 0, n = gestures.length, g; i < n; ++i) {
      if ((g = gestures[i]).that === that) {
        return g;
      }
    }
    return new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.index = -1;
    this.active = 0;
    this.extent = extent.apply(that, args);
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.index = gestures.push(this) - 1;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform$$1) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform$$1.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform$$1.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform$$1.invert(this.touch1[0]);
      this.that.__zoom = transform$$1;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        gestures.splice(this.index, 1);
        this.index = -1;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = mouse(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent$2();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = mouse(this),
        x0 = exports.event.clientX,
        y0 = exports.event.clientY;

    dragDisable(exports.event.view);
    nopropagation$2();
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved() {
      noevent$2();
      if (!g.moved) {
        var dx = exports.event.clientX - x0, dy = exports.event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(exports.event.view, g.moved);
      noevent$2();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = mouse(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    noevent$2();
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
    else select(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        touches = exports.event.changedTouches,
        started,
        n = touches.length, i, t, p;

    nopropagation$2();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true;
      else if (!g.touch1) g.touch1 = p;
    }

    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
    if (touchstarting) {
      touchstarting = clearTimeout(touchstarting);
      if (!g.touch1) {
        g.end();
        p = select(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
        return;
      }
    }

    if (started) {
      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved() {
    var g = gesture(this, arguments),
        touches = exports.event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent$2();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    var g = gesture(this, arguments),
        touches = exports.event.changedTouches,
        n = touches.length, i, t;

    nopropagation$2();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else g.end();
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$12(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$12(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$12(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$12([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
}

exports.version = version;
exports.bisect = bisectRight;
exports.bisectRight = bisectRight;
exports.bisectLeft = bisectLeft;
exports.ascending = ascending;
exports.bisector = bisector;
exports.cross = cross;
exports.descending = descending;
exports.deviation = deviation;
exports.extent = extent;
exports.histogram = histogram;
exports.thresholdFreedmanDiaconis = freedmanDiaconis;
exports.thresholdScott = scott;
exports.thresholdSturges = sturges;
exports.max = max;
exports.mean = mean;
exports.median = median;
exports.merge = merge;
exports.min = min;
exports.pairs = pairs;
exports.permute = permute;
exports.quantile = threshold;
exports.range = sequence;
exports.scan = scan;
exports.shuffle = shuffle;
exports.sum = sum;
exports.ticks = ticks;
exports.tickIncrement = tickIncrement;
exports.tickStep = tickStep;
exports.transpose = transpose;
exports.variance = variance;
exports.zip = zip;
exports.axisTop = axisTop;
exports.axisRight = axisRight;
exports.axisBottom = axisBottom;
exports.axisLeft = axisLeft;
exports.brush = brush;
exports.brushX = brushX;
exports.brushY = brushY;
exports.brushSelection = brushSelection;
exports.chord = chord;
exports.ribbon = ribbon;
exports.nest = nest;
exports.set = set$2;
exports.map = map$1;
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.color = color;
exports.rgb = rgb;
exports.hsl = hsl;
exports.lab = lab;
exports.hcl = hcl;
exports.cubehelix = cubehelix;
exports.dispatch = dispatch;
exports.drag = drag;
exports.dragDisable = dragDisable;
exports.dragEnable = yesdrag;
exports.dsvFormat = dsv;
exports.csvParse = csvParse;
exports.csvParseRows = csvParseRows;
exports.csvFormat = csvFormat;
exports.csvFormatRows = csvFormatRows;
exports.tsvParse = tsvParse;
exports.tsvParseRows = tsvParseRows;
exports.tsvFormat = tsvFormat;
exports.tsvFormatRows = tsvFormatRows;
exports.easeLinear = linear$1;
exports.easeQuad = quadInOut;
exports.easeQuadIn = quadIn;
exports.easeQuadOut = quadOut;
exports.easeQuadInOut = quadInOut;
exports.easeCubic = cubicInOut;
exports.easeCubicIn = cubicIn;
exports.easeCubicOut = cubicOut;
exports.easeCubicInOut = cubicInOut;
exports.easePoly = polyInOut;
exports.easePolyIn = polyIn;
exports.easePolyOut = polyOut;
exports.easePolyInOut = polyInOut;
exports.easeSin = sinInOut;
exports.easeSinIn = sinIn;
exports.easeSinOut = sinOut;
exports.easeSinInOut = sinInOut;
exports.easeExp = expInOut;
exports.easeExpIn = expIn;
exports.easeExpOut = expOut;
exports.easeExpInOut = expInOut;
exports.easeCircle = circleInOut;
exports.easeCircleIn = circleIn;
exports.easeCircleOut = circleOut;
exports.easeCircleInOut = circleInOut;
exports.easeBounce = bounceOut;
exports.easeBounceIn = bounceIn;
exports.easeBounceOut = bounceOut;
exports.easeBounceInOut = bounceInOut;
exports.easeBack = backInOut;
exports.easeBackIn = backIn;
exports.easeBackOut = backOut;
exports.easeBackInOut = backInOut;
exports.easeElastic = elasticOut;
exports.easeElasticIn = elasticIn;
exports.easeElasticOut = elasticOut;
exports.easeElasticInOut = elasticInOut;
exports.forceCenter = center$1;
exports.forceCollide = collide;
exports.forceLink = link;
exports.forceManyBody = manyBody;
exports.forceRadial = radial;
exports.forceSimulation = simulation;
exports.forceX = x$2;
exports.forceY = y$2;
exports.formatDefaultLocale = defaultLocale;
exports.formatLocale = formatLocale;
exports.formatSpecifier = formatSpecifier;
exports.precisionFixed = precisionFixed;
exports.precisionPrefix = precisionPrefix;
exports.precisionRound = precisionRound;
exports.geoArea = area;
exports.geoBounds = bounds;
exports.geoCentroid = centroid;
exports.geoCircle = circle;
exports.geoClipAntimeridian = clipAntimeridian;
exports.geoClipCircle = clipCircle;
exports.geoClipExtent = extent$1;
exports.geoClipRectangle = clipRectangle;
exports.geoContains = contains;
exports.geoDistance = distance;
exports.geoGraticule = graticule;
exports.geoGraticule10 = graticule10;
exports.geoInterpolate = interpolate$1;
exports.geoLength = length$1;
exports.geoPath = index$1;
exports.geoAlbers = albers;
exports.geoAlbersUsa = albersUsa;
exports.geoAzimuthalEqualArea = azimuthalEqualArea;
exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
exports.geoAzimuthalEquidistant = azimuthalEquidistant;
exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
exports.geoConicConformal = conicConformal;
exports.geoConicConformalRaw = conicConformalRaw;
exports.geoConicEqualArea = conicEqualArea;
exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
exports.geoConicEquidistant = conicEquidistant;
exports.geoConicEquidistantRaw = conicEquidistantRaw;
exports.geoEquirectangular = equirectangular;
exports.geoEquirectangularRaw = equirectangularRaw;
exports.geoGnomonic = gnomonic;
exports.geoGnomonicRaw = gnomonicRaw;
exports.geoIdentity = identity$5;
exports.geoProjection = projection;
exports.geoProjectionMutator = projectionMutator;
exports.geoMercator = mercator;
exports.geoMercatorRaw = mercatorRaw;
exports.geoNaturalEarth1 = naturalEarth1;
exports.geoNaturalEarth1Raw = naturalEarth1Raw;
exports.geoOrthographic = orthographic;
exports.geoOrthographicRaw = orthographicRaw;
exports.geoStereographic = stereographic;
exports.geoStereographicRaw = stereographicRaw;
exports.geoTransverseMercator = transverseMercator;
exports.geoTransverseMercatorRaw = transverseMercatorRaw;
exports.geoRotation = rotation;
exports.geoStream = geoStream;
exports.geoTransform = transform;
exports.cluster = cluster;
exports.hierarchy = hierarchy;
exports.pack = index$2;
exports.packSiblings = siblings;
exports.packEnclose = enclose;
exports.partition = partition;
exports.stratify = stratify;
exports.tree = tree;
exports.treemap = index$3;
exports.treemapBinary = binary;
exports.treemapDice = treemapDice;
exports.treemapSlice = treemapSlice;
exports.treemapSliceDice = sliceDice;
exports.treemapSquarify = squarify;
exports.treemapResquarify = resquarify;
exports.interpolate = interpolateValue;
exports.interpolateArray = array$1;
exports.interpolateBasis = basis$1;
exports.interpolateBasisClosed = basisClosed;
exports.interpolateDate = date;
exports.interpolateNumber = reinterpolate;
exports.interpolateObject = object;
exports.interpolateRound = interpolateRound;
exports.interpolateString = interpolateString;
exports.interpolateTransformCss = interpolateTransformCss;
exports.interpolateTransformSvg = interpolateTransformSvg;
exports.interpolateZoom = interpolateZoom;
exports.interpolateRgb = interpolateRgb;
exports.interpolateRgbBasis = rgbBasis;
exports.interpolateRgbBasisClosed = rgbBasisClosed;
exports.interpolateHsl = hsl$2;
exports.interpolateHslLong = hslLong;
exports.interpolateLab = lab$1;
exports.interpolateHcl = hcl$2;
exports.interpolateHclLong = hclLong;
exports.interpolateCubehelix = cubehelix$2;
exports.interpolateCubehelixLong = cubehelixLong;
exports.quantize = quantize;
exports.path = path;
exports.polygonArea = area$1;
exports.polygonCentroid = centroid$1;
exports.polygonHull = hull;
exports.polygonContains = contains$1;
exports.polygonLength = length$2;
exports.quadtree = quadtree;
exports.queue = queue;
exports.randomUniform = uniform;
exports.randomNormal = normal;
exports.randomLogNormal = logNormal;
exports.randomBates = bates;
exports.randomIrwinHall = irwinHall;
exports.randomExponential = exponential$1;
exports.request = request;
exports.html = html;
exports.json = json;
exports.text = text;
exports.xml = xml;
exports.csv = csv$1;
exports.tsv = tsv$1;
exports.scaleBand = band;
exports.scalePoint = point$1;
exports.scaleIdentity = identity$6;
exports.scaleLinear = linear$2;
exports.scaleLog = log$1;
exports.scaleOrdinal = ordinal;
exports.scaleImplicit = implicit;
exports.scalePow = pow$1;
exports.scaleSqrt = sqrt$1;
exports.scaleQuantile = quantile$$1;
exports.scaleQuantize = quantize$1;
exports.scaleThreshold = threshold$1;
exports.scaleTime = time;
exports.scaleUtc = utcTime;
exports.schemeCategory10 = category10;
exports.schemeCategory20b = category20b;
exports.schemeCategory20c = category20c;
exports.schemeCategory20 = category20;
exports.interpolateCubehelixDefault = cubehelix$3;
exports.interpolateRainbow = rainbow$1;
exports.interpolateWarm = warm;
exports.interpolateCool = cool;
exports.interpolateViridis = viridis;
exports.interpolateMagma = magma;
exports.interpolateInferno = inferno;
exports.interpolatePlasma = plasma;
exports.scaleSequential = sequential;
exports.create = create;
exports.creator = creator;
exports.local = local$1;
exports.matcher = matcher$1;
exports.mouse = mouse;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.clientPoint = point;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.touch = touch;
exports.touches = touches;
exports.window = defaultView;
exports.customEvent = customEvent;
exports.arc = arc;
exports.area = area$2;
exports.line = line;
exports.pie = pie;
exports.areaRadial = areaRadial;
exports.radialArea = areaRadial;
exports.lineRadial = lineRadial$1;
exports.radialLine = lineRadial$1;
exports.pointRadial = pointRadial;
exports.linkHorizontal = linkHorizontal;
exports.linkVertical = linkVertical;
exports.linkRadial = linkRadial;
exports.symbol = symbol;
exports.symbols = symbols;
exports.symbolCircle = circle$2;
exports.symbolCross = cross$2;
exports.symbolDiamond = diamond;
exports.symbolSquare = square;
exports.symbolStar = star;
exports.symbolTriangle = triangle;
exports.symbolWye = wye;
exports.curveBasisClosed = basisClosed$1;
exports.curveBasisOpen = basisOpen;
exports.curveBasis = basis$2;
exports.curveBundle = bundle;
exports.curveCardinalClosed = cardinalClosed;
exports.curveCardinalOpen = cardinalOpen;
exports.curveCardinal = cardinal;
exports.curveCatmullRomClosed = catmullRomClosed;
exports.curveCatmullRomOpen = catmullRomOpen;
exports.curveCatmullRom = catmullRom;
exports.curveLinearClosed = linearClosed;
exports.curveLinear = curveLinear;
exports.curveMonotoneX = monotoneX;
exports.curveMonotoneY = monotoneY;
exports.curveNatural = natural;
exports.curveStep = step;
exports.curveStepAfter = stepAfter;
exports.curveStepBefore = stepBefore;
exports.stack = stack;
exports.stackOffsetExpand = expand;
exports.stackOffsetDiverging = diverging;
exports.stackOffsetNone = none$1;
exports.stackOffsetSilhouette = silhouette;
exports.stackOffsetWiggle = wiggle;
exports.stackOrderAscending = ascending$2;
exports.stackOrderDescending = descending$2;
exports.stackOrderInsideOut = insideOut;
exports.stackOrderNone = none$2;
exports.stackOrderReverse = reverse;
exports.timeInterval = newInterval;
exports.timeMillisecond = millisecond;
exports.timeMilliseconds = milliseconds;
exports.utcMillisecond = millisecond;
exports.utcMilliseconds = milliseconds;
exports.timeSecond = second;
exports.timeSeconds = seconds;
exports.utcSecond = second;
exports.utcSeconds = seconds;
exports.timeMinute = minute;
exports.timeMinutes = minutes;
exports.timeHour = hour;
exports.timeHours = hours;
exports.timeDay = day;
exports.timeDays = days;
exports.timeWeek = sunday;
exports.timeWeeks = sundays;
exports.timeSunday = sunday;
exports.timeSundays = sundays;
exports.timeMonday = monday;
exports.timeMondays = mondays;
exports.timeTuesday = tuesday;
exports.timeTuesdays = tuesdays;
exports.timeWednesday = wednesday;
exports.timeWednesdays = wednesdays;
exports.timeThursday = thursday;
exports.timeThursdays = thursdays;
exports.timeFriday = friday;
exports.timeFridays = fridays;
exports.timeSaturday = saturday;
exports.timeSaturdays = saturdays;
exports.timeMonth = month;
exports.timeMonths = months;
exports.timeYear = year;
exports.timeYears = years;
exports.utcMinute = utcMinute;
exports.utcMinutes = utcMinutes;
exports.utcHour = utcHour;
exports.utcHours = utcHours;
exports.utcDay = utcDay;
exports.utcDays = utcDays;
exports.utcWeek = utcSunday;
exports.utcWeeks = utcSundays;
exports.utcSunday = utcSunday;
exports.utcSundays = utcSundays;
exports.utcMonday = utcMonday;
exports.utcMondays = utcMondays;
exports.utcTuesday = utcTuesday;
exports.utcTuesdays = utcTuesdays;
exports.utcWednesday = utcWednesday;
exports.utcWednesdays = utcWednesdays;
exports.utcThursday = utcThursday;
exports.utcThursdays = utcThursdays;
exports.utcFriday = utcFriday;
exports.utcFridays = utcFridays;
exports.utcSaturday = utcSaturday;
exports.utcSaturdays = utcSaturdays;
exports.utcMonth = utcMonth;
exports.utcMonths = utcMonths;
exports.utcYear = utcYear;
exports.utcYears = utcYears;
exports.timeFormatDefaultLocale = defaultLocale$1;
exports.timeFormatLocale = formatLocale$1;
exports.isoFormat = formatIso;
exports.isoParse = parseIso;
exports.now = now;
exports.timer = timer;
exports.timerFlush = timerFlush;
exports.timeout = timeout$1;
exports.interval = interval$1;
exports.transition = transition;
exports.active = active;
exports.interrupt = interrupt;
exports.voronoi = voronoi;
exports.zoom = zoom;
exports.zoomTransform = transform$1;
exports.zoomIdentity = identity$8;

Object.defineProperty(exports, '__esModule', { value: true });

})));

// https://d3js.org/d3-scale-chromatic/ v1.5.0 Copyright 2019 Mike Bostock
!function(f,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("d3-interpolate"),require("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-interpolate","d3-color"],e):e((f=f||self).d3=f.d3||{},f.d3,f.d3)}(this,function(f,e,d){"use strict";function a(f){for(var e=f.length/6|0,d=new Array(e),a=0;a<e;)d[a]="#"+f.slice(6*a,6*++a);return d}var c=a("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),b=a("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),t=a("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),n=a("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),r=a("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),o=a("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),i=a("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),l=a("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),m=a("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),h=a("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function p(f){return e.interpolateRgbBasis(f[f.length-1])}var u=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(a),s=p(u),y=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(a),M=p(y),w=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(a),A=p(w),P=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(a),B=p(P),G=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(a),x=p(G),R=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(a),g=p(R),Y=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(a),v=p(Y),O=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(a),C=p(O),S=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(a),I=p(S),L=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(a),j=p(L),q=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(a),D=p(q),T=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(a),_=p(T),k=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(a),V=p(k),W=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(a),z=p(W),E=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(a),F=p(E),H=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(a),J=p(H),K=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(a),N=p(K),Q=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(a),U=p(Q),X=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(a),Z=p(X),$=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(a),ff=p($),ef=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(a),df=p(ef),af=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(a),cf=p(af),bf=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(a),tf=p(bf),nf=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(a),rf=p(nf),of=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(a),lf=p(of),mf=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(a),hf=p(mf),pf=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(a),uf=p(pf);var sf=e.interpolateCubehelixLong(d.cubehelix(300,.5,0),d.cubehelix(-240,.5,1)),yf=e.interpolateCubehelixLong(d.cubehelix(-100,.75,.35),d.cubehelix(80,1.5,.8)),Mf=e.interpolateCubehelixLong(d.cubehelix(260,.75,.35),d.cubehelix(80,1.5,.8)),wf=d.cubehelix();var Af=d.rgb(),Pf=Math.PI/3,Bf=2*Math.PI/3;function Gf(f){var e=f.length;return function(d){return f[Math.max(0,Math.min(e-1,Math.floor(d*e)))]}}var xf=Gf(a("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Rf=Gf(a("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),gf=Gf(a("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Yf=Gf(a("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));f.interpolateBlues=cf,f.interpolateBrBG=s,f.interpolateBuGn=j,f.interpolateBuPu=D,f.interpolateCividis=function(f){return f=Math.max(0,Math.min(1,f)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-f*(35.34-f*(2381.73-f*(6402.7-f*(7024.72-2710.57*f)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+f*(170.73+f*(52.82-f*(131.46-f*(176.58-67.37*f)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+f*(442.36-f*(2482.43-f*(6167.24-f*(6614.94-2475.67*f)))))))+")"},f.interpolateCool=Mf,f.interpolateCubehelixDefault=sf,f.interpolateGnBu=_,f.interpolateGreens=tf,f.interpolateGreys=rf,f.interpolateInferno=gf,f.interpolateMagma=Rf,f.interpolateOrRd=V,f.interpolateOranges=uf,f.interpolatePRGn=M,f.interpolatePiYG=A,f.interpolatePlasma=Yf,f.interpolatePuBu=F,f.interpolatePuBuGn=z,f.interpolatePuOr=B,f.interpolatePuRd=J,f.interpolatePurples=lf,f.interpolateRainbow=function(f){(f<0||f>1)&&(f-=Math.floor(f));var e=Math.abs(f-.5);return wf.h=360*f-100,wf.s=1.5-1.5*e,wf.l=.8-.9*e,wf+""},f.interpolateRdBu=x,f.interpolateRdGy=g,f.interpolateRdPu=N,f.interpolateRdYlBu=v,f.interpolateRdYlGn=C,f.interpolateReds=hf,f.interpolateSinebow=function(f){var e;return f=(.5-f)*Math.PI,Af.r=255*(e=Math.sin(f))*e,Af.g=255*(e=Math.sin(f+Pf))*e,Af.b=255*(e=Math.sin(f+Bf))*e,Af+""},f.interpolateSpectral=I,f.interpolateTurbo=function(f){return f=Math.max(0,Math.min(1,f)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+f*(1172.33-f*(10793.56-f*(33300.12-f*(38394.49-14825.05*f)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+f*(557.33+f*(1225.33-f*(3574.96-f*(1073.77+707.56*f)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+f*(3211.1-f*(15327.97-f*(27814-f*(22569.18-6838.66*f)))))))+")"},f.interpolateViridis=xf,f.interpolateWarm=yf,f.interpolateYlGn=Z,f.interpolateYlGnBu=U,f.interpolateYlOrBr=ff,f.interpolateYlOrRd=df,f.schemeAccent=b,f.schemeBlues=af,f.schemeBrBG=u,f.schemeBuGn=L,f.schemeBuPu=q,f.schemeCategory10=c,f.schemeDark2=t,f.schemeGnBu=T,f.schemeGreens=bf,f.schemeGreys=nf,f.schemeOrRd=k,f.schemeOranges=pf,f.schemePRGn=y,f.schemePaired=n,f.schemePastel1=r,f.schemePastel2=o,f.schemePiYG=w,f.schemePuBu=E,f.schemePuBuGn=W,f.schemePuOr=P,f.schemePuRd=H,f.schemePurples=of,f.schemeRdBu=G,f.schemeRdGy=R,f.schemeRdPu=K,f.schemeRdYlBu=Y,f.schemeRdYlGn=O,f.schemeReds=mf,f.schemeSet1=i,f.schemeSet2=l,f.schemeSet3=m,f.schemeSpectral=S,f.schemeTableau10=h,f.schemeYlGn=X,f.schemeYlGnBu=Q,f.schemeYlOrBr=$,f.schemeYlOrRd=ef,Object.defineProperty(f,"__esModule",{value:!0})});

// https://d3js.org/d3-geo-projection/ v2.9.0 Copyright 2020 Mike Bostock
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("d3-geo"),require("d3-array")):"function"==typeof define&&define.amd?define(["exports","d3-geo","d3-array"],r):r(n.d3=n.d3||{},n.d3,n.d3)}(this,function(n,r,e){"use strict";var t=Math.abs,o=Math.atan,i=Math.atan2,u=Math.cos,a=Math.exp,c=Math.floor,f=Math.log,l=Math.max,g=Math.min,v=Math.pow,s=Math.round,p=Math.sign||function(n){return n>0?1:n<0?-1:0},h=Math.sin,d=Math.tan,w=1e-6,y=1e-12,m=Math.PI,P=m/2,R=m/4,b=Math.SQRT1_2,j=G(2),M=G(m),E=2*m,S=180/m,k=m/180;function A(n){return n>1?P:n<-1?-P:Math.asin(n)}function x(n){return n>1?0:n<-1?m:Math.acos(n)}function G(n){return n>0?Math.sqrt(n):0}function C(n){return(a(n)-a(-n))/2}function N(n){return(a(n)+a(-n))/2}function F(n){var r=d(n/2),e=2*f(u(n/2))/(r*r);function o(n,r){var t=u(n),o=u(r),i=h(r),a=o*t,c=-((1-a?f((1+a)/2)/(1-a):-.5)+e/(1+a));return[c*o*h(n),c*i]}return o.invert=function(r,o){var a,c=G(r*r+o*o),l=-n/2,g=50;if(!c)return[0,0];do{var v=l/2,s=u(v),p=h(v),d=p/s,y=-f(t(s));l-=a=(2/d*y-e*d-c)/(-y/(p*p)+1-e/(2*s*s))*(s<0?.7:1)}while(t(a)>w&&--g>0);var m=h(l);return[i(r*m,c*u(l)),A(o*m/c)]},o}function z(n,r){var e=u(r),t=function(n){return n?n/Math.sin(n):1}(x(e*u(n/=2)));return[2*e*h(n)*t,h(r)*t]}function L(n){var r=h(n),e=u(n),o=n>=0?1:-1,a=d(o*n),c=(1+r-e)/2;function f(n,t){var f=u(t),l=u(n/=2);return[(1+f)*h(n),(o*t>-i(l,a)-.001?0:10*-o)+c+h(t)*e-(1+f)*r*l]}return f.invert=function(n,f){var l=0,g=0,v=50;do{var s=u(l),p=h(l),d=u(g),y=h(g),m=1+d,P=m*p-n,R=c+y*e-m*r*s-f,b=m*s/2,j=-p*y,M=r*m*p/2,E=e*d+r*s*y,S=j*M-E*b,k=(R*j-P*E)/S/2,A=(P*M-R*b)/S;t(A)>2&&(A/=2),l-=k,g-=A}while((t(k)>w||t(A)>w)&&--v>0);return o*g>-i(u(l),a)-.001?[2*l,g]:null},f}function H(n,r){var e=d(r/2),t=G(1-e*e),o=1+t*u(n/=2),i=h(n)*t/o,a=e/o,c=i*i,f=a*a;return[4/3*i*(3+c-3*f),4/3*a*(3+3*c-f)]}z.invert=function(n,r){if(!(n*n+4*r*r>m*m+w)){var e=n,o=r,i=25;do{var a,c=h(e),f=h(e/2),l=u(e/2),g=h(o),v=u(o),s=h(2*o),p=g*g,d=v*v,y=f*f,P=1-d*l*l,R=P?x(v*l)*G(a=1/P):a=0,b=2*R*v*f-n,j=R*g-r,M=a*(d*y+R*v*l*p),E=a*(.5*c*s-2*R*g*f),S=.25*a*(s*f-R*g*d*c),k=a*(p*l+R*y*v),A=E*S-k*M;if(!A)break;var C=(j*E-b*k)/A,N=(b*S-j*M)/A;e-=C,o-=N}while((t(C)>w||t(N)>w)&&--i>0);return[e,o]}},H.invert=function(n,r){if(r*=3/8,!(n*=3/8)&&t(r)>1)return null;var e=1+n*n+r*r,o=G((e-G(e*e-4*r*r))/2),a=A(o)/3,c=o?function(n){return f(n+G(n*n-1))}(t(r/o))/3:function(n){return f(n+G(n*n+1))}(t(n))/3,l=u(a),g=N(c),v=g*g-l*l;return[2*p(n)*i(C(c)*l,.25-v),2*p(r)*i(g*h(a),.25+v)]};var q=G(8),B=f(1+j);function W(n,r){var e=t(r);return e<R?[n,f(d(R+r/2))]:[n*u(e)*(2*j-1/h(e)),p(r)*(2*j*(e-R)-f(d(e/2)))]}function I(n){var e=2*m/n;function a(n,o){var a=r.geoAzimuthalEquidistantRaw(n,o);if(t(n)>P){var c=i(a[1],a[0]),f=G(a[0]*a[0]+a[1]*a[1]),l=e*s((c-P)/e)+P,g=i(h(c-=l),2-u(c));c=l+A(m/f*h(g))-g,a[0]=f*u(c),a[1]=f*h(c)}return a}return a.invert=function(n,t){var a=G(n*n+t*t);if(a>P){var c=i(t,n),f=e*s((c-P)/e)+P,l=c>f?-1:1,g=a*u(f-c),v=1/d(l*x((g-m)/G(m*(m-2*g)+a*a)));c=f+2*o((v+l*G(v*v-3))/3),n=a*u(c),t=a*h(c)}return r.geoAzimuthalEquidistantRaw.invert(n,t)},a}function D(n,e){if(arguments.length<2&&(e=n),1===e)return r.geoAzimuthalEqualAreaRaw;if(e===1/0)return Q;function t(t,o){var i=r.geoAzimuthalEqualAreaRaw(t/e,o);return i[0]*=n,i}return t.invert=function(t,o){var i=r.geoAzimuthalEqualAreaRaw.invert(t/n,o);return i[0]*=e,i},t}function Q(n,r){return[n*u(r)/u(r/=2),2*h(r)]}function T(n,r,e){var o,i,u,a=100;e=void 0===e?0:+e,r=+r;do{(i=n(e))===(u=n(e+w))&&(u=i+w),e-=o=-1*w*(i-r)/(i-u)}while(a-- >0&&t(o)>w);return a<0?NaN:e}function V(n,r,e){return void 0===r&&(r=40),void 0===e&&(e=y),function(o,i,u,a){var c,f,l;u=void 0===u?0:+u,a=void 0===a?0:+a;for(var g=0;g<r;g++){var v=n(u,a),s=v[0]-o,p=v[1]-i;if(t(s)<e&&t(p)<e)break;var h=s*s+p*p;if(h>c)u-=f/=2,a-=l/=2;else{c=h;var d=(u>0?-1:1)*e,w=(a>0?-1:1)*e,y=n(u+d,a),m=n(u,a+w),P=(y[0]-v[0])/d,R=(y[1]-v[1])/d,b=(m[0]-v[0])/w,j=(m[1]-v[1])/w,M=j*P-R*b,E=(t(M)<.5?.5:1)/M;if(u+=f=(p*b-s*j)*E,a+=l=(s*R-p*P)*E,t(f)<e&&t(l)<e)break}}return[u,a]}}function _(){var n=D(1.68,2),r=1.4,e=12;function t(t,o){if(t+o<-r){var i=(t-o+1.6)*(t+o+r)/8;t+=i,o-=.8*i*h(o+m/2)}var a=n(t,o),c=(1-u(t*o))/e;return a[1]<0&&(a[0]*=1+c),a[1]>0&&(a[1]*=1+c/1.5*a[0]*a[0]),a}return t.invert=V(t),t}function K(n,r){var e,o=n*h(r),i=30;do{r-=e=(r+h(r)-o)/(1+u(r))}while(t(e)>w&&--i>0);return r/2}function O(n,r,e){function t(t,o){return[n*t*u(o=K(e,o)),r*h(o)]}return t.invert=function(t,o){return o=A(o/r),[t/(n*u(o)),A((2*o+h(2*o))/e)]},t}W.invert=function(n,r){if((i=t(r))<B)return[n,2*o(a(r))-P];var e,i,c=R,l=25;do{var g=u(c/2),v=d(c/2);c-=e=(q*(c-R)-f(v)-i)/(q-g*g/(2*v))}while(t(e)>y&&--l>0);return[n/(u(c)*(q-1/h(c))),p(r)*c]},Q.invert=function(n,r){var e=2*A(r/2);return[n*u(e/2)/u(e),e]};var U=O(j/P,j,m);var J=2.00276,X=1.11072;function Y(n,r){var e=K(m,r);return[J*n/(1/u(r)+X/u(e)),(r+j*h(e))/J]}function Z(n){var e=0,t=r.geoProjectionMutator(n),o=t(e);return o.parallel=function(n){return arguments.length?t(e=n*k):e*S},o}function $(n,r){return[n*u(r),r]}function nn(n){if(!n)return $;var r=1/d(n);function e(e,t){var o=r+n-t,i=o?e*u(t)/o:o;return[o*h(i),r-o*u(i)]}return e.invert=function(e,t){var o=G(e*e+(t=r-t)*t),a=r+n-o;return[o/u(a)*i(e,t),a]},e}function rn(n){function r(r,e){var t=P-e,o=t?r*n*h(t)/t:t;return[t*h(o)/n,P-t*u(o)]}return r.invert=function(r,e){var t=r*n,o=P-e,u=G(t*t+o*o),a=i(t,o);return[(u?u/h(u):1)*a/n,P-u]},r}Y.invert=function(n,r){var e,o,i=J*r,a=r<0?-R:R,c=25;do{o=i-j*h(a),a-=e=(h(2*a)+2*a-m*h(o))/(2*u(2*a)+2+m*u(o)*j*u(a))}while(t(e)>w&&--c>0);return o=i-j*h(a),[n*(1/u(o)+X/u(a))/J,o]},$.invert=function(n,r){return[n/u(r),r]};var en=O(1,4/m,m);function tn(n,r,e,o,a,c){var f,l=u(c);if(t(n)>1||t(c)>1)f=x(e*a+r*o*l);else{var g=h(n/2),v=h(c/2);f=2*A(G(g*g+r*o*v*v))}return t(f)>w?[f,i(o*h(c),r*a-e*o*l)]:[0,0]}function on(n,r,e){return x((n*n+r*r-e*e)/(2*n*r))}function un(n){return n-2*m*c((n+m)/(2*m))}function an(n,r,e){for(var t,o=[[n[0],n[1],h(n[1]),u(n[1])],[r[0],r[1],h(r[1]),u(r[1])],[e[0],e[1],h(e[1]),u(e[1])]],i=o[2],a=0;a<3;++a,i=t)t=o[a],i.v=tn(t[1]-i[1],i[3],i[2],t[3],t[2],t[0]-i[0]),i.point=[0,0];var c=on(o[0].v[0],o[2].v[0],o[1].v[0]),f=on(o[0].v[0],o[1].v[0],o[2].v[0]),l=m-c;o[2].point[1]=0,o[0].point[0]=-(o[1].point[0]=o[0].v[0]/2);var g=[o[2].point[0]=o[0].point[0]+o[2].v[0]*u(c),2*(o[0].point[1]=o[1].point[1]=o[2].v[0]*h(c))];return function(n,r){var e,t=h(r),i=u(r),a=new Array(3);for(e=0;e<3;++e){var c=o[e];if(a[e]=tn(r-c[1],c[3],c[2],i,t,n-c[0]),!a[e][0])return c.point;a[e][1]=un(a[e][1]-c.v[1])}var v=g.slice();for(e=0;e<3;++e){var s=2==e?0:e+1,p=on(o[e].v[0],a[e][0],a[s][0]);a[e][1]<0&&(p=-p),e?1==e?(p=f-p,v[0]-=a[e][0]*u(p),v[1]-=a[e][0]*h(p)):(p=l-p,v[0]+=a[e][0]*u(p),v[1]+=a[e][0]*h(p)):(v[0]+=a[e][0]*u(p),v[1]-=a[e][0]*h(p))}return v[0]/=3,v[1]/=3,v}}function cn(n){return n[0]*=k,n[1]*=k,n}function fn(n,e,t){var o=r.geoCentroid({type:"MultiPoint",coordinates:[n,e,t]}),i=[-o[0],-o[1]],u=r.geoRotation(i),a=an(cn(u(n)),cn(u(e)),cn(u(t)));a.invert=V(a);var c=r.geoProjection(a).rotate(i),f=c.center;return delete c.rotate,c.center=function(n){return arguments.length?f(u(n)):u.invert(f())},c.clipAngle(90)}function ln(n,r){var e=G(1-h(r));return[2/M*n*e,M*(1-e)]}function gn(n){var r=d(n);function e(n,e){return[n,(n?n/h(n):1)*(h(e)*u(n)-r*u(e))]}return e.invert=r?function(n,e){n&&(e*=h(n)/n);var t=u(n);return[n,2*i(G(t*t+r*r-e*e)-t,r-e)]}:function(n,r){return[n,A(n?r*d(n)/n:r)]},e}ln.invert=function(n,r){var e=(e=r/M-1)*e;return[e>0?n*G(m/e)/2:0,A(1-e)]};var vn=G(3);function sn(n,r){return[vn*n*(2*u(2*r/3)-1)/M,vn*M*h(r/3)]}function pn(n){var r=u(n);function e(n,e){return[n*r,h(e)/r]}return e.invert=function(n,e){return[n/r,A(e*r)]},e}function hn(n){var r=u(n);function e(n,e){return[n*r,(1+r)*d(e/2)]}return e.invert=function(n,e){return[n/r,2*o(e/(1+r))]},e}function dn(n,r){var e=G(8/(3*m));return[e*n*(1-t(r)/m),e*r]}function wn(n,r){var e=G(4-3*h(t(r)));return[2/G(6*m)*n*e,p(r)*G(2*m/3)*(2-e)]}function yn(n,r){var e=G(m*(4+m));return[2/e*n*(1+G(1-4*r*r/(m*m))),4/e*r]}function mn(n,r){var e=(2+P)*h(r);r/=2;for(var o=0,i=1/0;o<10&&t(i)>w;o++){var a=u(r);r-=i=(r+h(r)*(a+2)-e)/(2*a*(1+a))}return[2/G(m*(4+m))*n*(1+u(r)),2*G(m/(4+m))*h(r)]}function Pn(n,r){return[n*(1+u(r))/G(2+m),2*r/G(2+m)]}function Rn(n,r){for(var e=(1+P)*h(r),o=0,i=1/0;o<10&&t(i)>w;o++)r-=i=(r+h(r)-e)/(1+u(r));return e=G(2+m),[n*(1+u(r))/e,2*r/e]}sn.invert=function(n,r){var e=3*A(r/(vn*M));return[M*n/(vn*(2*u(2*e/3)-1)),e]},dn.invert=function(n,r){var e=G(8/(3*m)),o=r/e;return[n/(e*(1-t(o)/m)),o]},wn.invert=function(n,r){var e=2-t(r)/G(2*m/3);return[n*G(6*m)/(2*e),p(r)*A((4-e*e)/3)]},yn.invert=function(n,r){var e=G(m*(4+m))/2;return[n*e/(1+G(1-r*r*(4+m)/(4*m))),r*e/2]},mn.invert=function(n,r){var e=r*G((4+m)/m)/2,t=A(e),o=u(t);return[n/(2/G(m*(4+m))*(1+o)),A((t+e*(o+2))/(2+P))]},Pn.invert=function(n,r){var e=G(2+m),t=r*e/2;return[e*n/(1+u(t)),t]},Rn.invert=function(n,r){var e=1+P,t=G(e/2);return[2*n*t/(1+u(r*=t)),A((r+h(r))/e)]};var bn=3+2*j;function jn(n,r){var e=h(n/=2),t=u(n),i=G(u(r)),a=u(r/=2),c=h(r)/(a+j*t*i),l=G(2/(1+c*c)),g=G((j*a+(t+e)*i)/(j*a+(t-e)*i));return[bn*(l*(g-1/g)-2*f(g)),bn*(l*c*(g+1/g)-2*o(c))]}jn.invert=function(n,r){if(!(e=H.invert(n/1.2,1.065*r)))return null;var e,i=e[0],a=e[1],c=20;n/=bn,r/=bn;do{var v=i/2,s=a/2,p=h(v),d=u(v),y=h(s),m=u(s),R=u(a),M=G(R),E=y/(m+j*d*M),S=E*E,k=G(2/(1+S)),A=(j*m+(d+p)*M)/(j*m+(d-p)*M),x=G(A),C=x-1/x,N=x+1/x,F=k*C-2*f(x)-n,z=k*E*N-2*o(E)-r,L=y&&b*M*p*S/y,q=(j*d*m+M)/(2*(m+j*d*M)*(m+j*d*M)*M),B=-.5*E*k*k*k,W=B*L,I=B*q,D=(D=2*m+j*M*(d-p))*D*x,Q=(j*d*m*M+R)/D,T=-j*p*y/(M*D),V=C*W-2*Q/x+k*(Q+Q/A),_=C*I-2*T/x+k*(T+T/A),K=E*N*W-2*L/(1+S)+k*N*L+k*E*(Q-Q/A),O=E*N*I-2*q/(1+S)+k*N*q+k*E*(T-T/A),U=_*K-O*V;if(!U)break;var J=(z*_-F*O)/U,X=(F*K-z*V)/U;i-=J,a=l(-P,g(P,a-X))}while((t(J)>w||t(X)>w)&&--c>0);return t(t(a)-P)<w?[0,a]:c&&[i,a]};var Mn=u(35*k);function En(n,r){var e=d(r/2);return[n*Mn*G(1-e*e),(1+Mn)*e]}function Sn(n,r){var e=r/2,t=u(e);return[2*n/M*u(r)*t*t,M*d(e)]}function kn(n){var r=1-n,e=o(m,0)[0]-o(-m,0)[0],t=G(2*(o(0,P)[1]-o(0,-P)[1])/e);function o(e,t){var o=u(t),i=h(t);return[o/(r+n*o)*e,r*t+n*i]}function i(n,r){var e=o(n,r);return[e[0]*t,e[1]/t]}function a(n){return i(0,n)[1]}return i.invert=function(e,o){var i=T(a,o);return[e/t*(n+r/u(i)),i]},i}function An(n){return[n[0]/2,A(d(n[1]/2*k))*S]}function xn(n){return[2*n[0],2*o(h(n[1]*k))*S]}function Gn(n,e){var o=2*m/e,a=n*n;function c(e,c){var f=r.geoAzimuthalEquidistantRaw(e,c),l=f[0],g=f[1],v=l*l+g*g;if(v>a){var p=G(v),d=i(g,l),y=o*s(d/o),R=d-y,b=n*u(R),j=(n*h(R)-R*h(b))/(P-b),M=Cn(R,j),E=(m-n)/Nn(M,b,m);l=p;var S,k=50;do{l-=S=(n+Nn(M,b,l)*E-p)/(M(l)*E)}while(t(S)>w&&--k>0);g=R*h(l),l<P&&(g-=j*(l-P));var A=h(y),x=u(y);f[0]=l*x-g*A,f[1]=l*A+g*x}return f}return c.invert=function(e,c){var f=e*e+c*c;if(f>a){var l=G(f),g=i(c,e),v=o*s(g/o),p=g-v;e=l*u(p),c=l*h(p);for(var d=e-P,w=h(e),R=c/w,b=e<P?1/0:0,j=10;;){var M=n*h(R),E=n*u(R),S=h(E),k=P-E,A=(M-R*S)/k,x=Cn(R,A);if(t(b)<y||!--j)break;R-=b=(R*w-A*d-c)/(w-2*d*(k*(E+R*M*u(E)-S)-M*(M-R*S))/(k*k))}e=(l=n+Nn(x,E,e)*(m-n)/Nn(x,E,m))*u(g=v+R),c=l*h(g)}return r.geoAzimuthalEquidistantRaw.invert(e,c)},c}function Cn(n,r){return function(e){var t=n*u(e);return e<P&&(t-=r),G(1+t*t)}}function Nn(n,r,e){for(var t=(e-r)/50,o=n(r)+n(e),i=1,u=r;i<50;++i)o+=2*n(u+=t);return.5*o*t}function Fn(n,r,e,o,i,a,c,f){function l(t,l){if(!l)return[n*t/m,0];var g=l*l,v=n+g*(r+g*(e+g*o)),s=l*(i-1+g*(a-f+g*c)),p=(v*v+s*s)/(2*s),d=t*A(v/p)/m;return[p*h(d),l*(1+g*f)+p*(1-u(d))]}return arguments.length<8&&(f=0),l.invert=function(l,g){var v,s,p=m*l/n,d=g,y=50;do{var P=d*d,R=n+P*(r+P*(e+P*o)),b=d*(i-1+P*(a-f+P*c)),j=R*R+b*b,M=2*b,E=j/M,S=E*E,k=A(R/E)/m,x=p*k,C=R*R,N=(2*r+P*(4*e+6*P*o))*d,F=i+P*(3*a+5*P*c),z=(2*(R*N+b*(F-1))*M-j*(2*(F-1)))/(M*M),L=u(x),H=h(x),q=E*L,B=E*H,W=p/m*(1/G(1-C/S))*(N*E-R*z)/S,I=B-l,D=d*(1+P*f)+E-q-g,Q=z*H+q*W,T=q*k,V=1+z-(z*L-B*W),_=B*k,K=Q*_-V*T;if(!K)break;p-=v=(D*Q-I*V)/K,d-=s=(I*_-D*T)/K}while((t(v)>w||t(s)>w)&&--y>0);return[p,d]},l}En.invert=function(n,r){var e=r/(1+Mn);return[n&&n/(Mn*G(1-e*e)),2*o(e)]},Sn.invert=function(n,r){var e=o(r/M),t=u(e),i=2*e;return[n*M/2/(u(i)*t*t),i]};var zn=Fn(2.8284,-1.6988,.75432,-.18071,1.76003,-.38914,.042555);var Ln=Fn(2.583819,-.835827,.170354,-.038094,1.543313,-.411435,.082742);var Hn=Fn(5/6*m,-.62636,-.0344,0,1.3493,-.05524,0,.045);function qn(n,r){var e=n*n,t=r*r;return[n*(1-.162388*t)*(.87-952426e-9*e*e),r*(1+t/12)]}qn.invert=function(n,r){var e,o=n,i=r,u=50;do{var a=i*i;i-=e=(i*(1+a/12)-r)/(1+a/4)}while(t(e)>w&&--u>0);u=50,n/=1-.162388*a;do{var c=(c=o*o)*c;o-=e=(o*(.87-952426e-9*c)-n)/(.87-.00476213*c)}while(t(e)>w&&--u>0);return[o,i]};var Bn=Fn(2.6516,-.76534,.19123,-.047094,1.36289,-.13965,.031762);function Wn(n){var r=n(P,0)[0]-n(-P,0)[0];function e(e,t){var o=e>0?-.5:.5,i=n(e+o*m,t);return i[0]-=o*r,i}return n.invert&&(e.invert=function(e,t){var o=e>0?-.5:.5,i=n.invert(e+o*r,t),u=i[0]-o*m;return u<-m?u+=2*m:u>m&&(u-=2*m),i[0]=u,i}),e}function In(n,r){var e=p(n),o=p(r),a=u(r),c=u(n)*a,f=h(n)*a,l=h(o*r);n=t(i(f,l)),r=A(c),t(n-P)>w&&(n%=P);var g=function(n,r){if(r===P)return[0,0];var e,o,i=h(r),a=i*i,c=a*a,f=1+c,l=1+3*c,g=1-c,v=A(1/G(f)),s=g+a*f*v,p=(1-i)/s,d=G(p),y=p*f,R=G(y),b=d*g;if(0===n)return[0,-(b+a*R)];var j,M=u(r),E=1/M,S=2*i*M,k=(-s*M-(-3*a+v*l)*S*(1-i))/(s*s),x=-E*S,C=-E*(a*f*k+p*l*S),N=-2*E*(g*(.5*k/d)-2*a*d*S),F=4*n/m;if(n>.222*m||r<m/4&&n>.175*m){if(e=(b+a*G(y*(1+c)-b*b))/(1+c),n>m/4)return[e,e];var z=e,L=.5*e;e=.5*(L+z),o=50;do{var H=G(y-e*e),q=e*(N+x*H)+C*A(e/R)-F;if(!q)break;q<0?L=e:z=e,e=.5*(L+z)}while(t(z-L)>w&&--o>0)}else{e=w,o=25;do{var B=e*e,W=G(y-B),I=N+x*W,D=e*I+C*A(e/R)-F,Q=I+(C-x*B)/W;e-=j=W?D/Q:0}while(t(j)>w&&--o>0)}return[e,-b-a*G(y-e*e)]}(n>m/4?P-n:n,r);return n>m/4&&(l=g[0],g[0]=-g[1],g[1]=-l),g[0]*=e,g[1]*=-o,g}function Dn(n,r){var e,i,c,f,l,g;if(r<w)return[(f=h(n))-(e=r*(n-f*(i=u(n)))/4)*i,i+e*f,1-r*f*f/2,n-e];if(r>=1-w)return e=(1-r)/4,c=1/(i=N(n)),[(f=((g=a(2*(g=n)))-1)/(g+1))+e*((l=i*C(n))-n)/(i*i),c-e*f*c*(l-n),c+e*f*c*(l+n),2*o(a(n))-P+e*(l-n)/i];var v=[1,0,0,0,0,0,0,0,0],s=[G(r),0,0,0,0,0,0,0,0],p=0;for(i=G(1-r),l=1;t(s[p]/v[p])>w&&p<8;)e=v[p++],s[p]=(e-i)/2,v[p]=(e+i)/2,i=G(e*i),l*=2;c=l*v[p]*n;do{c=(A(f=s[p]*h(i=c)/v[p])+c)/2}while(--p);return[h(c),f=u(c),f/u(c-i),c]}function Qn(n,r){if(!r)return n;if(1===r)return f(d(n/2+R));for(var e=1,i=G(1-r),u=G(r),a=0;t(u)>w;a++){if(n%m){var c=o(i*d(n)/e);c<0&&(c+=m),n+=c+~~(n/m)*m}else n+=n;u=(e+i)/2,i=G(e*i),u=((e=u)-i)/2}return n/(v(2,a)*e)}function Tn(n,r){var e=(j-1)/(j+1),c=G(1-e*e),l=Qn(P,c*c),g=f(d(m/4+t(r)/2)),v=a(-1*g)/G(e),s=function(n,r){var e=n*n,t=r+1,o=1-e-r*r;return[.5*((n>=0?P:-P)-i(o,2*n)),-.25*f(o*o+4*e)+.5*f(t*t+e)]}(v*u(-1*n),v*h(-1*n)),w=function(n,r,e){var i=t(n),u=C(t(r));if(i){var a=1/h(i),c=1/(d(i)*d(i)),f=-(c+e*(u*u*a*a)-1+e),l=(-f+G(f*f-(e-1)*c*4))/2;return[Qn(o(1/G(l)),e)*p(n),Qn(o(G((l/c-1)/e)),1-e)*p(r)]}return[0,Qn(o(u),1-e)*p(r)]}(s[0],s[1],c*c);return[-w[1],(r>=0?1:-1)*(.5*l-w[0])]}function Vn(n){var r=h(n),e=u(n),o=_n(n);function a(n,i){var a=o(n,i);n=a[0],i=a[1];var c=h(i),f=u(i),l=u(n),g=x(r*c+e*f*l),v=h(g),s=t(v)>w?g/v:1;return[s*e*h(n),(t(n)>P?s:-s)*(r*f-e*c*l)]}return o.invert=_n(-n),a.invert=function(n,e){var t=G(n*n+e*e),a=-h(t),c=u(t),f=t*c,l=-e*a,g=t*r,v=G(f*f+l*l-g*g),s=i(f*g+l*v,l*g-f*v),p=(t>P?-1:1)*i(n*a,t*u(s)*c+e*h(s)*a);return o.invert(p,s)},a}function _n(n){var r=h(n),e=u(n);return function(n,t){var o=u(t),a=u(n)*o,c=h(n)*o,f=h(t);return[i(c,a*e-f*r),A(f*e+a*r)]}}In.invert=function(n,r){t(n)>1&&(n=2*p(n)-n),t(r)>1&&(r=2*p(r)-r);var e=p(n),o=p(r),a=-e*n,c=-o*r,f=c/a<1,l=function(n,r){var e=0,o=1,i=.5,a=50;for(;;){var c=i*i,f=G(i),l=A(1/G(1+c)),g=1-c+i*(1+c)*l,v=(1-f)/g,s=G(v),p=v*(1+c),h=s*(1-c),d=p-n*n,w=G(d),P=r+h+i*w;if(t(o-e)<y||0==--a||0===P)break;P>0?e=i:o=i,i=.5*(e+o)}if(!a)return null;var R=A(f),b=u(R),j=1/b,M=2*f*b,E=(-g*b-(-3*i+l*(1+3*c))*M*(1-f))/(g*g);return[m/4*(n*(-2*j*(.5*E/s*(1-c)-2*i*s*M)+-j*M*w)+-j*(i*(1+c)*E+v*(1+3*c)*M)*A(n/G(p))),R]}(f?c:a,f?a:c),g=l[0],v=l[1],s=u(v);return f&&(g=-P-g),[e*(i(h(g)*s,-h(v))+m),o*A(u(g)*s)]},Tn.invert=function(n,r){var e,t,u,c,l,g,v=(j-1)/(j+1),s=G(1-v*v),p=Qn(P,s*s),h=(t=-n,u=s*s,(e=.5*p-r)?(c=Dn(e,u),t?(g=(l=Dn(t,1-u))[1]*l[1]+u*c[0]*c[0]*l[0]*l[0],[[c[0]*l[2]/g,c[1]*c[2]*l[0]*l[1]/g],[c[1]*l[1]/g,-c[0]*c[2]*l[0]*l[2]/g],[c[2]*l[1]*l[2]/g,-u*c[0]*c[1]*l[0]/g]]):[[c[0],0],[c[1],0],[c[2],0]]):[[0,(l=Dn(t,1-u))[0]/l[1]],[1/l[1],0],[l[2]/l[1],0]]),d=function(n,r){var e=r[0]*r[0]+r[1]*r[1];return[(n[0]*r[0]+n[1]*r[1])/e,(n[1]*r[0]-n[0]*r[1])/e]}(h[0],h[1]);return[i(d[1],d[0])/-1,2*o(a(-.5*f(v*d[0]*d[0]+v*d[1]*d[1])))-P]};var Kn=A(1-1/3)*S,On=pn(0);function Un(n){var r=Kn*k,e=ln(m,r)[0]-ln(-m,r)[0],o=On(0,r)[1],i=ln(0,r)[1],u=M-i,a=E/n,f=4/E,v=o+u*u*4/E;function s(s,p){var h,d=t(p);if(d>r){var w=g(n-1,l(0,c((s+m)/a)));(h=ln(s+=m*(n-1)/n-w*a,d))[0]=h[0]*E/e-E*(n-1)/(2*n)+w*E/n,h[1]=o+4*(h[1]-i)*u/E,p<0&&(h[1]=-h[1])}else h=On(s,p);return h[0]*=f,h[1]/=v,h}return s.invert=function(r,s){r/=f;var p=t(s*=v);if(p>o){var h=g(n-1,l(0,c((r+m)/a)));r=(r+m*(n-1)/n-h*a)*e/E;var d=ln.invert(r,.25*(p-o)*E/u+i);return d[0]-=m*(n-1)/n-h*a,s<0&&(d[1]=-d[1]),d}return On.invert(r,s)},s}function Jn(n,r){return[n,1&r?90-w:Kn]}function Xn(n,r){return[n,1&r?-90+w:-Kn]}function Yn(n){return[n[0]*(1-w),n[1]]}function Zn(n){var r,e=1+n,o=A(h(1/e)),a=2*G(m/(r=m+4*o*e)),c=.5*a*(e+G(n*(2+n))),f=n*n,l=e*e;function g(g,v){var s,p,d=1-h(v);if(d&&d<2){var w,R=P-v,b=25;do{var j=h(R),M=u(R),E=o+i(j,e-M),S=1+l-2*e*M;R-=w=(R-f*o-e*j+S*E-.5*d*r)/(2*e*j*E)}while(t(w)>y&&--b>0);s=a*G(S),p=g*E/m}else s=a*(n+d),p=g*o/m;return[s*h(p),c-s*u(p)]}return g.invert=function(n,t){var u=n*n+(t-=c)*t,g=(1+l-u/(a*a))/(2*e),v=x(g),s=h(v),p=o+i(s,e-g);return[A(n/G(u))*m/p,A(1-2*(v-f*o-e*s+(1+l-2*e*g)*p)/r)]},g}var $n=.7109889596207567,nr=.0528035274542;function rr(n,r){return r>-$n?((n=U(n,r))[1]+=nr,n):$(n,r)}function er(n,r){return t(r)>$n?((n=U(n,r))[1]-=r>0?nr:-nr,n):$(n,r)}function tr(n,r,e,t){var o=G(4*m/(2*e+(1+n-r/2)*h(2*e)+(n+r)/2*h(4*e)+r/2*h(6*e))),i=G(t*h(e)*G((1+n*u(2*e)+r*u(4*e))/(1+n+r))),a=e*f(1);function c(e){return G(1+n*u(2*e)+r*u(4*e))}function f(t){var o=t*e;return(2*o+(1+n-r/2)*h(2*o)+(n+r)/2*h(4*o)+r/2*h(6*o))/e}function l(n){return c(n)*h(n)}var g=function(n,r){var t=e*T(f,a*h(r)/e,r/m);isNaN(t)&&(t=e*p(r));var l=o*c(t);return[l*i*n/m*u(t),l/i*h(t)]};return g.invert=function(n,r){var t=T(l,r*i/o);return[n*m/(u(t)*o*i*c(t)),A(e*f(t/e)/a)]},0===e&&(o=G(t/m),(g=function(n,r){return[n*o,h(r)/o]}).invert=function(n,r){return[n/o,A(r*o)]}),g}function or(n,r,e,t,o){void 0===t&&(t=1e-8),void 0===o&&(o=20);var i=n(r),u=n(.5*(r+e)),a=n(e);return function n(r,e,t,o,i,u,a,c,f,l,g){if(g.nanEncountered)return NaN;var v,s,p,h,d,w,y,m,P,R;if(s=r(e+.25*(v=t-e)),p=r(t-.25*v),isNaN(s))g.nanEncountered=!0;else{if(!isNaN(p))return R=((w=(h=v*(o+4*s+i)/12)+(d=v*(i+4*p+u)/12))-a)/15,l>f?(g.maxDepthCount++,w+R):Math.abs(R)<c?w+R:(m=n(r,e,y=e+.5*v,o,s,i,h,.5*c,f,l+1,g),isNaN(m)?(g.nanEncountered=!0,NaN):(P=n(r,y,t,i,p,u,d,.5*c,f,l+1,g),isNaN(P)?(g.nanEncountered=!0,NaN):m+P));g.nanEncountered=!0}}(n,r,e,i,u,a,(i+4*u+a)*(e-r)/6,t,o,1,{maxDepthCount:0,nanEncountered:!1})}function ir(n,r,e){function o(e){return n+(1-n)*v(1-v(e,r),1/r)}function i(n){return or(o,0,n,1e-4)}for(var u=1/i(1),a=1e3,c=(1+1e-8)*u,f=[],l=0;l<=a;l++)f.push(i(l/a)*c);function g(n){var r=0,e=a,t=a>>1;do{f[t]>n?e=t:r=t,t=r+e>>1}while(t>r);var o=f[t+1]-f[t];return o&&(o=(n-f[t+1])/o),(t+1+o)/a}var s=2*g(1)/m*u/e,d=function(n,r){var e=g(t(h(r))),i=o(e)*n;return e/=s,[i,r>=0?e:-e]};return d.invert=function(n,r){var e;return t(r*=s)<1&&(e=p(r)*A(i(t(r))*u)),[n/o(t(r)),e]},d}function ur(n,r){return t(n[0]-r[0])<w&&t(n[1]-r[1])<w}function ar(n,r){for(var e,t,o,i=-1,u=n.length,a=n[0],c=[];++i<u;){t=((e=n[i])[0]-a[0])/r,o=(e[1]-a[1])/r;for(var f=0;f<r;++f)c.push([a[0]+f*t,a[1]+f*o]);a=e}return c.push(e),c}function cr(n,t,o){var i,u;function a(r,e){for(var o=e<0?-1:1,i=t[+(e<0)],u=0,a=i.length-1;u<a&&r>i[u][2][0];++u);var c=n(r-i[u][1][0],e);return c[0]+=n(i[u][1][0],o*e>o*i[u][0][1]?i[u][0][1]:e)[0],c}o?a.invert=o(a):n.invert&&(a.invert=function(r,e){for(var o=u[+(e<0)],i=t[+(e<0)],c=0,f=o.length;c<f;++c){var l=o[c];if(l[0][0]<=r&&r<l[1][0]&&l[0][1]<=e&&e<l[1][1]){var g=n.invert(r-n(i[c][1][0],0)[0],e);return g[0]+=i[c][1][0],ur(a(g[0],g[1]),[r,e])?g:null}}});var c=r.geoProjection(a),f=c.stream;return c.stream=function(n){var e=c.rotate(),t=f(n),o=(c.rotate([0,0]),f(n));return c.rotate(e),t.sphere=function(){r.geoStream(i,o)},t},c.lobes=function(r){return arguments.length?(i=function(n){var r,t,o,i,u,a,c,f=[],l=n[0].length;for(c=0;c<l;++c)t=(r=n[0][c])[0][0],o=r[0][1],i=r[1][1],u=r[2][0],a=r[2][1],f.push(ar([[t+w,o+w],[t+w,i-w],[u-w,i-w],[u-w,a+w]],30));for(c=n[1].length-1;c>=0;--c)t=(r=n[1][c])[0][0],o=r[0][1],i=r[1][1],u=r[2][0],a=r[2][1],f.push(ar([[u-w,a-w],[u-w,i+w],[t+w,i+w],[t+w,o-w]],30));return{type:"Polygon",coordinates:[e.merge(f)]}}(r),t=r.map(function(n){return n.map(function(n){return[[n[0][0]*k,n[0][1]*k],[n[1][0]*k,n[1][1]*k],[n[2][0]*k,n[2][1]*k]]})}),u=t.map(function(r){return r.map(function(r){var e,t=n(r[0][0],r[0][1])[0],o=n(r[2][0],r[2][1])[0],i=n(r[1][0],r[0][1])[1],u=n(r[1][0],r[1][1])[1];return i>u&&(e=i,i=u,u=e),[[t,i],[o,u]]})}),c):t.map(function(n){return n.map(function(n){return[[n[0][0]*S,n[0][1]*S],[n[1][0]*S,n[1][1]*S],[n[2][0]*S,n[2][1]*S]]})})},null!=t&&c.lobes(t),c}rr.invert=function(n,r){return r>-$n?U.invert(n,r-nr):$.invert(n,r)},er.invert=function(n,r){return t(r)>$n?U.invert(n,r+(r>0?nr:-nr)):$.invert(n,r)};var fr=[[[[-180,0],[-100,90],[-40,0]],[[-40,0],[30,90],[180,0]]],[[[-180,0],[-160,-90],[-100,0]],[[-100,0],[-60,-90],[-20,0]],[[-20,0],[20,-90],[80,0]],[[80,0],[140,-90],[180,0]]]];var lr=[[[[-180,0],[-100,90],[-40,0]],[[-40,0],[30,90],[180,0]]],[[[-180,0],[-160,-90],[-100,0]],[[-100,0],[-60,-90],[-20,0]],[[-20,0],[20,-90],[80,0]],[[80,0],[140,-90],[180,0]]]];var gr=[[[[-180,0],[-100,90],[-40,0]],[[-40,0],[30,90],[180,0]]],[[[-180,0],[-160,-90],[-100,0]],[[-100,0],[-60,-90],[-20,0]],[[-20,0],[20,-90],[80,0]],[[80,0],[140,-90],[180,0]]]];var vr=[[[[-180,0],[-90,90],[0,0]],[[0,0],[90,90],[180,0]]],[[[-180,0],[-90,-90],[0,0]],[[0,0],[90,-90],[180,0]]]];var sr=[[[[-180,35],[-30,90],[0,35]],[[0,35],[30,90],[180,35]]],[[[-180,-10],[-102,-90],[-65,-10]],[[-65,-10],[5,-90],[77,-10]],[[77,-10],[103,-90],[180,-10]]]];var pr=[[[[-180,0],[-110,90],[-40,0]],[[-40,0],[0,90],[40,0]],[[40,0],[110,90],[180,0]]],[[[-180,0],[-110,-90],[-40,0]],[[-40,0],[0,-90],[40,0]],[[40,0],[110,-90],[180,0]]]];function hr(n,r){return[3/E*n*G(m*m/3-r*r),r]}function dr(n){function r(r,e){if(t(t(e)-P)<w)return[0,e<0?-2:2];var o=h(e),i=v((1+o)/(1-o),n/2),a=.5*(i+1/i)+u(r*=n);return[2*h(r)/a,(i-1/i)/a]}return r.invert=function(r,e){var o=t(e);if(t(o-2)<w)return r?null:[0,p(e)*P];if(o>2)return null;var u=(r/=2)*r,a=(e/=2)*e,c=2*e/(1+u+a);return c=v((1+c)/(1-c),1/n),[i(2*r,1-u-a)/n,A((c-1)/(c+1))]},r}hr.invert=function(n,r){return[E/3*n/G(m*m/3-r*r),r]};var wr=m/j;function yr(n,r){return[n*(1+G(u(r)))/2,r/(u(r/2)*u(n/6))]}function mr(n,r){var e=n*n,t=r*r;return[n*(.975534+t*(-.0143059*e-.119161+-.0547009*t)),r*(1.00384+e*(.0802894+-.02855*t+199025e-9*e)+t*(.0998909+-.0491032*t))]}function Pr(n,r){return[h(n)/u(r),d(r)*u(n)]}function Rr(n){var r=u(n),e=d(R+n/2);function o(o,i){var u=i-n,a=t(u)<w?o*r:t(a=R+i/2)<w||t(t(a)-P)<w?0:o*u/f(d(a)/e);return[a,u]}return o.invert=function(o,i){var u,a=i+n;return[t(i)<w?o/r:t(u=R+a/2)<w||t(t(u)-P)<w?0:o*f(d(u)/e)/i,a]},o}function br(n,r){return[n,1.25*f(d(R+.4*r))]}function jr(n){var r=n.length-1;function e(e,t){for(var o,i=u(t),a=2/(1+i*u(e)),c=a*i*h(e),f=a*h(t),l=r,g=n[l],v=g[0],s=g[1];--l>=0;)v=(g=n[l])[0]+c*(o=v)-f*s,s=g[1]+c*s+f*o;return[v=c*(o=v)-f*s,s=c*s+f*o]}return e.invert=function(e,a){var c=20,f=e,l=a;do{for(var g,v=r,s=n[v],p=s[0],d=s[1],y=0,m=0;--v>=0;)y=p+f*(g=y)-l*m,m=d+f*m+l*g,p=(s=n[v])[0]+f*(g=p)-l*d,d=s[1]+f*d+l*g;var P,R,b=(y=p+f*(g=y)-l*m)*y+(m=d+f*m+l*g)*m;f-=P=((p=f*(g=p)-l*d-e)*y+(d=f*d+l*g-a)*m)/b,l-=R=(d*y-p*m)/b}while(t(P)+t(R)>w*w&&--c>0);if(c){var j=G(f*f+l*l),M=2*o(.5*j),E=h(M);return[i(f*E,j*u(M)),j?A(l*E/j):0]}},e}yr.invert=function(n,r){var e=t(n),o=t(r),i=w,a=P;o<wr?a*=o/wr:i+=6*x(wr/o);for(var c=0;c<25;c++){var f=h(a),l=G(u(a)),g=h(a/2),v=u(a/2),s=h(i/6),p=u(i/6),d=.5*i*(1+l)-e,y=a/(v*p)-o,m=l?-.25*i*f/l:0,R=.5*(1+l),b=(1+.5*a*g/v)/(v*p),j=a/v*(s/6)/(p*p),M=m*j-b*R,E=(d*j-y*R)/M,S=(y*m-d*b)/M;if(a-=E,i-=S,t(E)<w&&t(S)<w)break}return[n<0?-i:i,r<0?-a:a]},mr.invert=function(n,r){var e=p(n)*m,o=r/2,i=50;do{var u=e*e,a=o*o,c=e*o,f=e*(.975534+a*(-.0143059*u-.119161+-.0547009*a))-n,l=o*(1.00384+u*(.0802894+-.02855*a+199025e-9*u)+a*(.0998909+-.0491032*a))-r,g=.975534-a*(.119161+3*u*.0143059+.0547009*a),v=-c*(.238322+.2188036*a+.0286118*u),s=c*(.1605788+7961e-7*u+-.0571*a),h=1.00384+u*(.0802894+199025e-9*u)+a*(3*(.0998909-.02855*u)-.245516*a),d=v*s-h*g,y=(l*v-f*h)/d,P=(f*s-l*g)/d;e-=y,o-=P}while((t(y)>w||t(P)>w)&&--i>0);return i&&[e,o]},Pr.invert=function(n,r){var e=n*n,t=r*r+1,o=e+t,i=n?b*G((o-G(o*o-4*e))/e):1/G(t);return[A(n*i),p(r)*x(i)]},br.invert=function(n,r){return[n,2.5*o(a(.8*r))-.625*m]};var Mr=[[.9972523,0],[.0052513,-.0041175],[.0074606,.0048125],[-.0153783,-.1968253],[.0636871,-.1408027],[.3660976,-.2937382]],Er=[[.98879,0],[0,0],[-.050909,0],[0,0],[.075528,0]],Sr=[[.984299,0],[.0211642,.0037608],[-.1036018,-.0575102],[-.0329095,-.0320119],[.0499471,.1223335],[.026046,.0899805],[7388e-7,-.1435792],[.0075848,-.1334108],[-.0216473,.0776645],[-.0225161,.0853673]],kr=[[.9245,0],[0,0],[.01943,0]],Ar=[[.721316,0],[0,0],[-.00881625,-.00617325]];function xr(n,e){var t=r.geoProjection(jr(n)).rotate(e).clipAngle(90),o=r.geoRotation(e),i=t.center;return delete t.rotate,t.center=function(n){return arguments.length?i(o(n)):o.invert(i())},t}var Gr=G(6),Cr=G(7);function Nr(n,r){var e=A(7*h(r)/(3*Gr));return[Gr*n*(2*u(2*e/3)-1)/Cr,9*h(e/3)/Cr]}function Fr(n,r){for(var e,o=(1+b)*h(r),i=r,a=0;a<25&&(i-=e=(h(i/2)+h(i)-o)/(.5*u(i/2)+u(i)),!(t(e)<w));a++);return[n*(1+2*u(i)/u(i/2))/(3*j),2*G(3)*h(i/2)/G(2+j)]}function zr(n,r){for(var e,o=G(6/(4+m)),i=(1+m/4)*h(r),a=r/2,c=0;c<25&&(a-=e=(a/2+h(a)-i)/(.5+u(a)),!(t(e)<w));c++);return[o*(.5+u(a))*n/1.5,o*a]}function Lr(n,r){var e=r*r,t=e*e,o=e*t;return[n*(.84719-.13063*e+o*o*(.05494*e-.04515-.02326*t+.00331*o)),r*(1.01183+t*t*(.01926*e-.02625-.00396*t))]}function Hr(n,r){return[n*(1+u(r))/2,2*(r-d(r/2))]}Nr.invert=function(n,r){var e=3*A(r*Cr/9);return[n*Cr/(Gr*(2*u(2*e/3)-1)),A(3*h(e)*Gr/7)]},Fr.invert=function(n,r){var e=r*G(2+j)/(2*G(3)),t=2*A(e);return[3*j*n/(1+2*u(t)/u(t/2)),A((e+h(t))/(1+b))]},zr.invert=function(n,r){var e=G(6/(4+m)),o=r/e;return t(t(o)-P)<w&&(o=o<0?-P:P),[1.5*n/(e*(.5+u(o))),A((o/2+h(o))/(1+m/4))]},Lr.invert=function(n,r){var e,o,i,u,a=r,c=25;do{a-=e=(a*(1.01183+(i=(o=a*a)*o)*i*(.01926*o-.02625-.00396*i))-r)/(1.01183+i*i*(.21186*o-.23625+-.05148*i))}while(t(e)>y&&--c>0);return[n/(.84719-.13063*(o=a*a)+(u=o*(i=o*o))*u*(.05494*o-.04515-.02326*i+.00331*u)),a]},Hr.invert=function(n,r){for(var e=r/2,o=0,i=1/0;o<10&&t(i)>w;++o){var a=u(r/2);r-=i=(r-d(r/2)-e)/(1-.5/(a*a))}return[2*n/(1+u(r)),r]};var qr=[[[[-180,0],[-90,90],[0,0]],[[0,0],[90,90],[180,0]]],[[[-180,0],[-90,-90],[0,0]],[[0,0],[90,-90],[180,0]]]];function Br(n,r){var e=h(r),o=u(r),i=p(n);if(0===n||t(r)===P)return[0,r];if(0===r)return[n,0];if(t(n)===P)return[n*o,P*e];var a=m/(2*n)-2*n/m,c=2*r/m,f=(1-c*c)/(e-c),l=a*a,g=f*f,v=1+l/g,s=1+g/l,d=(a*e/f-a/2)/v,w=(g*e/l+f/2)/s,y=w*w-(g*e*e/l+f*e-1)/s;return[P*(d+G(d*d+o*o/v)*i),P*(w+G(y<0?0:y)*p(-r*a)*i)]}Br.invert=function(n,r){var e=(n/=P)*n,t=e+(r/=P)*r,o=m*m;return[n?(t-1+G((1-t)*(1-t)+4*e))/(2*n)*P:0,T(function(n){return t*(m*h(n)-2*n)*m+4*n*n*(r-h(n))+2*m*n-o*r},0)]};var Wr=1.0148,Ir=.23185,Dr=-.14499,Qr=.02406,Tr=Wr,Vr=5*Ir,_r=7*Dr,Kr=9*Qr;function Or(n,r){var e=r*r;return[n,r*(Wr+e*e*(Ir+e*(Dr+Qr*e)))]}function Ur(n,r){if(t(r)<w)return[n,0];var e=d(r),o=n*h(r);return[h(o)/e,r+(1-u(o))/e]}function Jr(n,r){var e=Yr(n[1],n[0]),t=Yr(r[1],r[0]),o=function(n,r){return i(n[0]*r[1]-n[1]*r[0],n[0]*r[0]+n[1]*r[1])}(e,t),a=Zr(e)/Zr(t);return Xr([1,0,n[0][0],0,1,n[0][1]],Xr([a,0,0,0,a,0],Xr([u(o),h(o),0,-h(o),u(o),0],[1,0,-r[0][0],0,1,-r[0][1]])))}function Xr(n,r){return[n[0]*r[0]+n[1]*r[3],n[0]*r[1]+n[1]*r[4],n[0]*r[2]+n[1]*r[5]+n[2],n[3]*r[0]+n[4]*r[3],n[3]*r[1]+n[4]*r[4],n[3]*r[2]+n[4]*r[5]+n[5]]}function Yr(n,r){return[n[0]-r[0],n[1]-r[1]]}function Zr(n){return G(n[0]*n[0]+n[1]*n[1])}function $r(n,e,o){function i(n,r){var t,o=e(n,r),i=o.project([n*S,r*S]);return(t=o.transform)?[t[0]*i[0]+t[1]*i[1]+t[2],-(t[3]*i[0]+t[4]*i[1]+t[5])]:(i[1]=-i[1],i)}!function n(r,e){r.edges=function(n){for(var r=n.length,e=[],t=n[r-1],o=0;o<r;++o)e.push([t,t=n[o]]);return e}(r.face);if(e.face){var t=r.shared=function(n,r){for(var e,t,o=n.length,i=null,u=0;u<o;++u){e=n[u];for(var a=r.length;--a>=0;)if(t=r[a],e[0]===t[0]&&e[1]===t[1]){if(i)return[i,e];i=e}}}(r.face,e.face),o=Jr(t.map(e.project),t.map(r.project));r.transform=e.transform?Xr(e.transform,o):o;for(var i=e.edges,u=0,a=i.length;u<a;++u)ne(t[0],i[u][1])&&ne(t[1],i[u][0])&&(i[u]=r),ne(t[0],i[u][0])&&ne(t[1],i[u][1])&&(i[u]=r);for(i=r.edges,u=0,a=i.length;u<a;++u)ne(t[0],i[u][0])&&ne(t[1],i[u][1])&&(i[u]=e),ne(t[0],i[u][1])&&ne(t[1],i[u][0])&&(i[u]=e)}else r.transform=e.transform;r.children&&r.children.forEach(function(e){n(e,r)});return r}(n,{transform:null}),re(n)&&(i.invert=function(r,t){var o=function n(r,t){var o=r.project.invert,i=r.transform,u=t;i&&(c=1/((a=i)[0]*a[4]-a[1]*a[3]),i=[c*a[4],-c*a[1],c*(a[1]*a[5]-a[2]*a[4]),-c*a[3],c*a[0],c*(a[2]*a[3]-a[0]*a[5])],u=[i[0]*u[0]+i[1]*u[1]+i[2],i[3]*u[0]+i[4]*u[1]+i[5]]);var a,c;if(o&&r===function(n){return e(n[0]*k,n[1]*k)}(f=o(u)))return f;var f,l=r.children;for(var g=0,v=l&&l.length;g<v;++g)if(f=n(l[g],t))return f}(n,[r,-t]);return o&&(o[0]*=k,o[1]*=k,o)});var u=r.geoProjection(i),a=u.stream;return u.stream=function(e){var o=u.rotate(),i=a(e),c=(u.rotate([0,0]),a(e));return u.rotate(o),i.sphere=function(){c.polygonStart(),c.lineStart(),function n(e,o,i){var u,a,c=o.edges,f=c.length,l={type:"MultiPoint",coordinates:o.face},g=o.face.filter(function(n){return 90!==t(n[1])}),v=r.geoBounds({type:"MultiPoint",coordinates:g}),s=!1,p=-1,h=v[1][0]-v[0][0];var d=180===h||360===h?[(v[0][0]+v[1][0])/2,(v[0][1]+v[1][1])/2]:r.geoCentroid(l);if(i)for(;++p<f&&c[p]!==i;);++p;for(var y=0;y<f;++y)a=c[(y+p)%f],Array.isArray(a)?(s||(e.point((u=r.geoInterpolate(a[0],d)(w))[0],u[1]),s=!0),e.point((u=r.geoInterpolate(a[1],d)(w))[0],u[1])):(s=!1,a!==i&&n(e,a,o))}(c,n),c.lineEnd(),c.polygonEnd()},i},u.angle(null==o?-30:o*S)}function ne(n,r){return n&&r&&n[0]===r[0]&&n[1]===r[1]}function re(n){return n.project.invert||n.children&&n.children.some(re)}Or.invert=function(n,r){r>1.790857183?r=1.790857183:r<-1.790857183&&(r=-1.790857183);var e,o=r;do{var i=o*o;o-=e=(o*(Wr+i*i*(Ir+i*(Dr+Qr*i)))-r)/(Tr+i*i*(Vr+i*(_r+Kr*i)))}while(t(e)>w);return[n,o]},Ur.invert=function(n,r){if(t(r)<w)return[n,0];var e,o=n*n+r*r,i=.5*r,a=10;do{var c=d(i),f=1/u(i),l=o-2*r*i+i*i;i-=e=(c*l+2*(i-r))/(2+l*f*f+2*(i-r)*c)}while(t(e)>w&&--a>0);return c=d(i),[(t(r)<t(i+1/c)?A(n*c):p(r)*p(n)*(x(t(n*c))+P))/h(i),i]};var ee=[[0,90],[-90,0],[0,0],[90,0],[180,0],[0,-90]],te=[[0,2,1],[0,3,2],[5,1,2],[5,2,3],[0,1,4],[0,4,3],[5,4,1],[5,3,4]].map(function(n){return n.map(function(n){return ee[n]})});var oe=2/G(3);function ie(n,r){var e=ln(n,r);return[e[0]*oe,e[1]]}function ue(n,r){for(var e=0,t=n.length,o=0;e<t;++e)o+=n[e]*r[e];return o}function ae(n){return[i(n[1],n[0])*S,A(l(-1,g(1,n[2])))*S]}function ce(n){var r=n[0]*k,e=n[1]*k,t=u(e);return[t*u(r),t*h(r),h(e)]}function fe(){}function le(n,r){return{type:"FeatureCollection",features:n.features.map(function(n){return ge(n,r)})}}function ge(n,r){return{type:"Feature",id:n.id,properties:n.properties,geometry:ve(n.geometry,r)}}function ve(n,e){if(!n)return null;if("GeometryCollection"===n.type)return function(n,r){return{type:"GeometryCollection",geometries:n.geometries.map(function(n){return ve(n,r)})}}(n,e);var t;switch(n.type){case"Point":case"MultiPoint":t=he;break;case"LineString":case"MultiLineString":t=de;break;case"Polygon":case"MultiPolygon":case"Sphere":t=we;break;default:return null}return r.geoStream(n,e(t)),t.result()}ie.invert=function(n,r){return ln.invert(n/oe,r)};var se=[],pe=[],he={point:function(n,r){se.push([n,r])},result:function(){var n=se.length?se.length<2?{type:"Point",coordinates:se[0]}:{type:"MultiPoint",coordinates:se}:null;return se=[],n}},de={lineStart:fe,point:function(n,r){se.push([n,r])},lineEnd:function(){se.length&&(pe.push(se),se=[])},result:function(){var n=pe.length?pe.length<2?{type:"LineString",coordinates:pe[0]}:{type:"MultiLineString",coordinates:pe}:null;return pe=[],n}},we={polygonStart:fe,lineStart:fe,point:function(n,r){se.push([n,r])},lineEnd:function(){var n=se.length;if(n){do{se.push(se[0].slice())}while(++n<4);pe.push(se),se=[]}},polygonEnd:fe,result:function(){if(!pe.length)return null;var n=[],r=[];return pe.forEach(function(e){!function(n){if((r=n.length)<4)return!1;for(var r,e=0,t=n[r-1][1]*n[0][0]-n[r-1][0]*n[0][1];++e<r;)t+=n[e-1][1]*n[e][0]-n[e-1][0]*n[e][1];return t<=0}(e)?r.push(e):n.push([e])}),r.forEach(function(r){var e=r[0];n.some(function(n){if(function(n,r){for(var e=r[0],t=r[1],o=!1,i=0,u=n.length,a=u-1;i<u;a=i++){var c=n[i],f=c[0],l=c[1],g=n[a],v=g[0],s=g[1];l>t^s>t&&e<(v-f)*(t-l)/(s-l)+f&&(o=!o)}return o}(n[0],e))return n.push(r),!0})||n.push([r])}),pe=[],n.length?n.length>1?{type:"MultiPolygon",coordinates:n}:{type:"Polygon",coordinates:n[0]}:null}};function ye(n){var e=n(P,0)[0]-n(-P,0)[0];function o(r,o){var i=t(r)<P,u=n(i?r:r>0?r-m:r+m,o),a=(u[0]-u[1])*b,c=(u[0]+u[1])*b;if(i)return[a,c];var f=e*b,l=a>0^c>0?-1:1;return[l*a-p(c)*f,l*c-p(a)*f]}return n.invert&&(o.invert=function(r,o){var i=(r+o)*b,u=(o-r)*b,a=t(i)<.5*e&&t(u)<.5*e;if(!a){var c=e*b,f=i>0^u>0?-1:1,l=-f*r+(u>0?1:-1)*c,g=-f*o+(i>0?1:-1)*c;i=(-l-g)*b,u=(l-g)*b}var v=n.invert(i,u);return a||(v[0]+=i>0?m:-m),v}),r.geoProjection(o).rotate([-90,-90,45]).clipAngle(179.999)}function me(){return ye(Tn).scale(111.48)}function Pe(n){var r=h(n);function e(e,t){var i=r?d(e*r/2)/r:e/2;if(!t)return[2*i,-n];var a=2*o(i*h(t)),c=1/d(t);return[h(a)*c,t+(1-u(a))*c-n]}return e.invert=function(e,i){if(t(i+=n)<w)return[r?2*o(r*e/2)/r:e,0];var a,c=e*e+i*i,f=0,l=10;do{var g=d(f),v=1/u(f),s=c-2*i*f+f*f;f-=a=(g*s+2*(f-i))/(2+s*v*v+2*(f-i)*g)}while(t(a)>w&&--l>0);var p=e*(g=d(f)),y=d(t(i)<t(f+1/g)?.5*A(p):.5*x(p)+m/4)/h(f);return[r?2*o(r*y)/r:2*y,f]},e}var Re=[[.9986,-.062],[1,0],[.9986,.062],[.9954,.124],[.99,.186],[.9822,.248],[.973,.31],[.96,.372],[.9427,.434],[.9216,.4958],[.8962,.5571],[.8679,.6176],[.835,.6769],[.7986,.7346],[.7597,.7903],[.7186,.8435],[.6732,.8936],[.6213,.9394],[.5722,.9761],[.5322,1]];function be(n,r){var e,o=g(18,36*t(r)/m),i=c(o),u=o-i,a=(e=Re[i])[0],f=e[1],l=(e=Re[++i])[0],v=e[1],s=(e=Re[g(19,++i)])[0],p=e[1];return[n*(l+u*(s-a)/2+u*u*(s-2*l+a)/2),(r>0?P:-P)*(v+u*(p-f)/2+u*u*(p-2*v+f)/2)]}function je(n,r){var e=function(n){function r(r,e){var t=u(e),o=(n-1)/(n-t*u(r));return[o*t*h(r),o*h(e)]}return r.invert=function(r,e){var t=r*r+e*e,o=G(t),u=(n-G(1-t*(n+1)/(n-1)))/((n-1)/o+o/(n-1));return[i(r*u,o*G(1-u*u)),o?A(e*u/o):0]},r}(n);if(!r)return e;var t=u(r),o=h(r);function a(r,i){var u=e(r,i),a=u[1],c=a*o/(n-1)+t;return[u[0]*t/c,a/c]}return a.invert=function(r,i){var u=(n-1)/(n-1-i*o);return e.invert(u*r,u*i*t)},a}Re.forEach(function(n){n[1]*=1.0144}),be.invert=function(n,r){var e=r/P,o=90*e,i=g(18,t(o/5)),u=l(0,c(i));do{var a=Re[u][1],f=Re[u+1][1],v=Re[g(19,u+2)][1],s=v-a,p=v-2*f+a,h=2*(t(e)-f)/s,d=p/s,w=h*(1-d*h*(1-2*d*h));if(w>=0||1===u){o=(r>=0?5:-5)*(w+i);var m,R=50;do{w=(i=g(18,t(o)/5))-(u=c(i)),a=Re[u][1],f=Re[u+1][1],v=Re[g(19,u+2)][1],o-=(m=(r>=0?P:-P)*(f+w*(v-a)/2+w*w*(v-2*f+a)/2)-r)*S}while(t(m)>y&&--R>0);break}}while(--u>=0);var b=Re[u][0],j=Re[u+1][0],M=Re[g(19,u+2)][0];return[n/(j+w*(M-b)/2+w*w*(M-2*j+b)/2),o*k]};var Me=1e4,Ee=-180,Se=Ee+1e-4,ke=180,Ae=ke-1e-4,xe=-90,Ge=xe+1e-4,Ce=90,Ne=Ce-1e-4;function Fe(n){return n.length>0}function ze(n){return n===xe||n===Ce?[0,n]:[Ee,(r=n,Math.floor(r*Me)/Me)];var r}function Le(n){var r=n[0],e=n[1],t=!1;return r<=Se?(r=Ee,t=!0):r>=Ae&&(r=ke,t=!0),e<=Ge?(e=xe,t=!0):e>=Ne&&(e=Ce,t=!0),t?[r,e]:n}function He(n){return n.map(Le)}function qe(n,r,e){for(var t=0,o=n.length;t<o;++t){var i=n[t].slice();e.push({index:-1,polygon:r,ring:i});for(var u=0,a=i.length;u<a;++u){var c=i[u],f=c[0],l=c[1];if(f<=Se||f>=Ae||l<=Ge||l>=Ne){i[u]=Le(c);for(var g=u+1;g<a;++g){var v=i[g],s=v[0],p=v[1];if(s>Se&&s<Ae&&p>Ge&&p<Ne)break}if(g===u+1)continue;if(u){var h={index:-1,polygon:r,ring:i.slice(0,u+1)};h.ring[h.ring.length-1]=ze(l),e[e.length-1]=h}else e.pop();if(g>=a)break;e.push({index:-1,polygon:r,ring:i=i.slice(g-1)}),i[0]=ze(i[0][1]),u=-1,a=i.length}}}}function Be(n){var r,e,t,o,i,u,a=n.length,c={},f={};for(r=0;r<a;++r)t=(e=n[r]).ring[0],i=e.ring[e.ring.length-1],t[0]!==i[0]||t[1]!==i[1]?(e.index=r,c[t]=f[i]=e):(e.polygon.push(e.ring),n[r]=null);for(r=0;r<a;++r)if(e=n[r]){if(t=e.ring[0],i=e.ring[e.ring.length-1],o=f[t],u=c[i],delete c[t],delete f[i],t[0]===i[0]&&t[1]===i[1]){e.polygon.push(e.ring);continue}o?(delete f[t],delete c[o.ring[0]],o.ring.pop(),n[o.index]=null,e={index:-1,polygon:o.polygon,ring:o.ring.concat(e.ring)},o===u?e.polygon.push(e.ring):(e.index=a++,n.push(c[e.ring[0]]=f[e.ring[e.ring.length-1]]=e))):u?(delete c[i],delete f[u.ring[u.ring.length-1]],e.ring.pop(),e={index:a++,polygon:u.polygon,ring:e.ring.concat(u.ring)},n[u.index]=null,n.push(c[e.ring[0]]=f[e.ring[e.ring.length-1]]=e)):(e.ring.push(e.ring[0]),e.polygon.push(e.ring))}}function We(n){var r={type:"Feature",geometry:Ie(n.geometry)};return null!=n.id&&(r.id=n.id),null!=n.bbox&&(r.bbox=n.bbox),null!=n.properties&&(r.properties=n.properties),r}function Ie(n){if(null==n)return n;var r,e,t,o;switch(n.type){case"GeometryCollection":r={type:"GeometryCollection",geometries:n.geometries.map(Ie)};break;case"Point":r={type:"Point",coordinates:Le(n.coordinates)};break;case"MultiPoint":case"LineString":r={type:n.type,coordinates:He(n.coordinates)};break;case"MultiLineString":r={type:"MultiLineString",coordinates:n.coordinates.map(He)};break;case"Polygon":var i=[];qe(n.coordinates,i,e=[]),Be(e),r={type:"Polygon",coordinates:i};break;case"MultiPolygon":e=[],t=-1,o=n.coordinates.length;for(var u=new Array(o);++t<o;)qe(n.coordinates[t],u[t]=[],e);Be(e),r={type:"MultiPolygon",coordinates:u.filter(Fe)};break;default:return n}return null!=n.bbox&&(r.bbox=n.bbox),r}function De(n,r){var e=d(r/2),t=h(R*e);return[n*(.74482-.34588*t*t),1.70711*e]}function Qe(n,e,t){var o=r.geoInterpolate(e,t),i=o(.5),u=r.geoRotation([-i[0],-i[1]])(e),a=o.distance/2,c=-A(h(u[1]*k)/h(a)),f=[-i[0],-i[1],-(u[0]>0?m-c:c)*S],l=r.geoProjection(n(a)).rotate(f),g=r.geoRotation(f),v=l.center;return delete l.rotate,l.center=function(n){return arguments.length?v(g(n)):g.invert(v())},l.clipAngle(90)}function Te(n){var e=u(n);function t(n,t){var o=r.geoGnomonicRaw(n,t);return o[0]*=e,o}return t.invert=function(n,t){return r.geoGnomonicRaw.invert(n/e,t)},t}function Ve(n,r){return Qe(Te,n,r)}function _e(n){if(!(n*=2))return r.geoAzimuthalEquidistantRaw;var e=-n/2,t=-e,o=n*n,a=d(t),c=.5/h(t);function f(r,i){var a=x(u(i)*u(r-e)),c=x(u(i)*u(r-t));return[((a*=a)-(c*=c))/(2*n),(i<0?-1:1)*G(4*o*c-(o-a+c)*(o-a+c))/(2*n)]}return f.invert=function(n,r){var o,f,l=r*r,g=u(G(l+(o=n+e)*o)),v=u(G(l+(o=n+t)*o));return[i(f=g-v,o=(g+v)*a),(r<0?-1:1)*x(G(o*o+f*f)*c)]},f}function Ke(n,r){return Qe(_e,n,r)}function Oe(n,r){if(t(r)<w)return[n,0];var e=t(r/P),o=A(e);if(t(n)<w||t(t(r)-P)<w)return[0,p(r)*m*d(o/2)];var i=u(o),a=t(m/n-n/m)/2,c=a*a,f=i/(e+i-1),l=f*(2/e-1),g=l*l,v=g+c,s=f-g,h=c+f;return[p(n)*m*(a*s+G(c*s*s-v*(f*f-g)))/v,p(r)*m*(l*h-a*G((c+1)*v-h*h))/v]}function Ue(n,r){if(t(r)<w)return[n,0];var e=t(r/P),o=A(e);if(t(n)<w||t(t(r)-P)<w)return[0,p(r)*m*d(o/2)];var i=u(o),a=t(m/n-n/m)/2,c=a*a,f=i*(G(1+c)-a*i)/(1+c*e*e);return[p(n)*m*f,p(r)*m*G(1-f*(2*a+f))]}function Je(n,r){if(t(r)<w)return[n,0];var e=r/P,o=A(e);if(t(n)<w||t(t(r)-P)<w)return[0,m*d(o/2)];var i=(m/n-n/m)/2,a=e/(1+u(o));return[m*(p(n)*G(i*i+1-a*a)-i),m*a]}function Xe(n,r){if(!r)return[n,0];var e=t(r);if(!n||e===P)return[0,r];var o=e/P,i=o*o,u=(8*o-i*(i+2)-5)/(2*i*(o-1)),a=u*u,c=o*u,f=i+a+2*c,l=o+3*u,g=n/P,v=g+1/g,s=p(t(n)-P)*G(v*v-4),h=s*s,d=(s*(f+a-1)+2*G(f*(i+a*h-1)+(1-i)*(i*(l*l+4*a)+12*c*a+4*a*a)))/(4*f+h);return[p(n)*P*d,p(r)*P*G(1+s*t(d)-d*d)]}function Ye(n,r,e,t){var o=m/3;n=l(n,w),r=l(r,w),n=g(n,P),r=g(r,m-w),e=l(e,0),e=g(e,100-w);var a=(t=l(t,w))/100,c=x((e/100+1)*u(o))/o,f=h(n)/h(c*P),v=r/m,s=G(a*h(n/2)/h(r/2));return function(n,r,e,t,o){function a(i,a){var c=e*h(t*a),f=G(1-c*c),l=G(2/(1+f*u(i*=o)));return[n*f*l*h(i),r*c*l]}return a.invert=function(u,a){var c=u/n,f=a/r,l=G(c*c+f*f),g=2*A(l/2);return[i(u*d(g),n*l)/o,l&&A(a*h(g)/(r*e*l))/t]},a}(s/G(v*f*c),1/(s*G(v*f*c)),f,c,v)}function Ze(){var n=65*k,e=60*k,t=20,o=200,i=r.geoProjectionMutator(Ye),u=i(n,e,t,o);return u.poleline=function(r){return arguments.length?i(n=+r*k,e,t,o):n*S},u.parallels=function(r){return arguments.length?i(n,e=+r*k,t,o):e*S},u.inflation=function(r){return arguments.length?i(n,e,t=+r,o):t},u.ratio=function(r){return arguments.length?i(n,e,t,o=+r):o},u.scale(163.775)}De.invert=function(n,r){var e=r/1.70711,t=h(R*e);return[n/(.74482-.34588*t*t),2*o(e)]},Oe.invert=function(n,r){if(t(r)<w)return[n,0];if(t(n)<w)return[0,P*h(2*o(r/m))];var e=(n/=m)*n,i=(r/=m)*r,a=e+i,c=a*a,f=-t(r)*(1+a),l=f-2*i+e,g=-2*f+1+2*i+c,v=i/g+(2*l*l*l/(g*g*g)-9*f*l/(g*g))/27,s=(f-l*l/(3*g))/g,d=2*G(-s/3),y=x(3*v/(s*d))/3;return[m*(a-1+G(1+2*(e-i)+c))/(2*n),p(r)*m*(-d*u(y+m/3)-l/(3*g))]},Ue.invert=function(n,r){if(!n)return[0,P*h(2*o(r/m))];var e=t(n/m),u=(1-e*e-(r/=m)*r)/(2*e),a=G(u*u+1);return[p(n)*m*(a-u),p(r)*P*h(2*i(G((1-2*u*e)*(u+a)-e),G(a+u+e)))]},Je.invert=function(n,r){if(!r)return[n,0];var e=r/m,t=(m*m*(1-e*e)-n*n)/(2*m*n);return[n?m*(p(n)*G(t*t+1)-t):0,P*h(2*o(e))]},Xe.invert=function(n,r){var e;if(!n||!r)return[n,r];r/=m;var o=p(n)*n/P,i=(o*o-1+4*r*r)/t(o),u=i*i,a=2*r,c=50;do{var f=a*a,l=(8*a-f*(f+2)-5)/(2*f*(a-1)),g=(3*a-f*a-10)/(2*f*a),v=l*l,s=a*l,h=a+l,d=h*h,y=a+3*l,R=-2*h*(4*s*v+(1-4*f+3*f*f)*(1+g)+v*(14*f-6-u+(8*f-8-2*u)*g)+s*(12*f-8+(10*f-10-u)*g)),b=G(d*(f+v*u-1)+(1-f)*(f*(y*y+4*v)+v*(12*s+4*v)));a-=e=(i*(d+v-1)+2*b-o*(4*d+u))/(i*(2*l*g+2*h*(1+g))+R/b-8*h*(i*(-1+v+d)+2*b)*(1+g)/(u+4*d))}while(e>w&&--c>0);return[p(n)*(G(i*i+4)+i)*m/4,P*a]};var $e=4*m+3*G(3),nt=2*G(2*m*G(3)/$e),rt=O(nt*G(3)/m,nt,$e/6);function et(n,r){return[n*G(1-3*r*r/(m*m)),r]}function tt(n,r){var e=u(r),t=u(n)*e,o=1-t,a=u(n=i(h(n)*e,-h(r))),c=h(n);return[c*(e=G(1-t*t))-a*o,-a*e-c*o]}function ot(n,r){var e=z(n,r);return[(e[0]+n/P)/2,(e[1]+r)/2]}et.invert=function(n,r){return[n/G(1-3*r*r/(m*m)),r]},tt.invert=function(n,r){var e=(n*n+r*r)/-2,t=G(-e*(2+e)),o=r*e+n*t,u=n*e-r*t,a=G(u*u+o*o);return[i(t*o,a*(1+e)),a?-A(t*u/a):0]},ot.invert=function(n,r){var e=n,o=r,i=25;do{var a,c=u(o),f=h(o),l=h(2*o),g=f*f,v=c*c,s=h(e),p=u(e/2),d=h(e/2),y=d*d,m=1-v*p*p,R=m?x(c*p)*G(a=1/m):a=0,b=.5*(2*R*c*d+e/P)-n,j=.5*(R*f+o)-r,M=.5*a*(v*y+R*c*p*g)+.5/P,E=a*(s*l/4-R*f*d),S=.125*a*(l*d-R*f*v*s),k=.5*a*(g*p+R*y*c)+.5,A=E*S-k*M,C=(j*E-b*k)/A,N=(b*S-j*M)/A;e-=C,o-=N}while((t(C)>w||t(N)>w)&&--i>0);return[e,o]},n.geoNaturalEarth=r.geoNaturalEarth1,n.geoNaturalEarthRaw=r.geoNaturalEarth1Raw,n.geoAiry=function(){var n=P,e=r.geoProjectionMutator(F),t=e(n);return t.radius=function(r){return arguments.length?e(n=r*k):n*S},t.scale(179.976).clipAngle(147)},n.geoAiryRaw=F,n.geoAitoff=function(){return r.geoProjection(z).scale(152.63)},n.geoAitoffRaw=z,n.geoArmadillo=function(){var n=20*k,e=n>=0?1:-1,t=d(e*n),o=r.geoProjectionMutator(L),a=o(n),c=a.stream;return a.parallel=function(r){return arguments.length?(t=d((e=(n=r*k)>=0?1:-1)*n),o(n)):n*S},a.stream=function(r){var o=a.rotate(),f=c(r),l=(a.rotate([0,0]),c(r)),g=a.precision();return a.rotate(o),f.sphere=function(){l.polygonStart(),l.lineStart();for(var r=-180*e;e*r<180;r+=90*e)l.point(r,90*e);if(n)for(;e*(r-=3*e*g)>=-180;)l.point(r,e*-i(u(r*k/2),t)*S);l.lineEnd(),l.polygonEnd()},f},a.scale(218.695).center([0,28.0974])},n.geoArmadilloRaw=L,n.geoAugust=function(){return r.geoProjection(H).scale(66.1603)},n.geoAugustRaw=H,n.geoBaker=function(){return r.geoProjection(W).scale(112.314)},n.geoBakerRaw=W,n.geoBerghaus=function(){var n=5,e=r.geoProjectionMutator(I),t=e(n),o=t.stream,a=-u(.01*k),c=h(.01*k);return t.lobes=function(r){return arguments.length?e(n=+r):n},t.stream=function(r){var e=t.rotate(),f=o(r),l=(t.rotate([0,0]),o(r));return t.rotate(e),f.sphere=function(){l.polygonStart(),l.lineStart();for(var r=0,e=360/n,t=2*m/n,o=90-180/n,f=P;r<n;++r,o-=e,f-=t)l.point(i(c*u(f),a)*S,A(c*h(f))*S),o<-90?(l.point(-90,-180-o-.01),l.point(-90,-180-o+.01)):(l.point(90,o+.01),l.point(90,o-.01));l.lineEnd(),l.polygonEnd()},f},t.scale(87.8076).center([0,17.1875]).clipAngle(179.999)},n.geoBerghausRaw=I,n.geoBertin1953=function(){return r.geoProjection(_()).rotate([-16.5,-42]).scale(176.57).center([7.93,.09])},n.geoBertin1953Raw=_,n.geoBoggs=function(){return r.geoProjection(Y).scale(160.857)},n.geoBoggsRaw=Y,n.geoBonne=function(){return Z(nn).scale(123.082).center([0,26.1441]).parallel(45)},n.geoBonneRaw=nn,n.geoBottomley=function(){var n=.5,e=r.geoProjectionMutator(rn),t=e(n);return t.fraction=function(r){return arguments.length?e(n=+r):n},t.scale(158.837)},n.geoBottomleyRaw=rn,n.geoBromley=function(){return r.geoProjection(en).scale(152.63)},n.geoBromleyRaw=en,n.geoChamberlin=fn,n.geoChamberlinRaw=an,n.geoChamberlinAfrica=function(){return fn([0,22],[45,22],[22.5,-22]).scale(380).center([22.5,2])},n.geoCollignon=function(){return r.geoProjection(ln).scale(95.6464).center([0,30])},n.geoCollignonRaw=ln,n.geoCraig=function(){return Z(gn).scale(249.828).clipAngle(90)},n.geoCraigRaw=gn,n.geoCraster=function(){return r.geoProjection(sn).scale(156.19)},n.geoCrasterRaw=sn,n.geoCylindricalEqualArea=function(){return Z(pn).parallel(38.58).scale(195.044)},n.geoCylindricalEqualAreaRaw=pn,n.geoCylindricalStereographic=function(){return Z(hn).scale(124.75)},n.geoCylindricalStereographicRaw=hn,n.geoEckert1=function(){return r.geoProjection(dn).scale(165.664)},n.geoEckert1Raw=dn,n.geoEckert2=function(){return r.geoProjection(wn).scale(165.664)},n.geoEckert2Raw=wn,n.geoEckert3=function(){return r.geoProjection(yn).scale(180.739)},n.geoEckert3Raw=yn,n.geoEckert4=function(){return r.geoProjection(mn).scale(180.739)},n.geoEckert4Raw=mn,n.geoEckert5=function(){return r.geoProjection(Pn).scale(173.044)},n.geoEckert5Raw=Pn,n.geoEckert6=function(){return r.geoProjection(Rn).scale(173.044)},n.geoEckert6Raw=Rn,n.geoEisenlohr=function(){return r.geoProjection(jn).scale(62.5271)},n.geoEisenlohrRaw=jn,n.geoFahey=function(){return r.geoProjection(En).scale(137.152)},n.geoFaheyRaw=En,n.geoFoucaut=function(){return r.geoProjection(Sn).scale(135.264)},n.geoFoucautRaw=Sn,n.geoFoucautSinusoidal=function(){var n=.5,e=r.geoProjectionMutator(kn),t=e(n);return t.alpha=function(r){return arguments.length?e(n=+r):n},t.scale(168.725)},n.geoFoucautSinusoidalRaw=kn,n.geoGilbert=function(n){null==n&&(n=r.geoOrthographic);var e=n(),t=r.geoEquirectangular().scale(S).precision(0).clipAngle(null).translate([0,0]);function o(n){return e(An(n))}function i(n){o[n]=function(){return arguments.length?(e[n].apply(e,arguments),o):e[n]()}}return e.invert&&(o.invert=function(n){return xn(e.invert(n))}),o.stream=function(n){var r=e.stream(n),o=t.stream({point:function(n,e){r.point(n/2,A(d(-e/2*k))*S)},lineStart:function(){r.lineStart()},lineEnd:function(){r.lineEnd()},polygonStart:function(){r.polygonStart()},polygonEnd:function(){r.polygonEnd()}});return o.sphere=r.sphere,o},o.rotate=function(n){return arguments.length?(t.rotate(n),o):t.rotate()},o.center=function(n){return arguments.length?(e.center(An(n)),o):xn(e.center())},i("angle"),i("clipAngle"),i("clipExtent"),i("fitExtent"),i("fitHeight"),i("fitSize"),i("fitWidth"),i("scale"),i("translate"),i("precision"),o.scale(249.5)},n.geoGingery=function(){var n=6,e=30*k,t=u(e),o=h(e),a=r.geoProjectionMutator(Gn),c=a(e,n),f=c.stream,l=-u(.01*k),g=h(.01*k);return c.radius=function(r){return arguments.length?(t=u(e=r*k),o=h(e),a(e,n)):e*S},c.lobes=function(r){return arguments.length?a(e,n=+r):n},c.stream=function(r){var e=c.rotate(),a=f(r),v=(c.rotate([0,0]),f(r));return c.rotate(e),a.sphere=function(){v.polygonStart(),v.lineStart();for(var r=0,e=2*m/n,a=0;r<n;++r,a-=e)v.point(i(g*u(a),l)*S,A(g*h(a))*S),v.point(i(o*u(a-e/2),t)*S,A(o*h(a-e/2))*S);v.lineEnd(),v.polygonEnd()},a},c.rotate([90,-40]).scale(91.7095).clipAngle(179.999)},n.geoGingeryRaw=Gn,n.geoGinzburg4=function(){return r.geoProjection(zn).scale(149.995)},n.geoGinzburg4Raw=zn,n.geoGinzburg5=function(){return r.geoProjection(Ln).scale(153.93)},n.geoGinzburg5Raw=Ln,n.geoGinzburg6=function(){return r.geoProjection(Hn).scale(130.945)},n.geoGinzburg6Raw=Hn,n.geoGinzburg8=function(){return r.geoProjection(qn).scale(131.747)},n.geoGinzburg8Raw=qn,n.geoGinzburg9=function(){return r.geoProjection(Bn).scale(131.087)},n.geoGinzburg9Raw=Bn,n.geoGringorten=function(){return r.geoProjection(Wn(In)).scale(239.75)},n.geoGringortenRaw=In,n.geoGuyou=function(){return r.geoProjection(Wn(Tn)).scale(151.496)},n.geoGuyouRaw=Tn,n.geoHammer=function(){var n=2,e=r.geoProjectionMutator(D),t=e(n);return t.coefficient=function(r){return arguments.length?e(n=+r):n},t.scale(169.529)},n.geoHammerRaw=D,n.geoHammerRetroazimuthal=function(){var n=0,e=r.geoProjectionMutator(Vn),t=e(n),o=t.rotate,i=t.stream,u=r.geoCircle();return t.parallel=function(r){if(!arguments.length)return n*S;var o=t.rotate();return e(n=r*k).rotate(o)},t.rotate=function(r){return arguments.length?(o.call(t,[r[0],r[1]-n*S]),u.center([-r[0],-r[1]]),t):((r=o.call(t))[1]+=n*S,r)},t.stream=function(n){return(n=i(n)).sphere=function(){n.polygonStart();var r,e=u.radius(89.99)().coordinates[0],t=e.length-1,o=-1;for(n.lineStart();++o<t;)n.point((r=e[o])[0],r[1]);for(n.lineEnd(),t=(e=u.radius(90.01)().coordinates[0]).length-1,n.lineStart();--o>=0;)n.point((r=e[o])[0],r[1]);n.lineEnd(),n.polygonEnd()},n},t.scale(79.4187).parallel(45).clipAngle(179.999)},n.geoHammerRetroazimuthalRaw=Vn,n.geoHealpix=function(){var n=4,t=r.geoProjectionMutator(Un),o=t(n),i=o.stream;return o.lobes=function(r){return arguments.length?t(n=+r):n},o.stream=function(t){var u=o.rotate(),a=i(t),c=(o.rotate([0,0]),i(t));return o.rotate(u),a.sphere=function(){var t,o;r.geoStream((t=180/n,o=[].concat(e.range(-180,180+t/2,t).map(Jn),e.range(180,-180-t/2,-t).map(Xn)),{type:"Polygon",coordinates:[180===t?o.map(Yn):o]}),c)},a},o.scale(239.75)},n.geoHealpixRaw=Un,n.geoHill=function(){var n=1,e=r.geoProjectionMutator(Zn),t=e(n);return t.ratio=function(r){return arguments.length?e(n=+r):n},t.scale(167.774).center([0,18.67])},n.geoHillRaw=Zn,n.geoHomolosine=function(){return r.geoProjection(er).scale(152.63)},n.geoHomolosineRaw=er,n.geoHufnagel=function(){var n=1,e=0,t=45*k,o=2,i=r.geoProjectionMutator(tr),u=i(n,e,t,o);return u.a=function(r){return arguments.length?i(n=+r,e,t,o):n},u.b=function(r){return arguments.length?i(n,e=+r,t,o):e},u.psiMax=function(r){return arguments.length?i(n,e,t=+r*k,o):t*S},u.ratio=function(r){return arguments.length?i(n,e,t,o=+r):o},u.scale(180.739)},n.geoHufnagelRaw=tr,n.geoHyperelliptical=function(){var n=0,e=2.5,t=1.183136,o=r.geoProjectionMutator(ir),i=o(n,e,t);return i.alpha=function(r){return arguments.length?o(n=+r,e,t):n},i.k=function(r){return arguments.length?o(n,e=+r,t):e},i.gamma=function(r){return arguments.length?o(n,e,t=+r):t},i.scale(152.63)},n.geoHyperellipticalRaw=ir,n.geoInterrupt=cr,n.geoInterruptedBoggs=function(){return cr(Y,fr).scale(160.857)},n.geoInterruptedHomolosine=function(){return cr(er,lr).scale(152.63)},n.geoInterruptedMollweide=function(){return cr(U,gr).scale(169.529)},n.geoInterruptedMollweideHemispheres=function(){return cr(U,vr).scale(169.529).rotate([20,0])},n.geoInterruptedSinuMollweide=function(){return cr(rr,sr,V).rotate([-20,-55]).scale(164.263).center([0,-5.4036])},n.geoInterruptedSinusoidal=function(){return cr($,pr).scale(152.63).rotate([-20,0])},n.geoKavrayskiy7=function(){return r.geoProjection(hr).scale(158.837)},n.geoKavrayskiy7Raw=hr,n.geoLagrange=function(){var n=.5,e=r.geoProjectionMutator(dr),t=e(n);return t.spacing=function(r){return arguments.length?e(n=+r):n},t.scale(124.75)},n.geoLagrangeRaw=dr,n.geoLarrivee=function(){return r.geoProjection(yr).scale(97.2672)},n.geoLarriveeRaw=yr,n.geoLaskowski=function(){return r.geoProjection(mr).scale(139.98)},n.geoLaskowskiRaw=mr,n.geoLittrow=function(){return r.geoProjection(Pr).scale(144.049).clipAngle(89.999)},n.geoLittrowRaw=Pr,n.geoLoximuthal=function(){return Z(Rr).parallel(40).scale(158.837)},n.geoLoximuthalRaw=Rr,n.geoMiller=function(){return r.geoProjection(br).scale(108.318)},n.geoMillerRaw=br,n.geoModifiedStereographic=xr,n.geoModifiedStereographicRaw=jr,n.geoModifiedStereographicAlaska=function(){return xr(Mr,[152,-64]).scale(1400).center([-160.908,62.4864]).clipAngle(30).angle(7.8)},n.geoModifiedStereographicGs48=function(){return xr(Er,[95,-38]).scale(1e3).clipAngle(55).center([-96.5563,38.8675])},n.geoModifiedStereographicGs50=function(){return xr(Sr,[120,-45]).scale(359.513).clipAngle(55).center([-117.474,53.0628])},n.geoModifiedStereographicMiller=function(){return xr(kr,[-20,-18]).scale(209.091).center([20,16.7214]).clipAngle(82)},n.geoModifiedStereographicLee=function(){return xr(Ar,[165,10]).scale(250).clipAngle(130).center([-165,-10])},n.geoMollweide=function(){return r.geoProjection(U).scale(169.529)},n.geoMollweideRaw=U,n.geoMtFlatPolarParabolic=function(){return r.geoProjection(Nr).scale(164.859)},n.geoMtFlatPolarParabolicRaw=Nr,n.geoMtFlatPolarQuartic=function(){return r.geoProjection(Fr).scale(188.209)},n.geoMtFlatPolarQuarticRaw=Fr,n.geoMtFlatPolarSinusoidal=function(){return r.geoProjection(zr).scale(166.518)},n.geoMtFlatPolarSinusoidalRaw=zr,n.geoNaturalEarth2=function(){return r.geoProjection(Lr).scale(175.295)},n.geoNaturalEarth2Raw=Lr,n.geoNellHammer=function(){return r.geoProjection(Hr).scale(152.63)},n.geoNellHammerRaw=Hr,n.geoInterruptedQuarticAuthalic=function(){return cr(D(1/0),qr).rotate([20,0]).scale(152.63)},n.geoNicolosi=function(){return r.geoProjection(Br).scale(127.267)},n.geoNicolosiRaw=Br,n.geoPatterson=function(){return r.geoProjection(Or).scale(139.319)},n.geoPattersonRaw=Or,n.geoPolyconic=function(){return r.geoProjection(Ur).scale(103.74)},n.geoPolyconicRaw=Ur,n.geoPolyhedral=$r,n.geoPolyhedralButterfly=function(n){n=n||function(n){var e=r.geoCentroid({type:"MultiPoint",coordinates:n});return r.geoGnomonic().scale(1).translate([0,0]).rotate([-e[0],-e[1]])};var e=te.map(function(r){return{face:r,project:n(r)}});return[-1,0,0,1,0,1,4,5].forEach(function(n,r){var t=e[n];t&&(t.children||(t.children=[])).push(e[r])}),$r(e[0],function(n,r){return e[n<-m/2?r<0?6:4:n<0?r<0?2:0:n<m/2?r<0?3:1:r<0?7:5]}).angle(-30).scale(101.858).center([0,45])},n.geoPolyhedralCollignon=function(n){n=n||function(n){var e=r.geoCentroid({type:"MultiPoint",coordinates:n});return r.geoProjection(ie).translate([0,0]).scale(1).rotate(e[1]>0?[-e[0],0]:[180-e[0],180])};var e=te.map(function(r){return{face:r,project:n(r)}});return[-1,0,0,1,0,1,4,5].forEach(function(n,r){var t=e[n];t&&(t.children||(t.children=[])).push(e[r])}),$r(e[0],function(n,r){return e[n<-m/2?r<0?6:4:n<0?r<0?2:0:n<m/2?r<0?3:1:r<0?7:5]}).angle(-30).scale(121.906).center([0,48.5904])},n.geoPolyhedralWaterman=function(n){n=n||function(n){var e=6===n.length?r.geoCentroid({type:"MultiPoint",coordinates:n}):n[0];return r.geoGnomonic().scale(1).translate([0,0]).rotate([-e[0],-e[1]])};var e=te.map(function(n){for(var r,e=n.map(ce),t=e.length,o=e[t-1],i=[],u=0;u<t;++u)r=e[u],i.push(ae([.9486832980505138*o[0]+.31622776601683794*r[0],.9486832980505138*o[1]+.31622776601683794*r[1],.9486832980505138*o[2]+.31622776601683794*r[2]]),ae([.9486832980505138*r[0]+.31622776601683794*o[0],.9486832980505138*r[1]+.31622776601683794*o[1],.9486832980505138*r[2]+.31622776601683794*o[2]])),o=r;return i}),t=[],o=[-1,0,0,1,0,1,4,5];e.forEach(function(n,r){for(var i,u,a=te[r],c=a.length,f=t[r]=[],l=0;l<c;++l)e.push([a[l],n[(2*l+2)%(2*c)],n[(2*l+1)%(2*c)]]),o.push(r),f.push((i=ce(n[(2*l+2)%(2*c)]),u=ce(n[(2*l+1)%(2*c)]),[i[1]*u[2]-i[2]*u[1],i[2]*u[0]-i[0]*u[2],i[0]*u[1]-i[1]*u[0]]))});var i=e.map(function(r){return{project:n(r),face:r}});return o.forEach(function(n,r){var e=i[n];e&&(e.children||(e.children=[])).push(i[r])}),$r(i[0],function(n,r){var e=u(r),o=[e*u(n),e*h(n),h(r)],a=n<-m/2?r<0?6:4:n<0?r<0?2:0:n<m/2?r<0?3:1:r<0?7:5,c=t[a];return i[ue(c[0],o)<0?8+3*a:ue(c[1],o)<0?8+3*a+1:ue(c[2],o)<0?8+3*a+2:a]}).angle(-30).scale(110.625).center([0,45])},n.geoProject=function(n,r){var e,t=r.stream;if(!t)throw new Error("invalid projection");switch(n&&n.type){case"Feature":e=ge;break;case"FeatureCollection":e=le;break;default:e=ve}return e(n,t)},n.geoGringortenQuincuncial=function(){return ye(In).scale(176.423)},n.geoPeirceQuincuncial=me,n.geoPierceQuincuncial=me,n.geoQuantize=function(n,r){if(!(0<=(r=+r)&&r<=20))throw new Error("invalid digits");function e(n){var e=n.length,t=2,o=new Array(e);for(o[0]=+n[0].toFixed(r),o[1]=+n[1].toFixed(r);t<e;)o[t]=n[t],++t;return o}function t(n){return n.map(e)}function o(n){for(var r=e(n[0]),t=[r],o=1;o<n.length;o++){var i=e(n[o]);(i.length>2||i[0]!=r[0]||i[1]!=r[1])&&(t.push(i),r=i)}return 1===t.length&&n.length>1&&t.push(e(n[n.length-1])),t}function i(n){return n.map(o)}function u(n){if(null==n)return n;var r;switch(n.type){case"GeometryCollection":r={type:"GeometryCollection",geometries:n.geometries.map(u)};break;case"Point":r={type:"Point",coordinates:e(n.coordinates)};break;case"MultiPoint":r={type:n.type,coordinates:t(n.coordinates)};break;case"LineString":r={type:n.type,coordinates:o(n.coordinates)};break;case"MultiLineString":case"Polygon":r={type:n.type,coordinates:i(n.coordinates)};break;case"MultiPolygon":r={type:"MultiPolygon",coordinates:n.coordinates.map(i)};break;default:return n}return null!=n.bbox&&(r.bbox=n.bbox),r}function a(n){var r={type:"Feature",properties:n.properties,geometry:u(n.geometry)};return null!=n.id&&(r.id=n.id),null!=n.bbox&&(r.bbox=n.bbox),r}if(null!=n)switch(n.type){case"Feature":return a(n);case"FeatureCollection":var c={type:"FeatureCollection",features:n.features.map(a)};return null!=n.bbox&&(c.bbox=n.bbox),c;default:return u(n)}return n},n.geoQuincuncial=ye,n.geoRectangularPolyconic=function(){return Z(Pe).scale(131.215)},n.geoRectangularPolyconicRaw=Pe,n.geoRobinson=function(){return r.geoProjection(be).scale(152.63)},n.geoRobinsonRaw=be,n.geoSatellite=function(){var n=2,e=0,t=r.geoProjectionMutator(je),o=t(n,e);return o.distance=function(r){return arguments.length?t(n=+r,e):n},o.tilt=function(r){return arguments.length?t(n,e=r*k):e*S},o.scale(432.147).clipAngle(x(1/n)*S-1e-6)},n.geoSatelliteRaw=je,n.geoSinuMollweide=function(){return r.geoProjection(rr).rotate([-20,-55]).scale(164.263).center([0,-5.4036])},n.geoSinuMollweideRaw=rr,n.geoSinusoidal=function(){return r.geoProjection($).scale(152.63)},n.geoSinusoidalRaw=$,n.geoStitch=function(n){if(null==n)return n;switch(n.type){case"Feature":return We(n);case"FeatureCollection":var r={type:"FeatureCollection",features:n.features.map(We)};return null!=n.bbox&&(r.bbox=n.bbox),r;default:return Ie(n)}},n.geoTimes=function(){return r.geoProjection(De).scale(146.153)},n.geoTimesRaw=De,n.geoTwoPointAzimuthal=Ve,n.geoTwoPointAzimuthalRaw=Te,n.geoTwoPointAzimuthalUsa=function(){return Ve([-158,21.5],[-77,39]).clipAngle(60).scale(400)},n.geoTwoPointEquidistant=Ke,n.geoTwoPointEquidistantRaw=_e,n.geoTwoPointEquidistantUsa=function(){return Ke([-158,21.5],[-77,39]).clipAngle(130).scale(122.571)},n.geoVanDerGrinten=function(){return r.geoProjection(Oe).scale(79.4183)},n.geoVanDerGrintenRaw=Oe,n.geoVanDerGrinten2=function(){return r.geoProjection(Ue).scale(79.4183)},n.geoVanDerGrinten2Raw=Ue,n.geoVanDerGrinten3=function(){return r.geoProjection(Je).scale(79.4183)},n.geoVanDerGrinten3Raw=Je,n.geoVanDerGrinten4=function(){return r.geoProjection(Xe).scale(127.16)},n.geoVanDerGrinten4Raw=Xe,n.geoWagner=Ze,n.geoWagner7=function(){return Ze().poleline(65).parallels(60).inflation(0).ratio(200).scale(172.633)},n.geoWagnerRaw=Ye,n.geoWagner4=function(){return r.geoProjection(rt).scale(176.84)},n.geoWagner4Raw=rt,n.geoWagner6=function(){return r.geoProjection(et).scale(152.63)},n.geoWagner6Raw=et,n.geoWiechel=function(){return r.geoProjection(tt).rotate([0,-90,45]).scale(124.75).clipAngle(179.999)},n.geoWiechelRaw=tt,n.geoWinkel3=function(){return r.geoProjection(ot).scale(158.837)},n.geoWinkel3Raw=ot,Object.defineProperty(n,"__esModule",{value:!0})});

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(a,b){return a<b?-1:a>b?1:a>=b?0:NaN}function c(a){return 1===a.length&&(a=d(a)),{left:function(b,c,d,e){for(null==d&&(d=0),null==e&&(e=b.length);d<e;){var f=d+e>>>1;a(b[f],c)<0?d=f+1:e=f}return d},right:function(b,c,d,e){for(null==d&&(d=0),null==e&&(e=b.length);d<e;){var f=d+e>>>1;a(b[f],c)>0?e=f:d=f+1}return d}}}function d(a){return function(c,d){return b(a(c),d)}}function e(a,b){return b<a?-1:b>a?1:b>=a?0:NaN}function f(a){return null===a?NaN:+a}function g(a,b){var c,d,e=a.length,g=0,h=0,i=-1,j=0;if(null==b)for(;++i<e;)isNaN(c=f(a[i]))||(d=c-g,g+=d/++j,h+=d*(c-g));else for(;++i<e;)isNaN(c=f(b(a[i],i,a)))||(d=c-g,g+=d/++j,h+=d*(c-g));if(j>1)return h/(j-1)}function h(a,b){var c=g(a,b);return c?Math.sqrt(c):c}function i(a,b){var c,d,e,f=-1,g=a.length;if(null==b){for(;++f<g;)if(null!=(d=a[f])&&d>=d){c=e=d;break}for(;++f<g;)null!=(d=a[f])&&(c>d&&(c=d),e<d&&(e=d))}else{for(;++f<g;)if(null!=(d=b(a[f],f,a))&&d>=d){c=e=d;break}for(;++f<g;)null!=(d=b(a[f],f,a))&&(c>d&&(c=d),e<d&&(e=d))}return[c,e]}function j(a){return function(){return a}}function k(a){return a}function l(a,b,c){a=+a,b=+b,c=(e=arguments.length)<2?(b=a,a=0,1):e<3?1:+c;for(var d=-1,e=0|Math.max(0,Math.ceil((b-a)/c)),f=new Array(e);++d<e;)f[d]=a+d*c;return f}function m(a,b,c){var d=n(a,b,c);return l(Math.ceil(a/d)*d,Math.floor(b/d)*d+d/2,d)}function n(a,b,c){var d=Math.abs(b-a)/Math.max(0,c),e=Math.pow(10,Math.floor(Math.log(d)/Math.LN10)),f=d/e;return f>=M?e*=10:f>=N?e*=5:f>=O&&(e*=2),b<a?-e:e}function o(a){return Math.ceil(Math.log(a.length)/Math.LN2)+1}function p(){function a(a){var e,f,g=a.length,h=new Array(g);for(e=0;e<g;++e)h[e]=b(a[e],e,a);var i=c(h),j=i[0],k=i[1],l=d(h,j,k);Array.isArray(l)||(l=m(j,k,l));for(var n=l.length;l[0]<=j;)l.shift(),--n;for(;l[n-1]>=k;)l.pop(),--n;var o,p=new Array(n+1);for(e=0;e<=n;++e)o=p[e]=[],o.x0=e>0?l[e-1]:j,o.x1=e<n?l[e]:k;for(e=0;e<g;++e)f=h[e],j<=f&&f<=k&&p[H(l,f,0,n)].push(a[e]);return p}var b=k,c=i,d=o;return a.value=function(c){return arguments.length?(b="function"==typeof c?c:j(c),a):b},a.domain=function(b){return arguments.length?(c="function"==typeof b?b:j([b[0],b[1]]),a):c},a.thresholds=function(b){return arguments.length?(d="function"==typeof b?b:j(Array.isArray(b)?K.call(b):b),a):d},a}function q(a,b,c){if(null==c&&(c=f),d=a.length){if((b=+b)<=0||d<2)return+c(a[0],0,a);if(b>=1)return+c(a[d-1],d-1,a);var d,e=(d-1)*b,g=Math.floor(e),h=+c(a[g],g,a),i=+c(a[g+1],g+1,a);return h+(i-h)*(e-g)}}function r(a,c,d){return a=L.call(a,f).sort(b),Math.ceil((d-c)/(2*(q(a,.75)-q(a,.25))*Math.pow(a.length,-1/3)))}function s(a,b,c){return Math.ceil((c-b)/(3.5*h(a)*Math.pow(a.length,-1/3)))}function t(a,b){var c,d,e=-1,f=a.length;if(null==b){for(;++e<f;)if(null!=(d=a[e])&&d>=d){c=d;break}for(;++e<f;)null!=(d=a[e])&&d>c&&(c=d)}else{for(;++e<f;)if(null!=(d=b(a[e],e,a))&&d>=d){c=d;break}for(;++e<f;)null!=(d=b(a[e],e,a))&&d>c&&(c=d)}return c}function u(a,b){var c,d=0,e=a.length,g=-1,h=e;if(null==b)for(;++g<e;)isNaN(c=f(a[g]))?--h:d+=c;else for(;++g<e;)isNaN(c=f(b(a[g],g,a)))?--h:d+=c;if(h)return d/h}function v(a,c){var d,e=[],g=a.length,h=-1;if(null==c)for(;++h<g;)isNaN(d=f(a[h]))||e.push(d);else for(;++h<g;)isNaN(d=f(c(a[h],h,a)))||e.push(d);return q(e.sort(b),.5)}function w(a){for(var b,c,d,e=a.length,f=-1,g=0;++f<e;)g+=a[f].length;for(c=new Array(g);--e>=0;)for(d=a[e],b=d.length;--b>=0;)c[--g]=d[b];return c}function x(a,b){var c,d,e=-1,f=a.length;if(null==b){for(;++e<f;)if(null!=(d=a[e])&&d>=d){c=d;break}for(;++e<f;)null!=(d=a[e])&&c>d&&(c=d)}else{for(;++e<f;)if(null!=(d=b(a[e],e,a))&&d>=d){c=d;break}for(;++e<f;)null!=(d=b(a[e],e,a))&&c>d&&(c=d)}return c}function y(a){for(var b=0,c=a.length-1,d=a[0],e=new Array(c<0?0:c);b<c;)e[b]=[d,d=a[++b]];return e}function z(a,b){for(var c=b.length,d=new Array(c);c--;)d[c]=a[b[c]];return d}function A(a,c){if(d=a.length){var d,e,f=0,g=0,h=a[g];for(c||(c=b);++f<d;)(c(e=a[f],h)<0||0!==c(h,h))&&(h=e,g=f);return 0===c(h,h)?g:void 0}}function B(a,b,c){for(var d,e,f=(null==c?a.length:c)-(b=null==b?0:+b);f;)e=Math.random()*f--|0,d=a[f+b],a[f+b]=a[e+b],a[e+b]=d;return a}function C(a,b){var c,d=0,e=a.length,f=-1;if(null==b)for(;++f<e;)(c=+a[f])&&(d+=c);else for(;++f<e;)(c=+b(a[f],f,a))&&(d+=c);return d}function D(a){if(!(e=a.length))return[];for(var b=-1,c=x(a,E),d=new Array(c);++b<c;)for(var e,f=-1,g=d[b]=new Array(e);++f<e;)g[f]=a[f][b];return d}function E(a){return a.length}function F(){return D(arguments)}var G=c(b),H=G.right,I=G.left,J=Array.prototype,K=J.slice,L=J.map,M=Math.sqrt(50),N=Math.sqrt(10),O=Math.sqrt(2);a.bisect=H,a.bisectRight=H,a.bisectLeft=I,a.ascending=b,a.bisector=c,a.descending=e,a.deviation=h,a.extent=i,a.histogram=p,a.thresholdFreedmanDiaconis=r,a.thresholdScott=s,a.thresholdSturges=o,a.max=t,a.mean=u,a.median=v,a.merge=w,a.min=x,a.pairs=y,a.permute=z,a.quantile=q,a.range=l,a.scan=A,a.shuffle=B,a.sum=C,a.ticks=m,a.tickStep=n,a.transpose=D,a.variance=g,a.zip=F,Object.defineProperty(a,"__esModule",{value:!0})})},{}],2:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(){}function c(a,c){var d=new b;if(a instanceof b)a.each(function(a,b){d.set(b,a)});else if(Array.isArray(a)){var e,f=-1,g=a.length;if(null==c)for(;++f<g;)d.set(f,a[f]);else for(;++f<g;)d.set(c(e=a[f],f,a),e)}else if(a)for(var h in a)d.set(h,a[h]);return d}function d(){return{}}function e(a,b,c){a[b]=c}function f(){return c()}function g(a,b,c){a.set(b,c)}function h(){}function i(a,b){var c=new h;if(a instanceof h)a.each(function(a){c.add(a)});else if(a){var d=-1,e=a.length;if(null==b)for(;++d<e;)c.add(a[d]);else for(;++d<e;)c.add(b(a[d],d,a))}return c}var j="$";b.prototype=c.prototype={constructor:b,has:function(a){return j+a in this},get:function(a){return this[j+a]},set:function(a,b){return this[j+a]=b,this},remove:function(a){var b=j+a;return b in this&&delete this[b]},clear:function(){for(var a in this)a[0]===j&&delete this[a]},keys:function(){var a=[];for(var b in this)b[0]===j&&a.push(b.slice(1));return a},values:function(){var a=[];for(var b in this)b[0]===j&&a.push(this[b]);return a},entries:function(){var a=[];for(var b in this)b[0]===j&&a.push({key:b.slice(1),value:this[b]});return a},size:function(){var a=0;for(var b in this)b[0]===j&&++a;return a},empty:function(){for(var a in this)if(a[0]===j)return!1;return!0},each:function(a){for(var b in this)b[0]===j&&a(this[b],b.slice(1),this)}};var k=function(){function a(b,d,e,f){if(d>=k.length)return null!=i?i(b):null!=h?b.sort(h):b;for(var g,j,l,m=-1,n=b.length,o=k[d++],p=c(),q=e();++m<n;)(l=p.get(g=o(j=b[m])+""))?l.push(j):p.set(g,[j]);return p.each(function(b,c){f(q,c,a(b,d,e,f))}),q}function b(a,c){if(++c>k.length)return a;var d,e=l[c-1];return null!=i&&c>=k.length?d=a.entries():(d=[],a.each(function(a,e){d.push({key:e,values:b(a,c)})})),null!=e?d.sort(function(a,b){return e(a.key,b.key)}):d}var h,i,j,k=[],l=[];return j={object:function(b){return a(b,0,d,e)},map:function(b){return a(b,0,f,g)},entries:function(c){return b(a(c,0,f,g),0)},key:function(a){return k.push(a),j},sortKeys:function(a){return l[k.length-1]=a,j},sortValues:function(a){return h=a,j},rollup:function(a){return i=a,j}}},l=c.prototype;h.prototype=i.prototype={constructor:h,has:l.has,add:function(a){return a+="",this[j+a]=a,this},remove:l.remove,clear:l.clear,values:l.keys,size:l.size,empty:l.empty,each:l.each};var m=function(a){var b=[];for(var c in a)b.push(c);return b},n=function(a){var b=[];for(var c in a)b.push(a[c]);return b},o=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b};a.nest=k,a.set=i,a.map=c,a.keys=m,a.values=n,a.entries=o,Object.defineProperty(a,"__esModule",{value:!0})})},{}],3:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(a,b){var c=Object.create(a.prototype);for(var d in b)c[d]=b[d];return c}function c(){}function d(a){var b;return a=(a+"").trim().toLowerCase(),(b=H.exec(a))?(b=parseInt(b[1],16),new i(b>>8&15|b>>4&240,b>>4&15|240&b,(15&b)<<4|15&b,1)):(b=I.exec(a))?e(parseInt(b[1],16)):(b=J.exec(a))?new i(b[1],b[2],b[3],1):(b=K.exec(a))?new i(255*b[1]/100,255*b[2]/100,255*b[3]/100,1):(b=L.exec(a))?f(b[1],b[2],b[3],b[4]):(b=M.exec(a))?f(255*b[1]/100,255*b[2]/100,255*b[3]/100,b[4]):(b=N.exec(a))?j(b[1],b[2]/100,b[3]/100,1):(b=O.exec(a))?j(b[1],b[2]/100,b[3]/100,b[4]):P.hasOwnProperty(a)?e(P[a]):"transparent"===a?new i(NaN,NaN,NaN,0):null}function e(a){return new i(a>>16&255,a>>8&255,255&a,1)}function f(a,b,c,d){return d<=0&&(a=b=c=NaN),new i(a,b,c,d)}function g(a){return a instanceof c||(a=d(a)),a?(a=a.rgb(),new i(a.r,a.g,a.b,a.opacity)):new i}function h(a,b,c,d){return 1===arguments.length?g(a):new i(a,b,c,null==d?1:d)}function i(a,b,c,d){this.r=+a,this.g=+b,this.b=+c,this.opacity=+d}function j(a,b,c,d){return d<=0?a=b=c=NaN:c<=0||c>=1?a=b=NaN:b<=0&&(a=NaN),new m(a,b,c,d)}function k(a){if(a instanceof m)return new m(a.h,a.s,a.l,a.opacity);if(a instanceof c||(a=d(a)),!a)return new m;if(a instanceof m)return a;a=a.rgb();var b=a.r/255,e=a.g/255,f=a.b/255,g=Math.min(b,e,f),h=Math.max(b,e,f),i=NaN,j=h-g,k=(h+g)/2;return j?(i=b===h?(e-f)/j+6*(e<f):e===h?(f-b)/j+2:(b-e)/j+4,j/=k<.5?h+g:2-h-g,i*=60):j=k>0&&k<1?0:i,new m(i,j,k,a.opacity)}function l(a,b,c,d){return 1===arguments.length?k(a):new m(a,b,c,null==d?1:d)}function m(a,b,c,d){this.h=+a,this.s=+b,this.l=+c,this.opacity=+d}function n(a,b,c){return 255*(a<60?b+(c-b)*a/60:a<180?c:a<240?b+(c-b)*(240-a)/60:b)}function o(a){if(a instanceof q)return new q(a.l,a.a,a.b,a.opacity);if(a instanceof x){var b=a.h*Q;return new q(a.l,Math.cos(b)*a.c,Math.sin(b)*a.c,a.opacity)}a instanceof i||(a=g(a));var c=u(a.r),d=u(a.g),e=u(a.b),f=r((.4124564*c+.3575761*d+.1804375*e)/T),h=r((.2126729*c+.7151522*d+.072175*e)/U),j=r((.0193339*c+.119192*d+.9503041*e)/V);return new q(116*h-16,500*(f-h),200*(h-j),a.opacity)}function p(a,b,c,d){return 1===arguments.length?o(a):new q(a,b,c,null==d?1:d)}function q(a,b,c,d){this.l=+a,this.a=+b,this.b=+c,this.opacity=+d}function r(a){return a>Z?Math.pow(a,1/3):a/Y+W}function s(a){return a>X?a*a*a:Y*(a-W)}function t(a){return 255*(a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055)}function u(a){return(a/=255)<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function v(a){if(a instanceof x)return new x(a.h,a.c,a.l,a.opacity);a instanceof q||(a=o(a));var b=Math.atan2(a.b,a.a)*R;return new x(b<0?b+360:b,Math.sqrt(a.a*a.a+a.b*a.b),a.l,a.opacity)}function w(a,b,c,d){return 1===arguments.length?v(a):new x(a,b,c,null==d?1:d)}function x(a,b,c,d){this.h=+a,this.c=+b,this.l=+c,this.opacity=+d}function y(a){if(a instanceof A)return new A(a.h,a.s,a.l,a.opacity);a instanceof i||(a=g(a));var b=a.r/255,c=a.g/255,d=a.b/255,e=(fa*d+da*b-ea*c)/(fa+da-ea),f=d-e,h=(ca*(c-e)-aa*f)/ba,j=Math.sqrt(h*h+f*f)/(ca*e*(1-e)),k=j?Math.atan2(h,f)*R-120:NaN;return new A(k<0?k+360:k,j,e,a.opacity)}function z(a,b,c,d){return 1===arguments.length?y(a):new A(a,b,c,null==d?1:d)}function A(a,b,c,d){this.h=+a,this.s=+b,this.l=+c,this.opacity=+d}var B=function(a,b,c){a.prototype=b.prototype=c,c.constructor=a},C=.7,D=1/C,E="\\s*([+-]?\\d+)\\s*",F="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",G="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",H=/^#([0-9a-f]{3})$/,I=/^#([0-9a-f]{6})$/,J=new RegExp("^rgb\\("+[E,E,E]+"\\)$"),K=new RegExp("^rgb\\("+[G,G,G]+"\\)$"),L=new RegExp("^rgba\\("+[E,E,E,F]+"\\)$"),M=new RegExp("^rgba\\("+[G,G,G,F]+"\\)$"),N=new RegExp("^hsl\\("+[F,G,G]+"\\)$"),O=new RegExp("^hsla\\("+[F,G,G,F]+"\\)$"),P={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};B(c,d,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),B(i,h,b(c,{brighter:function(a){return a=null==a?D:Math.pow(D,a),new i(this.r*a,this.g*a,this.b*a,this.opacity)},darker:function(a){return a=null==a?C:Math.pow(C,a),new i(this.r*a,this.g*a,this.b*a,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var a=this.opacity;return a=isNaN(a)?1:Math.max(0,Math.min(1,a)),(1===a?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===a?")":", "+a+")")}})),B(m,l,b(c,{brighter:function(a){return a=null==a?D:Math.pow(D,a),new m(this.h,this.s,this.l*a,this.opacity)},darker:function(a){return a=null==a?C:Math.pow(C,a),new m(this.h,this.s,this.l*a,this.opacity)},rgb:function(){var a=this.h%360+360*(this.h<0),b=isNaN(a)||isNaN(this.s)?0:this.s,c=this.l,d=c+(c<.5?c:1-c)*b,e=2*c-d;return new i(n(a>=240?a-240:a+120,e,d),n(a,e,d),n(a<120?a+240:a-120,e,d),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Q=Math.PI/180,R=180/Math.PI,S=18,T=.95047,U=1,V=1.08883,W=4/29,X=6/29,Y=3*X*X,Z=X*X*X;B(q,p,b(c,{brighter:function(a){return new q(this.l+S*(null==a?1:a),this.a,this.b,this.opacity)},darker:function(a){return new q(this.l-S*(null==a?1:a),this.a,this.b,this.opacity)},rgb:function(){var a=(this.l+16)/116,b=isNaN(this.a)?a:a+this.a/500,c=isNaN(this.b)?a:a-this.b/200;return a=U*s(a),b=T*s(b),c=V*s(c),new i(t(3.2404542*b-1.5371385*a-.4985314*c),t(-.969266*b+1.8760108*a+.041556*c),t(.0556434*b-.2040259*a+1.0572252*c),this.opacity)}})),B(x,w,b(c,{brighter:function(a){return new x(this.h,this.c,this.l+S*(null==a?1:a),this.opacity)},darker:function(a){return new x(this.h,this.c,this.l-S*(null==a?1:a),this.opacity)},rgb:function(){return o(this).rgb()}}));var $=-.14861,_=1.78277,aa=-.29227,ba=-.90649,ca=1.97294,da=ca*ba,ea=ca*_,fa=_*aa-ba*$;B(A,z,b(c,{brighter:function(a){return a=null==a?D:Math.pow(D,a),new A(this.h,this.s,this.l*a,this.opacity)},darker:function(a){return a=null==a?C:Math.pow(C,a),new A(this.h,this.s,this.l*a,this.opacity)},rgb:function(){var a=isNaN(this.h)?0:(this.h+120)*Q,b=+this.l,c=isNaN(this.s)?0:this.s*b*(1-b),d=Math.cos(a),e=Math.sin(a);return new i(255*(b+c*($*d+_*e)),255*(b+c*(aa*d+ba*e)),255*(b+c*(ca*d)),this.opacity)}})),a.color=d,a.rgb=h,a.hsl=l,a.lab=p,a.hcl=w,a.cubehelix=z,Object.defineProperty(a,"__esModule",{value:!0})})},{}],4:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(){for(var a,b=0,d=arguments.length,e={};b<d;++b){if(!(a=arguments[b]+"")||a in e)throw new Error("illegal type: "+a);e[a]=[]}return new c(e)}function c(a){this._=a}function d(a,b){return a.trim().split(/^|\s+/).map(function(a){var c="",d=a.indexOf(".");if(d>=0&&(c=a.slice(d+1),a=a.slice(0,d)),a&&!b.hasOwnProperty(a))throw new Error("unknown type: "+a);return{type:a,name:c}})}function e(a,b){for(var c,d=0,e=a.length;d<e;++d)if((c=a[d]).name===b)return c.value}function f(a,b,c){for(var d=0,e=a.length;d<e;++d)if(a[d].name===b){a[d]=g,a=a.slice(0,d).concat(a.slice(d+1));break}return null!=c&&a.push({name:b,value:c}),a}var g={value:function(){}};c.prototype=b.prototype={constructor:c,on:function(a,b){var c,g=this._,h=d(a+"",g),i=-1,j=h.length;{if(!(arguments.length<2)){if(null!=b&&"function"!=typeof b)throw new Error("invalid callback: "+b);for(;++i<j;)if(c=(a=h[i]).type)g[c]=f(g[c],a.name,b);else if(null==b)for(c in g)g[c]=f(g[c],a.name,null);return this}for(;++i<j;)if((c=(a=h[i]).type)&&(c=e(g[c],a.name)))return c}},copy:function(){var a={},b=this._;for(var d in b)a[d]=b[d].slice();return new c(a)},call:function(a,b){if((c=arguments.length-2)>0)for(var c,d,e=new Array(c),f=0;f<c;++f)e[f]=arguments[f+2];if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(d=this._[a],f=0,c=d.length;f<c;++f)d[f].value.apply(b,e)},apply:function(a,b,c){if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(var d=this._[a],e=0,f=d.length;e<f;++e)d[e].value.apply(b,c)}},a.dispatch=b,Object.defineProperty(a,"__esModule",{value:!0})})},{}],5:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(a,b){if((c=(a=b?a.toExponential(b-1):a.toExponential()).indexOf("e"))<0)return null;var c,d=a.slice(0,c);return[d.length>1?d[0]+d.slice(2):d,+a.slice(c+1)]}function c(a){return a=b(Math.abs(a)),a?a[1]:NaN}function d(a,b){return function(c,d){for(var e=c.length,f=[],g=0,h=a[0],i=0;e>0&&h>0&&(i+h+1>d&&(h=Math.max(1,d-i)),f.push(c.substring(e-=h,e+h)),!((i+=h+1)>d));)h=a[g=(g+1)%a.length];return f.reverse().join(b)}}function e(a,b){a=a.toPrecision(b);a:for(var c,d=a.length,e=1,f=-1;e<d;++e)switch(a[e]){case".":f=c=e;break;case"0":0===f&&(f=e),c=e;break;case"e":break a;default:f>0&&(f=0)}return f>0?a.slice(0,f)+a.slice(c+1):a}function f(a,c){var d=b(a,c);if(!d)return a+"";var e=d[0],f=d[1],g=f-(p=3*Math.max(-8,Math.min(8,Math.floor(f/3))))+1,h=e.length;return g===h?e:g>h?e+new Array(g-h+1).join("0"):g>0?e.slice(0,g)+"."+e.slice(g):"0."+new Array(1-g).join("0")+b(a,Math.max(0,c+g-1))[0]}function g(a,c){var d=b(a,c);if(!d)return a+"";var e=d[0],f=d[1];return f<0?"0."+new Array(-f).join("0")+e:e.length>f+1?e.slice(0,f+1)+"."+e.slice(f+1):e+new Array(f-e.length+2).join("0")}function h(a){return new i(a)}function i(a){if(!(b=r.exec(a)))throw new Error("invalid format: "+a);var b,c=b[1]||" ",d=b[2]||">",e=b[3]||"-",f=b[4]||"",g=!!b[5],h=b[6]&&+b[6],i=!!b[7],j=b[8]&&+b[8].slice(1),k=b[9]||"";"n"===k?(i=!0,k="g"):q[k]||(k=""),(g||"0"===c&&"="===d)&&(g=!0,c="0",d="="),this.fill=c,this.align=d,this.sign=e,this.symbol=f,this.zero=g,this.width=h,this.comma=i,this.precision=j,this.type=k}function j(a){return a}function k(a){function b(a){function b(a){var b,g,h,j=r,q=s;if("c"===o)q=u(a)+q,a="";else{a=+a;var w=(a<0||1/a<0)&&(a*=-1,!0);if(a=u(a,n),w)for(b=-1,g=a.length,w=!1;++b<g;)if(h=a.charCodeAt(b),48<h&&h<58||"x"===o&&96<h&&h<103||"X"===o&&64<h&&h<71){w=!0;break}if(j=(w?"("===e?e:"-":"-"===e||"("===e?"":e)+j,q=q+("s"===o?t[8+p/3]:"")+(w&&"("===e?")":""),v)for(b=-1,g=a.length;++b<g;)if(h=a.charCodeAt(b),48>h||h>57){q=(46===h?i+a.slice(b+1):a.slice(b))+q,a=a.slice(0,b);break}}m&&!k&&(a=f(a,1/0));var x=j.length+a.length+q.length,y=x<l?new Array(l-x+1).join(c):"";switch(m&&k&&(a=f(y+a,y.length?l-q.length:1/0),y=""),d){case"<":return j+a+q+y;case"=":return j+y+a+q;case"^":return y.slice(0,x=y.length>>1)+j+a+q+y.slice(x)}return y+j+a+q}a=h(a);var c=a.fill,d=a.align,e=a.sign,j=a.symbol,k=a.zero,l=a.width,m=a.comma,n=a.precision,o=a.type,r="$"===j?g[0]:"#"===j&&/[boxX]/.test(o)?"0"+o.toLowerCase():"",s="$"===j?g[1]:/[%p]/.test(o)?"%":"",u=q[o],v=!o||/[defgprs%]/.test(o);return n=null==n?o?6:12:/[gprs]/.test(o)?Math.max(1,Math.min(21,n)):Math.max(0,Math.min(20,n)),b.toString=function(){return a+""},b}function e(a,d){var e=b((a=h(a),a.type="f",a)),f=3*Math.max(-8,Math.min(8,Math.floor(c(d)/3))),g=Math.pow(10,-f),i=t[8+f/3];return function(a){return e(g*a)+i}}var f=a.grouping&&a.thousands?d(a.grouping,a.thousands):j,g=a.currency,i=a.decimal;return{format:b,formatPrefix:e}}function l(b){return s=k(b),a.format=s.format,a.formatPrefix=s.formatPrefix,s}function m(a){return Math.max(0,-c(Math.abs(a)))}function n(a,b){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(c(b)/3)))-c(Math.abs(a)))}function o(a,b){return a=Math.abs(a),b=Math.abs(b)-a,Math.max(0,c(b)-c(a))+1}var p,q={"":e,"%":function(a,b){return(100*a).toFixed(b)},b:function(a){return Math.round(a).toString(2)},c:function(a){return a+""},d:function(a){return Math.round(a).toString(10)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},g:function(a,b){return a.toPrecision(b)},o:function(a){return Math.round(a).toString(8)},p:function(a,b){return g(100*a,b)},r:g,s:f,X:function(a){return Math.round(a).toString(16).toUpperCase()},x:function(a){return Math.round(a).toString(16)}},r=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;i.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var s,t=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];l({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),a.formatDefaultLocale=l,a.formatLocale=k,a.formatSpecifier=h,a.precisionFixed=m,a.precisionPrefix=n,a.precisionRound=o,Object.defineProperty(a,"__esModule",{value:!0})})},{}],6:[function(a,b,c){!function(d,e){"object"==typeof c&&"undefined"!=typeof b?e(c,a("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-color"],e):e(d.d3=d.d3||{},d.d3)}(this,function(a,b){"use strict";function c(a,b,c,d,e){var f=a*a,g=f*a;return((1-3*a+3*f-g)*b+(4-6*f+3*g)*c+(1+3*a+3*f-3*g)*d+g*e)/6}function d(a,b){return function(c){return a+c*b}}function e(a,b,c){return a=Math.pow(a,c),b=Math.pow(b,c)-a,c=1/c,function(d){return Math.pow(a+d*b,c)}}function f(a,b){var c=b-a;return c?d(a,c>180||c<-180?c-360*Math.round(c/360):c):B(isNaN(a)?b:a)}function g(a){return 1===(a=+a)?h:function(b,c){return c-b?e(b,c,a):B(isNaN(b)?c:b)}}function h(a,b){var c=b-a;return c?d(a,c):B(isNaN(a)?b:a)}function i(a){return function(c){var d,e,f=c.length,g=new Array(f),h=new Array(f),i=new Array(f);for(d=0;d<f;++d)e=b.rgb(c[d]),g[d]=e.r||0,h[d]=e.g||0,i[d]=e.b||0;return g=a(g),h=a(h),i=a(i),e.opacity=1,function(a){return e.r=g(a),e.g=h(a),e.b=i(a),e+""}}}function j(a){return function(){return a}}function k(a){return function(b){return a(b)+""}}function l(a){return"none"===a?P:(v||(v=document.createElement("DIV"),w=document.documentElement,x=document.defaultView),v.style.transform=a,a=x.getComputedStyle(w.appendChild(v),null).getPropertyValue("transform"),w.removeChild(v),a=a.slice(7,-1).split(","),Q(+a[0],+a[1],+a[2],+a[3],+a[4],+a[5]))}function m(a){return null==a?P:(y||(y=document.createElementNS("http://www.w3.org/2000/svg","g")),y.setAttribute("transform",a),(a=y.transform.baseVal.consolidate())?(a=a.matrix,Q(a.a,a.b,a.c,a.d,a.e,a.f)):P)}function n(a,b,c,d){function e(a){return a.length?a.pop()+" ":""}function f(a,d,e,f,g,h){if(a!==e||d!==f){var i=g.push("translate(",null,b,null,c);h.push({i:i-4,x:H(a,e)},{i:i-2,x:H(d,f)})}else(e||f)&&g.push("translate("+e+b+f+c)}function g(a,b,c,f){a!==b?(a-b>180?b+=360:b-a>180&&(a+=360),f.push({i:c.push(e(c)+"rotate(",null,d)-2,x:H(a,b)})):b&&c.push(e(c)+"rotate("+b+d)}function h(a,b,c,f){a!==b?f.push({i:c.push(e(c)+"skewX(",null,d)-2,x:H(a,b)}):b&&c.push(e(c)+"skewX("+b+d)}function i(a,b,c,d,f,g){if(a!==c||b!==d){var h=f.push(e(f)+"scale(",null,",",null,")");g.push({i:h-4,x:H(a,c)},{i:h-2,x:H(b,d)})}else 1===c&&1===d||f.push(e(f)+"scale("+c+","+d+")")}return function(b,c){var d=[],e=[];return b=a(b),c=a(c),f(b.translateX,b.translateY,c.translateX,c.translateY,d,e),g(b.rotate,c.rotate,d,e),h(b.skewX,c.skewX,d,e),i(b.scaleX,b.scaleY,c.scaleX,c.scaleY,d,e),b=c=null,function(a){for(var b,c=-1,f=e.length;++c<f;)d[(b=e[c]).i]=b.x(a);return d.join("")}}}function o(a){return((a=Math.exp(a))+1/a)/2}function p(a){return((a=Math.exp(a))-1/a)/2}function q(a){return((a=Math.exp(2*a))-1)/(a+1)}function r(a){return function(c,d){var e=a((c=b.hsl(c)).h,(d=b.hsl(d)).h),f=h(c.s,d.s),g=h(c.l,d.l),i=h(c.opacity,d.opacity);return function(a){return c.h=e(a),c.s=f(a),c.l=g(a),c.opacity=i(a),c+""}}}function s(a,c){var d=h((a=b.lab(a)).l,(c=b.lab(c)).l),e=h(a.a,c.a),f=h(a.b,c.b),g=h(a.opacity,c.opacity);return function(b){return a.l=d(b),a.a=e(b),a.b=f(b),a.opacity=g(b),a+""}}function t(a){return function(c,d){var e=a((c=b.hcl(c)).h,(d=b.hcl(d)).h),f=h(c.c,d.c),g=h(c.l,d.l),i=h(c.opacity,d.opacity);return function(a){return c.h=e(a),c.c=f(a),c.l=g(a),c.opacity=i(a),c+""}}}function u(a){return function c(d){function e(c,e){var f=a((c=b.cubehelix(c)).h,(e=b.cubehelix(e)).h),g=h(c.s,e.s),i=h(c.l,e.l),j=h(c.opacity,e.opacity);return function(a){return c.h=f(a),c.s=g(a),c.l=i(Math.pow(a,d)),c.opacity=j(a),c+""}}return d=+d,e.gamma=c,e}(1)}var v,w,x,y,z=function(a){var b=a.length-1;return function(d){var e=d<=0?d=0:d>=1?(d=1,b-1):Math.floor(d*b),f=a[e],g=a[e+1],h=e>0?a[e-1]:2*f-g,i=e<b-1?a[e+2]:2*g-f;return c((d-e/b)*b,h,f,g,i)}},A=function(a){var b=a.length;return function(d){var e=Math.floor(((d%=1)<0?++d:d)*b),f=a[(e+b-1)%b],g=a[e%b],h=a[(e+1)%b],i=a[(e+2)%b];return c((d-e/b)*b,f,g,h,i)}},B=function(a){return function(){return a}},C=function a(c){function d(a,c){var d=e((a=b.rgb(a)).r,(c=b.rgb(c)).r),f=e(a.g,c.g),g=e(a.b,c.b),h=e(a.opacity,c.opacity);return function(b){return a.r=d(b),a.g=f(b),a.b=g(b),a.opacity=h(b),a+""}}var e=g(c);return d.gamma=a,d}(1),D=i(z),E=i(A),F=function(a,b){var c,d=b?b.length:0,e=a?Math.min(d,a.length):0,f=new Array(d),g=new Array(d);for(c=0;c<e;++c)f[c]=M(a[c],b[c]);for(;c<d;++c)g[c]=b[c];return function(a){for(c=0;c<e;++c)g[c]=f[c](a);return g}},G=function(a,b){var c=new Date;return a=+a,b-=a,function(d){return c.setTime(a+b*d),c}},H=function(a,b){return a=+a,b-=a,function(c){return a+b*c}},I=function(a,b){var c,d={},e={};null!==a&&"object"==typeof a||(a={}),null!==b&&"object"==typeof b||(b={});for(c in b)c in a?d[c]=M(a[c],b[c]):e[c]=b[c];return function(a){for(c in d)e[c]=d[c](a);return e}},J=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,K=new RegExp(J.source,"g"),L=function(a,b){var c,d,e,f=J.lastIndex=K.lastIndex=0,g=-1,h=[],i=[];for(a+="",b+="";(c=J.exec(a))&&(d=K.exec(b));)(e=d.index)>f&&(e=b.slice(f,e),h[g]?h[g]+=e:h[++g]=e),(c=c[0])===(d=d[0])?h[g]?h[g]+=d:h[++g]=d:(h[++g]=null,i.push({i:g,x:H(c,d)})),f=K.lastIndex;return f<b.length&&(e=b.slice(f),h[g]?h[g]+=e:h[++g]=e),h.length<2?i[0]?k(i[0].x):j(b):(b=i.length,function(a){for(var c,d=0;d<b;++d)h[(c=i[d]).i]=c.x(a);return h.join("")})},M=function(a,c){var d,e=typeof c;return null==c||"boolean"===e?B(c):("number"===e?H:"string"===e?(d=b.color(c))?(c=d,C):L:c instanceof b.color?C:c instanceof Date?G:Array.isArray(c)?F:isNaN(c)?I:H)(a,c)},N=function(a,b){return a=+a,b-=a,function(c){return Math.round(a+b*c)}},O=180/Math.PI,P={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Q=function(a,b,c,d,e,f){var g,h,i;return(g=Math.sqrt(a*a+b*b))&&(a/=g,b/=g),(i=a*c+b*d)&&(c-=a*i,d-=b*i),(h=Math.sqrt(c*c+d*d))&&(c/=h,d/=h,i/=h),a*d<b*c&&(a=-a,b=-b,i=-i,g=-g),{translateX:e,translateY:f,rotate:Math.atan2(b,a)*O,skewX:Math.atan(i)*O,scaleX:g,scaleY:h}},R=n(l,"px, ","px)","deg)"),S=n(m,", ",")",")"),T=Math.SQRT2,U=2,V=4,W=1e-12,X=function(a,b){var c,d,e=a[0],f=a[1],g=a[2],h=b[0],i=b[1],j=b[2],k=h-e,l=i-f,m=k*k+l*l;if(m<W)d=Math.log(j/g)/T,c=function(a){return[e+a*k,f+a*l,g*Math.exp(T*a*d)]};else{var n=Math.sqrt(m),r=(j*j-g*g+V*m)/(2*g*U*n),s=(j*j-g*g-V*m)/(2*j*U*n),t=Math.log(Math.sqrt(r*r+1)-r),u=Math.log(Math.sqrt(s*s+1)-s);d=(u-t)/T,c=function(a){var b=a*d,c=o(t),h=g/(U*n)*(c*q(T*b+t)-p(t));return[e+h*k,f+h*l,g*c/o(T*b+t)]}}return c.duration=1e3*d,c},Y=r(f),Z=r(h),$=t(f),_=t(h),aa=u(f),ba=u(h),ca=function(a,b){for(var c=new Array(b),d=0;d<b;++d)c[d]=a(d/(b-1));return c};a.interpolate=M,a.interpolateArray=F,a.interpolateBasis=z,a.interpolateBasisClosed=A,a.interpolateDate=G,a.interpolateNumber=H,a.interpolateObject=I,a.interpolateRound=N,a.interpolateString=L,a.interpolateTransformCss=R,a.interpolateTransformSvg=S,a.interpolateZoom=X,a.interpolateRgb=C,a.interpolateRgbBasis=D,a.interpolateRgbBasisClosed=E,a.interpolateHsl=Y,a.interpolateHslLong=Z,a.interpolateLab=s,a.interpolateHcl=$,a.interpolateHclLong=_,a.interpolateCubehelix=aa,a.interpolateCubehelixLong=ba,a.quantize=ca,Object.defineProperty(a,"__esModule",{value:!0})})},{"d3-color":3}],7:[function(a,b,c){!function(d,e){"object"==typeof c&&"undefined"!=typeof b?e(c,a("d3-array"),a("d3-collection"),a("d3-interpolate"),a("d3-format"),a("d3-time"),a("d3-time-format"),a("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-array","d3-collection","d3-interpolate","d3-format","d3-time","d3-time-format","d3-color"],e):e(d.d3=d.d3||{},d.d3,d.d3,d.d3,d.d3,d.d3,d.d3,d.d3)}(this,function(a,b,c,d,e,f,g,h){"use strict";function i(a){function b(b){var c=b+"",g=d.get(c);if(!g){if(f!==Z)return f;d.set(c,g=e.push(b))}return a[(g-1)%a.length]}var d=c.map(),e=[],f=Z;return a=null==a?[]:Y.call(a),b.domain=function(a){if(!arguments.length)return e.slice();e=[],d=c.map();for(var f,g,h=-1,i=a.length;++h<i;)d.has(g=(f=a[h])+"")||d.set(g,e.push(f));return b},b.range=function(c){return arguments.length?(a=Y.call(c),b):a.slice()},b.unknown=function(a){return arguments.length?(f=a,b):f},b.copy=function(){return i().domain(e).range(a).unknown(f)},b}function j(){function a(){
var a=f().length,e=h[1]<h[0],i=h[e-0],j=h[1-e];c=(j-i)/Math.max(1,a-l+2*m),k&&(c=Math.floor(c)),i+=(j-i-c*(a-l))*n,d=c*(1-l),k&&(i=Math.round(i),d=Math.round(d));var o=b.range(a).map(function(a){return i+c*a});return g(e?o.reverse():o)}var c,d,e=i().unknown(void 0),f=e.domain,g=e.range,h=[0,1],k=!1,l=0,m=0,n=.5;return delete e.unknown,e.domain=function(b){return arguments.length?(f(b),a()):f()},e.range=function(b){return arguments.length?(h=[+b[0],+b[1]],a()):h.slice()},e.rangeRound=function(b){return h=[+b[0],+b[1]],k=!0,a()},e.bandwidth=function(){return d},e.step=function(){return c},e.round=function(b){return arguments.length?(k=!!b,a()):k},e.padding=function(b){return arguments.length?(l=m=Math.max(0,Math.min(1,b)),a()):l},e.paddingInner=function(b){return arguments.length?(l=Math.max(0,Math.min(1,b)),a()):l},e.paddingOuter=function(b){return arguments.length?(m=Math.max(0,Math.min(1,b)),a()):m},e.align=function(b){return arguments.length?(n=Math.max(0,Math.min(1,b)),a()):n},e.copy=function(){return j().domain(f()).range(h).round(k).paddingInner(l).paddingOuter(m).align(n)},a()}function k(a){var b=a.copy;return a.padding=a.paddingOuter,delete a.paddingInner,delete a.paddingOuter,a.copy=function(){return k(b())},a}function l(){return k(j().paddingInner(1))}function m(a){return function(){return a}}function n(a){return+a}function o(a,b){return(b-=a=+a)?function(c){return(c-a)/b}:m(b)}function p(a){return function(b,c){var d=a(b=+b,c=+c);return function(a){return a<=b?0:a>=c?1:d(a)}}}function q(a){return function(b,c){var d=a(b=+b,c=+c);return function(a){return a<=0?b:a>=1?c:d(a)}}}function r(a,b,c,d){var e=a[0],f=a[1],g=b[0],h=b[1];return f<e?(e=c(f,e),g=d(h,g)):(e=c(e,f),g=d(g,h)),function(a){return g(e(a))}}function s(a,c,d,e){var f=Math.min(a.length,c.length)-1,g=new Array(f),h=new Array(f),i=-1;for(a[f]<a[0]&&(a=a.slice().reverse(),c=c.slice().reverse());++i<f;)g[i]=d(a[i],a[i+1]),h[i]=e(c[i],c[i+1]);return function(c){var d=b.bisect(a,c,1,f)-1;return h[d](g[d](c))}}function t(a,b){return b.domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp())}function u(a,b){function c(){return f=Math.min(i.length,j.length)>2?s:r,g=h=null,e}function e(b){return(g||(g=f(i,j,l?p(a):a,k)))(+b)}var f,g,h,i=$,j=$,k=d.interpolate,l=!1;return e.invert=function(a){return(h||(h=f(j,i,o,l?q(b):b)))(+a)},e.domain=function(a){return arguments.length?(i=X.call(a,n),c()):i.slice()},e.range=function(a){return arguments.length?(j=Y.call(a),c()):j.slice()},e.rangeRound=function(a){return j=Y.call(a),k=d.interpolateRound,c()},e.clamp=function(a){return arguments.length?(l=!!a,c()):l},e.interpolate=function(a){return arguments.length?(k=a,c()):k},c()}function v(a,c,d){var f,g=a[0],h=a[a.length-1],i=b.tickStep(g,h,null==c?10:c);switch(d=e.formatSpecifier(null==d?",f":d),d.type){case"s":var j=Math.max(Math.abs(g),Math.abs(h));return null!=d.precision||isNaN(f=e.precisionPrefix(i,j))||(d.precision=f),e.formatPrefix(d,j);case"":case"e":case"g":case"p":case"r":null!=d.precision||isNaN(f=e.precisionRound(i,Math.max(Math.abs(g),Math.abs(h))))||(d.precision=f-("e"===d.type));break;case"f":case"%":null!=d.precision||isNaN(f=e.precisionFixed(i))||(d.precision=f-2*("%"===d.type))}return e.format(d)}function w(a){var c=a.domain;return a.ticks=function(a){var d=c();return b.ticks(d[0],d[d.length-1],null==a?10:a)},a.tickFormat=function(a,b){return v(c(),a,b)},a.nice=function(d){var e=c(),f=e.length-1,g=null==d?10:d,h=e[0],i=e[f],j=b.tickStep(h,i,g);return j&&(j=b.tickStep(Math.floor(h/j)*j,Math.ceil(i/j)*j,g),e[0]=Math.floor(h/j)*j,e[f]=Math.ceil(i/j)*j,c(e)),a},a}function x(){var a=u(o,d.interpolateNumber);return a.copy=function(){return t(a,x())},w(a)}function y(){function a(a){return+a}var b=[0,1];return a.invert=a,a.domain=a.range=function(c){return arguments.length?(b=X.call(c,n),a):b.slice()},a.copy=function(){return y().domain(b)},w(a)}function z(a,b){a=a.slice();var c,d=0,e=a.length-1,f=a[d],g=a[e];return g<f&&(c=d,d=e,e=c,c=f,f=g,g=c),a[d]=b.floor(f),a[e]=b.ceil(g),a}function A(a,b){return(b=Math.log(b/a))?function(c){return Math.log(c/a)/b}:m(b)}function B(a,b){return a<0?function(c){return-Math.pow(-b,c)*Math.pow(-a,1-c)}:function(c){return Math.pow(b,c)*Math.pow(a,1-c)}}function C(a){return isFinite(a)?+("1e"+a):a<0?0:a}function D(a){return 10===a?C:a===Math.E?Math.exp:function(b){return Math.pow(a,b)}}function E(a){return a===Math.E?Math.log:10===a&&Math.log10||2===a&&Math.log2||(a=Math.log(a),function(b){return Math.log(b)/a})}function F(a){return function(b){return-a(-b)}}function G(){function a(){return g=E(f),h=D(f),d()[0]<0&&(g=F(g),h=F(h)),c}var c=u(A,B).domain([1,10]),d=c.domain,f=10,g=E(10),h=D(10);return c.base=function(b){return arguments.length?(f=+b,a()):f},c.domain=function(b){return arguments.length?(d(b),a()):d()},c.ticks=function(a){var c,e=d(),i=e[0],j=e[e.length-1];(c=j<i)&&(n=i,i=j,j=n);var k,l,m,n=g(i),o=g(j),p=null==a?10:+a,q=[];if(!(f%1)&&o-n<p){if(n=Math.round(n)-1,o=Math.round(o)+1,i>0){for(;n<o;++n)for(l=1,k=h(n);l<f;++l)if(m=k*l,!(m<i)){if(m>j)break;q.push(m)}}else for(;n<o;++n)for(l=f-1,k=h(n);l>=1;--l)if(m=k*l,!(m<i)){if(m>j)break;q.push(m)}}else q=b.ticks(n,o,Math.min(o-n,p)).map(h);return c?q.reverse():q},c.tickFormat=function(a,b){if(null==b&&(b=10===f?".0e":","),"function"!=typeof b&&(b=e.format(b)),a===1/0)return b;null==a&&(a=10);var d=Math.max(1,f*a/c.ticks().length);return function(a){var c=a/h(Math.round(g(a)));return c*f<f-.5&&(c*=f),c<=d?b(a):""}},c.nice=function(){return d(z(d(),{floor:function(a){return h(Math.floor(g(a)))},ceil:function(a){return h(Math.ceil(g(a)))}}))},c.copy=function(){return t(c,G().base(f))},c}function H(a,b){return a<0?-Math.pow(-a,b):Math.pow(a,b)}function I(){function a(a,b){return(b=H(b,c)-(a=H(a,c)))?function(d){return(H(d,c)-a)/b}:m(b)}function b(a,b){return b=H(b,c)-(a=H(a,c)),function(d){return H(a+b*d,1/c)}}var c=1,d=u(a,b),e=d.domain;return d.exponent=function(a){return arguments.length?(c=+a,e(e())):c},d.copy=function(){return t(d,I().exponent(c))},w(d)}function J(){return I().exponent(.5)}function K(){function a(){var a=0,g=Math.max(1,e.length);for(f=new Array(g-1);++a<g;)f[a-1]=b.quantile(d,a/g);return c}function c(a){if(!isNaN(a=+a))return e[b.bisect(f,a)]}var d=[],e=[],f=[];return c.invertExtent=function(a){var b=e.indexOf(a);return b<0?[NaN,NaN]:[b>0?f[b-1]:d[0],b<f.length?f[b]:d[d.length-1]]},c.domain=function(c){if(!arguments.length)return d.slice();d=[];for(var e,f=0,g=c.length;f<g;++f)e=c[f],null==e||isNaN(e=+e)||d.push(e);return d.sort(b.ascending),a()},c.range=function(b){return arguments.length?(e=Y.call(b),a()):e.slice()},c.quantiles=function(){return f.slice()},c.copy=function(){return K().domain(d).range(e)},c}function L(){function a(a){if(a<=a)return h[b.bisect(g,a,0,f)]}function c(){var b=-1;for(g=new Array(f);++b<f;)g[b]=((b+1)*e-(b-f)*d)/(f+1);return a}var d=0,e=1,f=1,g=[.5],h=[0,1];return a.domain=function(a){return arguments.length?(d=+a[0],e=+a[1],c()):[d,e]},a.range=function(a){return arguments.length?(f=(h=Y.call(a)).length-1,c()):h.slice()},a.invertExtent=function(a){var b=h.indexOf(a);return b<0?[NaN,NaN]:b<1?[d,g[0]]:b>=f?[g[f-1],e]:[g[b-1],g[b]]},a.copy=function(){return L().domain([d,e]).range(h)},w(a)}function M(){function a(a){if(a<=a)return d[b.bisect(c,a,0,e)]}var c=[.5],d=[0,1],e=1;return a.domain=function(b){return arguments.length?(c=Y.call(b),e=Math.min(c.length,d.length-1),a):c.slice()},a.range=function(b){return arguments.length?(d=Y.call(b),e=Math.min(c.length,d.length-1),a):d.slice()},a.invertExtent=function(a){var b=d.indexOf(a);return[c[b-1],c[b]]},a.copy=function(){return M().domain(c).range(d)},a}function N(a){return new Date(a)}function O(a){return a instanceof Date?+a:+new Date(+a)}function P(a,c,e,f,g,h,i,j,k){function l(b){return(i(b)<b?r:h(b)<b?s:g(b)<b?v:f(b)<b?w:c(b)<b?e(b)<b?x:y:a(b)<b?A:B)(b)}function m(c,d,e,f){if(null==c&&(c=10),"number"==typeof c){var g=Math.abs(e-d)/c,h=b.bisector(function(a){return a[2]}).right(C,g);h===C.length?(f=b.tickStep(d/fa,e/fa,c),c=a):h?(h=C[g/C[h-1][2]<C[h][2]/g?h-1:h],f=h[1],c=h[0]):(f=b.tickStep(d,e,c),c=j)}return null==f?c:c.every(f)}var n=u(o,d.interpolateNumber),p=n.invert,q=n.domain,r=k(".%L"),s=k(":%S"),v=k("%I:%M"),w=k("%I %p"),x=k("%a %d"),y=k("%b %d"),A=k("%B"),B=k("%Y"),C=[[i,1,_],[i,5,5*_],[i,15,15*_],[i,30,30*_],[h,1,aa],[h,5,5*aa],[h,15,15*aa],[h,30,30*aa],[g,1,ba],[g,3,3*ba],[g,6,6*ba],[g,12,12*ba],[f,1,ca],[f,2,2*ca],[e,1,da],[c,1,ea],[c,3,3*ea],[a,1,fa]];return n.invert=function(a){return new Date(p(a))},n.domain=function(a){return arguments.length?q(X.call(a,O)):q().map(N)},n.ticks=function(a,b){var c,d=q(),e=d[0],f=d[d.length-1],g=f<e;return g&&(c=e,e=f,f=c),c=m(a,e,f,b),c=c?c.range(e,f+1):[],g?c.reverse():c},n.tickFormat=function(a,b){return null==b?l:k(b)},n.nice=function(a,b){var c=q();return(a=m(a,c[0],c[c.length-1],b))?q(z(c,a)):n},n.copy=function(){return t(n,P(a,c,e,f,g,h,i,j,k))},n}function Q(){return P(f.timeYear,f.timeMonth,f.timeWeek,f.timeDay,f.timeHour,f.timeMinute,f.timeSecond,f.timeMillisecond,g.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])}function R(){return P(f.utcYear,f.utcMonth,f.utcWeek,f.utcDay,f.utcHour,f.utcMinute,f.utcSecond,f.utcMillisecond,g.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])}function S(a){return a.match(/.{6}/g).map(function(a){return"#"+a})}function T(a){(a<0||a>1)&&(a-=Math.floor(a));var b=Math.abs(a-.5);return na.h=360*a-100,na.s=1.5-1.5*b,na.l=.8-.9*b,na+""}function U(a){var b=a.length;return function(c){return a[Math.max(0,Math.min(b-1,Math.floor(c*b)))]}}function V(a){function b(b){var f=(b-c)/(d-c);return a(e?Math.max(0,Math.min(1,f)):f)}var c=0,d=1,e=!1;return b.domain=function(a){return arguments.length?(c=+a[0],d=+a[1],b):[c,d]},b.clamp=function(a){return arguments.length?(e=!!a,b):e},b.interpolator=function(c){return arguments.length?(a=c,b):a},b.copy=function(){return V(a).domain([c,d]).clamp(e)},w(b)}var W=Array.prototype,X=W.map,Y=W.slice,Z={name:"implicit"},$=[0,1],_=1e3,aa=60*_,ba=60*aa,ca=24*ba,da=7*ca,ea=30*ca,fa=365*ca,ga=S("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),ha=S("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),ia=S("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),ja=S("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),ka=d.interpolateCubehelixLong(h.cubehelix(300,.5,0),h.cubehelix(-240,.5,1)),la=d.interpolateCubehelixLong(h.cubehelix(-100,.75,.35),h.cubehelix(80,1.5,.8)),ma=d.interpolateCubehelixLong(h.cubehelix(260,.75,.35),h.cubehelix(80,1.5,.8)),na=h.cubehelix(),oa=U(S("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),pa=U(S("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),qa=U(S("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),ra=U(S("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));a.scaleBand=j,a.scalePoint=l,a.scaleIdentity=y,a.scaleLinear=x,a.scaleLog=G,a.scaleOrdinal=i,a.scaleImplicit=Z,a.scalePow=I,a.scaleSqrt=J,a.scaleQuantile=K,a.scaleQuantize=L,a.scaleThreshold=M,a.scaleTime=Q,a.scaleUtc=R,a.schemeCategory10=ga,a.schemeCategory20b=ha,a.schemeCategory20c=ia,a.schemeCategory20=ja,a.interpolateCubehelixDefault=ka,a.interpolateRainbow=T,a.interpolateWarm=la,a.interpolateCool=ma,a.interpolateViridis=oa,a.interpolateMagma=pa,a.interpolateInferno=qa,a.interpolatePlasma=ra,a.scaleSequential=V,Object.defineProperty(a,"__esModule",{value:!0})})},{"d3-array":1,"d3-collection":2,"d3-color":3,"d3-format":5,"d3-interpolate":6,"d3-time":10,"d3-time-format":9}],8:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(a){var b=a+="",c=b.indexOf(":");return c>=0&&"xmlns"!==(b=a.slice(0,c))&&(a=a.slice(c+1)),Qa.hasOwnProperty(b)?{space:Qa[b],local:a}:a}function c(a){return function(){var b=this.ownerDocument,c=this.namespaceURI;return c===Pa&&b.documentElement.namespaceURI===Pa?b.createElement(a):b.createElementNS(c,a)}}function d(a){return function(){return this.ownerDocument.createElementNS(a.space,a.local)}}function e(a){var e=b(a);return(e.local?d:c)(e)}function f(){return new g}function g(){this._="@"+(++Ra).toString(36)}function h(a,b,c){return a=i(a,b,c),function(b){var c=b.relatedTarget;c&&(c===this||8&c.compareDocumentPosition(this))||a.call(this,b)}}function i(b,c,d){return function(e){var f=a.event;a.event=e;try{b.call(this,this.__data__,c,d)}finally{a.event=f}}}function j(a){return a.trim().split(/^|\s+/).map(function(a){var b="",c=a.indexOf(".");return c>=0&&(b=a.slice(c+1),a=a.slice(0,c)),{type:a,name:b}})}function k(a){return function(){var b=this.__on;if(b){for(var c,d=0,e=-1,f=b.length;d<f;++d)c=b[d],a.type&&c.type!==a.type||c.name!==a.name?b[++e]=c:this.removeEventListener(c.type,c.listener,c.capture);++e?b.length=e:delete this.__on}}}function l(a,b,c){var d=Wa.hasOwnProperty(a.type)?h:i;return function(e,f,g){var h,i=this.__on,j=d(b,f,g);if(i)for(var k=0,l=i.length;k<l;++k)if((h=i[k]).type===a.type&&h.name===a.name)return this.removeEventListener(h.type,h.listener,h.capture),this.addEventListener(h.type,h.listener=j,h.capture=c),void(h.value=b);this.addEventListener(a.type,j,c),h={type:a.type,name:a.name,value:b,listener:j,capture:c},i?i.push(h):this.__on=[h]}}function m(a,b,c){var d,e,f=j(a+""),g=f.length;{if(!(arguments.length<2)){for(h=b?l:k,null==c&&(c=!1),d=0;d<g;++d)this.each(h(f[d],b,c));return this}var h=this.node().__on;if(h)for(var i,m=0,n=h.length;m<n;++m)for(d=0,i=h[m];d<g;++d)if((e=f[d]).type===i.type&&e.name===i.name)return i.value}}function n(b,c,d,e){var f=a.event;b.sourceEvent=a.event,a.event=b;try{return c.apply(d,e)}finally{a.event=f}}function o(){for(var b,c=a.event;b=c.sourceEvent;)c=b;return c}function p(a,b){var c=a.ownerSVGElement||a;if(c.createSVGPoint){var d=c.createSVGPoint();return d.x=b.clientX,d.y=b.clientY,d=d.matrixTransform(a.getScreenCTM().inverse()),[d.x,d.y]}var e=a.getBoundingClientRect();return[b.clientX-e.left-a.clientLeft,b.clientY-e.top-a.clientTop]}function q(a){var b=o();return b.changedTouches&&(b=b.changedTouches[0]),p(a,b)}function r(){}function s(a){return null==a?r:function(){return this.querySelector(a)}}function t(a){"function"!=typeof a&&(a=s(a));for(var b=this._groups,c=b.length,d=new Array(c),e=0;e<c;++e)for(var f,g,h=b[e],i=h.length,j=d[e]=new Array(i),k=0;k<i;++k)(f=h[k])&&(g=a.call(f,f.__data__,k,h))&&("__data__"in f&&(g.__data__=f.__data__),j[k]=g);return new Ja(d,this._parents)}function u(){return[]}function v(a){return null==a?u:function(){return this.querySelectorAll(a)}}function w(a){"function"!=typeof a&&(a=v(a));for(var b=this._groups,c=b.length,d=[],e=[],f=0;f<c;++f)for(var g,h=b[f],i=h.length,j=0;j<i;++j)(g=h[j])&&(d.push(a.call(g,g.__data__,j,h)),e.push(g));return new Ja(d,e)}function x(a){"function"!=typeof a&&(a=Va(a));for(var b=this._groups,c=b.length,d=new Array(c),e=0;e<c;++e)for(var f,g=b[e],h=g.length,i=d[e]=[],j=0;j<h;++j)(f=g[j])&&a.call(f,f.__data__,j,g)&&i.push(f);return new Ja(d,this._parents)}function y(a){return new Array(a.length)}function z(){return new Ja(this._enter||this._groups.map(y),this._parents)}function A(a,b){this.ownerDocument=a.ownerDocument,this.namespaceURI=a.namespaceURI,this._next=null,this._parent=a,this.__data__=b}function B(a){return function(){return a}}function C(a,b,c,d,e,f){for(var g,h=0,i=b.length,j=f.length;h<j;++h)(g=b[h])?(g.__data__=f[h],d[h]=g):c[h]=new A(a,f[h]);for(;h<i;++h)(g=b[h])&&(e[h]=g)}function D(a,b,c,d,e,f,g){var h,i,j,k={},l=b.length,m=f.length,n=new Array(l);for(h=0;h<l;++h)(i=b[h])&&(n[h]=j=Ya+g.call(i,i.__data__,h,b),j in k?e[h]=i:k[j]=i);for(h=0;h<m;++h)j=Ya+g.call(a,f[h],h,f),(i=k[j])?(d[h]=i,i.__data__=f[h],k[j]=null):c[h]=new A(a,f[h]);for(h=0;h<l;++h)(i=b[h])&&k[n[h]]===i&&(e[h]=i)}function E(a,b){if(!a)return n=new Array(this.size()),j=-1,this.each(function(a){n[++j]=a}),n;var c=b?D:C,d=this._parents,e=this._groups;"function"!=typeof a&&(a=B(a));for(var f=e.length,g=new Array(f),h=new Array(f),i=new Array(f),j=0;j<f;++j){var k=d[j],l=e[j],m=l.length,n=a.call(k,k&&k.__data__,j,d),o=n.length,p=h[j]=new Array(o),q=g[j]=new Array(o),r=i[j]=new Array(m);c(k,l,p,q,r,n,b);for(var s,t,u=0,v=0;u<o;++u)if(s=p[u]){for(u>=v&&(v=u+1);!(t=q[v])&&++v<o;);s._next=t||null}}return g=new Ja(g,d),g._enter=h,g._exit=i,g}function F(){return new Ja(this._exit||this._groups.map(y),this._parents)}function G(a){for(var b=this._groups,c=a._groups,d=b.length,e=c.length,f=Math.min(d,e),g=new Array(d),h=0;h<f;++h)for(var i,j=b[h],k=c[h],l=j.length,m=g[h]=new Array(l),n=0;n<l;++n)(i=j[n]||k[n])&&(m[n]=i);for(;h<d;++h)g[h]=b[h];return new Ja(g,this._parents)}function H(){for(var a=this._groups,b=-1,c=a.length;++b<c;)for(var d,e=a[b],f=e.length-1,g=e[f];--f>=0;)(d=e[f])&&(g&&g!==d.nextSibling&&g.parentNode.insertBefore(d,g),g=d);return this}function I(a){function b(b,c){return b&&c?a(b.__data__,c.__data__):!b-!c}a||(a=J);for(var c=this._groups,d=c.length,e=new Array(d),f=0;f<d;++f){for(var g,h=c[f],i=h.length,j=e[f]=new Array(i),k=0;k<i;++k)(g=h[k])&&(j[k]=g);j.sort(b)}return new Ja(e,this._parents).order()}function J(a,b){return a<b?-1:a>b?1:a>=b?0:NaN}function K(){var a=arguments[0];return arguments[0]=this,a.apply(null,arguments),this}function L(){var a=new Array(this.size()),b=-1;return this.each(function(){a[++b]=this}),a}function M(){for(var a=this._groups,b=0,c=a.length;b<c;++b)for(var d=a[b],e=0,f=d.length;e<f;++e){var g=d[e];if(g)return g}return null}function N(){var a=0;return this.each(function(){++a}),a}function O(){return!this.node()}function P(a){for(var b=this._groups,c=0,d=b.length;c<d;++c)for(var e,f=b[c],g=0,h=f.length;g<h;++g)(e=f[g])&&a.call(e,e.__data__,g,f);return this}function Q(a){return function(){this.removeAttribute(a)}}function R(a){return function(){this.removeAttributeNS(a.space,a.local)}}function S(a,b){return function(){this.setAttribute(a,b)}}function T(a,b){return function(){this.setAttributeNS(a.space,a.local,b)}}function U(a,b){return function(){var c=b.apply(this,arguments);null==c?this.removeAttribute(a):this.setAttribute(a,c)}}function V(a,b){return function(){var c=b.apply(this,arguments);null==c?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}}function W(a,c){var d=b(a);if(arguments.length<2){var e=this.node();return d.local?e.getAttributeNS(d.space,d.local):e.getAttribute(d)}return this.each((null==c?d.local?R:Q:"function"==typeof c?d.local?V:U:d.local?T:S)(d,c))}function X(a){return a.ownerDocument&&a.ownerDocument.defaultView||a.document&&a||a.defaultView}function Y(a){return function(){this.style.removeProperty(a)}}function Z(a,b,c){return function(){this.style.setProperty(a,b,c)}}function $(a,b,c){return function(){var d=b.apply(this,arguments);null==d?this.style.removeProperty(a):this.style.setProperty(a,d,c)}}function _(a,b,c){var d;return arguments.length>1?this.each((null==b?Y:"function"==typeof b?$:Z)(a,b,null==c?"":c)):X(d=this.node()).getComputedStyle(d,null).getPropertyValue(a)}function aa(a){return function(){delete this[a]}}function ba(a,b){return function(){this[a]=b}}function ca(a,b){return function(){var c=b.apply(this,arguments);null==c?delete this[a]:this[a]=c}}function da(a,b){return arguments.length>1?this.each((null==b?aa:"function"==typeof b?ca:ba)(a,b)):this.node()[a]}function ea(a){return a.trim().split(/^|\s+/)}function fa(a){return a.classList||new ga(a)}function ga(a){this._node=a,this._names=ea(a.getAttribute("class")||"")}function ha(a,b){for(var c=fa(a),d=-1,e=b.length;++d<e;)c.add(b[d])}function ia(a,b){for(var c=fa(a),d=-1,e=b.length;++d<e;)c.remove(b[d])}function ja(a){return function(){ha(this,a)}}function ka(a){return function(){ia(this,a)}}function la(a,b){return function(){(b.apply(this,arguments)?ha:ia)(this,a)}}function ma(a,b){var c=ea(a+"");if(arguments.length<2){for(var d=fa(this.node()),e=-1,f=c.length;++e<f;)if(!d.contains(c[e]))return!1;return!0}return this.each(("function"==typeof b?la:b?ja:ka)(c,b))}function na(){this.textContent=""}function oa(a){return function(){this.textContent=a}}function pa(a){return function(){var b=a.apply(this,arguments);this.textContent=null==b?"":b}}function qa(a){return arguments.length?this.each(null==a?na:("function"==typeof a?pa:oa)(a)):this.node().textContent}function ra(){this.innerHTML=""}function sa(a){return function(){this.innerHTML=a}}function ta(a){return function(){var b=a.apply(this,arguments);this.innerHTML=null==b?"":b}}function ua(a){return arguments.length?this.each(null==a?ra:("function"==typeof a?ta:sa)(a)):this.node().innerHTML}function va(){this.nextSibling&&this.parentNode.appendChild(this)}function wa(){return this.each(va)}function xa(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ya(){return this.each(xa)}function za(a){var b="function"==typeof a?a:e(a);return this.select(function(){return this.appendChild(b.apply(this,arguments))})}function Aa(){return null}function Ba(a,b){var c="function"==typeof a?a:e(a),d=null==b?Aa:"function"==typeof b?b:s(b);return this.select(function(){return this.insertBefore(c.apply(this,arguments),d.apply(this,arguments)||null)})}function Ca(){var a=this.parentNode;a&&a.removeChild(this)}function Da(){return this.each(Ca)}function Ea(a){return arguments.length?this.property("__data__",a):this.node().__data__}function Fa(a,b,c){var d=X(a),e=d.CustomEvent;e?e=new e(b,c):(e=d.document.createEvent("Event"),c?(e.initEvent(b,c.bubbles,c.cancelable),e.detail=c.detail):e.initEvent(b,!1,!1)),a.dispatchEvent(e)}function Ga(a,b){return function(){return Fa(this,a,b)}}function Ha(a,b){return function(){return Fa(this,a,b.apply(this,arguments))}}function Ia(a,b){return this.each(("function"==typeof b?Ha:Ga)(a,b))}function Ja(a,b){this._groups=a,this._parents=b}function Ka(){return new Ja([[document.documentElement]],Za)}function La(a){return"string"==typeof a?new Ja([[document.querySelector(a)]],[document.documentElement]):new Ja([[a]],Za)}function Ma(a){return"string"==typeof a?new Ja([document.querySelectorAll(a)],[document.documentElement]):new Ja([null==a?[]:a],Za)}function Na(a,b,c){arguments.length<3&&(c=b,b=o().changedTouches);for(var d,e=0,f=b?b.length:0;e<f;++e)if((d=b[e]).identifier===c)return p(a,d);return null}function Oa(a,b){null==b&&(b=o().touches);for(var c=0,d=b?b.length:0,e=new Array(d);c<d;++c)e[c]=p(a,b[c]);return e}var Pa="http://www.w3.org/1999/xhtml",Qa={svg:"http://www.w3.org/2000/svg",xhtml:Pa,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Ra=0;g.prototype=f.prototype={constructor:g,get:function(a){for(var b=this._;!(b in a);)if(!(a=a.parentNode))return;return a[b]},set:function(a,b){return a[this._]=b},remove:function(a){return this._ in a&&delete a[this._]},toString:function(){return this._}};var Sa=function(a){return function(){return this.matches(a)}};if("undefined"!=typeof document){var Ta=document.documentElement;if(!Ta.matches){var Ua=Ta.webkitMatchesSelector||Ta.msMatchesSelector||Ta.mozMatchesSelector||Ta.oMatchesSelector;Sa=function(a){return function(){return Ua.call(this,a)}}}}var Va=Sa,Wa={};if(a.event=null,"undefined"!=typeof document){var Xa=document.documentElement;"onmouseenter"in Xa||(Wa={mouseenter:"mouseover",mouseleave:"mouseout"})}A.prototype={constructor:A,appendChild:function(a){return this._parent.insertBefore(a,this._next)},insertBefore:function(a,b){return this._parent.insertBefore(a,b)},querySelector:function(a){return this._parent.querySelector(a)},querySelectorAll:function(a){return this._parent.querySelectorAll(a)}};var Ya="$";ga.prototype={add:function(a){var b=this._names.indexOf(a);b<0&&(this._names.push(a),this._node.setAttribute("class",this._names.join(" ")))},remove:function(a){var b=this._names.indexOf(a);b>=0&&(this._names.splice(b,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(a){return this._names.indexOf(a)>=0}};var Za=[null];Ja.prototype=Ka.prototype={constructor:Ja,select:t,selectAll:w,filter:x,data:E,enter:z,exit:F,merge:G,order:H,sort:I,call:K,nodes:L,node:M,size:N,empty:O,each:P,attr:W,style:_,property:da,classed:ma,text:qa,html:ua,raise:wa,lower:ya,append:za,insert:Ba,remove:Da,datum:Ea,on:m,dispatch:Ia},a.creator=e,a.local=f,a.matcher=Va,a.mouse=q,a.namespace=b,a.namespaces=Qa,a.select=La,a.selectAll=Ma,a.selection=Ka,a.selector=s,a.selectorAll=v,a.touch=Na,a.touches=Oa,a.window=X,a.customEvent=n,Object.defineProperty(a,"__esModule",{value:!0})})},{}],9:[function(a,b,c){!function(d,e){"object"==typeof c&&"undefined"!=typeof b?e(c,a("d3-time")):"function"==typeof define&&define.amd?define(["exports","d3-time"],e):e(d.d3=d.d3||{},d.d3)}(this,function(a,b){"use strict";function c(a){if(0<=a.y&&a.y<100){var b=new Date(-1,a.m,a.d,a.H,a.M,a.S,a.L);return b.setFullYear(a.y),b}return new Date(a.y,a.m,a.d,a.H,a.M,a.S,a.L)}function d(a){if(0<=a.y&&a.y<100){var b=new Date(Date.UTC(-1,a.m,a.d,a.H,a.M,a.S,a.L));return b.setUTCFullYear(a.y),b}return new Date(Date.UTC(a.y,a.m,a.d,a.H,a.M,a.S,a.L))}function e(a){return{y:a,m:0,d:1,H:0,M:0,S:0,L:0}}function f(a){function b(a,b){return function(c){var d,e,f,g=[],h=-1,i=0,j=a.length;for(c instanceof Date||(c=new Date(+c));++h<j;)37===a.charCodeAt(h)&&(g.push(a.slice(i,h)),null!=(e=da[d=a.charAt(++h)])?d=a.charAt(++h):e="e"===d?" ":"0",(f=b[d])&&(d=f(c,e)),g.push(d),i=h+1);return g.push(a.slice(i,h)),g.join("")}}function f(a,b){return function(c){var f=e(1900),h=g(f,a,c+="",0);if(h!=c.length)return null;if("p"in f&&(f.H=f.H%12+12*f.p),"W"in f||"U"in f){"w"in f||(f.w="W"in f?1:0);var i="Z"in f?d(e(f.y)).getUTCDay():b(e(f.y)).getDay();f.m=0,f.d="W"in f?(f.w+6)%7+7*f.W-(i+5)%7:f.w+7*f.U-(i+6)%7}return"Z"in f?(f.H+=f.Z/100|0,f.M+=f.Z%100,d(f)):b(f)}}function g(a,b,c,d){for(var e,f,g=0,h=b.length,i=c.length;g<h;){if(d>=i)return-1;if(e=b.charCodeAt(g++),
37===e){if(e=b.charAt(g++),f=La[e in da?b.charAt(g++):e],!f||(d=f(a,c,d))<0)return-1}else if(e!=c.charCodeAt(d++))return-1}return d}function h(a,b,c){var d=za.exec(b.slice(c));return d?(a.p=Aa[d[0].toLowerCase()],c+d[0].length):-1}function _(a,b,c){var d=Da.exec(b.slice(c));return d?(a.w=Ea[d[0].toLowerCase()],c+d[0].length):-1}function aa(a,b,c){var d=Ba.exec(b.slice(c));return d?(a.w=Ca[d[0].toLowerCase()],c+d[0].length):-1}function ba(a,b,c){var d=Ha.exec(b.slice(c));return d?(a.m=Ia[d[0].toLowerCase()],c+d[0].length):-1}function ca(a,b,c){var d=Fa.exec(b.slice(c));return d?(a.m=Ga[d[0].toLowerCase()],c+d[0].length):-1}function ea(a,b,c){return g(a,ra,b,c)}function fa(a,b,c){return g(a,sa,b,c)}function ga(a,b,c){return g(a,ta,b,c)}function ha(a){return wa[a.getDay()]}function ia(a){return va[a.getDay()]}function ja(a){return ya[a.getMonth()]}function ka(a){return xa[a.getMonth()]}function la(a){return ua[+(a.getHours()>=12)]}function ma(a){return wa[a.getUTCDay()]}function na(a){return va[a.getUTCDay()]}function oa(a){return ya[a.getUTCMonth()]}function pa(a){return xa[a.getUTCMonth()]}function qa(a){return ua[+(a.getUTCHours()>=12)]}var ra=a.dateTime,sa=a.date,ta=a.time,ua=a.periods,va=a.days,wa=a.shortDays,xa=a.months,ya=a.shortMonths,za=i(ua),Aa=j(ua),Ba=i(va),Ca=j(va),Da=i(wa),Ea=j(wa),Fa=i(xa),Ga=j(xa),Ha=i(ya),Ia=j(ya),Ja={a:ha,A:ia,b:ja,B:ka,c:null,d:y,e:y,H:z,I:A,j:B,L:C,m:D,M:E,p:la,S:F,U:G,w:H,W:I,x:null,X:null,y:J,Y:K,Z:L,"%":$},Ka={a:ma,A:na,b:oa,B:pa,c:null,d:M,e:M,H:N,I:O,j:P,L:Q,m:R,M:S,p:qa,S:T,U:U,w:V,W:W,x:null,X:null,y:X,Y:Y,Z:Z,"%":$},La={a:_,A:aa,b:ba,B:ca,c:ea,d:r,e:r,H:t,I:t,j:s,L:w,m:q,M:u,p:h,S:v,U:l,w:k,W:m,x:fa,X:ga,y:o,Y:n,Z:p,"%":x};return Ja.x=b(sa,Ja),Ja.X=b(ta,Ja),Ja.c=b(ra,Ja),Ka.x=b(sa,Ka),Ka.X=b(ta,Ka),Ka.c=b(ra,Ka),{format:function(a){var c=b(a+="",Ja);return c.toString=function(){return a},c},parse:function(a){var b=f(a+="",c);return b.toString=function(){return a},b},utcFormat:function(a){var c=b(a+="",Ka);return c.toString=function(){return a},c},utcParse:function(a){var b=f(a,d);return b.toString=function(){return a},b}}}function g(a,b,c){var d=a<0?"-":"",e=(d?-a:a)+"",f=e.length;return d+(f<c?new Array(c-f+1).join(b)+e:e)}function h(a){return a.replace(ga,"\\$&")}function i(a){return new RegExp("^(?:"+a.map(h).join("|")+")","i")}function j(a){for(var b={},c=-1,d=a.length;++c<d;)b[a[c].toLowerCase()]=c;return b}function k(a,b,c){var d=ea.exec(b.slice(c,c+1));return d?(a.w=+d[0],c+d[0].length):-1}function l(a,b,c){var d=ea.exec(b.slice(c));return d?(a.U=+d[0],c+d[0].length):-1}function m(a,b,c){var d=ea.exec(b.slice(c));return d?(a.W=+d[0],c+d[0].length):-1}function n(a,b,c){var d=ea.exec(b.slice(c,c+4));return d?(a.y=+d[0],c+d[0].length):-1}function o(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.y=+d[0]+(+d[0]>68?1900:2e3),c+d[0].length):-1}function p(a,b,c){var d=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(b.slice(c,c+6));return d?(a.Z=d[1]?0:-(d[2]+(d[3]||"00")),c+d[0].length):-1}function q(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.m=d[0]-1,c+d[0].length):-1}function r(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.d=+d[0],c+d[0].length):-1}function s(a,b,c){var d=ea.exec(b.slice(c,c+3));return d?(a.m=0,a.d=+d[0],c+d[0].length):-1}function t(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.H=+d[0],c+d[0].length):-1}function u(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.M=+d[0],c+d[0].length):-1}function v(a,b,c){var d=ea.exec(b.slice(c,c+2));return d?(a.S=+d[0],c+d[0].length):-1}function w(a,b,c){var d=ea.exec(b.slice(c,c+3));return d?(a.L=+d[0],c+d[0].length):-1}function x(a,b,c){var d=fa.exec(b.slice(c,c+1));return d?c+d[0].length:-1}function y(a,b){return g(a.getDate(),b,2)}function z(a,b){return g(a.getHours(),b,2)}function A(a,b){return g(a.getHours()%12||12,b,2)}function B(a,c){return g(1+b.timeDay.count(b.timeYear(a),a),c,3)}function C(a,b){return g(a.getMilliseconds(),b,3)}function D(a,b){return g(a.getMonth()+1,b,2)}function E(a,b){return g(a.getMinutes(),b,2)}function F(a,b){return g(a.getSeconds(),b,2)}function G(a,c){return g(b.timeSunday.count(b.timeYear(a),a),c,2)}function H(a){return a.getDay()}function I(a,c){return g(b.timeMonday.count(b.timeYear(a),a),c,2)}function J(a,b){return g(a.getFullYear()%100,b,2)}function K(a,b){return g(a.getFullYear()%1e4,b,4)}function L(a){var b=a.getTimezoneOffset();return(b>0?"-":(b*=-1,"+"))+g(b/60|0,"0",2)+g(b%60,"0",2)}function M(a,b){return g(a.getUTCDate(),b,2)}function N(a,b){return g(a.getUTCHours(),b,2)}function O(a,b){return g(a.getUTCHours()%12||12,b,2)}function P(a,c){return g(1+b.utcDay.count(b.utcYear(a),a),c,3)}function Q(a,b){return g(a.getUTCMilliseconds(),b,3)}function R(a,b){return g(a.getUTCMonth()+1,b,2)}function S(a,b){return g(a.getUTCMinutes(),b,2)}function T(a,b){return g(a.getUTCSeconds(),b,2)}function U(a,c){return g(b.utcSunday.count(b.utcYear(a),a),c,2)}function V(a){return a.getUTCDay()}function W(a,c){return g(b.utcMonday.count(b.utcYear(a),a),c,2)}function X(a,b){return g(a.getUTCFullYear()%100,b,2)}function Y(a,b){return g(a.getUTCFullYear()%1e4,b,4)}function Z(){return"+0000"}function $(){return"%"}function _(b){return ca=f(b),a.timeFormat=ca.format,a.timeParse=ca.parse,a.utcFormat=ca.utcFormat,a.utcParse=ca.utcParse,ca}function aa(a){return a.toISOString()}function ba(a){var b=new Date(a);return isNaN(b)?null:b}var ca,da={"-":"",_:" ",0:"0"},ea=/^\s*\d+/,fa=/^%/,ga=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;_({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var ha="%Y-%m-%dT%H:%M:%S.%LZ",ia=Date.prototype.toISOString?aa:a.utcFormat(ha),ja=+new Date("2000-01-01T00:00:00.000Z")?ba:a.utcParse(ha);a.timeFormatDefaultLocale=_,a.timeFormatLocale=f,a.isoFormat=ia,a.isoParse=ja,Object.defineProperty(a,"__esModule",{value:!0})})},{"d3-time":10}],10:[function(a,b,c){!function(a,d){"object"==typeof c&&"undefined"!=typeof b?d(c):"function"==typeof define&&define.amd?define(["exports"],d):d(a.d3=a.d3||{})}(this,function(a){"use strict";function b(a,c,d,g){function h(b){return a(b=new Date(+b)),b}return h.floor=h,h.ceil=function(b){return a(b=new Date(b-1)),c(b,1),a(b),b},h.round=function(a){var b=h(a),c=h.ceil(a);return a-b<c-a?b:c},h.offset=function(a,b){return c(a=new Date(+a),null==b?1:Math.floor(b)),a},h.range=function(b,d,e){var f=[];if(b=h.ceil(b),e=null==e?1:Math.floor(e),!(b<d&&e>0))return f;do f.push(new Date(+b));while(c(b,e),a(b),b<d);return f},h.filter=function(d){return b(function(b){if(b>=b)for(;a(b),!d(b);)b.setTime(b-1)},function(a,b){if(a>=a)for(;--b>=0;)for(;c(a,1),!d(a););})},d&&(h.count=function(b,c){return e.setTime(+b),f.setTime(+c),a(e),a(f),Math.floor(d(e,f))},h.every=function(a){return a=Math.floor(a),isFinite(a)&&a>0?a>1?h.filter(g?function(b){return g(b)%a===0}:function(b){return h.count(0,b)%a===0}):h:null}),h}function c(a){return b(function(b){b.setDate(b.getDate()-(b.getDay()+7-a)%7),b.setHours(0,0,0,0)},function(a,b){a.setDate(a.getDate()+7*b)},function(a,b){return(b-a-(b.getTimezoneOffset()-a.getTimezoneOffset())*j)/m})}function d(a){return b(function(b){b.setUTCDate(b.getUTCDate()-(b.getUTCDay()+7-a)%7),b.setUTCHours(0,0,0,0)},function(a,b){a.setUTCDate(a.getUTCDate()+7*b)},function(a,b){return(b-a)/m})}var e=new Date,f=new Date,g=b(function(){},function(a,b){a.setTime(+a+b)},function(a,b){return b-a});g.every=function(a){return a=Math.floor(a),isFinite(a)&&a>0?a>1?b(function(b){b.setTime(Math.floor(b/a)*a)},function(b,c){b.setTime(+b+c*a)},function(b,c){return(c-b)/a}):g:null};var h=g.range,i=1e3,j=6e4,k=36e5,l=864e5,m=6048e5,n=b(function(a){a.setTime(Math.floor(a/i)*i)},function(a,b){a.setTime(+a+b*i)},function(a,b){return(b-a)/i},function(a){return a.getUTCSeconds()}),o=n.range,p=b(function(a){a.setTime(Math.floor(a/j)*j)},function(a,b){a.setTime(+a+b*j)},function(a,b){return(b-a)/j},function(a){return a.getMinutes()}),q=p.range,r=b(function(a){var b=a.getTimezoneOffset()*j%k;b<0&&(b+=k),a.setTime(Math.floor((+a-b)/k)*k+b)},function(a,b){a.setTime(+a+b*k)},function(a,b){return(b-a)/k},function(a){return a.getHours()}),s=r.range,t=b(function(a){a.setHours(0,0,0,0)},function(a,b){a.setDate(a.getDate()+b)},function(a,b){return(b-a-(b.getTimezoneOffset()-a.getTimezoneOffset())*j)/l},function(a){return a.getDate()-1}),u=t.range,v=c(0),w=c(1),x=c(2),y=c(3),z=c(4),A=c(5),B=c(6),C=v.range,D=w.range,E=x.range,F=y.range,G=z.range,H=A.range,I=B.range,J=b(function(a){a.setDate(1),a.setHours(0,0,0,0)},function(a,b){a.setMonth(a.getMonth()+b)},function(a,b){return b.getMonth()-a.getMonth()+12*(b.getFullYear()-a.getFullYear())},function(a){return a.getMonth()}),K=J.range,L=b(function(a){a.setMonth(0,1),a.setHours(0,0,0,0)},function(a,b){a.setFullYear(a.getFullYear()+b)},function(a,b){return b.getFullYear()-a.getFullYear()},function(a){return a.getFullYear()});L.every=function(a){return isFinite(a=Math.floor(a))&&a>0?b(function(b){b.setFullYear(Math.floor(b.getFullYear()/a)*a),b.setMonth(0,1),b.setHours(0,0,0,0)},function(b,c){b.setFullYear(b.getFullYear()+c*a)}):null};var M=L.range,N=b(function(a){a.setUTCSeconds(0,0)},function(a,b){a.setTime(+a+b*j)},function(a,b){return(b-a)/j},function(a){return a.getUTCMinutes()}),O=N.range,P=b(function(a){a.setUTCMinutes(0,0,0)},function(a,b){a.setTime(+a+b*k)},function(a,b){return(b-a)/k},function(a){return a.getUTCHours()}),Q=P.range,R=b(function(a){a.setUTCHours(0,0,0,0)},function(a,b){a.setUTCDate(a.getUTCDate()+b)},function(a,b){return(b-a)/l},function(a){return a.getUTCDate()-1}),S=R.range,T=d(0),U=d(1),V=d(2),W=d(3),X=d(4),Y=d(5),Z=d(6),$=T.range,_=U.range,aa=V.range,ba=W.range,ca=X.range,da=Y.range,ea=Z.range,fa=b(function(a){a.setUTCDate(1),a.setUTCHours(0,0,0,0)},function(a,b){a.setUTCMonth(a.getUTCMonth()+b)},function(a,b){return b.getUTCMonth()-a.getUTCMonth()+12*(b.getUTCFullYear()-a.getUTCFullYear())},function(a){return a.getUTCMonth()}),ga=fa.range,ha=b(function(a){a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0)},function(a,b){a.setUTCFullYear(a.getUTCFullYear()+b)},function(a,b){return b.getUTCFullYear()-a.getUTCFullYear()},function(a){return a.getUTCFullYear()});ha.every=function(a){return isFinite(a=Math.floor(a))&&a>0?b(function(b){b.setUTCFullYear(Math.floor(b.getUTCFullYear()/a)*a),b.setUTCMonth(0,1),b.setUTCHours(0,0,0,0)},function(b,c){b.setUTCFullYear(b.getUTCFullYear()+c*a)}):null};var ia=ha.range;a.timeInterval=b,a.timeMillisecond=g,a.timeMilliseconds=h,a.utcMillisecond=g,a.utcMilliseconds=h,a.timeSecond=n,a.timeSeconds=o,a.utcSecond=n,a.utcSeconds=o,a.timeMinute=p,a.timeMinutes=q,a.timeHour=r,a.timeHours=s,a.timeDay=t,a.timeDays=u,a.timeWeek=v,a.timeWeeks=C,a.timeSunday=v,a.timeSundays=C,a.timeMonday=w,a.timeMondays=D,a.timeTuesday=x,a.timeTuesdays=E,a.timeWednesday=y,a.timeWednesdays=F,a.timeThursday=z,a.timeThursdays=G,a.timeFriday=A,a.timeFridays=H,a.timeSaturday=B,a.timeSaturdays=I,a.timeMonth=J,a.timeMonths=K,a.timeYear=L,a.timeYears=M,a.utcMinute=N,a.utcMinutes=O,a.utcHour=P,a.utcHours=Q,a.utcDay=R,a.utcDays=S,a.utcWeek=T,a.utcWeeks=$,a.utcSunday=T,a.utcSundays=$,a.utcMonday=U,a.utcMondays=_,a.utcTuesday=V,a.utcTuesdays=aa,a.utcWednesday=W,a.utcWednesdays=ba,a.utcThursday=X,a.utcThursdays=ca,a.utcFriday=Y,a.utcFridays=da,a.utcSaturday=Z,a.utcSaturdays=ea,a.utcMonth=fa,a.utcMonths=ga,a.utcYear=ha,a.utcYears=ia,Object.defineProperty(a,"__esModule",{value:!0})})},{}],11:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var h=g.default.d3_calcType(b,z,m,o,s.format(t),w),i=a.selectAll("g").data([b]);i.enter().append("g").attr("class",p+"legendCells"),n&&g.default.d3_filterCells(h,n);var j=a.select("."+p+"legendCells").selectAll("."+p+"cell").data(h.data),D=j.enter().append("g").attr("class",p+"cell");D.append(c).attr("class",p+"swatch");var E=a.selectAll("g."+p+"cell "+c+"."+p+"swatch").data(h.data);g.default.d3_addEvents(D,C),j.exit().transition().style("opacity",0).remove(),E.exit().transition().style("opacity",0).remove(),E=E.merge(E),g.default.d3_drawShapes(c,E,e,d,f,A);var F=g.default.d3_addText(a,D,h.labels,p,x);j=D.merge(j);var G=F.nodes().map(function(a){return a.getBBox()}),H=E.nodes().map(function(a){return a.getBBox()});q?E.attr("class",function(a){return p+"swatch "+h.feature(a)}):"line"==c?E.style("stroke",h.feature):E.style("fill",h.feature);var I=void 0,J=void 0,K="start"==v?0:"middle"==v?.5:1;"vertical"===y?!function(){var a=G.map(function(a,b){return Math.max(a.height,H[b].height)});I=function(b,c){var d=(0,k.sum)(a.slice(0,c));return"translate(0, "+(d+c*l)+")"},J=function(a,b){return"translate( "+(H[b].width+H[b].x+u)+", "+(H[b].y+H[b].height/2+5)+")"}}():"horizontal"===y&&(I=function(a,b){return"translate("+b*(H[b].width+l)+",0)"},J=function(a,b){return"translate("+(H[b].width*K+H[b].x)+",\n          "+(H[b].height+H[b].y+u+8)+")"}),g.default.d3_placement(y,j,I,F,J,v),g.default.d3_title(a,r,p,B),j.transition().style("opacity",1)}var b=(0,i.scaleLinear)(),c="rect",d=15,e=15,f=10,l=2,m=[5],n=void 0,o=[],p="",q=!1,r="",s=g.default.d3_defaultLocale,t=g.default.d3_defaultFormatSpecifier,u=10,v="middle",w=g.default.d3_defaultDelimiter,x=void 0,y="vertical",z=!1,A=void 0,B=void 0,C=(0,h.dispatch)("cellover","cellout","cellclick");return a.scale=function(c){return arguments.length?(b=c,a):b},a.cells=function(b){return arguments.length?((b.length>1||b>=2)&&(m=b),a):m},a.cellFilter=function(b){return arguments.length?(n=b,a):n},a.shape=function(b,d){return arguments.length?(("rect"==b||"circle"==b||"line"==b||"path"==b&&"string"==typeof d)&&(c=b,A=d),a):c},a.shapeWidth=function(b){return arguments.length?(d=+b,a):d},a.shapeHeight=function(b){return arguments.length?(e=+b,a):e},a.shapeRadius=function(b){return arguments.length?(f=+b,a):f},a.shapePadding=function(b){return arguments.length?(l=+b,a):l},a.labels=function(b){return arguments.length?(o=b,a):o},a.labelAlign=function(b){return arguments.length?("start"!=b&&"end"!=b&&"middle"!=b||(v=b),a):v},a.locale=function(b){return arguments.length?(s=(0,j.formatLocale)(b),a):s},a.labelFormat=function(b){return arguments.length?(t=(0,j.formatSpecifier)(b),a):a.locale().format(t)},a.labelOffset=function(b){return arguments.length?(u=+b,a):u},a.labelDelimiter=function(b){return arguments.length?(w=b,a):w},a.labelWrap=function(b){return arguments.length?(x=b,a):x},a.useClass=function(b){return arguments.length?(b!==!0&&b!==!1||(q=b),a):q},a.orient=function(b){return arguments.length?(b=b.toLowerCase(),"horizontal"!=b&&"vertical"!=b||(y=b),a):y},a.ascending=function(b){return arguments.length?(z=!!b,a):z},a.classPrefix=function(b){return arguments.length?(p=b,a):p},a.title=function(b){return arguments.length?(r=b,a):r},a.titleWidth=function(b){return arguments.length?(B=b,a):B},a.textWrap=function(b){return arguments.length?(textWrap=b,a):textWrap},a.on=function(){var b=C.on.apply(C,arguments);return b===C?a:b},a}Object.defineProperty(c,"__esModule",{value:!0}),c.default=e;var f=a("./legend"),g=d(f),h=a("d3-dispatch"),i=a("d3-scale"),j=a("d3-format"),k=a("d3-array")},{"./legend":13,"d3-array":1,"d3-dispatch":4,"d3-format":5,"d3-scale":7}],12:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=c.thresholdLabels=function(a){var b=a.i,c=a.genLength,d=a.generatedLabels,e=a.labelDelimiter;if(0===b){var f=d[b].split(" "+e+" ");return"Less than "+f[1]}if(b===c-1){var g=d[b].split(" "+e+" ");return g[0]+" or more"}return d[b]};c.default={thresholdLabels:d}},{}],13:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e=a("d3-selection"),f=a("d3-format"),g=function(a){return a},h=function(a){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[d-c-1];return b},i=function(a,b){a.each(function(){for(var a,c=(0,e.select)(this),d=c.text().split(/\s+/).reverse(),f=[],g=1.2,h=(c.attr("y"),parseFloat(c.attr("dy"))||0),i=c.text(null).append("tspan").attr("x",0).attr("dy",h+"em");a=d.pop();)f.push(a),i.text(f.join(" ")),i.node().getComputedTextLength()>b&&f.length>1&&(f.pop(),i.text(f.join(" ")),f=[a],i=c.append("tspan").attr("x",0).attr("dy",g+h+"em").text(a))})},j=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments[1],c=arguments[2],e=arguments[3],f=arguments[4];if("object"===("undefined"==typeof b?"undefined":d(b))){if(0===b.length)return a;for(var g=b.length;g<a.length;g++)b.push(a[g]);return b}if("function"==typeof b){for(var h=[],i=a.length,j=0;j<i;j++)h.push(b({i:j,genLength:i,generatedLabels:a,domain:c,range:e,labelDelimiter:f}));return h}return a},k=function(a,b,c){var d=[];if(b.length>1)d=b;else for(var e=a.domain(),f=(e[e.length-1]-e[0])/(b-1),g=0;g<b;g++)d.push(e[0]+g*f);var h=d.map(c);return{data:d,labels:h,feature:function(b){return a(b)}}},l=function(a,b,c){var d=a.range().map(function(d){var e=a.invertExtent(d);return b(e[0])+" "+c+" "+b(e[1])});return{data:a.range(),labels:d,feature:g}},m=function(a){return{data:a.domain(),labels:a.domain(),feature:function(b){return a(b)}}},n=function(a,b,c){a.call("cellover",c,b)},o=function(a,b,c){a.call("cellout",c,b)},p=function(a,b,c){a.call("cellclick",c,b)};c.default={d3_drawShapes:function(a,b,c,d,e,f){"rect"===a?b.attr("height",c).attr("width",d):"circle"===a?b.attr("r",e):"line"===a?b.attr("x1",0).attr("x2",d).attr("y1",0).attr("y2",0):"path"===a&&b.attr("d",f)},d3_addText:function(a,b,c,d,e){b.append("text").attr("class",d+"label");var f=a.selectAll("g."+d+"cell text."+d+"label").data(c).text(g);return e&&a.selectAll("g."+d+"cell text."+d+"label").call(i,e),f},d3_calcType:function(a,b,c,d,e,f){var g=a.invertExtent?l(a,e,f):a.ticks?k(a,c,e):m(a),i=a.range&&a.range()||a.domain();return g.labels=j(g.labels,d,a.domain(),i,f),b&&(g.labels=h(g.labels),g.data=h(g.data)),g},d3_filterCells:function(a,b){var c=a.data.map(function(b,c){return{data:b,label:a.labels[c]}}).filter(b),d=c.map(function(a){return a.data}),e=c.map(function(a){return a.label});return a.data=a.data.filter(function(a){return d.indexOf(a)!==-1}),a.labels=a.labels.filter(function(a){return e.indexOf(a)!==-1}),a},d3_placement:function(a,b,c,d,e,f){b.attr("transform",c),d.attr("transform",e),"horizontal"===a&&d.style("text-anchor",f)},d3_addEvents:function(a,b){a.on("mouseover.legend",function(a){n(b,a,this)}).on("mouseout.legend",function(a){o(b,a,this)}).on("click.legend",function(a){p(b,a,this)})},d3_title:function(a,b,c,d){if(""!==b){var e=a.selectAll("text."+c+"legendTitle");e.data([b]).enter().append("text").attr("class",c+"legendTitle"),a.selectAll("text."+c+"legendTitle").text(b),d&&a.selectAll("text."+c+"legendTitle").call(i,d);var f=a.select("."+c+"legendCells"),g=a.select("."+c+"legendTitle").nodes().map(function(a){return a.getBBox().height})[0],h=-f.nodes().map(function(a){return a.getBBox().x})[0];f.attr("transform","translate("+h+","+g+")")}},d3_defaultLocale:{format:f.format,formatPrefix:f.formatPrefix},d3_defaultFormatSpecifier:".01f",d3_defaultDelimiter:"to"}},{"d3-format":5,"d3-selection":8}],14:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var h=g.default.d3_calcType(b,w,f,m,p.format(q),t),i=a.selectAll("g").data([b]);l&&g.default.d3_filterCells(h,l),i.enter().append("g").attr("class",n+"legendCells");var j=a.select("."+n+"legendCells").selectAll("."+n+"cell").data(h.data),A=j.enter().append("g").attr("class",n+"cell");A.append(c).attr("class",n+"swatch");var B=a.selectAll("g."+n+"cell "+c+"."+n+"swatch");g.default.d3_addEvents(A,z),j.exit().transition().style("opacity",0).remove(),B.exit().transition().style("opacity",0).remove(),B=B.merge(B),"line"===c?(g.default.d3_drawShapes(c,B,0,d),B.attr("stroke-width",h.feature)):g.default.d3_drawShapes(c,B,h.feature,h.feature,h.feature,x);var C=g.default.d3_addText(a,A,h.labels,n,u);j=A.merge(j);var D=C.nodes().map(function(a){return a.getBBox()}),E=B.nodes().map(function(a,d){var e=a.getBBox(),f=b(h.data[d]);return"line"===c&&"horizontal"===v?e.height=e.height+f:"line"===c&&"vertical"===v&&(e.width=e.width),e}),F=(0,k.max)(E,function(a){return a.height+a.y}),G=(0,k.max)(E,function(a){return a.width+a.x}),H=void 0,I=void 0,J="start"==s?0:"middle"==s?.5:1;"vertical"===v?!function(){var a=D.map(function(a,b){return Math.max(a.height,E[b].height)}),b="circle"==c||"line"==c?E[0].height/2:0;H=function(c,d){var f=(0,k.sum)(a.slice(0,d));return"translate(0, "+(b+f+d*e)+")"},I=function(a,b){return"translate( "+(G+r)+",\n          "+(E[b].y+E[b].height/2+5)+")"}}():"horizontal"===v&&!function(){H=function(a,b){var d=(0,k.sum)(E.slice(0,b),function(a){return a.width}),f="circle"==c||"line"==c?F/2:0;return"translate("+(d+b*e)+", "+f+")"};var a="line"==c?F/2:F;I=function(b,c){return"translate( "+(E[c].width*J+E[c].x)+",\n              "+(a+r)+")"}}(),g.default.d3_placement(v,j,H,C,I,s),g.default.d3_title(a,o,n,y),j.transition().style("opacity",1)}var b=(0,i.scaleLinear)(),c="rect",d=15,e=2,f=[5],l=void 0,m=[],n="",o="",p=g.default.d3_defaultLocale,q=g.default.d3_defaultFormatSpecifier,r=10,s="middle",t=g.default.d3_defaultDelimiter,u=void 0,v="vertical",w=!1,x=void 0,y=void 0,z=(0,h.dispatch)("cellover","cellout","cellclick");return a.scale=function(c){return arguments.length?(b=c,a):b},a.cells=function(b){return arguments.length?((b.length>1||b>=2)&&(f=b),a):f},a.cellFilter=function(b){return arguments.length?(l=b,a):l},a.shape=function(b,d){return arguments.length?("rect"!=b&&"circle"!=b&&"line"!=b||(c=b,x=d),a):c},a.shapeWidth=function(b){return arguments.length?(d=+b,a):d},a.shapePadding=function(b){return arguments.length?(e=+b,a):e},a.labels=function(b){return arguments.length?(m=b,a):m},a.labelAlign=function(b){return arguments.length?("start"!=b&&"end"!=b&&"middle"!=b||(s=b),a):s},a.locale=function(b){return arguments.length?(p=(0,j.formatLocale)(b),a):p},a.labelFormat=function(b){return arguments.length?(q=(0,j.formatSpecifier)(b),a):a.locale().format(q)},a.labelOffset=function(b){return arguments.length?(r=+b,a):r},a.labelDelimiter=function(b){return arguments.length?(t=b,a):t},a.labelWrap=function(b){return arguments.length?(u=b,a):u},a.orient=function(b){return arguments.length?(b=b.toLowerCase(),"horizontal"!=b&&"vertical"!=b||(v=b),a):v},a.ascending=function(b){return arguments.length?(w=!!b,a):w},a.classPrefix=function(b){return arguments.length?(n=b,a):n},a.title=function(b){return arguments.length?(o=b,a):o},a.titleWidth=function(b){return arguments.length?(y=b,a):y},a.on=function(){var b=z.on.apply(z,arguments);return b===z?a:b},a}Object.defineProperty(c,"__esModule",{value:!0}),c.default=e;var f=a("./legend"),g=d(f),h=a("d3-dispatch"),i=a("d3-scale"),j=a("d3-format"),k=a("d3-array")},{"./legend":13,"d3-array":1,"d3-dispatch":4,"d3-format":5,"d3-scale":7}],15:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var h=g.default.d3_calcType(b,y,m,o,r.format(s),v),i=a.selectAll("g").data([b]);n&&g.default.d3_filterCells(h,n),i.enter().append("g").attr("class",p+"legendCells");var j=a.select("."+p+"legendCells").selectAll("."+p+"cell").data(h.data),B=j.enter().append("g").attr("class",p+"cell");B.append(c).attr("class",p+"swatch");var C=a.selectAll("g."+p+"cell "+c+"."+p+"swatch");g.default.d3_addEvents(B,A),j.exit().transition().style("opacity",0).remove(),C.exit().transition().style("opacity",0).remove(),C=C.merge(C),g.default.d3_drawShapes(c,C,e,d,f,h.feature);var D=g.default.d3_addText(a,B,h.labels,p,w);j=B.merge(j);var E=D.nodes().map(function(a){return a.getBBox()}),F=C.nodes().map(function(a){return a.getBBox()}),G=(0,k.max)(F,function(a){return a.height}),H=(0,k.max)(F,function(a){return a.width}),I=void 0,J=void 0,K="start"==t?0:"middle"==t?.5:1;"vertical"===x?!function(){var a=E.map(function(a,b){return Math.max(G,a.height)});I=function(b,c){var d=(0,k.sum)(a.slice(0,c));return"translate(0, "+(d+c*l)+" )"},J=function(a,b){return"translate( "+(H+u)+",\n              "+(F[b].y+F[b].height/2+5)+")"}}():"horizontal"===x&&(I=function(a,b){return"translate( "+b*(H+l)+",0)"},J=function(a,b){return"translate( "+(F[b].width*K+F[b].x)+",\n              "+(G+u)+")"}),g.default.d3_placement(x,j,I,D,J,t),g.default.d3_title(a,q,p,z),j.transition().style("opacity",1)}var b=(0,i.scaleLinear)(),c="path",d=15,e=15,f=10,l=5,m=[5],n=void 0,o=[],p="",q="",r=g.default.d3_defaultLocale,s=g.default.d3_defaultFormatSpecifier,t="middle",u=10,v=g.default.d3_defaultDelimiter,w=void 0,x="vertical",y=!1,z=void 0,A=(0,h.dispatch)("cellover","cellout","cellclick");return a.scale=function(c){return arguments.length?(b=c,a):b},a.cells=function(b){return arguments.length?((b.length>1||b>=2)&&(m=b),a):m},a.cellFilter=function(b){return arguments.length?(n=b,a):n},a.shapePadding=function(b){return arguments.length?(l=+b,a):l},a.labels=function(b){return arguments.length?(o=b,a):o},a.labelAlign=function(b){return arguments.length?("start"!=b&&"end"!=b&&"middle"!=b||(t=b),a):t},a.locale=function(b){return arguments.length?(r=(0,j.formatLocale)(b),a):r},a.labelFormat=function(b){return arguments.length?(s=(0,j.formatSpecifier)(b),a):a.locale().format(s)},a.labelOffset=function(b){return arguments.length?(u=+b,a):u},a.labelDelimiter=function(b){return arguments.length?(v=b,a):v},a.labelWrap=function(b){return arguments.length?(w=b,a):w},a.orient=function(b){return arguments.length?(b=b.toLowerCase(),"horizontal"!=b&&"vertical"!=b||(x=b),a):x},a.ascending=function(b){return arguments.length?(y=!!b,a):y},a.classPrefix=function(b){return arguments.length?(p=b,a):p},a.title=function(b){return arguments.length?(q=b,a):q},a.titleWidth=function(b){return arguments.length?(z=b,a):z},a.on=function(){var b=A.on.apply(A,arguments);return b===A?a:b},a}Object.defineProperty(c,"__esModule",{value:!0}),c.default=e;var f=a("./legend"),g=d(f),h=a("d3-dispatch"),i=a("d3-scale"),j=a("d3-format"),k=a("d3-array")},{"./legend":13,"d3-array":1,"d3-dispatch":4,"d3-format":5,"d3-scale":7}],16:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=a("./color"),f=d(e),g=a("./size"),h=d(g),i=a("./symbol"),j=d(i),k=a("./helpers"),l=d(k);d3.legendColor=f.default,d3.legendSize=h.default,d3.legendSymbol=j.default,d3.legendHelpers=l.default},{"./color":11,"./helpers":12,"./size":14,"./symbol":15}]},{},[16]);

// d3.tip
// Copyright (c) 2013 Justin Palmer
// ES6 / D3 v4 Adaption Copyright (c) 2016 Constantin Gavrilete
// Removal of ES6 for D3 v4 Adaption Copyright (c) 2016 David Gotz
//
// Tooltips for d3.js SVG visualizations

d3.functor = function functor(v) {
  return typeof v === "function" ? v : function() {
    return v;
  };
};

d3.tip = function() {

  var direction = d3_tip_direction,
      offset    = d3_tip_offset,
      html      = d3_tip_html,
      node      = initNode(),
      svg       = null,
      point     = null,
      target    = null

  function tip(vis) {
    svg = getSVGNode(vis)
    point = svg.createSVGPoint()
    document.body.appendChild(node)
  }

  // Public - show the tooltip on the screen
  //
  // Returns a tip
  tip.show = function() {
    var args = Array.prototype.slice.call(arguments)
    if(args[args.length - 1] instanceof SVGElement) target = args.pop()

    var content = html.apply(this, args),
        poffset = offset.apply(this, args),
        dir     = direction.apply(this, args),
        nodel   = getNodeEl(),
        i       = directions.length,
        coords,
        scrollTop  = document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft

    nodel.html(content)
      .style('position', 'absolute')
      .style('opacity', 1)
      .style('pointer-events', 'all')

    while(i--) nodel.classed(directions[i], false)
    coords = direction_callbacks[dir].apply(this)
    nodel.classed(dir, true)
      .style('top', (coords.top +  poffset[0]) + scrollTop + 'px')
      .style('left', (coords.left + poffset[1]) + scrollLeft + 'px')

    return tip
  }

  // Public - hide the tooltip
  //
  // Returns a tip
  tip.hide = function() {
    var nodel = getNodeEl()
    nodel
      .style('opacity', 0)
      .style('pointer-events', 'none')
    return tip
  }

  // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  tip.attr = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().attr(n)
    } else {
      var args =  Array.prototype.slice.call(arguments)
      d3.selection.prototype.attr.apply(getNodeEl(), args)
    }

    return tip
  }

  // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
  //
  // n - name of the property
  // v - value of the property
  //
  // Returns tip or style property value
  tip.style = function(n, v) {
    // debugger;
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().style(n)
    } else {
      var args = Array.prototype.slice.call(arguments);
      if (args.length === 1) {
        var styles = args[0];
        Object.keys(styles).forEach(function(key) {
          return d3.selection.prototype.style.apply(getNodeEl(), [key, styles[key]]);
        });
      }
    }

    return tip
  }

  // Public: Set or get the direction of the tooltip
  //
  // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
  //     sw(southwest), ne(northeast) or se(southeast)
  //
  // Returns tip or direction
  tip.direction = function(v) {
    if (!arguments.length) return direction
    direction = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function(v) {
    if (!arguments.length) return offset
    offset = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: sets or gets the html value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns html value or tip
  tip.html = function(v) {
    if (!arguments.length) return html
    html = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: destroys the tooltip and removes it from the DOM
  //
  // Returns a tip
  tip.destroy = function() {
    if(node) {
      getNodeEl().remove();
      node = null;
    }
    return tip;
  }

  function d3_tip_direction() { return 'n' }
  function d3_tip_offset() { return [0, 0] }
  function d3_tip_html() { return ' ' }

  var direction_callbacks = {
    n:  direction_n,
    s:  direction_s,
    e:  direction_e,
    w:  direction_w,
    nw: direction_nw,
    ne: direction_ne,
    sw: direction_sw,
    se: direction_se
  };

  var directions = Object.keys(direction_callbacks);

  function direction_n() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.n.y - node.offsetHeight,
      left: bbox.n.x - node.offsetWidth / 2
    }
  }

  function direction_s() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.s.y,
      left: bbox.s.x - node.offsetWidth / 2
    }
  }

  function direction_e() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.e.y - node.offsetHeight / 2,
      left: bbox.e.x
    }
  }

  function direction_w() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.w.y - node.offsetHeight / 2,
      left: bbox.w.x - node.offsetWidth
    }
  }

  function direction_nw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.nw.y - node.offsetHeight,
      left: bbox.nw.x - node.offsetWidth
    }
  }

  function direction_ne() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.ne.y - node.offsetHeight,
      left: bbox.ne.x
    }
  }

  function direction_sw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.sw.y,
      left: bbox.sw.x - node.offsetWidth
    }
  }

  function direction_se() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.se.y,
      left: bbox.e.x
    }
  }

  function initNode() {
    var node = d3.select(document.createElement('div'))
    node
      .style('position', 'absolute')
      .style('top', 0)
      .style('opacity', 0)
      .style('pointer-events', 'none')
      .style('box-sizing', 'border-box')

    return node.node()
  }

  function getSVGNode(el) {
    el = el.node()
    if(el.tagName.toLowerCase() === 'svg')
      return el

    return el.ownerSVGElement
  }

  function getNodeEl() {
    if(node === null) {
      node = initNode();
      // re-add node to DOM
      document.body.appendChild(node);
    };
    return d3.select(node);
  }

  // Private - gets the screen coordinates of a shape
  //
  // Given a shape on the screen, will return an SVGPoint for the directions
  // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
  // sw(southwest).
  //
  //    +-+-+
  //    |   |
  //    +   +
  //    |   |
  //    +-+-+
  //
  // Returns an Object {n, s, e, w, nw, sw, ne, se}
  function getScreenBBox() {
    var targetel   = target || d3.event.target;

    while ('undefined' === typeof targetel.getScreenCTM && 'undefined' === targetel.parentNode) {
        targetel = targetel.parentNode;
    }

    var bbox       = {},
        matrix     = targetel.getScreenCTM(),
        tbbox      = targetel.getBBox(),
        width      = tbbox.width,
        height     = tbbox.height,
        x          = tbbox.x,
        y          = tbbox.y

    point.x = x
    point.y = y
    bbox.nw = point.matrixTransform(matrix)
    point.x += width
    bbox.ne = point.matrixTransform(matrix)
    point.y += height
    bbox.se = point.matrixTransform(matrix)
    point.x -= width
    bbox.sw = point.matrixTransform(matrix)
    point.y -= height / 2
    bbox.w  = point.matrixTransform(matrix)
    point.x += width
    bbox.e = point.matrixTransform(matrix)
    point.x -= width / 2
    point.y -= height / 2
    bbox.n = point.matrixTransform(matrix)
    point.y += height
    bbox.s = point.matrixTransform(matrix)

    return bbox
  }

  return tip
};

// https://d3js.org/d3-interpolate/ v1.4.0 Copyright 2019 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-color")):"function"==typeof define&&define.amd?define(["exports","d3-color"],n):n((t=t||self).d3=t.d3||{},t.d3)}(this,function(t,n){"use strict";function r(t,n,r,e,a){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*r+(1+3*t+3*o-3*u)*e+u*a)/6}function e(t){var n=t.length-1;return function(e){var a=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),o=t[a],u=t[a+1],i=a>0?t[a-1]:2*o-u,l=a<n-1?t[a+2]:2*u-o;return r((e-a/n)*n,i,o,u,l)}}function a(t){var n=t.length;return function(e){var a=Math.floor(((e%=1)<0?++e:e)*n),o=t[(a+n-1)%n],u=t[a%n],i=t[(a+1)%n],l=t[(a+2)%n];return r((e-a/n)*n,o,u,i,l)}}function o(t){return function(){return t}}function u(t,n){return function(r){return t+r*n}}function i(t,n){var r=n-t;return r?u(t,r>180||r<-180?r-360*Math.round(r/360):r):o(isNaN(t)?n:t)}function l(t){return 1==(t=+t)?c:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):o(isNaN(n)?r:n)}}function c(t,n){var r=n-t;return r?u(t,r):o(isNaN(t)?n:t)}var f=function t(r){var e=l(r);function a(t,r){var a=e((t=n.rgb(t)).r,(r=n.rgb(r)).r),o=e(t.g,r.g),u=e(t.b,r.b),i=c(t.opacity,r.opacity);return function(n){return t.r=a(n),t.g=o(n),t.b=u(n),t.opacity=i(n),t+""}}return a.gamma=t,a}(1);function s(t){return function(r){var e,a,o=r.length,u=new Array(o),i=new Array(o),l=new Array(o);for(e=0;e<o;++e)a=n.rgb(r[e]),u[e]=a.r||0,i[e]=a.g||0,l[e]=a.b||0;return u=t(u),i=t(i),l=t(l),a.opacity=1,function(t){return a.r=u(t),a.g=i(t),a.b=l(t),a+""}}}var p=s(e),h=s(a);function v(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,a=n.slice();return function(o){for(r=0;r<e;++r)a[r]=t[r]*(1-o)+n[r]*o;return a}}function g(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function d(t,n){var r,e=n?n.length:0,a=t?Math.min(e,t.length):0,o=new Array(a),u=new Array(e);for(r=0;r<a;++r)o[r]=X(t[r],n[r]);for(;r<e;++r)u[r]=n[r];return function(t){for(r=0;r<a;++r)u[r]=o[r](t);return u}}function y(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function m(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}function M(t,n){var r,e={},a={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=X(t[r],n[r]):a[r]=n[r];return function(t){for(r in e)a[r]=e[r](t);return a}}var b=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,x=new RegExp(b.source,"g");function w(t,n){var r,e,a,o=b.lastIndex=x.lastIndex=0,u=-1,i=[],l=[];for(t+="",n+="";(r=b.exec(t))&&(e=x.exec(n));)(a=e.index)>o&&(a=n.slice(o,a),i[u]?i[u]+=a:i[++u]=a),(r=r[0])===(e=e[0])?i[u]?i[u]+=e:i[++u]=e:(i[++u]=null,l.push({i:u,x:m(r,e)})),o=x.lastIndex;return o<n.length&&(a=n.slice(o),i[u]?i[u]+=a:i[++u]=a),i.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)i[(r=l[e]).i]=r.x(t);return i.join("")})}function X(t,r){var e,a=typeof r;return null==r||"boolean"===a?o(r):("number"===a?m:"string"===a?(e=n.color(r))?(r=e,f):w:r instanceof n.color?f:r instanceof Date?y:g(r)?v:Array.isArray(r)?d:"function"!=typeof r.valueOf&&"function"!=typeof r.toString||isNaN(r)?M:m)(t,r)}var A,N,C,Y,j=180/Math.PI,q={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function k(t,n,r,e,a,o){var u,i,l;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(i=Math.sqrt(r*r+e*e))&&(r/=i,e/=i,l/=i),t*e<n*r&&(t=-t,n=-n,l=-l,u=-u),{translateX:a,translateY:o,rotate:Math.atan2(n,t)*j,skewX:Math.atan(l)*j,scaleX:u,scaleY:i}}function D(t,n,r,e){function a(t){return t.length?t.pop()+" ":""}return function(o,u){var i=[],l=[];return o=t(o),u=t(u),function(t,e,a,o,u,i){if(t!==a||e!==o){var l=u.push("translate(",null,n,null,r);i.push({i:l-4,x:m(t,a)},{i:l-2,x:m(e,o)})}else(a||o)&&u.push("translate("+a+n+o+r)}(o.translateX,o.translateY,u.translateX,u.translateY,i,l),function(t,n,r,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:r.push(a(r)+"rotate(",null,e)-2,x:m(t,n)})):n&&r.push(a(r)+"rotate("+n+e)}(o.rotate,u.rotate,i,l),function(t,n,r,o){t!==n?o.push({i:r.push(a(r)+"skewX(",null,e)-2,x:m(t,n)}):n&&r.push(a(r)+"skewX("+n+e)}(o.skewX,u.skewX,i,l),function(t,n,r,e,o,u){if(t!==r||n!==e){var i=o.push(a(o)+"scale(",null,",",null,")");u.push({i:i-4,x:m(t,r)},{i:i-2,x:m(n,e)})}else 1===r&&1===e||o.push(a(o)+"scale("+r+","+e+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,i,l),o=u=null,function(t){for(var n,r=-1,e=l.length;++r<e;)i[(n=l[r]).i]=n.x(t);return i.join("")}}}var R=D(function(t){return"none"===t?q:(A||(A=document.createElement("DIV"),N=document.documentElement,C=document.defaultView),A.style.transform=t,t=C.getComputedStyle(N.appendChild(A),null).getPropertyValue("transform"),N.removeChild(A),k(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),S=D(function(t){return null==t?q:(Y||(Y=document.createElementNS("http://www.w3.org/2000/svg","g")),Y.setAttribute("transform",t),(t=Y.transform.baseVal.consolidate())?k((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):q)},", ",")",")"),V=Math.SQRT2,B=2,E=4,H=1e-12;function I(t){return((t=Math.exp(t))+1/t)/2}function L(t){return function(r,e){var a=t((r=n.hsl(r)).h,(e=n.hsl(e)).h),o=c(r.s,e.s),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=a(t),r.s=o(t),r.l=u(t),r.opacity=i(t),r+""}}}var T=L(i),O=L(c);function P(t){return function(r,e){var a=t((r=n.hcl(r)).h,(e=n.hcl(e)).h),o=c(r.c,e.c),u=c(r.l,e.l),i=c(r.opacity,e.opacity);return function(t){return r.h=a(t),r.c=o(t),r.l=u(t),r.opacity=i(t),r+""}}}var _=P(i),z=P(c);function Q(t){return function r(e){function a(r,a){var o=t((r=n.cubehelix(r)).h,(a=n.cubehelix(a)).h),u=c(r.s,a.s),i=c(r.l,a.l),l=c(r.opacity,a.opacity);return function(t){return r.h=o(t),r.s=u(t),r.l=i(Math.pow(t,e)),r.opacity=l(t),r+""}}return e=+e,a.gamma=r,a}(1)}var Z=Q(i),F=Q(c);t.interpolate=X,t.interpolateArray=function(t,n){return(g(n)?v:d)(t,n)},t.interpolateBasis=e,t.interpolateBasisClosed=a,t.interpolateCubehelix=Z,t.interpolateCubehelixLong=F,t.interpolateDate=y,t.interpolateDiscrete=function(t){var n=t.length;return function(r){return t[Math.max(0,Math.min(n-1,Math.floor(r*n)))]}},t.interpolateHcl=_,t.interpolateHclLong=z,t.interpolateHsl=T,t.interpolateHslLong=O,t.interpolateHue=function(t,n){var r=i(+t,+n);return function(t){var n=r(t);return n-360*Math.floor(n/360)}},t.interpolateLab=function(t,r){var e=c((t=n.lab(t)).l,(r=n.lab(r)).l),a=c(t.a,r.a),o=c(t.b,r.b),u=c(t.opacity,r.opacity);return function(n){return t.l=e(n),t.a=a(n),t.b=o(n),t.opacity=u(n),t+""}},t.interpolateNumber=m,t.interpolateNumberArray=v,t.interpolateObject=M,t.interpolateRgb=f,t.interpolateRgbBasis=p,t.interpolateRgbBasisClosed=h,t.interpolateRound=function(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}},t.interpolateString=w,t.interpolateTransformCss=R,t.interpolateTransformSvg=S,t.interpolateZoom=function(t,n){var r,e,a=t[0],o=t[1],u=t[2],i=n[0],l=n[1],c=n[2],f=i-a,s=l-o,p=f*f+s*s;if(p<H)e=Math.log(c/u)/V,r=function(t){return[a+t*f,o+t*s,u*Math.exp(V*t*e)]};else{var h=Math.sqrt(p),v=(c*c-u*u+E*p)/(2*u*B*h),g=(c*c-u*u-E*p)/(2*c*B*h),d=Math.log(Math.sqrt(v*v+1)-v),y=Math.log(Math.sqrt(g*g+1)-g);e=(y-d)/V,r=function(t){var n,r=t*e,i=I(d),l=u/(B*h)*(i*(n=V*r+d,((n=Math.exp(2*n))-1)/(n+1))-function(t){return((t=Math.exp(t))-1/t)/2}(d));return[a+l*f,o+l*s,u*i/I(V*r+d)]}}return r.duration=1e3*e,r},t.piecewise=function(t,n){for(var r=0,e=n.length-1,a=n[0],o=new Array(e<0?0:e);r<e;)o[r]=t(a,a=n[++r]);return function(t){var n=Math.max(0,Math.min(e-1,Math.floor(t*=e)));return o[n](t-n)}},t.quantize=function(t,n){for(var r=new Array(n),e=0;e<n;++e)r[e]=t(e/(n-1));return r},Object.defineProperty(t,"__esModule",{value:!0})});


// https://d3js.org/d3-color/ v1.4.1 Copyright 2020 Mike Bostock
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).d3=t.d3||{})}(this,function(t){"use strict";function e(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function n(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function i(){}var r="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",o=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\("+[r,r,r]+"\\)$"),l=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),u=new RegExp("^rgba\\("+[r,r,r,a]+"\\)$"),c=new RegExp("^rgba\\("+[s,s,s,a]+"\\)$"),g=new RegExp("^hsl\\("+[a,s,s]+"\\)$"),f=new RegExp("^hsla\\("+[a,s,s,a]+"\\)$"),d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function p(){return this.rgb().formatHex()}function b(){return this.rgb().formatRgb()}function y(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=o.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?w(e):3===n?new M(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?m(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?m(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=h.exec(t))?new M(e[1],e[2],e[3],1):(e=l.exec(t))?new M(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=u.exec(t))?m(e[1],e[2],e[3],e[4]):(e=c.exec(t))?m(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(t))?R(e[1],e[2]/100,e[3]/100,1):(e=f.exec(t))?R(e[1],e[2]/100,e[3]/100,e[4]):d.hasOwnProperty(t)?w(d[t]):"transparent"===t?new M(NaN,NaN,NaN,0):null}function w(t){return new M(t>>16&255,t>>8&255,255&t,1)}function m(t,e,n,i){return i<=0&&(t=e=n=NaN),new M(t,e,n,i)}function N(t){return t instanceof i||(t=y(t)),t?new M((t=t.rgb()).r,t.g,t.b,t.opacity):new M}function k(t,e,n,i){return 1===arguments.length?N(t):new M(t,e,n,null==i?1:i)}function M(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function v(){return"#"+q(this.r)+q(this.g)+q(this.b)}function x(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function q(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function R(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new H(t,e,n,i)}function E(t){if(t instanceof H)return new H(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=y(t)),!t)return new H;if(t instanceof H)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),s=Math.max(e,n,r),o=NaN,h=s-a,l=(s+a)/2;return h?(o=e===s?(n-r)/h+6*(n<r):n===s?(r-e)/h+2:(e-n)/h+4,h/=l<.5?s+a:2-s-a,o*=60):h=l>0&&l<1?0:o,new H(o,h,l,t.opacity)}function $(t,e,n,i){return 1===arguments.length?E(t):new H(t,e,n,null==i?1:i)}function H(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function j(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}e(i,y,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:p,formatHex:p,formatHsl:function(){return E(this).formatHsl()},formatRgb:b,toString:b}),e(M,k,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:v,formatHex:v,formatRgb:x,toString:x})),e(H,$,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new H(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new H(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new M(j(t>=240?t-240:t+120,r,i),j(t,r,i),j(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var O=Math.PI/180,P=180/Math.PI,I=.96422,S=1,_=.82521,z=4/29,C=6/29,L=3*C*C,A=C*C*C;function B(t){if(t instanceof F)return new F(t.l,t.a,t.b,t.opacity);if(t instanceof V)return W(t);t instanceof M||(t=N(t));var e,n,i=Q(t.r),r=Q(t.g),a=Q(t.b),s=G((.2225045*i+.7168786*r+.0606169*a)/S);return i===r&&r===a?e=n=s:(e=G((.4360747*i+.3850649*r+.1430804*a)/I),n=G((.0139322*i+.0971045*r+.7141733*a)/_)),new F(116*s-16,500*(e-s),200*(s-n),t.opacity)}function D(t,e,n,i){return 1===arguments.length?B(t):new F(t,e,n,null==i?1:i)}function F(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}function G(t){return t>A?Math.pow(t,1/3):t/L+z}function J(t){return t>C?t*t*t:L*(t-z)}function K(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Q(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function T(t){if(t instanceof V)return new V(t.h,t.c,t.l,t.opacity);if(t instanceof F||(t=B(t)),0===t.a&&0===t.b)return new V(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*P;return new V(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function U(t,e,n,i){return 1===arguments.length?T(t):new V(t,e,n,null==i?1:i)}function V(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}function W(t){if(isNaN(t.h))return new F(t.l,0,0,t.opacity);var e=t.h*O;return new F(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}e(F,D,n(i,{brighter:function(t){return new F(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new F(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new M(K(3.1338561*(e=I*J(e))-1.6168667*(t=S*J(t))-.4906146*(n=_*J(n))),K(-.9787684*e+1.9161415*t+.033454*n),K(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),e(V,U,n(i,{brighter:function(t){return new V(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new V(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return W(this).rgb()}}));var X=-.14861,Y=1.78277,Z=-.29227,tt=-.90649,et=1.97294,nt=et*tt,it=et*Y,rt=Y*Z-tt*X;function at(t,e,n,i){return 1===arguments.length?function(t){if(t instanceof st)return new st(t.h,t.s,t.l,t.opacity);t instanceof M||(t=N(t));var e=t.r/255,n=t.g/255,i=t.b/255,r=(rt*i+nt*e-it*n)/(rt+nt-it),a=i-r,s=(et*(n-r)-Z*a)/tt,o=Math.sqrt(s*s+a*a)/(et*r*(1-r)),h=o?Math.atan2(s,a)*P-120:NaN;return new st(h<0?h+360:h,o,r,t.opacity)}(t):new st(t,e,n,null==i?1:i)}function st(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}e(st,at,n(i,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new st(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new st(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*O,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),i=Math.cos(t),r=Math.sin(t);return new M(255*(e+n*(X*i+Y*r)),255*(e+n*(Z*i+tt*r)),255*(e+n*(et*i)),this.opacity)}})),t.color=y,t.cubehelix=at,t.gray=function(t,e){return new F(t,0,0,null==e?1:e)},t.hcl=U,t.hsl=$,t.lab=D,t.lch=function(t,e,n,i){return 1===arguments.length?T(t):new V(n,e,t,null==i?1:i)},t.rgb=k,Object.defineProperty(t,"__esModule",{value:!0})});

function join(lookupTable, mainTable, lookupKey, mainKey, select) {
    var l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (var i = 0; i < l; i++) { // loop through l items
        var row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }
    for (var j = 0; j < m; j++) { // loop through m items
        var y = mainTable[j];
        var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
    }
    return output;
};

function applyFilter(d, data) {
    const FILTER = dscc.InteractionType.FILTER;
    var interactionId = "onClick";
    var applyFilterData = data.interactions.onClick.value.data
    var dimensionId = d.dimId;
    var value = d.properties.dim;
    if (typeof applyFilterData != "undefined") {
        dscc.clearInteraction(interactionId, FILTER);
    }
    if ((typeof applyFilterData === "undefined") || (applyFilterData && applyFilterData.values[0][0] != value)) {
        var applyFilterData = {
            concepts: [dimensionId],
            values: [[value]]
        };
        dscc.sendInteraction(interactionId, FILTER, applyFilterData);
    }
}

// choromap code
const drawViz = data => {

    var rowData = data.tables.DEFAULT;

    // Remove frame
    d3.select('body')
        .selectAll('svg')
        .remove();

    d3.select('body')
        .selectAll('select')
        .remove();

    // Rremove the error handler if exists
    d3.select('body')
        .selectAll('div')
        .remove();

    // Create variables from STYLE
    var polyNumber =  data.style.polyNumber.value
    ? data.style.polyNumber.value
    : data.style.polyNumber.defaultValue;

    var projectionSelection =  data.style.projectionSelection.value

    var projectionScale =  data.style.projectionScale.value
    ? data.style.projectionScale.value
    : data.style.projectionScale.defaultValue;

    var projectionTranslateX =  data.style.projectionTranslateX.value
    ? data.style.projectionTranslateX.value
    : data.style.projectionTranslateX.defaultValue;

    var projectionTranslateY =  data.style.projectionTranslateY.value
    ? data.style.projectionTranslateY.value
    : data.style.projectionTranslateY.defaultValue;

    var projectionCenterLon =  data.style.projectionCenterLon.value
    ? data.style.projectionCenterLon.value
    : data.style.projectionCenterLon.defaultValue;

    var projectionCenterLat =  data.style.projectionCenterLat.value
    ? data.style.projectionCenterLat.value
    : data.style.projectionCenterLat.defaultValue;

    var projectionRotateLambda =  data.style.projectionRotateLambda.value
    ? data.style.projectionRotateLambda.value
    : data.style.projectionRotateLambda.defaultValue;

    var projectionRotatePhi =  data.style.projectionRotatePhi.value
    ? data.style.projectionRotatePhi.value
    : data.style.projectionRotatePhi.defaultValue;

    var projectionRotateGamma =  data.style.projectionRotateGamma.value
    ? data.style.projectionRotateGamma.value
    : data.style.projectionRotateGamma.defaultValue;

    var minColor =  data.style.minColor.value
    ? data.style.minColor.value.color
    : data.style.minColor.defaultValue;

    var midColor =  data.style.midColor.value
    ? data.style.midColor.value.color
    : data.style.midColor.defaultValue;

    var maxColor =  data.style.maxColor.value
    ? data.style.maxColor.value.color
    : data.style.maxColor.defaultValue;

    var nullColor =  data.style.nullColor.value
    ? data.style.nullColor.value.color
    : data.style.nullColor.defaultValue;

    var polygonBorderColor =  data.style.polygonBorderColor.value
    ? data.style.polygonBorderColor.value.color
    : data.style.polygonBorderColor.defaultValue;

    var polygonBorderWidth =  data.style.polygonBorderWidth.value

    var showLegend =  data.style.showLegend.value

    var legendType =  data.style.legendType.value

    var legendCells =  data.style.legendCells.value
    ? data.style.legendCells.value
    : data.style.legendCells.defaultValue;

    var legendDecimalPlaces =  data.style.legendDecimalPlaces.value
    ? data.style.legendDecimalPlaces.value
    : data.style.legendDecimalPlaces.defaultValue;

    var legendDecimalPlacesShort =  data.style.legendDecimalPlacesShort.value
    ? data.style.legendDecimalPlacesShort.value
    : data.style.legendDecimalPlacesShort.defaultValue;

    var legendTitle =  data.style.legendTitle.value
    ? data.style.legendTitle.value
    : data.style.legendTitle.defaultValue;

    if (legendTitle == 'none') {
        var legendTitle = ''
    }

    var legendBreaks =  data.style.legendBreaks.value
    ? data.style.legendBreaks.value
    : data.style.legendBreaks.defaultValue;

    var legendStrings =  data.style.legendStrings.value
    ? data.style.legendStrings.value
    : data.style.legendStrings.defaultValue;

    var legendPosition =  data.style.legendPosition.value
    ? data.style.legendPosition.value
    : data.style.legendPosition.defaultValue;

    var legendBorderColor =  data.style.legendBorderColor.value
    ? data.style.legendBorderColor.value.color
    : data.style.legendBorderColor.defaultValue;

    var legendBorderWidth =  data.style.legendBorderWidth.value

    var legendTextColor =  data.style.legendTextColor.value
    ? data.style.legendTextColor.value.color
    : data.style.legendTextColor.defaultValue;

    var legendTextSize =  data.style.legendTextSize.value
    ? data.style.legendTextSize.value
    : data.style.legendTextSize.defaultValue;

    var legendTextFamily =  data.style.legendTextFamily.value
    ? data.style.legendTextFamily.value
    : data.style.legendTextFamily.defaultValue;

    var boundaryGeoJSON =  data.style.boundaryGeoJSON.value
    ? data.style.boundaryGeoJSON.value
    : data.style.boundaryGeoJSON.defaultValue;

    var boundaryBorderColor =  data.style.boundaryBorderColor.value
    ? data.style.boundaryBorderColor.value.color
    : data.style.boundaryBorderColor.defaultValue;

    var boundaryBorderWidth =  data.style.boundaryBorderWidth.value

    var zoomOnFilter =  data.style.zoomOnFilter.value
    ? data.style.zoomOnFilter.value
    : data.style.zoomOnFilter.defaultValue;

    // Get the width and the height of the iframe
    var width = dscc.getWidth();
    var height = dscc.getHeight();

    // Create boundary geoJSON object if user specifies they want to plot one in STYLE
    if (boundaryGeoJSON != "Add boundary geojson here"){

        var boundaryGeoJSON = JSON.parse(boundaryGeoJSON)

    }

    // Set up the canvas space
    const yMargin = 5;

    // Limit the number of polygons if the user specifies this in STYLE
    if (polyNumber !== "max"){
        var rowData = rowData.slice(0, polyNumber);
    }

    var allGroup = []

    data.fields.mapMetric.forEach(function (row) {

        allGroup.push(row.name)

    });

    // Updates the data and map if DATA changes
    function updateData() {

        // Make sure there are no skeletons in the closet causing performance issues
        delete geojson

        // Create GeoJSON skeleton
        var geojson = { "type" : "FeatureCollection",
            "features" : []}

        // Remove all frames
        d3.select('body')
            .selectAll('svg')
                .remove();

        d3.select('body')
            .selectAll('path')
                .remove();

        d3.select("body").style('overflow', 'visible');

        // Create SVG
        var svg = d3.select('body')
            .append('svg')
                .attr('width', width)
                .attr('height', height - 25)
                .attr('transform', `translate(0, 0)`)
                .style('overflow', 'visible');


        // Create map and projection
        var path = d3
            .geoPath();

        // Create blank values array for mathematical operations
        var vls = []

        // Add data to GeoJSON object
        rowData.forEach(function (row, i) {
        // 'mapDimension' and 'mapMetric' come from the id defined in choromap.json
        // 'dimId' is Data Studio's unique field ID, used for the filter interaction

            if (row["tooltipDimension"][0] === undefined){
                var tooltip_text = row["mapDimension"][0]
                } else {
                var tooltip_text = row["tooltipDimension"][0]
            }

            let geo_data = {

                type: "Feature",
                geometry: JSON.parse(row["mapDimension"][1]),
                properties: {
                    dim: row["mapDimension"][0],
                    met: row["mapMetric"][0]
                },
                dimId: data.fields["mapDimension"][0].id,
                tooltip: tooltip_text
            };

            geojson.features.push(geo_data);
            vls.push(row["mapMetric"][0])

        });

        // Find the maximum value of metric
        var max = d3.max(geojson.features, function(d) { return +d.properties.met;} );

        // Find the minimum value of metric
        var min = d3.min(geojson.features, function(d) { return +d.properties.met;} );

        // Find the mean value of metric
        var av = d3.mean(geojson.features, function(d) { return +d.properties.met;} );

        // Find the absolute maximum, needed for divergent color scheme
        var abs_max = d3.max([Math.abs(min),Math.abs(max)]);

        // Create the breaks for certain legend/color map types
        if (legendType == 'Quantile') {
            var numCells = legendCells
        } else if (legendType == 'Categorical') {
            var numCells = legendCells
        } else if (legendType == 'User Breaks') {
            try {
                var userBreaks = legendBreaks.split(',')
            } catch (TypeError) {
                var userBreaks = [legendBreaks]
            }
            var userBreaks = userBreaks.concat(userBreaks.slice(-1)[0])
            var numCells = userBreaks.length
        } else if (legendType == 'Custom') {
            try {
                var customBreaks = legendBreaks.split(',').map(x=>+x)
                if (legendStrings != ''){
                    var customStrings = legendStrings.split(',')
                    console.log(customStrings)
                }
            } catch (TypeError) {
                var customBreaks = [legendBreaks]
                var customStrings = [legendStrings]
            }
            var numCells = customBreaks.length
        } else {
            var numCells = 1
        }

        // Create the color array for the map
        var start = 0
        var step = 1 / (numCells - 1);
        var stop = 1 + step
        var colorArray = [];
        for (let i = 0, n = Math.ceil((stop - start) / step); i < n; ++i) {
            colorArray.push(d3.piecewise(d3.interpolateRgb.gamma(1),[minColor, midColor, maxColor])(start + i * step));
        }

        var catValues = [...new Set(vls)]

        if (legendType == 'Linear') {
        //    // Create color scale from min and max values and colours
            var colorScale = d3.scaleLinear()
                .domain([min,av,max])
                .range([minColor,midColor,maxColor]);
        } else if (legendType == 'Quantile') {
            var colorScale = d3.scaleQuantile()
                .domain(vls)
                .range(colorArray);
        } else if (legendType == 'Divergent') {
            var colorScale = d3.scaleLinear()
                .domain([-abs_max,0,abs_max])
                .range([minColor,midColor,maxColor]);
        } else if (legendType == 'Categorical') {
            var colorScale = d3.scaleOrdinal()
                .domain(catValues)
                .range(colorArray);
        } else if (legendType == 'User Breaks') {
            var colorScale = d3.scaleThreshold()
                .domain(userBreaks)
                .range(colorArray);
        } else if (legendType == 'Custom') {
            var colorScale = d3.scaleOrdinal()
                .domain(customBreaks)
                .range(colorArray);
        }

        // Set how the legend and tooltip should display the values
        if (legendDecimalPlacesShort == 'Long') {
            var decimalSuffix = 'f'
        } else if (legendDecimalPlacesShort == 'Short') {
            var decimalSuffix = 's'
        }

        if (boundaryGeoJSON != "Add boundary geojson here" && zoomOnFilter == "No"){
            // Finds centroid of path for plotting
            var centroid = path.centroid(boundaryGeoJSON)
            // Sets projection
            var projection = d3['geo' + projectionSelection]()
                .center(centroid)
                .fitExtent([[projectionCenterLon,projectionCenterLat],[width, height - 25]], boundaryGeoJSON);
        } else {
            // Finds centroid of path for plotting
            var centroid = path.centroid(geojson)
            // Sets projection
            var projection = d3['geo' + projectionSelection]()
                .center(centroid)
                .fitExtent([[projectionCenterLon,projectionCenterLat],[width, height - 25]], geojson);
        }

        projection
            .rotate([projectionRotateLambda, projectionRotatePhi, projectionRotateGamma])

        if (projectionScale != "" && projectionTranslateX != "" && projectionTranslateY != ""){
            projection
                .scale(projectionScale)
                .translate([projectionTranslateX, projectionTranslateY])
                .center([projectionCenterLon, projectionCenterLat])
        }

        if (legendType == 'Custom'){
            // Creates the tool tip
            var tool_tip = d3.tip()
              .attr("class", "d3-tip")
              .style("position", "absolute")
              .style("overflow", "visible")
              .html(d => d.properties.met === null ? d.tooltip + ': null' : d.tooltip + ': ' + d.properties.met);
              svg.call(tool_tip);
        } else {
            // Creates the tool tip
            var tool_tip = d3.tip()
              .attr("class", "d3-tip")
              .style("position", "absolute")
              .style("overflow", "visible")
              .html(d => d.properties.met === null ? d.tooltip + ': null' : d.tooltip + ': ' + Number.parseFloat(d.properties.met).toFixed(legendDecimalPlaces));
              svg.call(tool_tip);
        }

        // Draw the map
        var g = svg.append("g")
        .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
                // Draw each polygon as a path
                .attr("d", d3.geoPath()
                    .projection(projection)
                  )
                // Set the color of each feature
                .attr("fill", "#808080")
                .attr("fill", d => (d.properties.met === null) || (d.properties.met < min) || (d.properties.met > max) ? nullColor : colorScale(d.properties.met))
                .style("stroke", polygonBorderColor)
                .attr("stroke-width", polygonBorderWidth)
                .attr("class", "area")
                .on("click", function(d){
                    if ((d.properties.met != null) && (d.properties.met >= min) && (d.properties.met <= max)){
                        applyFilter(d, data);
                    }
                })
                .on('mouseover', tool_tip.show)
                .on('mouseout', tool_tip.hide);

        // Update opacity if 'apply filter' feature is in use
        var applyFilterData = data.interactions.onClick.value.data;
        if (typeof applyFilterData != "undefined") {
            g.style("opacity", function(d) {
                var value = d.properties.dim;
                var opacity = d3.select(this).style("opacity");
                var applyFilterValue = applyFilterData.values[0][0];
                if (applyFilterValue != value) {
                    return opacity * 0.3;
                }
                return opacity;
            })
        };

        // Draw the boundary if user specifies they want one in STYLE
        if (boundaryGeoJSON != "Add boundary geojson here"){
            var b = svg.append("g")
                .selectAll("path")
                    .data(boundaryGeoJSON.features)
                    .enter()
                    .append("path")
                    // Draw each polygon as a path
                    .attr("d", d3.geoPath()
                        .projection(projection)
                      )
                    // Set the outline color of each feature
                    .style("stroke", boundaryBorderColor)
                    .attr("stroke-width",boundaryBorderWidth )
                    .style("fill", "none");

             var zoom = d3.zoom()
                  .extent([[0, 0], [width, height]])
                  .on("zoom", function() {
                      b.attr("transform", d3.event.transform);
                      g.attr("transform", d3.event.transform);
                      g.attr("stroke-width", polygonBorderWidth / d3.event.transform.k);
                      b.attr("stroke-width", boundaryBorderWidth / d3.event.transform.k);
                      b.attr("transform", d3.event.transform);
                  })

        } else {
            var zoom = d3.zoom()
                          .extent([[0, 0], [width, height]])
                          .on("zoom", function() {
                              g.attr("stroke-width", polygonBorderWidth / d3.event.transform.k);
                              g.attr("transform", d3.event.transform);
                          })

        }

        svg.call(zoom);


        // Draw the legend
        var l = svg.append("g")
          .attr("class", "legend")
          .attr("transform", "translate(" + legendPosition + ")")
          .style("font-size",legendTextSize)
          .style("fill",legendTextColor)
          .style("font-family",legendTextFamily);

        if (showLegend != "Horizontal") {
            var legendOr = 'vertical'
            var shapeW = 20
            var titleW = 200
        } else {
            var legendOr = 'horizontal'
            var shapeW = 50
            var titleW = 400
        }

        var legendPlot = d3
          .legendColor()
          .labelFormat(d3.format(",."+ legendDecimalPlaces + decimalSuffix))
          .title(legendTitle)
          .titleWidth(titleW)
          .shapeWidth(shapeW)
          .orient(legendOr)
          .cellFilter(function(d){ return d.label != null })
          .scale(colorScale);

        var legendCustom = d3
          .legendColor()
          .labelFormat(d3.format(",."+ legendDecimalPlaces + decimalSuffix))
          .title(legendTitle)
          .labels(customLabels)
          .titleWidth(titleW)
          .shapeWidth(shapeW)
          .orient(legendOr)
          .scale(colorScale);

        // Show legend or not
        if (showLegend != "Off") {
            if (legendType == 'User Breaks') {
                svg.select(".legend")
                    .attr("fill", legendTextColor)
                    .call(legendCustom);
            } else {
                svg.select(".legend")
                    .attr("fill", legendTextColor)
                    .call(legendPlot);
            }
        } else {
             svg.select('.legend')
                .remove();
        }

        svg.select(".legend")
          .selectAll("rect")
              .attr("stroke", legendBorderColor)
              .attr("stroke-width", legendBorderWidth);

        if (legendStrings != ''){
            svg.select(".legend")
                .select(".legendCells")
                .selectAll("text")
                .data(customStrings)
                .text(function(d) {return d;});
        }
    }

    updateData() // Call function

    function customLabels({i,genLength,generatedLabels,labelDelimiter}) {
      if (i === 0) {
        const values = generatedLabels[i].split(` ${labelDelimiter} `)
        return `Less than ${values[1]}`
      } else if (i === genLength - 1) {
        const values = generatedLabels[i - 1].split(` ${labelDelimiter} `)
        return `${values[1]} or more`
      }
      return generatedLabels[i]
    }

};

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});