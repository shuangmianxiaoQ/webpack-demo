/* import _ from 'lodash';
import $ from 'jquery';
import { ui } from './jquery-ui';

// 借助`webpack.ProvidePlugin`做`Shimming`
ui();

const dom = $('<div>');

dom.html(_.join(['webpack', 'caching'], ' '));

$('body').append(dom); */

// 默认情况下，`this`指向模块自身
console.log(this);
// 借助`imports-loader`，使得`this`指向`window`
console.log(this === window);
