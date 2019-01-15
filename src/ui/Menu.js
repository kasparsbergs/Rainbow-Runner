import levels from '../levels/levels.js';
import ThreeHelper from '../render/webgl/ThreeHelper.js';
import render3d from '../render/webgl/render.js';
import DomHelper from '../render/dom/DomHelper.js';
import render2d from '../render/dom/render.js';
import { repeatedArray } from '../func/generators.js';
export default class Menu {

  constructor() {

    this._domElement = document.createElement('div');
    this._domElement.setAttribute('id', 'slideAnimation');
    this._wrapper = document.createElement('div');
    this._wrapper.setAttribute('class', 'wrapper');
    this._domElement.appendChild(this._wrapper);

    this._content = '';

    document.body.appendChild(this._domElement);

    // ----------------
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setContent = this.setContent.bind(this);
    this.getContent = this.getContent.bind(this);
    this.listenForEvents = this.listenForEvents.bind(this);
    // ----------------
  }

  show() {
    this._domElement.style.left = '0';
    return this;
  }

  hide() {  
    this._domElement.style.left = '-100vw';
    return this;
  }

  setContent(html = '') {
    this._content = html;    
    this._wrapper.innerHTML = this._content;
    return this;
  }

  getContent() {
    return this._content;
  }

  static getContentByType(type = 'menu') {
    switch(type) {
      case 'menu':
        return `<div class="menu">
          <h1>Rainbow Runner</h1>
          <span class="version">Version: 0.1.0</span>
          <div class="buttons">
              <button class="play-btn" data-mode="3d">Play in 3d!</button>
              <button class="play-btn" data-mode="2d">Play in 2d!</button>
              <a href="https://github.com/JasperLichte/Rainbow-Cube">Contribute</a>
          </div>
          <p>By Jasper Lichte and Harun Can</p>
        </div>`;
    }
  }

  listenForEvents() {
    const playButtons = this._wrapper.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
      btn.addEventListener('click', _=> {
        const nextLevelGenerator = repeatedArray(levels);
        let helper = null;
        let render = null;
        if (btn.getAttribute('data-mode') === '3d') {
          helper = new ThreeHelper();
          render = render3d;
        } else {
          helper = new DomHelper(document.getElementById('main'));
          render = render2d;
        }
        render(helper, nextLevelGenerator.next().value);    
        
        this.hide();
        
        document.getElementById('next-level-btn').addEventListener('click', _ => {
          render(helper, nextLevelGenerator.next().value)
        });
      });
    });
    return this;
  }

}