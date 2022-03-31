import React from "react";
import API from "../API";


class Covid extends React.Component {
  constructor() {
    super();
    this.getAge = this.getAge.bind(this);
    this.getVacStatus = this.getVacStatus.bind(this);

    this.state = {
      age: [],
      vacStatus: [],
    };
  }

  componentDidMount() {
    this.getAge();
    this.getVacStatus();
    
  }

  async getAge() {
    const res = await API.get("/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15");
    if (res.status === 200) {
      console.log(res);
      this.setState((state) => {
        state.age = res.data.result.records;
        return state;
      });
    }
  }

  async getVacStatus() {
    const res = await API.get("/api/action/datastore_search?resource_id=60b1a923-1a5e-44ef-a4ae-046345146725");
    if (res.status === 200) {
      console.log(res);
      this.setState((state) => {
        state.vacStatus = res.data.result.records;
        return state;
      });
    }
  }

  render() {
    return (
      <>
        <h1>Covid</h1>
        <div>
          <h3>Number of local cases by Age</h3>
          {this.state.age.map((a) => {
            return (
              <div>
                <p>Count of Case : {a.count_of_case}</p>
                <p>Age Group : {a.age_group}</p>
                <p>As of Date : {a.pr_date}</p>
                <br />
              </div>
            );
          })}

          <h3>Proportion of cases every requiring O2 in general ward, ICU or died, by age and vaccination status</h3>
          {(this.state.vacStatus).map((v) => {
            return (
              <div>
                
                <p>Age Group : {v.age}</p>
                <p>Fully Vaccinated without booster : {v.fully_vaccinated_without_booster}</p>
                <p>Fully Vaccinated with booster : {v.fully_vaccinated_with_booster}</p>
                <p>Non fully vaccinated : {v.non_fully_vaccinated}</p>

                <br />
              </div>
            );
          })} 
        </div>
      </>
    );
  }
}

export default Covid;
