import { orderStatus } from "@/interfaces/orders";
import { updateOrder } from "@/store/orders/orders";
import { useAppDispatch } from "@/store/store";
import { Check, Xmark } from "@gravity-ui/icons";
import { Button, Icon } from "@gravity-ui/uikit";

type Props = {
  status: orderStatus;
  id: number;
};

export default function OrderCardBottom({ status, id }: Props) {
  const dispatch = useAppDispatch();

  const handleAccept = (val: orderStatus) => {
    dispatch(updateOrder({ id, status: val }));
  };

  return (
    <div>
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
