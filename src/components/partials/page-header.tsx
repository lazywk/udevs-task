import "./style.scss";
import { Icon, TextInput } from "@gravity-ui/uikit";
import { Magnifier } from "@gravity-ui/icons";
import { Select } from "@gravity-ui/uikit";
import { useAppDispatch } from "@/store/store";
import { searchOrder } from "@/store/orders/orders";

export default function PageHeader() {
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => {
    dispatch(searchOrder(value));
  };

  return (
    <div className="site-header">
      <TextInput
        placeholder="Поиск по ID"
        size="l"
        type="number"
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
        leftContent={
          <div className="search-icon">
            <Icon data={Magnifier} />
          </div>
        }
      />

      <div>
        <Select
          size="l"
          defaultValue={["val_1"]}
          options={[
            { value: "val_1", content: `Всего: ${434}` },
            { value: "val_2", content: `Фильтр 1` },
            { value: "val_3", content: `Фильтр 2` },
            { value: "val_4", content: `Фильтр 3` },
          ]}
        />
      </div>
    </div>
  );
}
