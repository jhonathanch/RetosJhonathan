class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.hijos = [];
  }

  agregarHijo(nodo) {
    this.hijos.push(nodo);
  }
}

const root = new Nodo({ title: "Main Menu", link: "/", component: "Home" });

const settings = new Nodo({ title: "Settings", link: "/settings", component: "Settings" });
const profile = new Nodo({ title: "Profile", link: "/profile", component: "Profile" });
const privacy = new Nodo({ title: "Privacy", link: "/settings/privacy", component: "Privacy" });
const account = new Nodo({ title: "Account", link: "/settings/account", component: "Account" });

settings.agregarHijo(privacy);
settings.agregarHijo(account);
root.agregarHijo(profile);
root.agregarHijo(settings);

function dfs(nodo) {
  console.log(nodo.valor.title);
  for (let hijo of nodo.hijos) {
    dfs(hijo);
  }
}

dfs(root);

export default root;
