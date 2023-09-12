import React from 'react';
import {  MDBContainer, MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import ResultUserItem from './ResultUserItem';

export default function ResultUser() {
  return (
    <MDBContainer>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Email</th>
            <th scope='col'>UserName</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Create date</th>
            <th scope='col'>Role</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </MDBTableHead>
        {/* Body */}
        <ResultUserItem />
        {/* Pagination */}
        

      </MDBTable>
    </MDBContainer>
  );
}