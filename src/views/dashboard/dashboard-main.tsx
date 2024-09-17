import OrdersList from "@/components/partials/orders/orders-list";
import { orderStatus } from "@/interfaces/orders";

export default function DashboardMain() {
  const data: orderStatus[] = ["new", "preparation", "ready", "shipping"];


  return (
    <div className="orders">
      {data.map((el) => (
        <OrdersList status={el} />
      ))}
    </div>
  );
}
