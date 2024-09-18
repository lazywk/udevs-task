import "./style.scss";

import { OrderListHeaderType } from "@/interfaces/orders";

export default function OrderListHeader({
  count,
  status,
}: OrderListHeaderType) {
  const titleObj = {
    new: "Новый",
    preparation: "подготовка",
    ready: "готов",
    shipping: "курьер в путь",
  };

  return (
    <div className={`order-list-header header-bg-${status}`}>
      {titleObj[status].toUpperCase()} ({count})
    </div>
  );
}
