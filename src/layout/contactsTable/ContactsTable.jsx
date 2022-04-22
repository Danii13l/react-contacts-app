// material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

// components
import { Controls } from '../../components/tableAndGridControls/Controls';

// css
import styles from './ContactsTable.module.css';

// constants
import { tableInfo } from '../../constansts/tableData';

export const ContactsTable = ({ data, deleteContact }) => {

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.table_header}>
            {tableInfo.map(item => <TableCell key={item}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className={styles.table_body}>
              <TableCell>
                <Avatar alt="avatar" src={row.photo} />
              </TableCell>
              <TableCell>{row.name} {row.surname}</TableCell>
              <TableCell><a href={`mailto:${row.email}`}>{row.email}</a> </TableCell>
              <TableCell><a href={`tel:${row.phone}`}>{row.phone}</a> </TableCell>
              <TableCell >
                <Controls />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

};
