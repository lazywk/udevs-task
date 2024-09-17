
import './style.scss'
import ThemeToggler from "@/components/elements/themeToggler";
import { useAppDispatch } from '@/store/store';
import { collepseMenu } from '@/store/theme';
import { Bars } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';


type Props = {}

export default function Header({ }: Props) {
    const dispatch = useAppDispatch()

    const toggleMenu = () => {
        dispatch(collepseMenu())
    }


    return (
        <div className="header gap-3">
            <Button
                view='flat'
                size="l"
                onClick={toggleMenu}
            >
                <Icon data={Bars} size={18} />
            </Button>

            <div className="header-actions">
                {localStorage.getItem('role') === 'admin' ? localStorage.getItem('region') === 'uz' ? <img src='/uzbekistan.png' alt='uzbekistan flag' height={20} /> : <img src='/china.png' alt='china flag' height={20} /> : ''}
                {localStorage.getItem('phone')}
                <ThemeToggler />
            </div>
        </div>
    )
}