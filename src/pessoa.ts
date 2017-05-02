export class Pessoa {
    nome;
    sobreNome;
    pessoas;
    editing; 
    newValue;
    
  constructor()
  {
    this.nome = "Ton";
    this.sobreNome = "Franco";
    this.pessoas = [];
    this.editing = undefined;
  }

  get NomeCompleto()
  {
    return `${this.nome} ${this.sobreNome}`;
  }

  Add()
  {
    this.pessoas.push(this.NomeCompleto);
  }

  Delete(index)
  { 
    this.pessoas.splice(index, 1);
  }

  Edit(index)
  { 
    this.editing = index;
    this.newValue = this.pessoas[index];
  }

  Save(index)
  {
    this.pessoas[index] = this.newValue;
    this.editing = undefined;
  }
}
