import React, { Component } from "react";
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-table';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default function CompletedChallenges_4(props) {
/*export default class CompletedChallenges_4 extends Component { */
  /*render() {*/
    return (
      <>
      <h4>Completed challenges</h4>
      <button onClick={() => props.addSlide()}>add slide</button>
      <p>&nbsp;</p>
      <div>

      <Styles>
      <table style={{ allign: 'center', display: 'inline-block' }}>
<thead>
  <tr>
    <th></th>
    <th>Title</th>
    <th>Type</th>
    <th>When</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td colSpan={2}>Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
      </table>
      </Styles>

        <p>&nbsp;</p>

      </div>
     </>
    );
  /*}*/
}
