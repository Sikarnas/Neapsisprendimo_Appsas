console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeAll = () => {
  app.options = []
  renderApp()
}

const makeDecision = () => {
  const result = Math.floor(Math.random()*app.options.length)
  const option = app.options[result]
  alert(option)
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0 ? true : false} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
       {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit }>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp()