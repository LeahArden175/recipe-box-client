import React, { Component } from "react";
import InstructionsService from "../../services/instructions-service";
import config from "../../config";
import TokenService from "../../services/token-services";

export default class EditInstruction extends Component {
  state = {
    step_info: "",
    recipeId: '',
    id: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.currentEditId;
    const updatedInstruction = this.state;
    fetch(`${config.API_ENDPOINT}/instructions/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedInstruction),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
    .then(() => {
      this.props.history.push(`/recipe/${this.state.recipeId}`)
    })
  };

  setStepInfo = (step_info) => {
    this.setState({ step_info });
    console.log(this.state);
  };

  componentDidMount = () => {
    InstructionsService.getInstructions().then((instructions) => {
      const currentInstruction = instructions.find(
        (instruction) => instruction.id == this.props.currentEditId
      );
      const step_info = currentInstruction.step_info;
      const recipeId = currentInstruction.recipe_id
      const id = currentInstruction.id
      this.setState({ step_info });
      this.setState({recipeId })
      this.setState({ id })
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="instruction">Instruction to edit:</label>
        <input
          key={this.state.id}
          type="text"
          name="instruction_info"
          value={this.state.step_info}
          onChange={(e) => this.setStepInfo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
