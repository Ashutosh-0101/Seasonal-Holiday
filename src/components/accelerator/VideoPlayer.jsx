import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";


export default function VideoPlayer({ url }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        px: 2,
        mt: 2,
      }}
    >
      <Card sx={{ maxWidth: 1000, height:500, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source src={url} type="video/mp4" />
          </video>
        </CardCover>
      </Card>
    </Box>
//     <Box
//   sx={{
//     display: "flex",
//     gap: 2,
//     justifyContent: "center",
//     flexWrap: "wrap",
//     p: 2,
//     m: 1,
//   }}
// >
//   <Card
//     sx={{
//       width: { xs: '80%', sm: '60%', md: '50%', lg: '20%' }, // Width changes based on screen size
//       height: { xs: 300, sm: 400, md: 500 }, // Height changes dynamically
//       flexGrow: 1,
//     }}
//   >
//     <CardCover>
//       <video
//         autoPlay
//         loop
//         muted
//         poster="https://assets.codepen.io/6093409/river.jpg"
//       >
//         <source src={url} type="video/mp4" />
//       </video>
//     </CardCover>
//   </Card>
// </Box>

  );
}
