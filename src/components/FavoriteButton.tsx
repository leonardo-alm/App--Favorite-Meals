import { IFavoriteButtonProps } from "../interfaces/IFavoriteButtonProps";

export default function FavoriteButton({ children, onClickHandler, icon }: IFavoriteButtonProps) {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="" src={icon} />
            {children}
        </button>
    );
}
