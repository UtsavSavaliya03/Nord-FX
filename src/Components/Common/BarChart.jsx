import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../Services/theme.js";
import BarData from '../../Constant/EarningData.json';

const BarChart = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar
            data={props?.data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            keys={["value"]}
            indexBy="date"
            margin={{
                top: 30,
                right: 10,
                bottom: 30,
                left: 30
            }}
            padding={0.7}
            colors={['rgb(251, 100, 100, 1)', 'rgb(103, 177, 115, 1)']}
            colorBy="index"
            enableLabel={false}
            axisBottom={{
                tickSize: 0,
                tickPadding: 10,
                tickRotation: 0
            }}
        />
    );
};

export default BarChart;