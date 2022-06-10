import React from "react";

/*const data11 = props.data1.map((dat1) => ({dat1}));*/
const Form = props => (
  <div>

    <form>



           <input type="number" name="date" placeholder="Дата напр. 20161215"/>
           <button>Получить курс</button>
    </form>
    <button onClick={props.kursMethod1}>Вывести текущий курс всех валют</button>
    </div>
);
export default Form;
