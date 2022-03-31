import React from "react";
import API from "../API";
import AgeList from "../components/AgeList";


class Covid extends React.Component {
  constructor() {
    super();
    this.getAge = this.getAge.bind(this);

    this.state = {
      age: [],
      count: [],
    };
  }

  componentDidMount() {
    this.getAge();
    //this.getCount();
  }

  async getAge() {
      const res = await API.get("/api/action/datastore_search?resource_id=9de30d8d-3c0d-48ab-8c1b-4a7dc03d687a");
      if (res.status === 200) {
          console.log(res);
          this.setState((state) => {
              state.age = res.data.result.records;
              //state.count = res.data.records;
              return state;
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
              <div>
                  <p>Count of Case : {a.count_of_case}</p>
                  <p>Clinical Status : {a.clinical_status}</p>
                  <p>Age Group : {a.age_groups}</p>
                  <p>As of Date : {a.day_of_as_of_date}</p>
                  <br />
               </div>
            );
          })}

          <AgeList add={this.getAge}/>
       </div>
      </>
    );
  }
}

export default Covid;
