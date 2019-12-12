import React, {Component} from "react";
import Chart from "react-google-charts";
import "./charts.styles.scss";

const Charts = props => {
    const getAllRendaData = () => {
        const rendaData = props.rendaMedia.features.map(variable => [
            variable.properties.NOME,
            parseFloat(variable.properties.RENDA_M)
        ]);
        return [["bairro", "renda"]].concat(rendaData);
    };

    const getIbgeData = () => {
        console.log("layer selected", props.layerInfo);
        const ibgeData = props.ibge.features.map(variable => variable.properties);
        const ibgeFiltered = ibgeData.filter(element => {
            return (
                element.NM_BAIRRO.toString()
                    .normalize()
                    .toUpperCase() ===
                props.layerInfo.name
                    .toString()
                    .normalize()
                    .toUpperCase()
            );
        });

        console.log("ibge filtered", ibgeFiltered);
        return ibgeFiltered;
    };

    const formatIBGEData = data => {
        return [
            [("string", "bairro"), ("number", "populacao"), ("number", "desidade")]
        ].concat(
            data.map(variable => [
                variable.NM_BAIRRO,
                variable.populacao,
                variable.densidade
            ])
        );
    };

    const renderAll = () => {
        return (
            <Chart
                width={"620px"}
                height={"650px"}
                chartType="BarChart"
                loader={<div style={{width: 620}}>Carregando Dados</div>}
                data={getAllRendaData()}
                options={{
                    title: "Renda Média por Bairros",
                    chartArea: {width: "30%"},
                    isStacked: false,
                    colors: ["#FF0058", "#FF0058"],
                    hAxis: {
                        title: "renda per capita",
                        minValue: 0
                    },
                    vAxis: {
                        title: "bairro"
                    }
                }}
            />
        );
    };

    const renderSelection = () => {
        return (
            getIbgeData().map(result => {
                return (
                    <div className="charts">
                        <Chart
                            key={result.ID}
                            width={"450px"}
                            height={"300px"}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={formatIBGEData([result])}
                            options={{
                                title: "IGBE",
                                chartArea: {width: "450px"},
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
                    </div>
                );
            })
        );
    };

    return (
        <div style={{maxWidth: 620}}>
            {props.layerInfo ? renderSelection() : renderAll()}
        </div>
    );
};

export default Charts;
