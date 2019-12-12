import React from "react";
import Chart from "react-google-charts";
import "./charts.styles.scss";

const Charts = props => {
    const getAllRendaData = () => {
        const rendaData = props.rendaMedia.features.map(variable => [
            variable.properties.NOME,
            parseFloat(variable.properties.RENDA_M)
        ]);
        return [["Bairro", "Renda per capita"]].concat(rendaData);
    };

    const getIbgeData = () => {
        console.log("layer selected", props.layerInfo);
        const ibgeData = props.ibge.features.map(variable => variable.properties);

        let data = ibgeData.filter(element => {
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

        if (data.length <= 0) {
            data = null
        }

        return data
    };

    const formatIBGEData = ibgeData => {
        console.log("ibge data", ibgeData);

        const bairroNome = ibgeData[0].NM_BAIRRO;

        let rendaFortaleza = 0;
        props.rendaMedia.features.forEach(variable => [
            rendaFortaleza = rendaFortaleza + parseFloat(variable.properties.RENDA_M)
        ]);
        rendaFortaleza = rendaFortaleza / props.rendaMedia.features.length;

        let rendaBairro = props.rendaMedia.features.filter(element => {
            return (
                element.properties.NOME.toString()
                    .normalize()
                    .toUpperCase() ===
                props.layerInfo.name
                    .toString()
                    .normalize()
                    .toUpperCase()
            );
        })[0];

        let rendaChart = {
            key: 1,
            title: "Renda do Bairro/ Renda de Fortaleza",
            data: [
                ["Bairro", "Renda do Bairro", "Renda de Fortaleza"],
                [bairroNome, parseFloat(rendaBairro.properties.RENDA_M), rendaFortaleza]
            ]
        };

        let popBairro = 0;

        ibgeData.forEach((variable) => {
            popBairro = popBairro + variable.populacao;
        });

        console.log("popFortaleza", props.ibge);
        let popFortaleza = 0;
        props.ibge.features.forEach((variable) => {
            popFortaleza = popFortaleza + variable.properties.populacao
        });

        let popChart = {
            key: 2,
            title: "Populacao do Bairro/ Populacao de Fortaleza",
            data: [
                ["Bairro", "Populacao do Bairro", "Populacao de Fortaleza"],
                [bairroNome, popBairro, popFortaleza]
            ]
        };
        return [rendaChart, popChart];
    };

    const renderAll = () => {
        return (
            <div style={{maxWidth: 200}}>
                <Chart
                    key={0}
                    width={"400px"}
                    height={"700px"}
                    chartType="BarChart"
                    loader={<div>Carregando Dados</div>}
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
            </div>
        );
    };

    const renderSelection = (data) => {
        return (
            formatIBGEData(data).map(result => {
                return (
                    <Chart
                        key={result.key}
                        width={"300px"}
                        height={"300px"}
                        chartType="ColumnChart"
                        loader={<div>Carregando Dados</div>}
                        data={result.data}
                        options={{
                            title: result.title,
                            chartArea: {width: "40%", height: "40%"},
                            isStacked: false,
                            colors: ["#FF0058", "#0620ff"],
                        }}
                    />
                );
            })
        );
    };

    return (
        <div className="charts">
            {props.layerInfo ? getIbgeData() ? renderSelection(getIbgeData()) : renderAll() : renderAll()}
        </div>

    );
};

export default Charts;
