import EquityIcon from '../Assets/Vectors/Equity.png';
import CoinsIcon from '../Assets/Vectors/Coins.png';
import PieChartIcon from '../Assets/Vectors/PieChart.png';

export const FundsData = [
  {
    title: "Equity",
    value: 400,
    color: 'rgba(137, 166, 214, 1)',
    icon: <img src={EquityIcon} alt="Icon" height={28} width={30} />,
  },
  {
    title: "Total Profit",
    value: 3250,
    color: 'rgba(137, 166, 214, 1)',
    icon: <img src={CoinsIcon} alt="Icon" />,
  },
  {
    title: "Used Margin",
    value: 378,
    color: 'rgba(103, 191, 234, 1)',
    icon: <img src={PieChartIcon} alt="Icon" />,
  },
  {
    title: "Free Margin",
    value: 778,
    color: 'rgba(103, 191, 234, 1)',
    icon: <img src={PieChartIcon} alt="Icon" />,
  },
]  