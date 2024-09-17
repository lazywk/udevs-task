import { Button, Icon } from "@gravity-ui/uikit";
import { Check, Xmark, Clock } from "@gravity-ui/icons";
import "./style.scss";
import { orderStatus, OrderType } from "@/interfaces/orders";
import { useAppDispatch } from "@/store/store";
import { updateOrder } from "@/store/orders/orders";
import DragIcon from "@/components/elements/DragIcon";
import OrderCardHeader from "./order-card-header";

export default function OrderCard(props: OrderType) {
  const dispatch = useAppDispatch();
  const { id, status, time, details } = props;

  const handleAccept = (val: orderStatus) => {
    dispatch(updateOrder({ id, status: val }));
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", `${id}`);
  };

  return (
    <div className="order-card" draggable onDragStart={handleDragStart}>
      <DragIcon />
      <OrderCardHeader {...props} />

      <ul className="order-card__list order-card-list">
        {details.map((el, i) => (
          <li key={i} className="order-card-list__item">
            <span className="order-card-list__count">{el.count} x </span>
            <div className="order-card-list__info">
              <span className="order-card-list__name">{el.name}</span>

              {el?.comments?.length ? (
                <ul className="order-card-sub-list">
                  {el.comments.map((comm, j) => (
                    <li key={j} className="order-card-sub-list__item">
                      {comm}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="order-card__time">
        <Clock />
        <p>{time}</p>
      </div>

      {status === "new" ? (
        <div className="order-card__bottom">
          <Button size="l" view="outlined-danger" width="max">
            <Icon data={Xmark} />
            Отменить
          </Button>
          <Button
            size="l"
            view="outlined-info"
            width="max"
            onClick={() => handleAccept("preparation")}
          >
            <Icon data={Check} />
            Принят
          </Button>
        </div>
      ) : (
        ""
      )}

      {status === "preparation" ? (
        <div className="order-card__bottom">
          <Button
            size="l"
            view="outlined-info"
            width="max"
            onClick={() => handleAccept("ready")}
          >
            <Icon data={Check} />
            Гатов
          </Button>
        </div>
      ) : (
        ""
      )}

      {status === "ready" ? (
        <div className="order-card__bottom">
          <Button
            size="l"
            view="outlined-info"
            width="max"
            onClick={() => handleAccept("shipping")}
          >
            <Icon data={Check} />
            Завершить
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
