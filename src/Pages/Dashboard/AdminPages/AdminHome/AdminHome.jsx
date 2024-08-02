import { useQuery } from "@tanstack/react-query";
import {
  FaBowlFood,
  FaCartShopping,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa6";
import "./AdminHome.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

const AdminHome = () => {
  //Data load from backend with Tan-Stack query
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/admin-stats`
      );
      return res.json();
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/order-stats`
      );
      return res.json();
    },
  });
  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className=" h-full  mt-5 mr-5">
      <div className="h-60 mini-background"></div>
      <div>
        <div className="flex items-center justify-center -mt-16 gap-8 flex-wrap mb-10">
          <div className="card-revenue">
            <h3> Your Total Revenue</h3>
            <div>
              <h1>
                {stats?.revenue} <FaDollarSign className="sign" />
              </h1>

              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
          <div className="card-user">
            <h3>Your Total User</h3>
            <div className="flex items-center gap-4">
              <div className="icon-circle">
                <FaUsers className="user-icon" />
              </div>
              <div>
                <h1>{stats?.users}</h1>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
            </div>
          </div>
          <div className="card-menu">
            <h3>Total Menu Items</h3>
            <div className="flex items-center gap-4">
              <div className="icon-circle">
                <FaBowlFood className="user-icon" />
              </div>
              <div>
                <h1>{stats?.menuItems}</h1>
                <div className="stat-desc">↗︎ {stats?.menuItems} (items)</div>
              </div>
            </div>
          </div>
          <div className="card-order">
            <h3>Total Orders</h3>
            <div className="flex items-center gap-4">
              <div className="icon-circle">
                <FaCartShopping className="user-icon" />
              </div>
              <div>
                <h1>{stats?.orders}</h1>
                <div className="stat-desc">↗︎ {stats?.orders} (items)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
