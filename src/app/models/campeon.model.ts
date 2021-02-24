export class Aspecto {
  imagen: string;
  nombre_aspecto: string;
  tipo: string;
  precio: number;
  legado: boolean;
  obtenible: boolean;
  posesion: boolean;
  botin: boolean;

  constructor(
    i: string,
    na: string,
    t: string,
    p: number,
    l: boolean,
    o: boolean,
    po: boolean,
    b: boolean
  ) {
    this.imagen = i;
    this.nombre_aspecto = na;
    this.tipo = t;
    this.precio = p;
    this.legado = l;
    this.obtenible = o;
    this.posesion = po;
    this.botin = b;
  }
}

export class Campeon {
  nombre: string;
  aspectos: Array<Aspecto>;

  constructor(n: string, a: Array<Aspecto>) {
    this.nombre = n;
    this.aspectos = a;
  }
}
