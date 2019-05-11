import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');

dom.html(_.join(['webpack', 'caching'], ' '));

$('body').append(dom);
