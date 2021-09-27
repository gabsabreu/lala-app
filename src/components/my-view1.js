/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <img src="images/manifest/lala.png" alt="logo" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
        <h2>Seja bem vindo(a) ao nosso app.</h2>
        <p>texto aleatório texto aleatório texto aleatório texto aleatório texto aleatório texto aleatório</p>
        <p>Mais de doze anos entregando a melhor pizza da região!</p>
        <p>Esse é um texto aleatório.</p>
        <img src="images/manifest/loja.jpg" alt="loja" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
      </section>
      <section>
        <h2>Quem somos</h2>
        <p>texto aleatório</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
      </section>
      <section>
        <img src="images/manifest/pizza.png" alt="pizza" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
        <p>A vida com pizza é mais saborosa! 🍕 Aceitamos cartões e vale-refeição. 💳 Delivery. 🛵 Pedidos pelo telefone: ☎️ (11) 4462.2661 E WhatsApp 👇🏽 bit.ly/lalapizza</p>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
