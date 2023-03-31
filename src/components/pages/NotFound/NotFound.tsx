import { FC } from "react";
import { useNavigate } from "react-router-dom"
import css from "./notFound.module.css"

export interface NotFoundProps {
      text: string;
}

export const NotFound: FC<NotFoundProps> = ({text}) => {

      const navigate = useNavigate();
      const goBack = () => navigate(-1);

      return (
            <div>
                  <h2 className={css.notFound}>
                        {text }
                        <button onClick={goBack} className={css.goBackBtn}>назад</button></h2>
                  
            </div>
      )
}