import React, {Component} from "react";
import Chart from "react-google-charts";
import "./charts.styles.scss";

const Charts = (props) => {

    const getRendaData = () => {
        const rendaData = props.rendaMedia.features.map(variable => [
            variable.properties.NOME,
            parseFloat(variable.properties.RENDA_M)
        ]);
        return [[("string", "bairro"), ("number", "renda")]].concat(
            rendaData
        );
    };

    const getIgbeData = () => {
        console.log("layer selected", props.layerInfo);
        const igbeData = props.ibge.features.map(variable => variable.properties);
        const igbeFiltered = igbeData.filter((element) => {
            return element.NM_BAIRRO.toString().normalize().toUpperCase() === props.layerInfo.name.toString().normalize().toUpperCase();
        });

        console.log("ibge filtered", igbeFiltered);
        return [[("string", "bairro"), ("number", "populacao")]].concat(
            igbeFiltered.map(variable => [variable.NM_BAIRRO, variable.populacao])
        );
    };

    return (
        <div className="charts">
            <Chart
                width={"300px"}
                height={"300px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={getRendaData()}
                options={{
                    title: "Renda Média",
                    chartArea: {width: "300px"},
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
                rootProps={{"data-testid": "1"}}
            />
            <Chart
                width={"300px"}
                height={"300px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={getIgbeData()}
                options={{
                    title: "IGBE",
                    chartArea: {width: "300px"},
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
                rootProps={{"data-testid": "1"}}
            />
            );
        </div>
    )
};


export default Charts;
