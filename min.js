var allSettled=(Promise.allSettled||function(t){"use strict";var e=this;return e.all(t.map(function(t){return e.resolve(t).then(this.$).catch(this._)},{$:function(t){return{status:"fulfilled",value:t}},_:function(t){return{status:"rejected",reason:t}}}))}).bind(Promise);