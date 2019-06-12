var original = Promise.allSettled;

test(require('../cjs'));

function test (allSettled) {

  allSettled.call(Promise, [
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3)
  ]).then(value => {
    console.log(value);
    console.assert(value.length === 3);
    console.assert(JSON.stringify(value) === '[{"status":"fulfilled","value":1},{"status":"rejected","reason":2},{"status":"fulfilled","value":3}]');
    if (original) {
      delete require.cache[require.resolve('../cjs')];
      Promise.allSettled = original = void 0;
      test(require('../cjs'));
    }
  });

}
