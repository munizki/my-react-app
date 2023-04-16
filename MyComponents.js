export default {
    name: 'MyComponent',
    data() {
      return {
        mensagem: 'Olá, mundo!'
      }
    },
    render() {
      return (
        <div>
          <h1>Meu componente
          </h1>
          <p>{this.mensagem}</p>
        </div>
      )
    }
  }