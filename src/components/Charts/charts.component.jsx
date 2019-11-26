import React, { Component } from "react";
import Chart from "react-google-charts";
import "./charts.styles.scss";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  componentDidMount() {
    this.setDataToState();
  }

  setDataToState = () => {
    this.setState({ chartData: this.getData() });
  };

  getData = () => {
    const myData = this.props.rendaMedia.features.map(variable => [
      variable.properties.NOME,
      variable.properties.RENDA_M
    ]);

    const newArray = [];

    newArray.push(
      ["bairro", "renda"],
      myData.map(item => [item[0], parseFloat(item[1])])
    );

    return [newArray[0], newArray[1]];
  };

  render() {
    const newData = this.state.chartData;
    console.log("newData", newData);

    console.log("test", this.state.chartData);
    return (
      <div className="charts">
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[this.state.chartData]}
          options={{
            title: "Population of Largest U.S. Cities",
            chartArea: { width: "50%" },
            hAxis: {
              title: "Total Population",
              minValue: 0
            },
            vAxis: {
              title: "City"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default Charts;
// data={[this.state.chartData]}
//data={[["Task", "Hours per Day"], newData]}
//data={[newData]}
