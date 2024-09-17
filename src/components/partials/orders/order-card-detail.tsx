import "./style.scss";

import { OrderProductType } from "@/interfaces/orders";

export default function OrderDetailList({
  details,
}: {
  details: OrderProductType[];
}) {
  return (
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
  );
}
