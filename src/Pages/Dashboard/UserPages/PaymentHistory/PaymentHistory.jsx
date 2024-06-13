import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await fetch(
        `https://hungry-place-restaurant-server.vercel.app/payments/${user.email}`
      );

      return res.json();
    },
  });

  console.log(payments);

  return (
    <div className="w-full px-6">
      <h1>Payment History</h1>
      <h1>Total Payments : {payments.length}</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment?.email}</td>
                  <td>{payment?.transactionId}</td>
                  <td>$ {payment?.price}</td>
                  <td className="  text-green-800 font-bold">
                    {payment?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
