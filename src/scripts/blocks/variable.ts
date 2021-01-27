class Variable {
  value = null;

  get getValue() {
    return this.value;
  }

  set setValue(value: any) {
    this.value = value;
  }

  addVar() {
    const _var = document.createElement("div");
    _var.innerHTML = `Value is: ${this.value}`;
  }
}

export default Variable;
