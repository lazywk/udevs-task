import { Button, Icon } from "@gravity-ui/uikit";
import { Check, Xmark, House, Clock, PersonWorker } from "@gravity-ui/icons";
import "./style.scss";
import { orderStatus, OrderType } from "@/interfaces/orders";
import { useAppDispatch } from "@/store/store";
import { updateOrder } from "@/store/orders/orders";

export default function OrderCard({
  id,
  price,
  payment,
  status,
  time,
  details,
}: OrderType) {
  const dispatch = useAppDispatch();

  const handleAccept = (val: orderStatus) => {
    dispatch(updateOrder({ id, status: val }));
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div className="order-card" draggable onDragStart={handleDragStart}>
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
            Otmenit
          </Button>
          <Button
            size="l"
            view="outlined-info"
            width="max"
            onClick={() => handleAccept("preparation")}
          >
            <Icon data={Check} />
            Prinyat
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
            Gatov
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
            Gatov
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
