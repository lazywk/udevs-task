import { Clock } from "@gravity-ui/icons";
import "./style.scss";

export default function OrderCardTime({ time }: { time: string }) {
  return (
    <div className="order-card__time">
      <Clock />
      <p>{time}</p>
    </div>
  );
}
