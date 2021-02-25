export class Aspecto {
  imagen: string;
  nombre_aspecto: string;
  tipo: string;
  precio: number;
  legado: boolean;
  obtenible: boolean;
  posesion: boolean;
  botin: boolean;
  id_campeon: number;

  constructor(
    i: string,
    na: string,
    t: string,
    p: number,
    l: boolean,
    o: boolean,
    po: boolean,
    b: boolean,
    idc: number
  ) {
    this.imagen = i;
    this.nombre_aspecto = na;
    this.tipo = t;
    this.precio = p;
    this.legado = l;
    this.obtenible = o;
    this.posesion = po;
    this.botin = b;
    this.id_campeon = idc;
  }
}

export class Campeon {
  id: number;
  nombre: string;
  aspectos: Aspecto[];

  constructor(idc: number, n: string, a: Array<Aspecto>) {
    this.id = idc;
    this.nombre = n;
    this.aspectos = a;
  }
}
