import { Button, Icon } from "@gravity-ui/uikit";
import { Check, Xmark, House, Clock } from "@gravity-ui/icons";
import "./style.scss";

type Props = {};

export default function OrderCard({}: Props) {
  return (
    <div className="order-card" draggable>
      <div className="order-card__header">
        <p className="order-card__title">ID: 23452</p>
        <div className="order-card__info">
          <ins className="order-card__price">300 560 sum</ins>
          <span className="order-card__payment"></span>
          <span className="order-card__status">
            <House fontSize={"12px"} />
          </span>
        </div>
      </div>

      <ul className="order-card__list order-card-list">
        <li className="order-card-list__item">
          <span className="order-card-list__count">3 x </span>
          <div className="order-card-list__info">
            <span className="order-card-list__name">Gambuger</span>

            <ul className="order-card-sub-list">
              <li className="order-card-sub-list__item">S sirom</li>
              <li className="order-card-sub-list__item">Bez luka</li>
            </ul>
          </div>
        </li>

        <li className="order-card-list__item">
          <span className="order-card-list__count">3 x </span>
          <div className="order-card-list__info">
            <span className="order-card-list__name">Gambuger</span>

            <ul className="order-card-sub-list">
              <li className="order-card-sub-list__item">S sirom</li>
              <li className="order-card-sub-list__item">Bez luka</li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="order-card__time">
        <Clock />
        <p>15:22</p>
      </div>

      <div className="order-card__bottom">
        <Button size="l" view="outlined-danger" width="max">
          <Icon data={Xmark} />
          Otmenit
        </Button>
        <Button size="l" view="outlined-info" width="max">
          <Icon data={Check} />
          Prinyat
        </Button>
      </div>
    </div>
  );
}
