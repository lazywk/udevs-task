import { navigation } from "@/utils/navigation";
import MenuItem from "./MenuItem";

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="menu">
      {navigation.map((menuItem, key) => (
        <MenuItem menuItem={menuItem} key={key} />
      ))}
    </div>
  );
}
