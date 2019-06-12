var allSettled = Promise.allSettled || function ($) {
  return Promise.all(
    $.map(
      function (value) {
        return Promise.resolve(value).then(this.$).catch(this._);
      },
      {
        $: function (value) {
          return {status: 'fulfilled', value: value};
        },
        _: function (reason) {
          return {status: 'rejected', reason: reason};
        }
      }
    )
  );
};
export default allSettled;
