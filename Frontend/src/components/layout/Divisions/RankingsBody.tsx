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
  align?: "right";
  maxWidth?: string;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "position", label: "#", maxWidth: "8%" },
  { id: "name", label: "Nombre", maxWidth: "78%" },
  {
    id: "points",
    label: "Puntos",
    align: "right",
    maxWidth: "14%",
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
  // Aquí se incluirá la API call para obtener información de las tablas y la posición del usuario
  // Hay que agregar una tabla extra en caso que el usuario no clasifique entre los primeros 10
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={1}
      sx={{ width: "100%" }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "70%",
          overflow: "hidden",
          mb: 8,
          borderRadius: 4,
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <TableContainer sx={{ borderRadius: 4 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.maxWidth }}
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
