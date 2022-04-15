import React from 'react'

const TableItem = ({table}) => {
    return(
        <tr>
            <td>{table.name}</td>
            <td>{table.date}</td>
            <td>{table.quantity}</td>
            <td>{table.distance}</td>
        </tr>
    )
}


const TabletList = ({tables}) => {
    return (
        <table>

            <th>
                Date
            </th>

            <th>
                Name
            </th>

            <th>
                Quantity
            </th>
            <th>
                Distance
            </th>

            {tables.map((table) => <TableItem table={table} />)}

        </table>
    )
}
export default TabletList;