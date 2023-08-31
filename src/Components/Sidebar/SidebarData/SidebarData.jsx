import DashboardIcon from "../../../Assets/Vectors/Dashboard.png"
import AccountsIcon from "../../../Assets/Vectors/Accounts.png"
import DepositIcon from "../../../Assets/Vectors/Deposite.png"
import WithdrawIcon from "../../../Assets/Vectors/Withdraw.png"
import TransferIcon from "../../../Assets/Vectors/Transfer.png"
import MyTransactionIcon from "../../../Assets/Vectors/Transaction.png"
import TutorialIcon from "../../../Assets/Vectors/Tutorial.png"
import SupportIcon from "../../../Assets/Vectors/Support.png"

export const userSidebarData = [
  {
    path: "/",
    title: "Dashboard",
    icon: <img src={DashboardIcon} alt="Icon" />,
  },
  {
    path: "/accounts",
    title: "Accounts",
    icon: <img src={AccountsIcon} alt="Icon" />,
  },
  {
    path: "/",
    title: "Deposit",
    icon: <img src={DepositIcon} alt="Icon" height={22} width={22} />,
  },
  {
    path: "/",
    title: "Withdraw",
    icon: <img src={WithdrawIcon} alt="Icon" height={20} width={20} />,
  },
  {
    path: "/",
    title: "Transfer",
    icon: <img src={TransferIcon} alt="Icon" height={22} width={22} />,
  },
  {
    path: "/",
    title: "My Transaction",
    icon: <img src={MyTransactionIcon} alt="Icon" height={22} width={22} />,
  },
  {
    path: "/",
    title: "Tutorial",
    icon: <img src={TutorialIcon} alt="Icon" height={18} width={24} />,
  },
  {
    path: "/",
    title: "Support",
    icon: <img src={SupportIcon} alt="Icon" height={22} width={22} />,
  },
]  