import React from "react";
import API from "../API";

class Covid extends React.Component {
  constructor() {
    super();

    this.state = {
      age: [],
      count: [],
    };
  }

  componentDidMount() {
    this.getAge();
    this.getCount();
  }

  async getAge() {
      const res = await API.get("");
      if (res.status === 200) {
          console.log(res);
          this.setState((state) => {
              state.age = res.data.records;
              state.count = res.data.records;
          })
      }
  }

  render() {
    return (
      <>
        <h1>Covid</h1>
        <div>
          {this.state.age.map((a) => {
            return (
              <ul>
                <li>{a.age_group}</li>
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}

export default Covid;
