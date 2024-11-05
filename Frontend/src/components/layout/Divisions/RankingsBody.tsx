import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
  name: string;
  points: number;
}

interface RankingsBodyProps {
  rankings: Data[];
  currentUser: Data | null;
}

const RankingsBody = ({ rankings, currentUser }: RankingsBodyProps) => {
  // Combine rankings and currentUser for conditional inclusion
  let extendedRankings = [...rankings];

  if (currentUser) {
    // Check if currentUser's points are higher than the last place in the top 10
    const minPointsInTop10 = rankings[rankings.length - 1].points;

    if (currentUser.points > minPointsInTop10) {
      // Insert currentUser into the correct position
      extendedRankings = [...rankings, currentUser]
        .sort((a, b) => b.points - a.points)
        .slice(0, 10); // keep only top 10
    } else {
      // Add the currentUser as an 11th row to show they are outside the top 10
      extendedRankings.push(currentUser);
    }
  }

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
              {extendedRankings.map((row, index) => {
                const isCurrentUser =
                  currentUser && row.name === currentUser.name;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    sx={{
                      backgroundColor: isCurrentUser ? "#C2DAFF" : "inherit",
                    }}
                  >
                    {columns.map((column) => {
                      let value;
                      if (column.id === "position") {
                        value = index + 1;
                      } else {
                        value = row[column.id as keyof Data];
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default RankingsBody;
