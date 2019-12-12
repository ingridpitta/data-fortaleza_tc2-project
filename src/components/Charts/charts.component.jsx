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
        return igbeFiltered;
    };

    const formatIGBRData = (data) => {
        return [[("string", "bairro"), ("number", "populacao"), ("number", "desidade")]].concat(
            // ("number", "V001"), ("number", "V002"), ("number", "V003"), ("number", "V004"), ("number", "V005"), ("number", "V006"), ("number", "V007"), ("number", "V008"), ("number", "V009"), ("number", "V010"), ("number", "V011"), ("number", "V012")]].concat(
            data.map(variable => [variable.NM_BAIRRO, variable.populacao, variable.densidade])
                // variable.V001, variable.V002, variable.V003, variable.V004, variable.V005, variable.V006, variable.V007, variable.V008, variable.V009, variable.V010, variable.V011, variable.V012])
        );
    };

    return (
        <div className="charts">
            <Chart
                width={"600px"}
                height={"600px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={getRendaData()}
                options={{
                    title: "Renda Média",
                    chartArea: {width: "600px"},
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
                width={"600px"}
                height={"600px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={formatIGBRData(getIgbeData())}
                options={{
                    title: "IGBE",
                    chartArea: {width: "600px"},
                    isStacked: true,
                    colors: ["#FF0058", "#0620ff"],
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
            {getIgbeData().map((result) => {
                return (
                    <Chart
                        key={result.ID}
                        width={"300px"}
                        height={"300px"}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={formatIGBRData([result])}
                        options={{
                            title: "IGBE",
                            chartArea: {width: "300px"},
                            isStacked: true,
                            colors: ["#FF0058", "#0620ff"],
                            hAxis: {
                                title: "dados",
                                minValue: 0,
                                maxValue: 1000
                            },
                            vAxis: {
                                title: "bairro"
                            }
                        }}
                        // For tests
                        rootProps={{"data-testid": "1"}}
                    />
                );
            })}
        </div>
    )
};


export default Charts;
