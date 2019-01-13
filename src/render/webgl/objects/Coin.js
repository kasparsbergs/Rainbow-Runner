const THREE = window.THREE;
import colors from './../colors.js';

export default class Coin {

  constructor() {    
    this._geometry = new THREE.TorusGeometry(0.2, 0.05, 16, 100);
    this._material = new THREE.MeshBasicMaterial({color: colors.objects.coin});
    this._object = new THREE.Mesh(this._geometry, this._material);

    this._object.rotation.y = Math.random() * 180;
    this._rotationSpeed = Math.random() * 0.075 + 0.025;
    this._rotationDir = (Math.random() > 0.5);

    //------------
    this.getObject = this.getObject.bind(this);
    this._rotate = this._rotate.bind(this);
    //------------

    this._rotate();
  }

  getObject() {
    return this._object;
  }

  _rotate() {
    if (this._rotationDir) {
      this._object.rotation.y += this._rotationSpeed;    
    } else {
      this._object.rotation.y -= this._rotationSpeed;  
    }

    requestAnimationFrame(this._rotate);
  }

}
