import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import ProfileHeaderTab from "./ProfileHeaderTab";
import userIcon from "../../../assets/user-icon.svg";

interface NewsItem {
  user1: string;
  user2: string;
  action: string;
  points: number;
  token: string;
  date: string;
}

const Activities = () => {
  const [news] = useState([
    {
      user1: "Lukas14",
      user2: "Messi1",
      action: "ahora son amigos",
      points: 0,
      token: "",
      date: "2024-10-20",
    },
    {
      user1: "Loli24",
      user2: "",
      action: "ha ganado",
      points: 40,
      token: "",
      date: "2024-10-20",
    },
    {
      user1: "Lukas14",
      user2: "",
      action: "ha conseguido",
      points: 0,
      token: "Messi",
      date: "2024-10-20",
    },
    {
      user1: "Lukas14",
      user2: "Messi1",
      action: "ahora son amigos",
      points: 0,
      token: "",
      date: "2024-10-19",
    },
    {
      user1: "Loli24",
      user2: "",
      action: "ha ganado",
      points: 40,
      token: "",
      date: "2024-10-19",
    },
    {
      user1: "Lukas14",
      user2: "",
      action: "ha conseguido",
      points: 0,
      token: "Messi",
      date: "2024-10-19",
    },
    {
      user1: "Lukas14",
      user2: "Messi1",
      action: "ahora son amigos",
      points: 0,
      token: "",
      date: "2024-10-18",
    },
    {
      user1: "Loli24",
      user2: "",
      action: "ha ganado",
      points: 40,
      token: "",
      date: "2024-10-18",
    },
    {
      user1: "Lukas14",
      user2: "",
      action: "ha conseguido",
      points: 0,
      token: "Messi",
      date: "2024-10-18",
    },
    {
      user1: "Lukas14",
      user2: "Messi1",
      action: "ahora son amigos",
      points: 0,
      token: "",
      date: "2024-10-17",
    },
    {
      user1: "Loli24",
      user2: "",
      action: "ha ganado",
      points: 40,
      token: "",
      date: "2024-10-17",
    },
    {
      user1: "Lukas14",
      user2: "",
      action: "ha conseguido",
      points: 0,
      token: "Messi",
      date: "2024-10-17",
    },
  ]);
  const theme = useTheme();

  const formatNewsText = (item: NewsItem) => {
    const highlightStyle = {
      color: theme.palette.primary.main,
    };
    return (
      <Typography>
        {item.user1 && (
          <Typography component="span" sx={highlightStyle}>
            {item.user1}
          </Typography>
        )}
        {item.user2 ? " y " : " "}
        {item.user2 && (
          <Typography component="span" sx={highlightStyle}>
            {item.user2}
          </Typography>
        )}
        {item.action && ` ${item.action}`}
        {item.user2 && "."}
        {item.points > 0 && ` ${item.points} puntos.`}
        {item.token && ` el token de ${item.token}.`}
      </Typography>
    );
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  const groupedNews = news.reduce(
    (acc: { [key: string]: NewsItem[] }, item: NewsItem) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.dark})`,
        borderRadius: "10px",
        color: "white",
        padding: "0 1.5rem 8rem",
        width: "100%",
      }}
    >
      {Object.entries(groupedNews).map(([date, items]) => (
        <Box key={date} sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ margin: "1rem 0", color: theme.palette.primary.light }}
          >
            {formatDate(date)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            {items.map((item, index) => (
              <Box key={index}>
                <ProfileHeaderTab
                  color="black"
                  icon={userIcon}
                  text={formatNewsText(item)}
                  onClick={() => {}}
                />
                {index < items.length - 1 && (
                  <Divider
                    sx={{
                      border: "none",
                      borderTop: `1px solid ${theme.palette.secondary.main}`,
                      width: "100%",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Activities;
