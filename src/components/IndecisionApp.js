import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevState) {
    // if(prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options);
    localStorage.setItem("options", json);
    // }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
    const json = JSON.stringify([]);
    localStorage.setItem("options", json);
  };

  handlePick = () => {
    const result = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[result];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Pridėk tinkamą pasirinkimą";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Toks pasirinkimas jau egzistuoja";
    }

    this.setState(prevState => {
      return {
        options: [...prevState.options, option]
      };
    });
  };

  handleDeleteOptionSingle = text => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option !== text;
      })
    }));
  };

  handleOkay = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const subtitle = "Nežinai ką veikt? leisk kompiuteriui nuspręsti už tave";
    return (
      <div>
        <div className="container">
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOptionSingle={this.handleDeleteOptionSingle}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleOkay={this.handleOkay}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
