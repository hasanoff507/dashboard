import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { mockData } from "../../Api/simple api";
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  // switch (type) {
  //   case "user":
  //     data = {
  //       title: "USERS",
  //       isMoney: false,
  //       link: "See all users",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "order":
  //     data = {
  //       title: "ORDERS",
  //       isMoney: false,
  //       link: "View all orders",
  //       icon: (
  //         <ShoppingCartOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "earning":
  //     data = {
  //       title: "EARNINGS",
  //       isMoney: true,
  //       link: "View net earnings",
  //       icon: (
  //         <MonetizationOnOutlinedIcon
  //           className="icon"
  //           style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "balance":
  //     data = {
  //       title: "BALANCE",
  //       isMoney: true,
  //       link: "See details",
  //       icon: (
  //         <AccountBalanceWalletOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(128, 0, 128, 0.2)",
  //             color: "purple",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    // <div className="widget">
    //   <div className="left">
    //     <span className="title">{data.title}</span>
    //     <span className="counter">
    //       {data.isMoney && "$"} {amount}
    //     </span>
    //     <span className="link">{data.link}</span>
    //   </div>
    //   <div className="right">
    //     <div className="percentage positive">
    //       <KeyboardArrowUpIcon />
    //       {diff} %
    //     </div>
    //     {data.icon}
    //   </div>
    // </div>
    <div>
      {mockData.map((item) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={item.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">See all users</Button>
              <Button size="small"><PersonIcon/></Button>
            </CardActions>
          </Card>
        )
      })}
    </div>

  );
};

export default Widget;
