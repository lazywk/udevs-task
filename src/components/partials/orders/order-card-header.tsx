import { OrderType } from "@/interfaces/orders";
import { House, PersonWorker } from "@gravity-ui/icons";

export default function OrderCardHeader({
  id,
  price,
  payment,
  status,
}: OrderType) {
  return (
    <div className="order-card__header">
      <p className="order-card__title">ID: {id}</p>
      <div className="order-card__info">
        <ins className="order-card__price">{price} sum</ins>
        <span
          className={`order-card__payment order-card__payment--${payment}`}
        ></span>
        <span className="order-card__status">
          {status === "new" || status === "preparation" ? (
            <House fontSize={"12px"} />
          ) : status === "ready" ? (
            <PersonWorker fontSize={"12px"} />
          ) : (
            <House fontSize={"12px"} />
          )}
        </span>
      </div>
    </div>
  );
}
