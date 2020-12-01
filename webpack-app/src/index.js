import _ from 'lodash';
import './style.css';

function createDomElement() {
  let dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
  dom.className = 'hello'
  return dom;
}

document.body.appendChild(createDomElement());