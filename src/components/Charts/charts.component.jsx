import React, { Component } from "react";
import Chart from "react-google-charts";
import "./charts.styles.scss";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null
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
      parseFloat(variable.properties.RENDA_M)
    ]);

    // const newArray = [];

    // newArray.push([[("number", "renda"), ("string", "bairro")]].concat(myData));

    // return [newArray[0]];
    return myData;
  };

  render() {
    const data = [[("string", "bairro"), ("number", "renda")]].concat(
      this.state.chartData
    );
    console.log("test", data);
    return (
      <div className="charts">
        <Chart
          width={"500px"}
          height={"500px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            title: "Renda Média",
            chartArea: { width: "500px" },
            isStacked: true,
            colors: ["#FF0058", "#FF0058"],
            hAxis: {
              title: "renda",
              minValue: 0,
              maxValue: 3
            },
            vAxis: {
              title: "bairro"
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
//myData.map(item => [parseFloat(item[0]), item[1]])
