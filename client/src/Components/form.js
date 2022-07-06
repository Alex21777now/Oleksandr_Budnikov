import React from "react";
import styled from 'styled-components';


const Styles = styled.div`
  padding: 1rem;


.btn-circle {
    width: 90px;
    height: 90px;
    border-radius: 45px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    font-size: 13px;
    white-space: normal; /* восстанавливаем свойству значение по умолчанию */
}
`
/*const data11 = props.data1.map((dat1) => ({dat1}));*/

const Form = props => (

  <div>

    {/*<form>


           <input type="number" name="date" placeholder="Дата напр. 20161215"/>
           <button>Получить курс</button>
    </form>*/}
    {/*<button onClick={props.kursMethod1}>Вывести текущий курс всех валют</button>*/}
    <button type="button" class="btn btn-primary">Store ---> to DB to BackEND</button>
    <button type="button" class="btn btn-outline-danger ms-1">PULL --- from DB from BackEND</button>
  {/*<button type="button" class="btn btn-outline-success ms-2">Clear localStorage</button>*/}
<Styles>
    <button type="button" class="btn btn-outline-success btn-circle"><i class="fas fa-map">Clear localStorage</i></button>
</Styles>
  </div>

);
export default Form;
