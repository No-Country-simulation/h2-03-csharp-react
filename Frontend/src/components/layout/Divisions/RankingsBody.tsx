import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "position" | "name" | "points";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "position", label: "#", minWidth: 20 },
  { id: "name", label: "Nombre", minWidth: 100 },
  {
    id: "points",
    label: "Puntos",
    minWidth: 50,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  position: number;
  name: string;
  points: number;
}

function createData(position: number, name: string, points: number): Data {
  return { position, name, points };
}

const rows = [
  createData(1, "Sayid", 100),
  createData(2, "Kate", 90),
  createData(3, "Jin", 80),
  createData(4, "Sawyer", 70),
  createData(5, "Lapidus", 60),
  createData(6, "Hurley", 50),
  createData(7, "Sun", 40),
  createData(8, "Jack", 30),
  createData(9, "Shannon", 20),
  createData(10, "Miles", 10),
];

const RankingsBody = () => {
  return (
    <Box p={1} sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        sx={{ width: "100%", overflow: "hidden", marginBottom: 8 }}
      >
        <TableContainer sx={{ borderRadius: 7 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ backgroundColor: "primary.dark", color: "white" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.position}
                >
                  {columns.map((column) => {
                    const value = row[column.id as keyof Data];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default RankingsBody;
