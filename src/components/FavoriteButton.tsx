import { IFavoriteButtonProps } from "../interfaces/IFavoriteButtonProps";

export default function FavoriteButton({ children, onClickHandler }: IFavoriteButtonProps) {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            {children}
        </button>
    );
}
