import "./style.scss";
import { OrderType } from "@/interfaces/orders";
import DragIcon from "@/components/elements/DragIcon";
import OrderCardHeader from "./order-card-header";
import OrderDetailList from "./order-card-detail";
import OrderCardTime from "./order-card-time";
import OrderCardBottom from "./order-card-bottom";

export default function OrderCard(props: OrderType) {
  const { id, status, time, details } = props;

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", `${id}`);
  };

  return (
    <div className="order-card" draggable onDragStart={handleDragStart}>
      <DragIcon />
      <OrderCardHeader {...props} />

      <OrderDetailList details={details} />

      <OrderCardTime time={time} />

      <OrderCardBottom status={status} id={id} />
    </div>
  );
}
